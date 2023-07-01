<script lang="ts">
	let clas: string = '';
	export let link: string = '/';
	export { clas as class };
</script>

<div
	class={'flex flex-col justify-between rounded-md p-5 text-4xl duration-75 hover:saturate-150  ' +
		clas}
>
	<div><slot /></div>

	<a class="mt-3 w-fit rounded-md px-4 py-2 text-lg backdrop-brightness-110" href={link}
		>Learn More</a
	>
</div>
