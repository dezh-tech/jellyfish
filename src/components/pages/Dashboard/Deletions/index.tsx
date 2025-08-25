import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import TagsInput from '@/components/ui/TagsInput';
import { parseEventReference, signNip09Delete, signNip62Vanish, publishToRelays } from '@/utils/nostrEvents';
import { cn } from '@/lib/utils';

const defaultRelays = [
  'wss://jellyfish.land',
  'wss://nos.lol',
  'wss://relay.nostr.band'
];

export default function Deletions() {
  const [deleteInput, setDeleteInput] = useState('');
  const [deleteReason, setDeleteReason] = useState('');
  const [relays, setRelays] = useState<string[]>(defaultRelays);
  const [nip62Mode, setNip62Mode] = useState<'RELAYS'|'ALL_RELAYS'>('RELAYS');
  const [nip62Reason, setNip62Reason] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmitNip09 = async () => {
    setMessage(null);
    try {
      setBusy(true);
      const ref = parseEventReference(deleteInput.trim());
      if (!ref) throw new Error('Invalid event reference: please enter an nevent, naddr or 64-hex id');
      const evt = await signNip09Delete([ref], deleteReason);
      const res = await publishToRelays(evt, relays);
      setMessage(`NIP-09 deletion request published to ${res.ok.length} relays.`);
    } catch (e: any) {
      setMessage(e?.message || 'Failed to send deletion request');
    } finally { setBusy(false); }
  };

  const onSubmitNip62 = async () => {
    setMessage(null);
    try {
      setBusy(true);
      const rel = nip62Mode === 'ALL_RELAYS' ? 'ALL_RELAYS' : relays;
      const evt = await signNip62Vanish(rel, nip62Reason);
      const toPublish = rel === 'ALL_RELAYS' ? relays : (rel as string[]);
      const res = await publishToRelays(evt, toPublish);
      setMessage(`NIP-62 vanish request published to ${res.ok.length} relays${nip62Mode==='ALL_RELAYS' ? ' (broadcast widely recommended)' : ''}.`);
    } catch (e: any) {
      setMessage(e?.message || 'Failed to send vanish request');
    } finally { setBusy(false); }
  };

  return (
    <main className="space-y-10 pt-8 pb-16">
      <SectionTitle>Deletions</SectionTitle>

      {message && (
        <div className="rounded-md bg-blue-950/40 border border-blue-400/40 p-3 text-blue-200">
          {message}
        </div>
      )}

      <section className="space-y-4">
        <h3 className="text-xl font-bold gradient-text">NIP-09 - Delete Specific Event</h3>
        <p className="text-sm text-gray-300">Enter an event id (64-hex) or NIP-19 formatted <code>nevent</code> or <code>naddr</code>. We will prepare a deletion request (kind 5) that you will sign and we publish to your selected relays.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Event Reference</label>
            <Input value={deleteInput} onChange={e=>setDeleteInput(e.target.value)} placeholder="nevent1... or 64-hex id" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Reason (optional)</label>
            <Input value={deleteReason} onChange={e=>setDeleteReason(e.target.value)} placeholder="Reason to delete" />
          </div>
        </div>
        <div className="space-y-2">
          <TagsInput label="Relays" value={relays} onValueChange={setRelays} placeholder="Add relay URLs and press Enter" />
        </div>
        <Button disabled={busy} onClick={onSubmitNip09} className={cn(buttonVariants(), 'min-w-[140px]')}>Send NIP-09 Delete</Button>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold gradient-text">NIP-62 - Request to Vanish</h3>
        <div className="rounded-md bg-red-900/30 border border-red-500/40 p-3 text-red-200">
          WARNING: This can remove everything associated with your pubkey on the tagged relays. This is important and potentially irreversible. Proceed with caution.
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Mode</label>
            <div className="flex gap-2">
              <Button variant={nip62Mode==='RELAYS'?'default':'outline'} onClick={()=>setNip62Mode('RELAYS')}>Specific Relays</Button>
              <Button variant={nip62Mode==='ALL_RELAYS'?'default':'outline'} onClick={()=>setNip62Mode('ALL_RELAYS')}>ALL_RELAYS</Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Reason (optional)</label>
            <Input value={nip62Reason} onChange={e=>setNip62Reason(e.target.value)} placeholder="Reason / legal notice" />
          </div>
        </div>
        {nip62Mode==='RELAYS' && (
          <div className="space-y-2">
            <TagsInput label="Relays" value={relays} onValueChange={setRelays} placeholder="Add relay URLs and press Enter" />
          </div>
        )}
        <Button disabled={busy} onClick={onSubmitNip62} className={cn(buttonVariants(), 'min-w-[180px] bg-red-600 hover:bg-red-700')}>Send NIP-62 Vanish</Button>
      </section>
    </main>
  );
}

