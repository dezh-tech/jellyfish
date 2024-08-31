import { queryProfile } from 'nostr-tools/nip05';
import { BECH32_REGEX, decode } from 'nostr-tools/nip19';

// Gets an npub/nip-05 as input and returns public key string in hex format.
export async function getHexPublicKey(address: string): Promise<string> {
	if (address.toLocaleLowerCase().match(BECH32_REGEX)) {
		const result = decode(address);
		return result.data.toString();
	}

	const result = await queryProfile(address);
	if (result) {
		return result.pubkey;
	}

	return 'invalid nip-05 endpoint';
}
