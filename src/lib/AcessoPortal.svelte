<div class="flex">
	<div class="mr-12">
		<div
			class="items-center text-center text-5xl font-bold leading-normal text-white"
		>
			<div>Acesse o</div>
			<div>Portal Sell</div>
		</div>
		<div class="flex flex-col text-center text-lg text-white">
			<a
				href="https://www.webware.com.br/bin/administradora/cadastro.asp?adm=14804150"
				class="hover:text-green-sell duration-500">Cadastre-se</a
			>
			<a
				href="https://www.webware.com.br/bin/administradora/lembrarsenha.asp?adm=14804150"
				class="hover:text-green-sell duration-500">Esqueci meu acesso</a
			>
		</div>
	</div>
	<div class="item-center flex">
		<form
			class="flex flex-col items-center gap-4"
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
				id="user"
				class="text-md h-14 w-80 rounded-full bg-slate-100 p-2.5 text-center text-gray-900"
				placeholder="Usuário"
				required
			/>
			<input
				name="pass"
				type="password"
				id="password"
				class="text-md h-14 w-80 rounded-full bg-slate-100 p-2.5 text-center text-gray-900"
				placeholder="Senha"
				required
			/>
			<button
				type="submit"
				name="button"
				class="h-14 w-64 rounded-full bg-green-600 px-6 text-lg font-semibold text-black duration-500 hover:bg-green-700"
			>
				Conectar
			</button>
		</form>
	</div>
</div>
