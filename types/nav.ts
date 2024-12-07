import { type LucideIcon } from 'lucide-react'

export interface NavItem {
  title: string
  href: string
  icon?: LucideIcon
  items?: NavItem[]
}

export interface UserProfile {
  name: string
  image: string
}

