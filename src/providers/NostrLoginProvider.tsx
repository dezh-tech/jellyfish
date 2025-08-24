import React, { createContext, useContext, useEffect, useState } from 'react';
import { init, launch } from 'nostr-login';

interface NostrLoginContextType {
  isLoggedIn: boolean;
  pubkey: string | null;
  login: (method?: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const NostrLoginContext = createContext<NostrLoginContextType | null>(null);

export const useNostrLogin = () => {
  const context = useContext(NostrLoginContext);
  if (!context) {
    throw new Error('useNostrLogin must be used within a NostrLoginProvider');
  }
  return context;
};

interface NostrLoginProviderProps {
  children: React.ReactNode;
}

export const NostrLoginProvider: React.FC<NostrLoginProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pubkey, setPubkey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize nostr-login
    init({
      // Force dark mode to match JellyFish design
      darkMode: true,
      // Use purple theme to match JellyFish gradient colors
      theme: 'purple',
      // Hide the banner since we have our own login button
      noBanner: true,
      // Set a custom title
      title: 'Login to JellyFish',
      // Set a custom description
      description: 'Choose your preferred login method to access JellyFish services',
      // Start with welcome screen
      startScreen: 'welcome',
    });

    // Check if user is already logged in
    const checkLoginStatus = async () => {
      try {
        // Check if window.nostr is available and get pubkey
        if (window.nostr) {
          try {
            const userPubkey = await window.nostr.getPublicKey();
            if (userPubkey) {
              setPubkey(userPubkey);
              setIsLoggedIn(true);
            }
          } catch (error) {
            // User not logged in or denied access
            console.log('No active nostr session');
          }
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Wait a bit for nostr-login to initialize, then check status
    setTimeout(checkLoginStatus, 100);

    // Listen for login/logout events from nostr-login
    const handleAuth = (event: CustomEvent) => {
      const { type, pubkey: userPubkey } = event.detail;

      if (type === 'login' || type === 'signup') {
        setPubkey(userPubkey);
        setIsLoggedIn(true);
        console.log('NostrLogin: User logged in', userPubkey);
      } else if (type === 'logout') {
        setPubkey(null);
        setIsLoggedIn(false);
        console.log('NostrLogin: User logged out');
      }
    };

    const handleLogout = () => {
      setPubkey(null);
      setIsLoggedIn(false);
      console.log('NostrLogin: Manual logout');
    };

    // Add event listeners
    document.addEventListener('nlAuth', handleAuth as EventListener);
    document.addEventListener('nlLogout', handleLogout as EventListener);

    return () => {
      document.removeEventListener('nlAuth', handleAuth as EventListener);
      document.removeEventListener('nlLogout', handleLogout as EventListener);
    };
  }, []);

  const login = async (method?: string) => {
    try {
      setIsLoading(true);
      // Launch the nostr-login dialog
      // The launch function takes a StartScreens string directly
      await launch(method as any || 'welcome');
      // The login event will be handled by the event listener
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      // Clear local state
      setPubkey(null);
      setIsLoggedIn(false);

      // Trigger logout event to nostr-login
      document.dispatchEvent(new Event('nlLogout'));
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value: NostrLoginContextType = {
    isLoggedIn,
    pubkey,
    login,
    logout,
    isLoading,
  };

  return (
    <NostrLoginContext.Provider value={value}>
      {children}
    </NostrLoginContext.Provider>
  );
};
