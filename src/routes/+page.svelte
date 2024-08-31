<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
			<!-- TODO: Fix background issue -->
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

	<!-- TODO: make feature card component -->
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
					<div class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-jelly-blue"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
									/>
								</svg>
							</div>
							Backup
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							We backup all of your events for you and you can export your events at anytime you
							want.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-jelly-blue"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
							</div>
							Privacy
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							We won't leak your private messages or send them to unauthorized address.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-jelly-blue"
							>
								<svg
									version="1.2"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 50 50"
									width="30"
									height="30"
								>
									<title>icons8-search-50</title>
									<defs>
										<image
											width="43"
											height="44"
											id="img1"
											href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAMAAADLhrFKAAAAAXNSR0IB2cksfwAAASlQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////seNqHgAAAGN0Uk5TABhioc3s+uvMYRc+s/v/sj0jtvzBcjcWBThzwrQiW/P1hxWI9vJZfqgbHKp9gP4Bb/1UVVh3eCEdPLFjwMNfdJ86yur5Bgf43DuZxFIQiTn3M6ywehpWT1p1paDL4cmWXFN/EtHniQAAAjlJREFUeJyN1N9P01AUB/BzunXOdUI2cNUlWzTVzR/gyEAm4vyNCTHiCzG++o8ZX0w0xPigMSoIREQBQUPYkGwW49DAIAwIRIU11MvGbn+s7fp96M9Pbs+9PS2CEiyF7Iou/APVQXrE7blKZAbXTa0PJWDL4xKH/4pQhwvGNoxrfsR5epn34jKPGSMbXYQgftPcOEOGDaeqbfPPYzIzrS+vBUUt3rPhdQG/VM0EoHVXjExqra9uLfrZgAK0z/H+cY31S8E5QwoxaWF3S205R6BxzNjC6b+Fs59U1ss0/DChAMJK00fFotdVP29qeWnTl6e2c+bcB1MKkJxueU+tgzuwYmGvfI0PU+v0uJct7LWptkFq2YON5uUCeJzn31F7cyLRb2FvjXW8sW/5rP0aLr6m1unhFi1s92hshNqaa3bpFbWM99BvC3t75PJLaj0OlzNvSnlp5+oLaqFePiya2p7hUBoUe3fo+pJFT954rrKkKUPOqo+tlJgw0PUM1DZRyJ+aMLS9b7d7+jQWIksCM2VA72XF7qegtdCUE9htfRmxk6IorOb0lmAIybMaeiE4QLZs1xO9hbaNfEDeUtaZTzCDfKFIcENGbyGRZoB1n2DGO2E0ceTXbBGCzY5+LVZ+ox04o5y0B4ZIR90v4eOTVZY8OBrCvuT3JGK6UO7TyKoaq61BWjMEsHce2bH7mMvZsWpc00I8W8G17T4mL8WGhXjKXcJ2bAXbsuUJHrVn4cFjd+9DmxbiOyn4DzB1qawEBlZ6AAAAAElFTkSuQmCC"
										/>
									</defs>
									<style>
									</style>
									<use id="Background" href="#img1" x="4" y="3" />
								</svg>
							</div>
							Search on our index (soon)
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							When you search or query events, we search on our huge event index containing millions
							of events indexed there.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-jelly-blue"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
									/>
								</svg>
							</div>
							Updates
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							That's not all you get. We are actively working and adding new features and services
							to the JellyFish, as we just started now. All new services will be available on your
							current plan, no need for more sats or updates.
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
	<Footer />
</main>
