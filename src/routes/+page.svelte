<script>
	import AcessoPortal from '$lib/AcessoPortal.svelte';
	import DuvidasFrequentes from '$lib/DuvidasFrequentes.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Whatsapp from '$lib/Whatsapp.svelte';
</script>

<Navbar />

<section class="flex items-center justify-center gap-20 pt-60">
	<AcessoPortal />
	<h1 class="text-center text-5xl font-bold leading-normal text-white">
		<div>Conheça nossos canais</div>
		<div>que facilitam sua rotina</div>
	</h1>
</section>

<section class="mt-10 flex items-center justify-center gap-16">
	<button
		onclick="window.open('https://selladm.dyndns.ws/', '_blank')"
		class="bg-dark-blue-sell/90 hover:bg-surface-sell flex h-28 w-56 items-center rounded-3xl p-4 pl-8 font-bold text-white shadow-lg duration-500"
	>
		<svg
			class="flex size-20"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="#FFFFFF"
			><path
				d="M16,23c0,.552-.447,1-1,1H6c-2.757,0-5-2.243-5-5V5C1,2.243,3.243,0,6,0h4.515c1.869,0,3.627,.728,4.95,2.05l3.484,3.486c.271,.271,.523,.568,.748,.883,.321,.449,.217,1.074-.232,1.395-.449,.32-1.075,.217-1.395-.233-.161-.225-.341-.438-.534-.63l-3.485-3.486c-.318-.318-.671-.587-1.051-.805V7c0,.551,.448,1,1,1h3c.553,0,1,.448,1,1s-.447,1-1,1h-3c-1.654,0-3-1.346-3-3V2.023c-.16-.015-.322-.023-.485-.023H6c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3H15c.553,0,1,.448,1,1Zm5.685-6.733l-3.041-.507c-.373-.062-.644-.382-.644-.76,0-.551,.448-1,1-1h2.268c.356,0,.688,.192,.867,.5,.275,.478,.885,.641,1.366,.365,.478-.277,.642-.888,.364-1.366-.534-.925-1.53-1.5-2.598-1.5h-.268v-1c0-.552-.447-1-1-1s-1,.448-1,1v1c-1.654,0-3,1.346-3,3,0,1.36,.974,2.51,2.315,2.733l3.041,.507c.373,.062,.644,.382,.644,.76,0,.551-.448,1-1,1h-2.268c-.356,0-.688-.192-.867-.5-.275-.479-.886-.642-1.366-.365-.478,.277-.642,.888-.364,1.366,.534,.925,1.53,1.499,2.598,1.499h.268v1c0,.552,.447,1,1,1s1-.448,1-1v-1c1.654,0,3-1.346,3-3,0-1.36-.974-2.51-2.315-2.733Zm-14.185-1.267h5.5c.553,0,1-.448,1-1s-.447-1-1-1H7.5c-1.378,0-2.5,1.122-2.5,2.5v2c0,1.378,1.122,2.5,2.5,2.5h5.5c.553,0,1-.448,1-1s-.447-1-1-1H7.5c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5Zm-1.5-4h2c.552,0,1-.448,1-1s-.448-1-1-1h-2c-.552,0-1,.448-1,1s.448,1,1,1Zm0-4h2c.552,0,1-.448,1-1s-.448-1-1-1h-2c-.552,0-1,.448-1,1s.448,1,1,1Z"
			/></svg
		>
		<span>Linha Digitável</span>
	</button>

	<button
		onclick="window.open('https://selladm.com.br/regulariza/', '_blank')"
		class="bg-dark-blue-sell/90 hover:bg-surface-sell flex h-28 w-56 items-center rounded-3xl p-4 pl-8 font-bold text-white shadow-lg duration-500"
	>
		<svg
			class="flex size-20"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="#FFFFFF"
			><path
				d="M16,23c0,.552-.447,1-1,1H6c-2.757,0-5-2.243-5-5V5C1,2.243,3.243,0,6,0h4.515c1.869,0,3.627,.728,4.95,2.05l3.484,3.486c.271,.271,.523,.568,.748,.883,.321,.449,.217,1.074-.232,1.395-.449,.32-1.075,.217-1.395-.233-.161-.225-.341-.438-.534-.63l-3.485-3.486c-.318-.318-.671-.587-1.051-.805V7c0,.551,.448,1,1,1h3c.553,0,1,.448,1,1s-.447,1-1,1h-3c-1.654,0-3-1.346-3-3V2.023c-.16-.015-.322-.023-.485-.023H6c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3H15c.553,0,1,.448,1,1Zm5.685-6.733l-3.041-.507c-.373-.062-.644-.382-.644-.76,0-.551,.448-1,1-1h2.268c.356,0,.688,.192,.867,.5,.275,.478,.885,.641,1.366,.365,.478-.277,.642-.888,.364-1.366-.534-.925-1.53-1.5-2.598-1.5h-.268v-1c0-.552-.447-1-1-1s-1,.448-1,1v1c-1.654,0-3,1.346-3,3,0,1.36,.974,2.51,2.315,2.733l3.041,.507c.373,.062,.644,.382,.644,.76,0,.551-.448,1-1,1h-2.268c-.356,0-.688-.192-.867-.5-.275-.479-.886-.642-1.366-.365-.478,.277-.642,.888-.364,1.366,.534,.925,1.53,1.499,2.598,1.499h.268v1c0,.552,.447,1,1,1s1-.448,1-1v-1c1.654,0,3-1.346,3-3,0-1.36-.974-2.51-2.315-2.733Zm-14.185-1.267h5.5c.553,0,1-.448,1-1s-.447-1-1-1H7.5c-1.378,0-2.5,1.122-2.5,2.5v2c0,1.378,1.122,2.5,2.5,2.5h5.5c.553,0,1-.448,1-1s-.447-1-1-1H7.5c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5Zm-1.5-4h2c.552,0,1-.448,1-1s-.448-1-1-1h-2c-.552,0-1,.448-1,1s.448,1,1,1Zm0-4h2c.552,0,1-.448,1-1s-.448-1-1-1h-2c-.552,0-1,.448-1,1s.448,1,1,1Z"
			/></svg
		>
		<span>Boleto Vencido +30 dias</span>
	</button>

	<button
		onclick="window.open('https://selladm.dyndns.ws/', '_blank')"
		class="bg-dark-blue-sell/90 hover:bg-surface-sell flex h-28 w-56 items-center rounded-3xl p-4 pl-8 font-bold text-white shadow-lg duration-500"
	>
		<svg
			class="flex size-20"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="#FFFFFF"
			><path
				d="M9,12c-3.309,0-6-2.691-6-6S5.691,0,9,0s6,2.691,6,6-2.691,6-6,6Zm4.27,7.48c-.813,.813-1.27,1.915-1.27,3.065v1.455h1.455c1.15,0,2.252-.457,3.065-1.27l6.807-6.807c.897-.897,.897-2.353,0-3.25-.897-.897-2.353-.897-3.25,0l-6.807,6.807Zm-3.27,3.065c0-1.692,.659-3.283,1.855-4.479l2.376-2.376c-1.476-1.06-3.279-1.691-5.231-1.691C4.038,14,0,18.038,0,23c0,.552,.448,1,1,1H10v-1.455Z"
			/></svg
		>
		<span>Alteração de Cadastro</span>
	</button>

	<button
		onclick="window.open('https://selladm.dyndns.ws/', '_blank')"
		class="bg-dark-blue-sell/90 hover:bg-surface-sell flex h-28 w-56 items-center rounded-3xl p-4 pl-8 font-bold text-white shadow-lg duration-500"
	>
		<svg
			class="flex"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			id="Capa_1"
			x="0px"
			y="0px"
			viewBox="0 0 512 512"
			style="enable-background:new 0 0 512 512;"
			xml:space="preserve"
			width="60"
			height="60"
			fill="#FFFFFF"
		>
			<g>
				<path
					d="M490.667,234.667H448V192c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333v42.667h-42.667   c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h42.667V320c0,11.782,9.551,21.333,21.333,21.333   c11.782,0,21.333-9.551,21.333-21.333v-42.667h42.667c11.782,0,21.333-9.551,21.333-21.333   C512,244.218,502.449,234.667,490.667,234.667z"
				/>
				<circle cx="192" cy="128" r="128" />
				<path
					d="M192,298.667c-105.99,0.118-191.882,86.01-192,192C0,502.449,9.551,512,21.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C383.882,384.677,297.99,298.784,192,298.667z"
				/>
			</g>
		</svg>
		<span>Primeiro Acesso</span>
	</button>
</section>

<section>
	<div class="mt-10 text-center text-5xl font-semibold text-white">
		Dúvidas Frequentes
	</div>
</section>

<section>
	<DuvidasFrequentes />
</section>

<Whatsapp />
