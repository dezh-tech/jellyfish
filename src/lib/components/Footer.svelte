<!-- TODO: stick to the bottom of page -->
<script>
	import logo from '../assets/logo.webp';
	import nostr from '../assets/icons/nostr.svg';
	import github from '../assets/icons/github.svg';

	let footerNavs = [
		{ href: '/terms-of-service', name: 'Terms of Service' },
		{ href: '#home', name: 'Join Relay Now!' }
	];
</script>

<footer class="text-gray-500 bg-none px-4 py-5 max-w-screen-xl mx-auto md:px-8">
	<div class="flex lg:flex-1">
		<a href="/">
			<img src={logo} alt="jellyfish logo" width={45} height={20} />
		</a>
		<a href="/" class="font-extrabold text-jelly-blue pt-2">JellyFish</a>
	</div>
	<ul class="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
		{#each footerNavs as item}
			<li class="hover:text-gray-800">
				<a href={item.href}>
					{item.name}
				</a>
			</li>
		{/each}
	</ul>
	<div class="mt-8 items-center justify-between sm:flex">
		<div class="mt-4 sm:mt-0">
			&copy; Copyright {new Date().getFullYear()}
			<a href="/" class="text-jelly-blue">jellyfish.land</a>
			| Powered by <a href="https://dezh.tech" class="text-jelly-blue">Dezh Technologies</a>
		</div>
		<div class="mt-6 sm:mt-0">
			<ul class="flex items-center space-x-4">
				<li class="w-10 h-10 flex items-center justify-center">
					<a href="https://njump.me/jellyfish.land">
						<img src={nostr} alt="" />
					</a>
				</li>

				<li class="w-10 h-10 flex items-center justify-center">
					<a href="https://github.com/dezh-tech/jellyfish">
						<img class="h-20" src={github} alt="" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</footer>
