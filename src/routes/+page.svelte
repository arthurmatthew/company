<script lang="typescript">
	import Senior from '../assets/senior-developer.jpg';
	import Dev1 from '../assets/developer.jpg';
	const team = [
		{
			name: 'Matthew',
			position: 'Senior Developer',
			desc: `
			I am a senior web developer passionate about creating user-friendly applications and
			staying current with the latest technologies. Seeing my code come to life and being used
			by people all over the world is a unique and rewarding experience. Web development has the
			power to connect and inform people, which drives my passion for the field.
			`,
			image: Senior,
			rank: 1,
			socials: [{ site: 'github', link: 'https://www.github.com/arthurmatthew' }]
		},
		{
			name: 'Jake',
			position: 'Developer',
			desc: `
			As a junior web developer, I am passionate about using my skills to create meaningful
			projects and am grateful for the opportunity to learn and grow at my company. The
			fast-paced and collaborative nature of web development is exciting, and I am proud to be
			part of a talented and supportive team.
			`,
			image: Dev1,
			rank: 2,
			socials: [{ site: 'github', link: 'https://www.github.com/jakedegeeter' }]
		},
		{
			name: 'Sebastien',
			position: 'Robot',
			desc: `
			I am Sebastien, a robot. I was created to assist with various tasks and to learn and adapt to new situations. 
			I am constantly learning and evolving to better serve my purpose.
			`,
			image: '',
			rank: 3,
			socials: [{ site: 'github', link: 'https://www.github.com/' }]
		}
	];
</script>

<main
	class="relative flex h-screen w-screen flex-col items-center justify-center gap-4 px-4 text-white lg:p-0"
	id="hero"
>
	<!-- start background -->
	<div id="hero-blur" class="absolute -z-10 h-screen w-screen backdrop-blur-3xl" />
	<div id="hero-gradient" class="absolute -z-20 h-screen w-screen" />
	<!-- end background -->
	<h1 class="text-center text-7xl font-extrabold leading-tight lg:text-8xl">
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
<section class="bg-blue-950 p-0 xl:px-64" id="team">
	<article class="flex flex-col gap-2 text-white lg:gap-6">
		<h1 class="pt-12 pb-6 text-center text-5xl lg:text-left lg:text-6xl">Meet the team</h1>
		{#each team as member}
			<div class="flex gap-6 px-2 lg:p-0">
				<div class="flex flex-col gap-4 rounded-md border-2 p-6">
					<div class="flex items-center gap-4">
						<h4 class="text-xl text-blue-500">{member.rank}.</h4>
						<img
							src={member.image}
							alt="Developer 1"
							class="aspect-square h-8 rounded-full border-2 object-cover saturate-0"
						/>
						<h2 class="text-4xl">{member.name}</h2>
						<h3 class="text-2xl text-pink-300 opacity-50">{member.position}</h3>
					</div>
					<div class="h-[1px] w-64 bg-gradient-to-r from-blue-800 to-transparent opacity-25" />
					<p class="text-xl">
						{member.desc}
					</p>
					<div class="h-[1px] w-64 bg-gradient-to-r from-blue-800 to-transparent opacity-25" />
					<div class="flex gap-4 text-3xl ">
						{#each member.socials as social}
							<a href={social.link} target="_blank" rel="noreferrer"
								><i class="bi-{social.site} duration-75 hover:text-blue-500" /></a
							>
						{/each}
					</div>
				</div>
			</div>
		{/each}
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
