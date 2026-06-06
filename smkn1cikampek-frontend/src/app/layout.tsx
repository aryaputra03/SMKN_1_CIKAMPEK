import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'SMKN 1 Cikampek',
    template: '%s | SMKN 1 Cikampek',
  },
  description:
    'Website Resmi SMKN 1 Cikampek — Sekolah Menengah Kejuruan Negeri terbaik di Cikampek, Karawang. Informasi profil sekolah, berita, prestasi, dan jurusan.',
  keywords: [
    'SMKN 1 Cikampek', 'SMK Cikampek', 'Karawang', 'sekolah kejuruan',
    'SMK Negeri 1 Cikampek', 'jurusan SMK Cikampek',
  ],
  metadataBase: new URL('https://smkn1cikampek.sch.id'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://smkn1cikampek.sch.id',
    siteName: 'SMKN 1 Cikampek',
    title: 'SMKN 1 Cikampek — Unggul, Berkarakter, Berprestasi',
    description: 'Website resmi SMKN 1 Cikampek. Informasi lengkap profil sekolah, jurusan, berita, dan prestasi.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}