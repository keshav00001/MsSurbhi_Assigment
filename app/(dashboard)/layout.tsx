
import { DashboardNav } from "@/components/dashboard-nav"
import { SiteHeader } from "@/components/site-header"
import { 
  Sidebar,
  SidebarContent,
  SidebarInset,
} from "@/components/ui/sidebar"
import { LayoutDashboard, Home, FolderKanban, CheckSquare, Settings, MessageSquare } from 'lucide-react'
import type { NavItem } from "@/types/nav"

const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/overview",
    icon: Home,
  },
  {
    title: "Home",
    href: "/home",
    icon: Home,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    items: [
      {
        title: "My details",
        href: "/settings/details",
      },
      {
        title: "My profile",
        href: "/settings/profile",
      },
      {
        title: "Security",
        href: "/settings/security",
      },
      {
        title: "Integrations",
        href: "/settings/integrations",
      },
      {
        title: "Billing",
        href: "/settings/billing",
      },
    ],
  },
  {
    title: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1 items-start">
        <Sidebar>
          <SidebarContent>
            <DashboardNav items={navItems} />
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </SidebarInset>
      </div>
    </div>
  )
}

