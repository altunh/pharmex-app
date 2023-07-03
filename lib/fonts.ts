import { Inter } from 'next/font/google'
import localFont from "next/font/local"

const fontInter = Inter({
    subsets: ['latin'],
    variable: "--font-sans"
})
  
const fontCalSans = localFont({
    src: "../assets/fonts/webfonts/CalSans-SemiBold.woff2",
    variable: "--font-heading"
})

export const fonts = { fontInter, fontCalSans }

export const fontVariables = Object.values(fonts).map(font => font.variable)

export const fontClassNames = Object.values(fonts).map(font => font.className)