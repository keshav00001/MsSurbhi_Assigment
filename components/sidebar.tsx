"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sun, Moon, Search, Home, LayoutDashboard, FolderKanban, CheckSquare, Settings, MessageSquare, Plus, Minus, Layers2, Repeat2, CircleCheckIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "./theme-toggle"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  // const [isExpanded, setIsExpanded] = React.useState(true)
  const [openItems, setOpenItems] = React.useState<string[]>(["Settings"])
  const { setTheme, theme } = useTheme()

  const toggleItem = (title: string) => {
    setOpenItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className={cn("flex  ", className)}>
      <div className="w-[60px] bg-gray-100 dark:bg-zinc-900 flex flex-col items-center py-4 border-r border-gray-200 dark:border-zinc-800 transition-colors duration-300 mr-6">
        
      <ThemeToggle />

       
        <div className="flex-1 flex flex-col gap-1  ">
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <Home className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <LayoutDashboard className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <Layers2 className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <FolderKanban className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <CheckSquare className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <Settings className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2">



<Button
      variant="ghost"
      size="icon"
      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
    >
      <Repeat2 className="h-5 w-5" />
    </Button>
<Button
      variant="ghost"
      size="icon"
      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
    >
      <CircleCheckIcon className="h-5 w-5" />
    </Button>

  
</div>


<div className="relative">
         
         <Avatar className="mt-auto h-8 w-8">
         <AvatarImage src="/woman.png" />
       </Avatar>
         <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
       </div>


        
      </div>









      <div className="w-[60px] bg-gray-100 dark:bg-zinc-900 flex flex-col items-center py-4 border-r border-gray-200 dark:border-zinc-800 transition-colors duration-300">
        
      <ThemeToggle />

       
        <div className="flex-1 flex flex-col gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <Home className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <LayoutDashboard className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <Layers2 className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <FolderKanban className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <CheckSquare className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <Settings className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2">



<Button
      variant="ghost"
      size="icon"
      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
    >
      <Repeat2 className="h-5 w-5" />
    </Button>
<Button
      variant="ghost"
      size="icon"
      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
    >
      <CircleCheckIcon className="h-5 w-5" />
    </Button>

  
</div>
        
        <div className="relative">
         
          <Avatar className="mt-auto h-8 w-8">
          <AvatarImage src="/woman.png" />
        </Avatar>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
        </div>
      </div>


     




      {/* Expanded sidebar content */}
      <div className="w-[250px] bg-white dark:bg-zinc-900 flex flex-col transition-colors duration-300">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Overview</h2>
          <div className="relative mb-4">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search"
              className="pl-8 bg-gray-100 dark:bg-zinc-800 border-none text-sm text-zinc-600 dark:text-zinc-400 h-9 placeholder:text-zinc-400"
            />
          </div>
          <Tabs defaultValue="my-account" className="mb-4">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-zinc-800">
              <TabsTrigger value="my-account" className="text-zinc-600 dark:text-zinc-400 data-[state=active]:text-zinc-900 data-[state=active]:dark:text-white data-[state=active]:bg-white data-[state=active]:dark:bg-zinc-700">My account</TabsTrigger>
              <TabsTrigger value="shared" className="text-zinc-600 dark:text-zinc-400 data-[state=active]:text-zinc-900 data-[state=active]:dark:text-white data-[state=active]:bg-white data-[state=active]:dark:bg-zinc-700">Shared with me</TabsTrigger>
            </TabsList>
          </Tabs>
          <nav className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-between text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <span className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Home
              </span>
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-between text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <span className="flex items-center">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </span>
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-between text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <span className="flex items-center">
                <FolderKanban className="mr-2 h-4 w-4" />
                Projects
              </span>
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-between text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <span className="flex items-center">
                <CheckSquare className="mr-2 h-4 w-4" />
                Tasks
              </span>
              <Plus className="h-4 w-4" />
            </Button>
            <div>
              <Button
                variant="ghost"
                onClick={() => toggleItem('Settings')}
                className="w-full justify-between text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                <span className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </span>
                {openItems.includes('Settings') ? (
                  <Minus className="h-4 w-4 transition-transform" />
                ) : (
                  <Plus className="h-4 w-4 transition-transform" />
                )}


              </Button>
              {openItems.includes('Settings') && (
                <div className="ml-4 pl-4 mt-1 space-y-1 border-l border-gray-200 dark:border-zinc-800">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 h-8"
                  >
                    My details
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 h-8"
                  >
                    My profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 h-8"
                  >
                    Security
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 h-8"
                  >
                    Integrations
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 h-8"
                  >
                    Billing
                  </Button>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
          </nav>
        </div>
      </div>
    </div>
  )
}

