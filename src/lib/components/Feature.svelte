<script lang="ts">
	export let title;
	export let desc;
	export let image;
</script>

<div class="flex flex-1 flex-col w-full max-sm:w-full">
	<img src={image} alt={desc} class="w-[180px] h-[180px] mx-auto" />
	<h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin">{title}</h3>
	<p class="mt-2 m-3 font-montserrat text-slate-gray text-2xl leading-normal">{desc}</p>
</div>
