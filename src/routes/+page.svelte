<script>
	import Senior from '../assets/senior-developer.jpg';
	import Dev1 from '../assets/developer.jpg';
</script>

<main
	class="flex h-screen w-screen flex-col items-center justify-center gap-4 text-white"
	id="hero"
>
	<!-- start background -->
	<div id="hero-blur" class="absolute -z-10 h-screen w-screen backdrop-blur-3xl" />
	<div id="hero-gradient" class="absolute -z-20 h-screen w-screen" />
	<!-- end background -->
	<h1 class="text-8xl font-extrabold">
		Bring your business <span class="font-black" id="radial-background">online</span>
	</h1>
	<p class="text-2xl text-white">We're the local developers that grow your business.</p>
	<div class="h-[1px] w-96 bg-gradient-to-r from-transparent via-white to-transparent opacity-25" />
	<div class="flex gap-2 duration-75">
		<a href="#team"
			><button
				class="rounded-full border-2 border-blue-700 bg-blue-700 px-9 py-1 duration-75 hover:border-blue-800 hover:bg-blue-800 hover:px-10"
				>Learn more</button
			></a
		>

		<button class="rounded-full border-2 border-stone-300 px-9 py-1 duration-75 hover:px-10"
			>Our work</button
		>
	</div>
	<i
		class="bi-arrow-down-circle absolute bottom-0 left-1/2 -z-10 animate-bounce pb-6 text-4xl text-white opacity-75"
	/>
</main>
<section class="bg-stone-200 px-64" id="team">
	<article class="flex flex-col gap-6">
		<h1 class="pt-12 pb-6 text-6xl">Meet the team</h1>
		<div class="flex gap-6">
			<div class="flex flex-col gap-4 rounded-md bg-stone-100 p-6">
				<div class="flex items-center gap-4">
					<h2 class="text-4xl">John Doe</h2>
					<h3 class="text-2xl text-black opacity-50">Senior Developer</h3>
				</div>
				<div class="h-[1px] w-64 bg-gradient-to-r from-black to-transparent opacity-25" />
				<p class="text-xl">
					I am a senior web developer passionate about creating user-friendly applications and
					staying current with the latest technologies. Seeing my code come to life and being used
					by people all over the world is a unique and rewarding experience. Web development has the
					power to connect and inform people, which drives my passion for the field.
				</p>
			</div>
			<img
				src={Senior}
				alt="Developer 1"
				class="aspect-square w-96 rounded-full object-cover p-8 saturate-0"
			/>
		</div>
		<div class="flex gap-6">
			<div class="flex flex-col gap-4 rounded-md bg-stone-100 p-6">
				<div class="flex items-center gap-4">
					<h2 class="text-4xl">Jane Doe</h2>
					<h3 class="text-2xl text-black opacity-50">Junior Developer</h3>
				</div>
				<div class="h-[1px] w-64 bg-gradient-to-r from-black to-transparent opacity-25" />
				<p class="text-xl">
					As a junior web developer, I am passionate about using my skills to create meaningful
					projects and am grateful for the opportunity to learn and grow at my company. The
					fast-paced and collaborative nature of web development is exciting, and I am proud to be
					part of a talented and supportive team.
				</p>
			</div>
			<img
				src={Dev1}
				alt="Developer 1"
				class="aspect-square w-96 rounded-full object-cover p-8 saturate-0"
			/>
		</div>
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

	#radial-background {
		background: radial-gradient(circle, rgba(14, 0, 255, 1) 0%, rgb(119, 112, 255) 100%);
		background-size: 180% 180%;
		background-position: 50% 0%;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
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
