import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apeksha Sood | Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer with 5+ years of experience building high-performance web and mobile apps with React, React Native, TypeScript, Angular, and Next.js.',
  keywords: [
    'Frontend Engineer',
    'React',
    'React Native',
    'TypeScript',
    'Next.js',
    'Angular',
    'Portfolio',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
