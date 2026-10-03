import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { notFoundSeo, routeSeo, SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from './src/data/seo.ts'
import { getProjectPath, projectRouteList } from './src/data/projectRoutes.ts'

const escapeHtml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

const escapeXml = (value: string) => escapeHtml(value).replaceAll("'", '&apos;')

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

      const sitemapPaths = [
        ...Object.keys(routeSeo),
        ...projectRouteList.map((project) => getProjectPath(project.slug)),
      ]
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...sitemapPaths.map((pathname) => (
          `  <url><loc>${escapeXml(new URL(pathname, `${SITE_URL}/`).toString())}</loc></url>`
        )),
        '</urlset>',
        '',
      ].join('\n')

      await writeFile(resolve(outputDirectory, 'sitemap.xml'), sitemap, 'utf8')

      const notFoundUrl = new URL('/404', `${SITE_URL}/`).toString()
      let notFoundHtml = rootHtml
        .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(notFoundSeo.title)}</title>`)
        .replace(
          /<link rel="canonical" href="[^"]*" \/>/,
          `<link rel="canonical" href="${notFoundUrl}" />`,
        )

      notFoundHtml = replaceMeta(notFoundHtml, 'name', 'description', notFoundSeo.description)
      notFoundHtml = replaceMeta(notFoundHtml, 'name', 'keywords', notFoundSeo.keywords)
      notFoundHtml = replaceMeta(notFoundHtml, 'name', 'robots', 'noindex, follow')
      notFoundHtml = replaceMeta(notFoundHtml, 'property', 'og:title', notFoundSeo.title)
      notFoundHtml = replaceMeta(notFoundHtml, 'property', 'og:description', notFoundSeo.description)
      notFoundHtml = replaceMeta(notFoundHtml, 'property', 'og:url', notFoundUrl)
      notFoundHtml = replaceMeta(notFoundHtml, 'name', 'twitter:title', notFoundSeo.title)
      notFoundHtml = replaceMeta(notFoundHtml, 'name', 'twitter:description', notFoundSeo.description)

      await writeFile(resolve(outputDirectory, '404.html'), notFoundHtml, 'utf8')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), staticSeoPagesPlugin()],
})
