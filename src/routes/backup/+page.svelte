<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { getHexPublicKey } from '$lib/resolve';
	import { API_ENDPOINT } from '$lib/config';

	let Address: string = '';
	let Loading: boolean = false;

	async function handleBackup() {
		let address = await getHexPublicKey(Address);
		Address = '';
		Loading = true;

		let backupEndpoint = `${API_ENDPOINT}events?authors=${address}`;

		try {
			const response = await fetch(backupEndpoint);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const jsonData = await response.json();

			const jsonString = JSON.stringify(jsonData, null, 2);

			const blob = new Blob([jsonString], { type: 'application/json' });

			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = 'jellyfish-backup.json';

			link.click();

			URL.revokeObjectURL(link.href);
			Loading = false;
		} catch (error) {
			console.error('Error fetching or saving data:', error);
			Loading = false;
		}
		Loading = false;
	}
</script>

<main class="relative">
	<Header />
	<div class="relative isolate px-6 pb-2 lg:px-8">
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-jelly-blue to-[#00FF7F] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
		<div class="mx-auto py-32 sm:py-48 lg:py-56">
			<div class="hidden sm:mb-8 sm:flex sm:justify-center"></div>
			<div class="text-center">
				<div>
					{#if !Loading}
						<h2
							class="mt-10 font-palanquin text-4xl max-sm:text-[60px] max-sm:leading-[60px] font-bold text-center pb-2"
						>
							<span class="text-jelly-blue">Backup</span> Your Notes
						</h2>
						<p class="mt-6 text-lg leading-8 text-gray-600 mb-8">
							All backups will be downloaded on your device in a json file.
							<br />
							Remember your noted deleted using nip-09 won't be in backup result.
						</p>
						<form action="">
							<input
								type="text"
								placeholder="Enter your npub or nip-05 address"
								bind:value={Address}
								class="w-[600px] pl-3 pr-3 py-2 text-gray-500
						 bg-transparent outline-none border focus:border-jelly-blue
						 shadow-sm rounded-lg max-sm:w-[300px] max-sm:mb-8"
							/>
							<button on:click={handleBackup} class="join-button">Backup</button>
						</form>
					{/if}

					{#if Loading}
						<div class="flex items-center justify-center">
							<div
								class="relative block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md"
							>
								<div class="flex items-center mb-2">
									<h5 class="text-2xl font-bold tracking-tight text-gray-900 mr-2">
										Wait a moment...
									</h5>
									<svg
										aria-hidden="true"
										class="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
								</div>
								<p class="font-normal text-slate-gray text-start">
									We are searching for your events in our database. Note that this backup doesn't
									contain your deleted events at all.
								</p>
							</div>
						</div>
					{/if}
				</div>
				<div
					class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
				>
					<div
						class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-jelly-blue to-[#00FF7F] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					></div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</main>
