<script lang="ts">
	import logo from '$lib/assets/logo.webp';
	import Header from '$lib/Header.svelte';
</script>

<main class="relative">
	<Header />

	<!--? Hero Section ?-->
	<section
		id="home"
		class="xl:padding-1 wide:padding-r padding-b w-full padding-2
    flex xl:flex-row flex-col gap-10 max-container
    justify-center min-h-screen pt-14 max-sm:pt-2"
	>
		<div
			class="relative xl:w-4/5 flex flex-col items-center w-full
        max-xl:padding-x pt-28 max-sm:pt-1"
		>
			<h1
				class="mt-10 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[60px] font-bold text-center"
			>
				<span class="text-blue-400">Nostr</span> Experience
				<span class="text-slate-600 line-through">is slow</span>
				Just Got
				<span class="text-blue-400 flex items-center inline-flex">
					Smooth!
					<img src={logo} alt="jellyfish logo" class="ml-2 w-28 h-auto max-sm:w-12" />
				</span>
			</h1>
			<p
				class="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm text-center"
			>
				Join our paid relays on the Nostr right now to get a very smooth experience!
			</p>

			<div class="flex flex-col items-center w-full mb-4">
				<input
					class="npub-input w-3/5 mb-4"
					type="text"
					placeholder="Your npub or nip-05 address"
					required
				/>
			</div>
			<div class="w-full flex justify-center">
				<button class="join-button w-0.5/5" type="submit">Join Relay!</button>
			</div>
		</div>
	</section>

	<!-- <section class="padding">Features</section> -->
	<!-- <section class="bg-black padding-x padding-t pb-8">Footer</section> -->
</main>
