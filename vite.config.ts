import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { routeSeo, SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from './src/data/seo.ts'
import { getProjectPath, projectRouteList } from './src/data/projectRoutes.ts'

const escapeHtml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

const replaceMeta = (
  html: string,
  attribute: 'name' | 'property',
  key: string,
  content: string,
) => html.replace(
  new RegExp(`<meta ${attribute}="${key}" content="[^"]*" \\/>`),
  `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`,
)

function staticSeoPagesPlugin(): Plugin {
  return {
    name: 'static-seo-pages',
    apply: 'build',
    async closeBundle() {
      const outputDirectory = resolve('dist')
      const rootHtml = await readFile(resolve(outputDirectory, 'index.html'), 'utf8')

      const staticPages = Object.entries(routeSeo).map(([pathname, seo]) => ({
        pathname,
        seo,
        type: 'website',
      }))
      const projectPages = projectRouteList.map((project) => ({
        pathname: getProjectPath(project.slug),
        seo: {
          title: `${project.title} | Firudin Maniyev`,
          description: project.description,
          keywords: `${project.title}, Firudin Maniyev layihə, React portfolio, web development, layihə detalları`,
        },
        type: 'article',
      }))

      await Promise.all([...staticPages, ...projectPages].map(async ({ pathname, seo, type }) => {
        if (pathname === '/') return

        const canonicalUrl = new URL(pathname, `${SITE_URL}/`).toString()
        let pageHtml = rootHtml
          .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
          .replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${canonicalUrl}" />`,
          )

        pageHtml = replaceMeta(pageHtml, 'name', 'description', seo.description)
        pageHtml = replaceMeta(pageHtml, 'name', 'keywords', seo.keywords)
        pageHtml = replaceMeta(pageHtml, 'property', 'og:title', seo.title)
        pageHtml = replaceMeta(pageHtml, 'property', 'og:description', seo.description)
        pageHtml = replaceMeta(pageHtml, 'property', 'og:type', type)
        pageHtml = replaceMeta(pageHtml, 'property', 'og:url', canonicalUrl)
        pageHtml = replaceMeta(pageHtml, 'property', 'og:site_name', SITE_NAME)
        pageHtml = replaceMeta(pageHtml, 'property', 'og:image', SOCIAL_IMAGE_URL)
        pageHtml = replaceMeta(pageHtml, 'name', 'twitter:title', seo.title)
        pageHtml = replaceMeta(pageHtml, 'name', 'twitter:description', seo.description)
        pageHtml = replaceMeta(pageHtml, 'name', 'twitter:image', SOCIAL_IMAGE_URL)

        const routeDirectory = resolve(outputDirectory, pathname.slice(1))
        await mkdir(routeDirectory, { recursive: true })
        await writeFile(resolve(routeDirectory, 'index.html'), pageHtml, 'utf8')
      }))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), staticSeoPagesPlugin()],
})
