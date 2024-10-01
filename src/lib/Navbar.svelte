<script>
	import { onMount } from 'svelte';
	import BtnAcessoPortal from './BtnAcessoPortal.svelte';
	import RedesSociais from './RedesSociais.svelte';

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
			<div class="hidden space-x-8 sm:block">
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
			<RedesSociais />
			<div
				class="item-center flex transition-opacity duration-500 ease-in-out"
				class:hidden={!scrolled}
				class:block={scrolled}
				class:opacity-0={!scrolled}
				class:opacity-100={scrolled}
			>
				<BtnAcessoPortal />
			</div>
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
