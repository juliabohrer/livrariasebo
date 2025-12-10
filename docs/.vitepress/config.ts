import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Menu', link: '/index' },
          { text: 'Introdução', link: '/introducao' },
          { text: 'Descrição', link: '/descricao' },
          { text: 'Funcionalidades', link: '/funcionalidades' },
          { text: 'Diagramas', link: '/diagrama' },
          { text: 'Protótipo', link: '/prototipos' },
          { text: 'Custos', link: '/custos' },
          { text: 'Cronograma', link: '/cronograma' },
          { text: 'Considerações finais', link: '/consideracoes' },
          { text: 'Riscos', link: '/riscos' },








          // ...
        ],
      },
    ],
  },
});