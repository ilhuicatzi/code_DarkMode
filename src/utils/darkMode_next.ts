export const darkMode_code1 = `
npm install next-themes
`

export const darkMode_code2 = `
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
`

export const darkMode_code3 = `
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
`

export const darkMode_code4 = `
"use client"

import { useState, useEffect} from "react"
import { useTheme } from "next-themes"
import {SunIcon, MoonIcon} from "@radix-ui/react-icons"

function ButtonDarkMode() {

  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  
  return (
    <div className="flex justify-center items-center rounded-full p-2 hover:bg-zinc-200 hover:dark:bg-zinc-900">
      <button onClick={handleClick}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  )
}

export default ButtonDarkMode
`