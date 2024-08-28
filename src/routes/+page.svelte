<script lang="ts">
	import logo from '$lib/assets/logo.webp';

	import Header from '$lib/components/Header.svelte';
	import Feature from '$lib/components/Feature.svelte';

	import { features } from '$lib/data/features';
</script>

<main class="relative">
	<Header />

	<!--? Hero Section ?-->
	<section
		id="home"
		class="xl:padding-1 wide:padding-r w-full padding-2
    flex xl:flex-row flex-col gap-10 max-container
    justify-center mb-80 pt-28 max-sm:pt-18"
	>
		<div
			class="relative xl:w-4/5 flex flex-col items-center w-full
        max-xl:padding-x pt-28 max-sm:pt-1"
		>
			<h1
				class="mt-10 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[60px] font-bold text-center"
			>
				<span class="text-jelly-blue">Nostr</span> Experience
				<span class="text-slate-600 line-through">is slow</span>
				Just Got
				<span class="text-jelly-blue flex items-center inline-flex">
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

	<!--? Features ?-->
	<section id="features" class="max-container max-sm:mt-12 mb-60">
		<div class="flex flex-col justify-start gap-5">
			<h2 class="text-4xl font-palanquin font-bold text-center">
				<span class="text-jelly-blue">JellyFish</span> Relay Features
			</h2>
			<p class="mt-2 font-montserrat text-slate-gray text-center mb-20">
				Our relays have these features!
			</p>

			<div
				class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 max-sm:gap-28 text-center"
			>
				{#each features as f}
					<Feature desc={f.description} image={f.image} title={f.title} />
				{/each}
			</div>
		</div>
	</section>

	<!--? Pricing ?-->
	<!-- TODO -->
	<!-- <section id="pricing" class="max-container">
		<div class="flex flex-col justify-start gap-5">
			<h2 class="text-4xl font-palanquin font-bold text-center">
				 Pricing
			</h2>
			<p class="mt-2 font-montserrat text-slate-gray text-center mb-20">
				Best Prices ever!
			</p>

			<div
				class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 max-sm:gap-28 text-center"
			>
				{#each features as f}
					<PriceTable />
				{/each}
			</div>
		</div>
	</section> -->

	<section class="bg-black padding-x padding-t pb-8">Footer</section>
</main>
