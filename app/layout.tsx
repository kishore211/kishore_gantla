import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kishore Gantla - Java Software Engineer & Enterprise Developer',
  description: 'Portfolio of Kishore Gantla - Java Software Engineer with 5+ years of enterprise development experience. Expert in Spring Framework, microservices, and scalable application development.',
  keywords: 'Kishore Gantla, Java Software Engineer, Spring Framework, Enterprise Developer, Microservices, Full Stack Developer, Spring Boot, Hibernate',
  authors: [{ name: 'Kishore Gantla' }],
  openGraph: {
    title: 'Kishore Gantla - Java Software Engineer & Enterprise Developer',
    description: 'Portfolio showcasing enterprise Java projects, microservices architecture, and full-stack development expertise',
    url: 'https://kishoregantlaportfolio.vercel.app',
    siteName: 'Kishore Gantla Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kishore Gantla - Java Software Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kishore Gantla - Java Software Engineer & Enterprise Developer',
    description: 'Portfolio showcasing enterprise Java projects, microservices architecture, and full-stack development expertise',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
