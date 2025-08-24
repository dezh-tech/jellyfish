import { SimplePool, type Event } from 'nostr-tools';

const RELAYS = [
  'wss://nos.lol',
  'wss://relay.nostr.band',
  'wss://purplepag.es',
  'wss://jellyfish.land',
  'wss://ditto.pub/relay',
  'wss://relay.primal.net',
];

export interface NostrProfile {
  name?: string;
  display_name?: string;
  about?: string;
  picture?: string;
  banner?: string;
  nip05?: string;
  lud06?: string;
  lud16?: string;
  website?: string;
}

/**
 * Resolves a user's profile from their pubkey using nostr-tools
 */
export async function resolveProfile(pubkey: string): Promise<NostrProfile | null> {
  if (!pubkey) return null;

  const pool = new SimplePool();
  
  try {
    const events = await pool.querySync(RELAYS, {
      kinds: [0], // Profile metadata events
      authors: [pubkey],
      limit: 1,
    });

    if (events.length === 0) {
      return null;
    }

    // Get the most recent profile event
    const profileEvent = events.sort((a, b) => b.created_at - a.created_at)[0];
    
    if (!profileEvent.content) {
      return null;
    }

    try {
      const profile = JSON.parse(profileEvent.content) as NostrProfile;
      return profile;
    } catch (parseError) {
      console.error('Error parsing profile content:', parseError);
      return null;
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  } finally {
    pool.close(RELAYS);
  }
}

/**
 * Resolves multiple profiles at once
 */
export async function resolveProfiles(pubkeys: string[]): Promise<Map<string, NostrProfile>> {
  if (pubkeys.length === 0) return new Map();

  const pool = new SimplePool();
  const profileMap = new Map<string, NostrProfile>();
  
  try {
    const events = await pool.querySync(RELAYS, {
      kinds: [0],
      authors: pubkeys,
    });

    // Group events by author and get the most recent for each
    const eventsByAuthor = new Map<string, Event>();
    
    for (const event of events) {
      const existing = eventsByAuthor.get(event.pubkey);
      if (!existing || event.created_at > existing.created_at) {
        eventsByAuthor.set(event.pubkey, event);
      }
    }

    // Parse profiles
    for (const [pubkey, event] of eventsByAuthor) {
      if (event.content) {
        try {
          const profile = JSON.parse(event.content) as NostrProfile;
          profileMap.set(pubkey, profile);
        } catch (parseError) {
          console.error(`Error parsing profile for ${pubkey}:`, parseError);
        }
      }
    }
  } catch (error) {
    console.error('Error fetching profiles:', error);
  } finally {
    pool.close(RELAYS);
  }

  return profileMap;
}

/**
 * Gets a display name for a user, falling back to truncated pubkey
 */
export function getDisplayName(profile: NostrProfile | null, pubkey: string): string {
  if (profile?.display_name) return profile.display_name;
  if (profile?.name) return profile.name;
  return pubkey.substring(0, 8) + '...';
}

/**
 * Gets a profile picture URL, falling back to a default
 */
export function getProfilePicture(profile: NostrProfile | null): string {
  return profile?.picture || '/images/avatar-paceholder2.png';
}

/**
 * Generates a NIP-98 authentication token
 */
export async function generateNip98Token(
  method: string,
  url: string,
  body?: string
): Promise<string> {
  // Check if we have access to nostr extension
  if (!window.nostr) {
    throw new Error('Nostr extension not available');
  }

  const pubkey = await window.nostr.getPublicKey();

  // Create the authentication event
  const authEvent = {
    kind: 27235, // NIP-98 HTTP Auth
    created_at: Math.floor(Date.now() / 1000),
    tags: [
      ['u', url],
      ['method', method.toUpperCase()],
    ],
    content: '',
    pubkey,
  };

  // Add payload hash if body is provided
  if (body) {
    const encoder = new TextEncoder();
    const data = encoder.encode(body);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    authEvent.tags.push(['payload', hashHex]);
  }

  // Sign the event
  const signedEvent = await window.nostr.signEvent(authEvent);

  // Encode as base64
  const eventJson = JSON.stringify(signedEvent);
  const eventBase64 = btoa(eventJson);

  return `Nostr ${eventBase64}`;
}

/**
 * Type declaration for window.nostr
 */
declare global {
  interface Window {
    nostr?: {
      getPublicKey(): Promise<string>;
      signEvent(event: any): Promise<any>;
      getRelays?(): Promise<Record<string, { read: boolean; write: boolean }>>;
      nip04?: {
        encrypt(pubkey: string, plaintext: string): Promise<string>;
        decrypt(pubkey: string, ciphertext: string): Promise<string>;
      };
    };
  }
}
