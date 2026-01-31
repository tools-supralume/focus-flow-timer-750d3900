import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Focus Flow Timer - AI-Powered Pomodoro Timer',
  description: 'An intelligent Pomodoro timer that learns from your work patterns and automatically adjusts session lengths to maximize your productivity.',
  keywords: 'pomodoro, timer, productivity, focus, AI, work patterns',
  authors: [{ name: 'Focus Flow Timer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}