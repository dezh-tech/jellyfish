<script lang="ts">
	import logo from '$lib/assets/logo.webp';
	import hamburger from '$lib/assets/icons/hamburger.svg';
	import close from '$lib/assets/icons/close.png';

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<header class="padding-x py-8 absolute z-10 w-full">
	<nav class="flex justify-between items-center max-container">
		<a href="/">
			<img src={logo} alt="jellyfish logo" width={45} height={20} />
		</a>
		<a href="/" class="font-extrabold text-jelly-blue">JellyFish</a>

		<ul class="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
			<li class="font-montserrat leading-normal text-lg text-slate-gray">
				<a href="#pricing">Pricing</a>
			</li>
			<li class="font-montserrat leading-normal text-lg text-slate-gray">
				<a href="#features">Features</a>
			</li>
			<li class="font-montserrat leading-normal text-lg text-slate-gray">
				<a href="#contact">Contact Us</a>
			</li>
		</ul>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="hidden max-lg:block" on:click={toggleMenu}>
			<img src={isMenuOpen ? close : hamburger} alt="Menu" width={25} height={25} />
		</div>
	</nav>

	{#if isMenuOpen}
		<div class="absolute top-16 left-0 right-0 bg-white shadow-lg z-20 p-4 max-lg:block">
			<ul class="flex flex-col items-center">
				<li class="font-montserrat leading-normal text-lg text-slate-gray">
					<a href="#pricing" on:click={toggleMenu}>Pricing</a>
				</li>
				<li class="font-montserrat leading-normal text-lg text-slate-gray">
					<a href="#features" on:click={toggleMenu}>Features</a>
				</li>
				<li class="font-montserrat leading-normal text-lg text-slate-gray">
					<a href="#contact" on:click={toggleMenu}>Contact Us</a>
				</li>
			</ul>
		</div>
	{/if}
</header>
