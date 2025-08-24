import React, { useEffect, useState } from 'react';
import { useNostrLogin } from '@/providers/NostrLoginProvider';
import { useAuth } from '@/providers/AuthProvider';
import useProfileStore from '@/stores/profile-store';
import { Button } from '@/components/ui/Button';
import { generateNip98Token } from '@/utils/nostr';

/**
 * Test component to verify nostr-login migration fixes
 * This component can be temporarily added to test the migration
 */
const NostrLoginTest: React.FC = () => {
  const { login, logout, pubkey, isLoggedIn, isLoading } = useNostrLogin();
  const { isAuthenticated, logout: authLogout } = useAuth();
  const { pubKey, profile, isLoggedIn: storeLoggedIn, token } = useProfileStore();
  const [testResults, setTestResults] = useState<string[]>([]);

  const addTestResult = (result: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
  };

  const handleLogin = async () => {
    try {
      addTestResult('Starting login...');
      await login();
      addTestResult('Login successful');
    } catch (error) {
      addTestResult(`Login failed: ${error}`);
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      addTestResult('Starting logout...');
      await logout();
      addTestResult('Logout successful');
    } catch (error) {
      addTestResult(`Logout failed: ${error}`);
      console.error('Logout failed:', error);
    }
  };

  const handleAuthLogout = async () => {
    try {
      addTestResult('Starting auth logout...');
      if (authLogout) {
        authLogout();
        addTestResult('Auth logout successful');
      }
    } catch (error) {
      addTestResult(`Auth logout failed: ${error}`);
      console.error('Auth logout failed:', error);
    }
  };

  const testNip98Token = async () => {
    try {
      addTestResult('Testing NIP-98 token generation...');
      const token = await generateNip98Token('GET', 'https://example.com/api/test');
      addTestResult(`NIP-98 token generated successfully: ${token.substring(0, 50)}...`);
    } catch (error) {
      addTestResult(`NIP-98 token generation failed: ${error}`);
    }
  };

  // Monitor state changes
  useEffect(() => {
    if (pubkey && pubKey && pubkey === pubKey) {
      addTestResult('✅ Pubkey sync: NostrLogin and ProfileStore are in sync');
    } else if (pubkey !== pubKey) {
      addTestResult(`⚠️ Pubkey mismatch: NostrLogin(${pubkey?.substring(0, 8)}) vs ProfileStore(${pubKey?.substring(0, 8)})`);
    }
  }, [pubkey, pubKey]);

  useEffect(() => {
    if (isLoggedIn && storeLoggedIn) {
      addTestResult('✅ Login state sync: Both providers show logged in');
    } else if (isLoggedIn !== storeLoggedIn) {
      addTestResult(`⚠️ Login state mismatch: NostrLogin(${isLoggedIn}) vs ProfileStore(${storeLoggedIn})`);
    }
  }, [isLoggedIn, storeLoggedIn]);

  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white space-y-4 max-w-4xl">
      <h2 className="text-xl font-bold">Nostr Login Migration Test</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-blue-400">NostrLogin Provider:</h3>
          <p>Is Logged In: <span className={isLoggedIn ? 'text-green-400' : 'text-red-400'}>{isLoggedIn ? 'Yes' : 'No'}</span></p>
          <p>Is Loading: {isLoading ? 'Yes' : 'No'}</p>
          <p>Pubkey: {pubkey ? `${pubkey.substring(0, 16)}...` : 'None'}</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-purple-400">Auth Provider:</h3>
          <p>Is Authenticated: <span className={isAuthenticated ? 'text-green-400' : 'text-red-400'}>{isAuthenticated ? 'Yes' : 'No'}</span></p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-pink-400">Profile Store:</h3>
          <p>Store Logged In: <span className={storeLoggedIn ? 'text-green-400' : 'text-red-400'}>{storeLoggedIn ? 'Yes' : 'No'}</span></p>
          <p>Store Pubkey: {pubKey ? `${pubKey.substring(0, 16)}...` : 'None'}</p>
          <p>Profile Name: {profile?.display_name || profile?.name || 'None'}</p>
          <p>Has Token: <span className={token ? 'text-green-400' : 'text-red-400'}>{token ? 'Yes' : 'No'}</span></p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button onClick={handleLogin} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
          Login
        </Button>
        <Button onClick={handleLogout} disabled={isLoading} className="bg-red-600 hover:bg-red-700">
          NostrLogin Logout
        </Button>
        <Button onClick={handleAuthLogout} disabled={isLoading} className="bg-purple-600 hover:bg-purple-700">
          Auth Logout
        </Button>
        <Button onClick={testNip98Token} disabled={isLoading || !pubkey} className="bg-green-600 hover:bg-green-700">
          Test NIP-98 Token
        </Button>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-yellow-400">Test Results:</h3>
        <div className="bg-gray-900 p-3 rounded max-h-40 overflow-y-auto">
          {testResults.length === 0 ? (
            <p className="text-gray-400">No test results yet...</p>
          ) : (
            testResults.map((result, index) => (
              <p key={index} className="text-sm font-mono">{result}</p>
            ))
          )}
        </div>
      </div>

      <div className="text-sm text-gray-400 border-t border-gray-600 pt-2">
        <p>🧪 This is a test component to verify the nostr-login migration fixes.</p>
        <p>📝 Check console logs for additional debugging information.</p>
        <p>🗑️ Remove this component after testing is complete.</p>
      </div>
    </div>
  );
};

export default NostrLoginTest;
