<!-- <div class=" flex items-center justify-center">
	<div class="mr-12">
		<div
			class="items-center text-center text-3xl font-bold leading-normal text-white"
		>
			<div>Portal Sell</div>
		</div>
	</div>
	<div class="item-center">
		<form
			class=" items-center gap-4"
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
				name="mem"
				type="text"
				id="user1"
				class="text-md h-14 w-80 rounded-full bg-slate-100 p-2.5 text-center text-gray-900"
				placeholder="Usuário"
				required
			/>
			<input
				name="pass"
				type="password"
				id="password1"
				class="text-md h-14 w-80 rounded-full bg-slate-100 p-2.5 text-center text-gray-900"
				placeholder="Senha"
				required
			/>
			<button
				type="submit"
				name="button"
				class="h-14 w-32 rounded-full bg-green-600 px-6 text-lg font-semibold text-black duration-500 hover:bg-green-700"
			>
				Conectar
			</button>
		</form>
	</div>
	<div class="flex flex-col text-center text-lg text-white">
		<a
			href="https://www.webware.com.br/bin/administradora/cadastro.asp?adm=14804150"
			class="duration-500 hover:text-green-sell">Cadastre-se</a
		>
		<a
			href="https://www.webware.com.br/bin/administradora/lembrarsenha.asp?adm=14804150"
			class="duration-500 hover:text-green-sell">Esqueci meu acesso</a
		>
	</div>
</div> -->

<div class="items-center justify-center sm:flex sm:justify-around">
	<div
		class="text-center text-5xl font-bold leading-normal text-white sm:mr-16"
	>
		Portal Sell
	</div>
	<div class="flex justify-center">
		<form
			id="portalSell"
			class="items-center justify-center gap-2 sm:flex"
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
				class="text-md mb-4 h-14 w-full rounded-full bg-slate-100 p-2.5 text-center text-gray-900 sm:mb-0 sm:w-80"
				name="mem"
				type="text"
				id="user"
				placeholder="Usuário"
				required
			/>
			<input
				class="text-md mb-4 h-14 w-full rounded-full bg-slate-100 p-2.5 text-center text-gray-900 sm:mb-0 sm:w-80"
				name="pass"
				type="password"
				id="password"
				placeholder="Senha"
				required
			/>
		</form>
	</div>
	<div class="ml-1 flex justify-between rounded-full sm:justify-normal">
		<button
			form="portalSell"
			type="submit"
			name="button"
			class="text-md h-14 w-48 rounded-full bg-green-600 font-semibold text-black duration-500 hover:bg-green-700 sm:w-32"
		>
			Conectar
		</button>
		<div
			class="text-md my-auto flex flex-col items-center rounded-full pl-1 pr-4 text-center text-white"
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
</div>
