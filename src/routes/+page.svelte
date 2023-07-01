<script>
	import Service from '$lib/components/index/Service.svelte';
</script>

<svelte:head>
	<title>Ballard Web Dev</title>
</svelte:head>

<section id="hero" class="">
	<div class="mx-auto max-w-5xl">
		<div class="pb-10 pt-20">
			<div class="mx-4 flex flex-col items-center justify-center">
				<h1 class="text-center text-6xl font-black tracking-tight sm:text-7xl">
					We are Seattle's <span
						class="bg-gradient-to-tr from-purple-500 to-blue-500 bg-clip-text text-transparent"
						>finest</span
					> developers.
				</h1>
			</div>
		</div>
		<div class="pb-20">
			<div class="mx-4 flex flex-col items-center justify-center">
				<p class="text-center text-2xl">
					We offer a wide range of services in the web development world. We'll build and manage
					your website to <b>perfectly</b> fit your needs. Want to get started? Or have questions?
					<a class="underline" href="/">Contact us</a>
				</p>
			</div>
		</div>
		<div class="mx-2 grid grid-cols-1 gap-1 pb-20 sm:grid-cols-2 md:grid-cols-3">
			<Service class="bg-indigo-200 sm:col-span-2 ">
				<h1>Website Creation</h1>
				<p class="font-lora mt-3 text-xl">
					We want to build you the perfect website. We'll build you a beautiful and accessible
					website. We ensure that your users will have a good time on your website, <b
						>maximizing your engagement</b
					>.
				</p>
			</Service>
			<Service class="bg-blue-200 ">
				<h1>Website Management</h1>
				<p class="font-lora mt-3 text-xl">
					We won't let your website rot and become outdated. Following scheduled payments, we
					guarantee that you can contact us at any time to have changes made.
				</p>
			</Service>
			<Service class="bg-purple-200 ">
				<h1>Programming Jobs</h1>
				<p class="font-lora mt-3 text-xl">
					You can hire us for general website programming jobs. Maybe you had a website created for
					you a few years back, and need something fixed. We can figure it out.
				</p>
			</Service>
			<Service class="bg-violet-200 sm:col-span-2 ">
				<h1>SEO</h1>
				<p class="font-lora mt-3 text-xl">
					SEO (Search Engine Optimization) is super important in making sure customers find your
					website. It's not visible to the naked eye, but it's the backbone of a successful website.
					We'll do everything for you.
				</p>
			</Service>
			<Service class="bg-sky-200 sm:col-span-2 md:col-span-3">
				<h1>And more...</h1>
				<p class="font-lora mt-3 text-xl">
					Need something that's not listed? <a class="font-semibold" href="/">Contact us</a>! We're
					willing to give it a shot. Even if we can't fulfill your requests, we can redirect you to
					the right people.
				</p>
			</Service>
		</div>
	</div>
</section>
