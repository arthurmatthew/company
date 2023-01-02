<script>
	import '../app.css';
</script>

<header
	class="fixed z-50 flex w-screen items-center gap-4 border-b-2 border-solid border-white border-opacity-10 p-4 backdrop-blur-md"
>
	<i class="bi-list text-3xl text-white" />
	<h1 class="font-black text-white portrait:text-2xl landscape:text-3xl">Company Name</h1>
</header>
<slot />
<footer class="flex items-center justify-center bg-blue-950 text-white">
	<p class="py-16">Made with <i class="bi-suit-heart-fill text-pink-500" /></p>
</footer>
