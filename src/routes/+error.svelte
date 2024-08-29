<!-- TODO: make error pages dynamic -->
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 mt-48 mb-32">
	<div class="text-center relative isolate px-6 pt-14 lg:px-8">
		<p class="text-base font-semibold text-jelly-blue">404</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
		<p class="mt-6 text-base leading-7 text-gray-600">
			Sorry, we couldn’t find the page you’re looking for.
		</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<a
				href="/"
				class="rounded-md bg-jelly-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Go back home</a
			>
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
</main>
<Footer />
