'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80',
    tagline: 'Unggul, Berkarakter, Berprestasi',
    headline: 'SMK Negeri 1\nCikampek',
    sub: 'Mencetak tenaga kerja profesional dan berkarakter untuk menghadapi tantangan industri global.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
    tagline: 'Fasilitas Modern & Terkini',
    headline: 'Belajar dengan\nFasilitas Terbaik',
    sub: 'Laboratorium lengkap, workshop industri, dan lingkungan belajar yang kondusif untuk masa depan.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80',
    tagline: 'Raih Impian Setinggi Langit',
    headline: 'Jurusan Pilihan\nMasa Depan',
    sub: 'Pilihan program keahlian yang relevan dengan kebutuhan dunia kerja dan industri terkini.',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
      setAnimKey((k) => k + 1)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative h-[92vh] min-h-[560px] max-h-[780px] flex items-center overflow-hidden">

      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('${s.bg}')`,
            opacity: i === current ? 1 : 0,
            transform: i === current ? 'scale(1)' : 'scale(1.04)',
          }}
        />
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-900/90 via-brand-navy-900/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/60 via-transparent to-transparent" />

      {/* Yellow accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-yellow-400" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">

          {/* Tag */}
          <div
            key={`tag-${animKey}`}
            className="inline-flex items-center gap-2 bg-brand-yellow-400/20 border border-brand-yellow-400/40 rounded-full px-4 py-1.5 mb-5 animate-fadeInUp"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow-400 animate-pulse" />
            <span className="text-brand-yellow-300 text-sm font-semibold">{slide.tagline}</span>
          </div>

          {/* Headline */}
          <h1
            key={`h1-${animKey}`}
            className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 animate-fadeInUp delay-100"
            style={{ whiteSpace: 'pre-line' }}
          >
            {slide.headline}
          </h1>

          {/* Sub */}
          <p
            key={`sub-${animKey}`}
            className="text-gray-200 text-lg leading-relaxed mb-8 max-w-lg animate-fadeInUp delay-200"
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${animKey}`}
            className="flex flex-wrap gap-3 animate-fadeInUp delay-300"
          >
            <Link
              href="/profil/jurusan"
              className="bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-navy-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-yellow hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              Lihat Jurusan →
            </Link>
            <Link
              href="/informasi/berita"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm"
            >
              Berita Terkini
            </Link>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setAnimKey((k) => k + 1) }}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2.5 bg-brand-yellow-400'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest rotate-90 mb-2">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"/>
      </div>
    </section>
  )
}