"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { NavItem } from "@/types/nav"
// import type { NavItem } from "@/types/nav"

interface DashboardNavProps {
  items: NavItem[]
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname()

  return (
    <SidebarMenu>
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <SidebarGroup key={index}>
            {item.items ? (
              <>
                <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem, subIndex) => (
                      <SidebarMenuSubItem key={subIndex}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={path === subItem.href}
                        >
                          <Link href={subItem.href}>
                            {subItem.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarGroupContent>
              </>
            ) : (
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={path === item.href}
                >
                  <Link href={item.href}>
                    {Icon && <Icon className="mr-2 h-4 w-4" />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </SidebarGroup>
        )
      })}
    </SidebarMenu>
  )
}

