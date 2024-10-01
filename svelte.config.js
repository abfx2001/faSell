/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		//adapter: adapter()
		adapter: adapter({
			// Aqui você pode configurar as rotas de fallback, como 'index.html' para single-page apps
			fallback: 'index.html'
		})
		// paths: {
		// 	base: '/subdiretorio'
		// }
	}
};

export default config;
