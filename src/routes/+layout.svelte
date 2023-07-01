<script>
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col">
	<header class="shrink grow-0 basis-auto">
		<div class="border-b-2 border-slate-200 px-5 py-4">
			<h1 class="text-3xl font-semibold">Ballard Web Dev</h1>
		</div>
	</header>
	<main class="flex-auto">
		<slot />
	</main>
	<footer class="flex flex-shrink basis-44">
		<div class="w-full bg-red-500">
			<h1>Placeholder Footer</h1>
		</div>
	</footer>
</div>
