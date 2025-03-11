import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import rehypePrettyCode from 'rehype-pretty-code';
import { siteConfig } from './src/config';
import sitemap from '@astrojs/sitemap';

// Load environment variable for deployment environment
const DEPLOY_ENV = process.env.ASTRO_DEPLOY_ENV || "production";

export default defineConfig({
  site: siteConfig.site,
  output: "static",
  integrations: [tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [
      [rehypePrettyCode, {
        theme: 'github-dark',
        onVisitLine(node) {
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
          }
        },
      }],
    ],
  },
  vite: {
    define: {
      'import.meta.env.DEPLOY_ENV': JSON.stringify(DEPLOY_ENV),
    },
  },
});
