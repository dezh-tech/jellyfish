import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import TagsInput from '@/components/ui/TagsInput';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/Button';
import useProfileStore from '@/stores/profile-store';
import { cn } from '@/lib/utils';

const defaultRelays = [
  'wss://relay.nostr.band',
  'wss://nos.lol',
  'wss://purplepag.es',
  'wss://relay.primal.net'
];

export default function Migration() {
  const { pubKey } = useProfileStore(state => state);
  const [pubkeyHex, setPubkeyHex] = useState('');
  const [relays, setRelays] = useState<string[]>(defaultRelays);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async () => {
    setMessage(null);
    try {
      setBusy(true);
      const targetPubkey = pubkeyHex || pubKey || '';
      if (!/^[0-9a-fA-F]{64}$/.test(targetPubkey)) {
        throw new Error('Provide a 64-char hex pubkey');
      }

      const body = JSON.stringify({ pubkey: targetPubkey, relays });
      const res = await fetch('https://api-manager.jellyfish.land/relay-action/import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body
      });

      if (res.status === 201) {
        setMessage('Import process started. We will DM you on Nostr when it finishes.');
      } else {
        const text = await res.text();
        setMessage(`Something went wrong: ${res.status} ${text}`);
      }
    } catch (e: any) {
      setMessage(e?.message || 'Failed to start import');
    } finally { setBusy(false); }
  };

  return (
    <main className="space-y-10 pt-8 pb-16">
      <SectionTitle>Migration</SectionTitle>

      {message && (
        <div className="rounded-md bg-blue-950/40 border border-blue-400/40 p-3 text-blue-200">
          {message}
        </div>
      )}

      <section className="space-y-4">
        <p className="text-sm text-gray-300">Import your events from other relays. Provide your hex pubkey and a list of relays to import from. You can edit the list below.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Hex Pubkey</label>
            <Input value={pubkeyHex} onChange={e=>setPubkeyHex(e.target.value)} placeholder={pubKey || 'your 64-hex pubkey'} />
          </div>
        </div>
        <div className="space-y-2">
          <TagsInput label="Source Relays" value={relays} onValueChange={setRelays} placeholder="Add relay URLs and press Enter" />
        </div>
        <Button disabled={busy} onClick={onSubmit} className={cn(buttonVariants(), 'min-w-[160px]')}>Start Import</Button>
      </section>
    </main>
  );
}

