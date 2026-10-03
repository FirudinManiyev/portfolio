export const siteProfile = {
  name: 'Firudin Maniyev',
  role: 'Full-stack Developer',
  email: 'firudinmaniyev@gmail.com',
  phoneDisplay: '+994 50 769 36 54',
  phoneValue: '+994507693654',
  location: 'Bakı, Azərbaycan',
  cvUrl: 'https://flowcv.com/resume/i4nksq7e64a1',
} as const

export const navigationLinks = [
  { to: '/', label: 'Ana səhifə' },
  { to: '/about', label: 'Haqqımda' },
  { to: '/education', label: 'Təhsil' },
  { to: '/skills', label: 'Bacarıqlar' },
  { to: '/projects', label: 'Layihələr' },
  { to: '/certificates', label: 'Sertifikatlar' },
] as const

export type SocialIconName = 'github' | 'instagram' | 'linkedin' | 'whatsapp'

export const socialLinks: ReadonlyArray<{
  href: string
  label: string
  icon: SocialIconName
}> = [
  {
    href: 'https://www.linkedin.com/in/firudin-maniyev-4843242b7/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    href: 'https://github.com/FirudinManiyev',
    label: 'GitHub',
    icon: 'github',
  },
  {
    href: 'https://www.instagram.com/firudin.coder/',
    label: 'Instagram',
    icon: 'instagram',
  },
]
