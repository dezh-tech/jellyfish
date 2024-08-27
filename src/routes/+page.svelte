<script lang="ts">
	import logo from '$lib/assets/logo.webp';
	import Header from '$lib/Header.svelte';
</script>

<main class="relative">
	<Header />

	<!-- Hero Section -->
	<section
		id="home"
		class="xl:padding-1 wide:padding-r padding-b w-full padding-2
	flex xl:flex-row flex-col gap-10 max-container
	justify-center min-h-screen pt-14 max-sm:pt-2"
	>
		<div
			class="relative xl:w-4/5 flex flex-col text-center items-start w-full
		max-xl:padding-x pt-28 max-sm:pt-1"
		>
			<h1 class="mt-10 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[60px] font-bold">
				<span class="text-blue-400">Nostr</span> Experience
				<span class="text-slate-600 line-through">is slow</span>
				Just Got
				<span class="text-blue-400 flex items-center inline-flex">
					Smooth!
					<img src={logo} alt="jellyfish logo" class="ml-2 w-28 h-auto max-sm:w-12" />
				</span>
			</h1>
			<p>Join our paid relays on Nostr right now to get a very smooth experience!</p>

			<input class="npub-input" type="text" placeholder="Your npub or nip-05 address" required />
			<button class="join-button" type="submit"> Join Relay! </button>
		</div>
	</section>

	<!-- <section class="padding">Features</section> -->
	<!-- <section class="bg-black padding-x padding-t pb-8">Footer</section> -->
</main>
