<script>
	import BtnAcessoPortal from '$lib/BtnAcessoPortal.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let imageSrc = '/sell-logo.png';
	let scrolled = false;

	const handleScroll = () => {
		scrolled = window.scrollY > 50;
		imageSrc = scrolled ? '/sell-logo-color.png' : '/sell-logo.png';
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<nav
	class="transition-background fixed w-full bg-transparent duration-500 ease-in-out"
	class:bg-white={scrolled}
>
	<div class="py-2">
		<div class="mx-2 flex items-center justify-between gap-16">
			<div class="flex">
				<a href="https://www.selladm.com.br">
					<img class="w-38 h-20" src={imageSrc} alt="Logo Sell" />
				</a>
			</div>
			<button on:click={toggleMenu}>
				{#if showMenu}
					<svg
						class="transition duration-300 ease-in-out"
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						{...$$props}
					>
						<path
							fill="#6EB858"
							d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
						/>
					</svg>
				{:else}
					<svg
						class="transition duration-300 ease-in-out"
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 256 256"
						{...$$props}
					>
						<path
							fill="#6EB858"
							d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"
						/>
					</svg>
				{/if}
			</button>
		</div>
		{#if showMenu}
			<div
				class="flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out"
				transition:fade={{ duration: 500 }}
			>
				<div class="my-4 text-sm">
					<a
						href="https://selladm.com.br/sobre-nos/"
						class=" rounded-md px-3 py-2 font-medium duration-500 hover:text-green-sell"
						class:text-dark-blue-sell={scrolled}
						class:text-white={!scrolled}>SOBRE NÓS</a
					>
					<a
						href="https://selladm.com.br/proposta/"
						class=" rounded-md px-3 py-2 font-medium duration-500 hover:text-green-sell"
						class:text-dark-blue-sell={scrolled}
						class:text-white={!scrolled}>PROPOSTA</a
					>
					<a
						href="https://selladm.com.br/contato/"
						class=" rounded-md px-3 py-2 font-medium duration-500 hover:text-green-sell"
						class:text-dark-blue-sell={scrolled}
						class:text-white={!scrolled}>CONTATO</a
					>
				</div>
				<!-- <RedesSociais /> -->
				<BtnAcessoPortal />
			</div>
		{/if}
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
