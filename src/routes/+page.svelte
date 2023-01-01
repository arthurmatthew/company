<main class="flex h-screen w-screen flex-col items-center justify-center gap-4 text-white">
	<!-- start background -->
	<div id="hero-blur" class="absolute -z-10 h-screen w-screen backdrop-blur-3xl" />
	<div id="hero-gradient" class="absolute -z-20 h-screen w-screen" />
	<!-- end background -->
	<h1 class="text-8xl font-extrabold">
		Bring your business <span class="font-black text-blue-500">online</span>
	</h1>
	<p class="text-2xl text-white">We're the local developers that grow your business.</p>
	<div class="h-[1px] w-96 bg-gradient-to-r from-transparent via-white to-transparent opacity-25" />
	<div class="flex gap-2 duration-75">
		<button
			class="rounded-full border-2 border-blue-700 bg-blue-700 px-9 py-1 duration-75 hover:border-blue-800 hover:bg-blue-800 hover:px-10"
			>Learn more</button
		>
		<button class="rounded-full border-2 border-stone-300 px-9 py-1 duration-75 hover:px-10"
			>Our work</button
		>
	</div>
	<i
		class="bi-arrow-down-circle absolute bottom-0 left-1/2 animate-bounce pb-6 text-4xl text-white opacity-75"
	/>
</main>
<section class="bg-stone-200 px-64">
	<article>
		<h2 class="w-full py-12 text-left text-6xl">We're local.</h2>
		<p class="pr-[25%] text-left text-2xl">
			As a small and local group of web developers, we pride ourselves on our close-knit community
			and shared passion for coding and building websites and applications. Our group is made up of
			developers at professional levels of experience, and we are always willing to support and
			guide one another as we strive to improve our skills and knowledge.
		</p>
		<h2 class="w-full py-12 text-right text-6xl">We're advanced.</h2>
		<p class="pl-[25%] text-right text-2xl">
			As a small and local group of web developers, we pride ourselves on our close-knit community
			and shared passion for coding and building websites and applications. Our group is made up of
			developers at professional levels of experience, and we are always willing to support and
			guide one another as we strive to improve our skills and knowledge.
		</p>
		<h2 class="w-full py-12 text-left text-6xl">We're advanced.</h2>
		<p class="pr-[25%] text-left text-2xl">
			As a small and local group of web developers, we pride ourselves on our close-knit community
			and shared passion for coding and building websites and applications. Our group is made up of
			developers at professional levels of experience, and we are always willing to support and
			guide one another as we strive to improve our skills and knowledge.
		</p>
	</article>
</section>

<style>
	#hero-gradient {
		background: rgb(2, 0, 36);
		background: linear-gradient(
			90deg,
			rgba(2, 0, 36, 1) 35%,
			rgb(3, 0, 70) 50%,
			rgba(2, 0, 36, 1) 65%
		);
		background-size: 300% 300%;
		background-repeat: repeat-x;
		animation: scroll 6s ease-in-out infinite;
	}

	@keyframes scroll {
		from {
			background-position: 0% 0%;
		}
		to {
			background-position: 100% 0%;
		}
	}
</style>
