<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';

	import { features } from '$lib/features';
</script>

<main class="relative">
	<!--? Hero Section ?-->
	<Header />
	<div id="home" class="bg-white">
		<div class="relative isolate px-6 pt-14 lg:px-8">
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-jelly-blue to-blue-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
			<div class="mx-auto py-32 sm:py-48 lg:py-56">
				<div class="hidden sm:mb-8 sm:flex sm:justify-center">
					<!-- <div
						class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
					>
						Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"
							><span class="absolute inset-0" aria-hidden="true"></span>Read more
							<span aria-hidden="true">&rarr;</span></a
						>
					</div> -->
				</div>
				<div class="text-center">
					<h1
						class="mt-10 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[60px] font-bold text-center"
					>
						Stay
						<span class="text-jelly-blue">Immortal!</span>
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Join our relay with all services for 9,000 sats/month right now!
						<br />
						Explore the Nostr with a smooth experience.
					</p>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						<input
							type="text"
							placeholder="Enter your npub or nip-05 address"
							class="w-[600px] pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-jelly-blue shadow-sm rounded-lg max-sm:w-[300px]"
						/>
						<button
							class="px-5 py-2 text-white bg-jelly-blue rounded-md duration-150 hover:bg-blue-500 active:shadow-lg max-sm:text-sm max-sm:h-[40px]"
						>
							<b>Join</b>
						</button>
					</div>
				</div>
			</div>
			<!-- TODO: How we can apply this background to all pages without adding this div??? -->
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-jelly-blue to-blue-800 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
		</div>
	</div>

	<!--? Features ?-->
	<div id="features" class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base font-semibold leading-7 text-jelly-blue">Features</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Check out what you'll get
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					All features and services in one subscription, simple plan, simple usage! <br /> Don't waste
					time on selecting and managing complex services and plans.
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<dl
					class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					{#each features as f}
						<FeatureCard description={f.description} icon={f.icon} title={f.title} />
					{/each}
				</dl>
			</div>
		</div>
	</div>
	<Footer />
</main>
