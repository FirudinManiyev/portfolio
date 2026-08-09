export const SITE_URL = 'https://firudinmaniyev.vercel.app'
export const SITE_NAME = 'Firudin Maniyev Portfolio'
export const SOCIAL_IMAGE_URL = `${SITE_URL}/modern_fm_logo2.png`

export interface PageSeo {
  title: string
  description: string
  keywords: string
  noIndex?: boolean
}

export const routeSeo: Record<string, PageSeo> = {
  '/': {
    title: 'Firudin Maniyev — Full-stack Developer',
    description: 'Firudin Maniyevin full-stack developer portfoliosu: React, TypeScript, backend həlləri, layihələr, bacarıqlar və peşəkar təcrübə.',
    keywords: 'Firudin Maniyev, full-stack developer, frontend developer, React developer, TypeScript, portfolio, Bakı',
  },
  '/about': {
    title: 'Haqqımda | Firudin Maniyev',
    description: 'Full-stack developer Firudin Maniyevin təcrübəsi, iş yanaşması, texniki maraqları və peşəkar inkişaf yolu ilə tanış olun.',
    keywords: 'Firudin Maniyev haqqında, full-stack developer Bakı, proqramçı, veb developer',
  },
  '/skills': {
    title: 'Bacarıqlar | Firudin Maniyev',
    description: 'React, TypeScript, JavaScript, .NET, verilənlər bazaları və müasir developer alətləri üzrə texniki bacarıqlarım.',
    keywords: 'React, TypeScript, JavaScript, .NET, frontend bacarıqları, backend bacarıqları',
  },
  '/projects': {
    title: 'Layihələr | Firudin Maniyev',
    description: 'Hazırladığım veb və mobil layihələrə, istifadə etdiyim texnologiyalara, mənbə kodlarına və canlı demo keçidlərinə baxın.',
    keywords: 'developer layihələri, React layihələri, portfolio projects, GitHub, veb tətbiqlər',
  },
  '/certificates': {
    title: 'Sertifikatlar | Firudin Maniyev',
    description: 'İnformasiya texnologiyaları, proqramlaşdırma və şəxsi inkişaf üzrə əldə etdiyim sertifikat və diplomlar.',
    keywords: 'IT sertifikatları, proqramlaşdırma sertifikatları, developer təhsili, diplomlar',
  },
  '/education': {
    title: 'Təhsil | Firudin Maniyev',
    description: 'Akademik təhsilim, proqramlaşdırma kurslarım və full-stack developer kimi peşəkar inkişaf mərhələlərim.',
    keywords: 'proqramlaşdırma təhsili, Code Academy, Holberton School, developer education',
  },
  '/contact': {
    title: 'Əlaqə | Firudin Maniyev',
    description: 'Yeni layihə, əməkdaşlıq və iş təklifləri üçün full-stack developer Firudin Maniyevlə əlaqə saxlayın.',
    keywords: 'developer əlaqə, full-stack developer iş təklifi, Firudin Maniyev email',
  },
}

export const notFoundSeo: PageSeo = {
  title: 'Səhifə tapılmadı | Firudin Maniyev',
  description: 'Axtardığınız səhifə mövcud deyil. Portfolio ana səhifəsinə qayıdaraq layihələr və bacarıqlarla tanış ola bilərsiniz.',
  keywords: 'səhifə tapılmadı',
  noIndex: true,
}
