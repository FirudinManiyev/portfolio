import { Camera, Code2, Network } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { SocialIconName } from '../data/site'

const iconMap: Record<SocialIconName, LucideIcon> = {
  github: Code2,
  instagram: Camera,
  linkedin: Network,
}

interface SocialIconProps {
  name: SocialIconName
  className?: string
}

function SocialIcon({ name, className }: SocialIconProps) {
  const Icon = iconMap[name]

  return <Icon aria-hidden="true" className={className} />
}

export default SocialIcon
