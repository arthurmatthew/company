<svelte:head>
	<title>Ballard Web Dev</title>
</svelte:head>

<section id="hero" class="border-b-2 border-slate-200">
	<div class="mx-auto max-w-5xl">
		<div class="py-20">
			<div class="mx-4 flex flex-col items-center justify-center">
				<h1 class="text-center text-6xl font-black sm:text-7xl">
					There's new <span
						class="bg-gradient-to-tr from-purple-500 to-blue-500 bg-clip-text text-transparent"
						>competition</span
					> in town.
				</h1>
			</div>
		</div>
		<div class="pb-20">
			<div class="mx-4 flex flex-col items-center justify-center">
				<p class="text-center text-2xl">
					Spoiler alert: <b>it's Ballard Web Dev.</b> Based out of Seattle, we want to get things
					done. And we want to do it <b>efficiently</b>.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	#hero {
		background-image: url('../lib/assets/blobs.svg');
		background-size: 100% auto;
	}
</style>
