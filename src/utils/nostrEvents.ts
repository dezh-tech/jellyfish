import { SimplePool, type Event, nip19 } from 'nostr-tools';

const DEFAULT_RELAYS = [
  'wss://jellyfish.land',
];

export type DeleteRef = {
  type: 'e' | 'a';
  id: string;
  kind?: number;
};

export function parseEventReference(input: string): DeleteRef | null {
  try {
    // If hex id
    if (/^[0-9a-f]{64}$/i.test(input)) {
      return { type: 'e', id: input };
    }

    // If nevent
    const decoded = nip19.decode(input);
    if (decoded.type === 'nevent') {
      const data = decoded.data as any;
      return { type: 'e', id: data.id, kind: data.kind };
    }
    if (decoded.type === 'naddr') {
      const data = decoded.data as any; // {identifier, kind, pubkey}
      return { type: 'a', id: `${data.kind}:${data.pubkey}:${data.identifier}`, kind: data.kind };
    }
  } catch (e) {
    console.error('Failed to parse event reference:', e);
  }
  return null;
}

export async function signNip09Delete(eventRefs: DeleteRef[], reason?: string): Promise<Event> {
  if (!window.nostr) throw new Error('Nostr extension not available');
  const pubkey = await window.nostr.getPublicKey();
  const tags: string[][] = [];
  for (const ref of eventRefs) {
    tags.push([ref.type, ref.id]);
    if (ref.kind !== undefined) tags.push(['k', String(ref.kind)]);
  }
  const unsigned: Event = {
    kind: 5,
    created_at: Math.floor(Date.now() / 1000),
    tags,
    content: reason || '',
    pubkey,
    id: '' as any,
    sig: '' as any,
  };
  return await window.nostr.signEvent(unsigned);
}

export async function signNip62Vanish(relays: string[] | 'ALL_RELAYS', reason?: string): Promise<Event> {
  if (!window.nostr) throw new Error('Nostr extension not available');
  const pubkey = await window.nostr.getPublicKey();
  const tags: string[][] = [];
  if (relays === 'ALL_RELAYS') {
    tags.push(['relay', 'ALL_RELAYS']);
  } else {
    const unique = Array.from(new Set(relays)).filter(Boolean);
    if (unique.length === 0) throw new Error('At least one relay is required');
    for (const r of unique) tags.push(['relay', r]);
  }
  const unsigned: Event = {
    kind: 62,
    created_at: Math.floor(Date.now() / 1000),
    tags,
    content: reason || '',
    pubkey,
    id: '' as any,
    sig: '' as any,
  };
  return await window.nostr.signEvent(unsigned);
}

export async function publishToRelays(evt: Event, relays: string[] = DEFAULT_RELAYS): Promise<{ ok: string[]; failed: string[] }> {
  const pool = new SimplePool();
  const urls = Array.from(new Set([...(relays || []), ...DEFAULT_RELAYS]));
  const results: { ok: string[]; failed: string[] } = { ok: [], failed: [] };
  try {
    pool.publish(urls, evt);
    // Give some time for publish; mark optimistic success
    await new Promise(resolve => setTimeout(resolve, 800));
    results.ok = urls; // optimistic
  } catch (e) {
    console.warn('Publish error:', e);
    results.failed = urls;
  } finally {
    try { pool.close(urls); } catch {}
  }
  return results;
}

