<script>
	import { onMount } from 'svelte';
	import RedesSociais from './RedesSociais.svelte';

	let imageSrc = '/sell-logo.png';
	let scrolled = false;

	const handleScroll = () => {
		scrolled = window.scrollY > 100;
		imageSrc = scrolled ? '/sell-logo-color.png' : '/sell-logo.png';
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="transition-background fixed w-full bg-transparent duration-500 ease-in-out"
	class:bg-white={scrolled}
>
	<div class="py-2">
		<div class="flex items-center justify-center gap-64">
			<div class="flex">
				<a href="https://www.selladm.com.br">
					<img class="w-38 h-20" src={imageSrc} alt="Logo Sell" />
				</a>
			</div>
			<div class="space-x-8">
				<a
					href="/"
					class=" hover:text-green-sell rounded-md px-3 py-2 font-medium duration-500"
					class:text-dark-blue-sell={scrolled}
					class:text-white={!scrolled}>SOBRE NÓS</a
				>
				<a
					href="/"
					class=" hover:text-green-sell rounded-md px-3 py-2 font-medium duration-500"
					class:text-dark-blue-sell={scrolled}
					class:text-white={!scrolled}>PROPOSTA</a
				>
				<a
					href="/"
					class=" hover:text-green-sell rounded-md px-3 py-2 font-medium duration-500"
					class:text-dark-blue-sell={scrolled}
					class:text-white={!scrolled}>CONTATO</a
				>
			</div>
			<RedesSociais />
			<div
				class="item-center flex transition-opacity duration-500 ease-in-out"
				class:hidden={!scrolled}
				class:block={scrolled}
				class:opacity-0={!scrolled}
				class:opacity-100={scrolled}
			>
				<div class=" items-center p-4">
					<button
						class="bg-light-blue-sell transform rounded-md px-6 py-3 font-medium text-white transition-transform duration-300 hover:scale-110"
					>
						ACESSE O PORTAL
					</button>
				</div>
			</div>

			<div class="flex items-center md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none"
				>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</div>

			<!-- Links 
        <div class="flex-1 flex items-center justify-center space-x-4">
        </div>
        -->

			<!-- Mobile Menu Button -->
		</div>
	</div>

	<!-- Mobile Menu -->
	<div class="md:hidden">
		<div class="space-y-1 px-2 pb-3 pt-2">
			<a
				href="/"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
				>Home</a
			>
			<a
				href="/"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
				>About</a
			>
			<a
				href="/"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
				>Services</a
			>
			<a
				href="/"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
				>Contact</a
			>
		</div>
	</div>
</nav>

<style>
	.transition-opacity {
		transition: opacity 0.5s ease-in-out;
	}
	.transition-background {
		transition: background-color 0.5s ease-in-out;
	}
</style>
