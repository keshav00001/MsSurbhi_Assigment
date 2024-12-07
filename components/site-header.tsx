import { SidebarTrigger } from "@/components/ui/sidebar"
// import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <SidebarTrigger />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="ghost" className="w-9 px-0">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

