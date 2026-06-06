'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const prestasi = [
  {
    id: 1,
    judul: 'Juara 1 LKS Provinsi Jawa Barat',
    bidang: 'IT Network Systems Administration',
    tingkat: 'Provinsi',
    tahun: '2026',
    siswa: 'Ahmad Fauzi, XI TKJ 2',
    icon: '🥇',
    warna: 'from-yellow-400 to-amber-500',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
  },
  {
    id: 2,
    judul: 'Juara 2 Olimpiade Matematika',
    bidang: 'Matematika Terapan',
    tingkat: 'Nasional',
    tahun: '2025',
    siswa: 'Rini Oktaviani, XII AKL 1',
    icon: '🥈',
    warna: 'from-slate-400 to-gray-500',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
  {
    id: 3,
    judul: 'Juara 1 Web Design Competition',
    bidang: 'Rekayasa Perangkat Lunak',
    tingkat: 'Kabupaten',
    tahun: '2025',
    siswa: 'Bagas Pratama, XI RPL 1',
    icon: '🏆',
    warna: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    id: 4,
    judul: 'Juara 1 Debat Bahasa Inggris',
    bidang: 'Bahasa & Komunikasi',
    tingkat: 'Provinsi',
    tahun: '2025',
    siswa: 'Siti Rahayu, XII OTKP 1',
    icon: '🎤',
    warna: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    id: 5,
    judul: 'Juara 2 Kejuaraan Sepak Bola',
    bidang: 'Olahraga',
    tingkat: 'Kabupaten',
    tahun: '2025',
    siswa: 'Tim Sepak Bola SMKN 1',
    icon: '⚽',
    warna: 'from-green-400 to-emerald-500',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    id: 6,
    judul: 'Juara 1 Video Kreatif Terbaik',
    bidang: 'Multimedia & Seni',
    tingkat: 'Provinsi',
    tahun: '2026',
    siswa: 'Dewi Sartika, XII MM',
    icon: '🎬',
    warna: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
  },
]

const tingkatBadge: Record<string, string> = {
  Internasional: 'bg-purple-100 text-purple-700 border-purple-200',
  Nasional:      'bg-red-100 text-red-700 border-red-200',
  Provinsi:      'bg-blue-100 text-blue-700 border-blue-200',
  Kabupaten:     'bg-green-100 text-green-700 border-green-200',
}

export default function PrestasiSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-brand-yellow-600 font-bold text-sm uppercase tracking-wider mb-2">Kebanggaan Kami</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy-900 section-accent">
              Prestasi Terbaru
            </h2>
          </div>
          <Link
            href="/informasi/prestasi"
            className="inline-flex items-center gap-2 text-brand-yellow-600 font-semibold text-sm hover:gap-3 transition-all group"
          >
            Semua Prestasi
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {prestasi.map((p, i) => (
            <div
              key={p.id}
              className={`reveal-card opacity-0 translate-y-6 transition-all duration-500 ${p.bg} border ${p.border} rounded-2xl p-5 card-hover`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.warna} flex items-center justify-center text-2xl shadow-md`}>
                  {p.icon}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${tingkatBadge[p.tingkat] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                  Tingkat {p.tingkat}
                </span>
              </div>

              <h3 className="font-extrabold text-base text-brand-navy-900 leading-snug mb-1">
                {p.judul}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{p.bidang}</p>

              <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                <p className="text-xs text-gray-600 font-medium">{p.siswa}</p>
                <span className="text-xs text-gray-400 font-semibold">{p.tahun}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 bg-gradient-to-r from-brand-yellow-400 to-brand-yellow-500 rounded-2xl p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { num: '120+', label: 'Total Prestasi' },
              { num: '45+',  label: 'Tingkat Provinsi' },
              { num: '12+',  label: 'Tingkat Nasional' },
              { num: '3+',   label: 'Tingkat Internasional' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl lg:text-4xl font-extrabold text-brand-navy-900">{s.num}</p>
                <p className="text-brand-navy-700 text-sm font-semibold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal-card.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .section-accent::after {
          content: '';
          display: block;
          width: 48px; height: 4px;
          background: linear-gradient(90deg, #facc15, #ca8a04);
          border-radius: 2px;
          margin-top: 12px;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(0,0,0,.12);
        }
      `}</style>
    </section>
  )
}