import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import type { SocialIconName } from '../data/site'

const iconMap: Record<SocialIconName, IconType> = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
}

interface SocialIconProps {
  name: SocialIconName
  className?: string
}

function SocialIcon({ name, className }: SocialIconProps) {
  const Icon = iconMap[name]

  return <Icon aria-hidden="true" focusable="false" className={className} />
}

export default SocialIcon
