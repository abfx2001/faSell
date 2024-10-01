<script>
	import Modal from '$lib/Modal.svelte';

	let showModal = false;
</script>

<div class="item-center flex transition-opacity duration-500 ease-in-out">
	<div class=" items-center p-4">
		<button
			on:click={() => (showModal = true)}
			class="transform rounded-md bg-light-blue-sell px-6 py-3 font-medium
			text-white transition-transform duration-300 hover:scale-110"
		>
			ACESSE O PORTAL
		</button>
	</div>
</div>

<Modal bind:showModal>
	<div
		class="items-center text-start text-3xl font-semibold text-dark-blue-sell sm:text-5xl"
	>
		Acesse o Portal
	</div>
	<div class="">
		<form
			id="portalSell"
			class="mt-4 items-center gap-2"
			action="https://validador.webware.com.br"
			method="post"
		>
			<input type="hidden" name="a" value="14804150" />
			<input
				type="hidden"
				name="urlErro"
				value="https://www.webware.com.br/bin/administradora/default.asp?adm=14804150&amp;msg=ERRO"
			/>
			<input
				class="text-md mb-4 h-14 w-full rounded-full bg-slate-200 p-2.5 text-center text-gray-900"
				name="mem"
				type="text"
				id="user"
				placeholder="Usuário"
				required
			/>
			<input
				class="text-md mb-4 h-14 w-full rounded-full bg-slate-200 p-2.5 text-center text-gray-900"
				name="pass"
				type="password"
				id="password"
				placeholder="Senha"
				required
			/>
		</form>
	</div>
	<div class="ml-1 flex justify-between rounded-full">
		<button
			form="portalSell"
			type="submit"
			name="button"
			class="text-md h-14 w-48 rounded-full bg-green-600 font-semibold text-black duration-500 hover:bg-green-700"
		>
			Conectar
		</button>
		<div
			class="text-md my-auto flex flex-col items-center rounded-full pl-1 pr-4 text-center text-dark-blue-sell"
		>
			<a
				href="https://www.webware.com.br/bin/administradora/cadastro.asp?adm=14804150"
				class="font-semibold duration-500 hover:text-green-sell">Cadastre-se</a
			>
			<a
				href="https://www.webware.com.br/bin/administradora/lembrarsenha.asp?adm=14804150"
				class="font-semibold duration-500 hover:text-green-sell"
				>Esqueci meu acesso</a
			>
		</div>
	</div>
</Modal>
