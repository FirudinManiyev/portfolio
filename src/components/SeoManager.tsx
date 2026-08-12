import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { Project } from '../data/projects'
import { getProjectBySlug } from '../data/projects'
import {
  getProjectSeo,
  notFoundSeo,
  routeSeo,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE_URL,
} from '../data/seo'

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }

  element.href = url
}

function setStructuredData(pathname: string, canonicalUrl: string, project?: Project) {
  const pageName = project
    ? getProjectSeo(project).title
    : routeSeo[pathname]?.title ?? notFoundSeo.title
  let script = document.head.querySelector<HTMLScriptElement>('#portfolio-structured-data')

  if (!script) {
    script = document.createElement('script')
    script.id = 'portfolio-structured-data'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Firudin Maniyev',
        url: SITE_URL,
        image: SOCIAL_IMAGE_URL,
        jobTitle: 'Full-stack Developer',
        email: 'mailto:firudinmaniyev@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bakı',
          addressCountry: 'AZ',
        },
        knowsAbout: ['React', 'TypeScript', 'JavaScript', '.NET', 'Web Development', 'Frontend Development', 'Backend Development'],
        sameAs: [
          'https://github.com/FirudinManiyev',
          'https://www.linkedin.com/in/firudin-maniyev-4843242b7/',
          'https://www.instagram.com/firudin.coder/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: 'az',
        author: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': pathname === '/' ? 'ProfilePage' : 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: pageName,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#person` },
        inLanguage: 'az',
        ...(project ? { mainEntity: { '@id': `${canonicalUrl}#project` } } : {}),
      },
      ...(project ? [{
        '@type': 'CreativeWork',
        '@id': `${canonicalUrl}#project`,
        name: project.title,
        description: project.description,
        image: new URL(project.image, `${SITE_URL}/`).toString(),
        dateCreated: project.date,
        url: canonicalUrl,
        codeRepository: project.link,
        sameAs: project.liveDemo ? [project.liveDemo] : undefined,
        keywords: project.technologies.join(', '),
        creator: { '@id': `${SITE_URL}/#person` },
      }] : []),
    ],
  })
}

function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/+$/, '')
    const projectSlug = normalizedPath.match(/^\/projects\/([^/]+)$/)?.[1]
    const project = projectSlug ? getProjectBySlug(projectSlug) : undefined
    const pageSeo = project ? getProjectSeo(project) : routeSeo[normalizedPath] ?? notFoundSeo
    const canonicalUrl = new URL(normalizedPath, `${SITE_URL}/`).toString()
    const socialImageUrl = project
      ? new URL(project.image, `${SITE_URL}/`).toString()
      : SOCIAL_IMAGE_URL

    document.title = pageSeo.title
    setCanonical(canonicalUrl)
    setMeta('name', 'description', pageSeo.description)
    setMeta('name', 'keywords', pageSeo.keywords)
    setMeta('name', 'author', 'Firudin Maniyev')
    setMeta('name', 'robots', pageSeo.noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    setMeta('property', 'og:title', pageSeo.title)
    setMeta('property', 'og:description', pageSeo.description)
    setMeta('property', 'og:type', project ? 'article' : normalizedPath === '/' ? 'profile' : 'website')
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:locale', 'az_AZ')
    setMeta('property', 'og:image', socialImageUrl)
    setMeta('property', 'og:image:alt', project ? `${project.title} layihəsi` : 'Firudin Maniyev — Full-stack Developer')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', pageSeo.title)
    setMeta('name', 'twitter:description', pageSeo.description)
    setMeta('name', 'twitter:image', socialImageUrl)
    setStructuredData(normalizedPath, canonicalUrl, project)
  }, [pathname])

  return null
}

export default SeoManager
