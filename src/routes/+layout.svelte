<script>
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col">
	<aside class="fixed bottom-0 left-0 z-10 m-4">
		<div class="hidden flex-col gap-2 sm:flex">
			<div class="rounded-lg border-2 border-black/10 bg-white/75 backdrop-blur-lg">
				<div class="flex flex-col gap-2 p-4 text-2xl leading-none text-slate-800">
					<i class="bi-arrow-up-square" />
				</div>
			</div>
			<div class="rounded-lg border-2 border-black/10 bg-white/75 backdrop-blur-lg">
				<div class="flex flex-col items-center gap-2 p-4 text-2xl leading-none text-slate-800">
					<i class="bi-facebook" />
					<i class="bi-instagram" />
					<i class="bi-linkedin" />
					<i class="bi-twitter" />
					<i class="bi-youtube" />
				</div>
			</div>
		</div>
		<div class="block sm:hidden">
			<div class="rounded-lg border-2 border-slate-200 bg-white">
				<div class="flex flex-col gap-2 p-4 text-xl leading-none text-slate-800">
					<i class="bi-list" />
				</div>
			</div>
		</div>
	</aside>
	<header class="sticky left-0 top-0 z-10 shrink grow-0 basis-auto">
		<div class="bg-slate-100/80 px-5 py-4 backdrop-blur-md">
			<h1 class="text-3xl font-semibold">Ballard Web Dev</h1>
		</div>
	</header>
	<main class="flex-auto">
		<slot />
	</main>
	<footer class="flex flex-shrink basis-44">
		<div class="w-full bg-slate-100">
			<div class="mx-auto max-w-5xl">
				<h1>Placeholder</h1>
			</div>
		</div>
	</footer>
</div>
