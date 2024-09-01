<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon: string;
</script>

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
				<path stroke-linecap="round" stroke-linejoin="round" d={icon} />
			</svg>
		</div>
		{title}
	</dt>
	<dd class="mt-2 text-base leading-7 text-gray-600">
		{description}
	</dd>
</div>
