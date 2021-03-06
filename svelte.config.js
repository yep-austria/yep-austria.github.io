import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import Icons from 'unplugin-icons/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    trailingSlash: 'always',
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    vite: {
      plugins: [
        Icons({
          compiler: 'svelte',
        }),
      ],
    },
  },
}

export default config
