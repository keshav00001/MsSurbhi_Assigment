import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"
import { Sidebar } from "@/components/sidebar"

import "@/styles/globals.css"
import { ThemeWrapper } from '@/components/theme-wrapper'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen font-sans antialiased",
        inter.className
      )}>
        <ThemeWrapper>
          <div className="flex dark:bg-zinc-950 transition-colors duration-300">
            <Sidebar className="flex-shrink-0" />
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </ThemeWrapper>
      </body>
    </html>
    
  )
}

