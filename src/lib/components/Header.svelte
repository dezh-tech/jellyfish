<script lang="ts">
	import logo from '$lib/assets/logo.webp';
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/">
				<img src={logo} alt="jellyfish logo" width={45} height={20} />
			</a>
			<a href="/" class="font-extrabold text-jelly-blue pt-2">JellyFish</a>
		</div>
		<div class="flex lg:hidden"></div>
		<div class="hidden lg:flex lg:gap-x-12">
			<a href="/" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
			<a href="/terms-of-service" class="text-sm font-semibold leading-6 text-gray-900"
				>Terms of Service</a
			>
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
	</nav>
</header>
