'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const guru = [
  { nama: 'Drs. H. Ahmad Syarifudin, M.Pd.', jabatan: 'Kepala Sekolah', bidang: '', foto: null, inisial: 'AS' },
  { nama: 'Hj. Siti Nurjanah, S.Pd., M.M.', jabatan: 'Waka Kurikulum', bidang: 'Matematika', foto: null, inisial: 'SN' },
  { nama: 'Budi Santoso, S.T., M.T.', jabatan: 'Waka Kesiswaan', bidang: 'Teknik Komputer', foto: null, inisial: 'BS' },
  { nama: 'Rina Permatasari, S.E., M.Ak.', jabatan: 'Kaprog AKL', bidang: 'Akuntansi', foto: null, inisial: 'RP' },
  { nama: 'Dedi Kurniawan, S.Kom., M.Cs.', jabatan: 'Kaprog TKJ', bidang: 'Jaringan Komputer', foto: null, inisial: 'DK' },
  { nama: 'Indah Rahayu, S.Pd.', jabatan: 'Guru BK', bidang: 'Bimbingan Konseling', foto: null, inisial: 'IR' },
  { nama: 'Agus Setiawan, S.T.', jabatan: 'Kaprog RPL', bidang: 'Pemrograman', foto: null, inisial: 'AS' },
  { nama: 'Fitri Handayani, S.Pd.', jabatan: 'Guru Produktif', bidang: 'Multimedia', foto: null, inisial: 'FH' },
  { nama: 'Hendra Wijaya, S.Pd.', jabatan: 'Guru PJOK', bidang: 'Pendidikan Jasmani', foto: null, inisial: 'HW' },
  { nama: 'Dewi Kartika, S.Pd., M.Si.', jabatan: 'Guru Normatif', bidang: 'Bahasa Indonesia', foto: null, inisial: 'DK' },
]

const avatarColors = [
  'from-yellow-400 to-amber-500',
  'from-blue-400 to-indigo-500',
  'from-emerald-400 to-green-500',
  'from-rose-400 to-pink-500',
  'from-purple-400 to-violet-500',
  'from-sky-400 to-cyan-500',
  'from-orange-400 to-red-500',
  'from-teal-400 to-green-500',
]

export default function GuruCarousel() {
  const [offset, setOffset] = useState(0)
  const [paused, setPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  // Auto-scroll
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setOffset((prev) => {
        const cardW = 240 + 16 // card width + gap
        const max = guru.length * cardW / 2
        return prev >= max ? 0 : prev + 1
      })
    }, 18)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section className="bg-brand-navy-900 py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="text-brand-yellow-400 font-bold text-sm uppercase tracking-wider mb-2">Tim Pengajar</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Staff & Guru
            </h2>
            <div className="w-12 h-1 bg-brand-yellow-400 rounded-full mt-3" />
          </div>
          <Link
            href="/profil/staff-guru"
            className="inline-flex items-center gap-2 border border-brand-yellow-400 text-brand-yellow-400 hover:bg-brand-yellow-400 hover:text-brand-navy-900 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200"
          >
            Semua Staff & Guru →
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-navy-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-navy-900 to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 w-max"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {/* Duplicate for infinite loop */}
            {[...guru, ...guru].map((g, i) => (
              <div
                key={`${g.nama}-${i}`}
                className="w-56 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-yellow transition-shadow duration-300`}>
                  <span className="text-white font-extrabold text-xl">{g.inisial}</span>
                </div>

                <div className="text-center">
                  <h4 className="font-bold text-white text-sm leading-tight mb-1 line-clamp-2">{g.nama}</h4>
                  <p className="text-brand-yellow-400 text-xs font-semibold mb-1">{g.jabatan}</p>
                  {g.bidang && (
                    <p className="text-gray-400 text-xs">{g.bidang}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats below */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { num: '85+', label: 'Tenaga Pengajar' },
            { num: '92%', label: 'Bergelar S1/S2' },
            { num: '15+', label: 'Tahun Rata-rata Pengalaman' },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-brand-yellow-400 text-2xl lg:text-3xl font-extrabold">{s.num}</p>
              <p className="text-gray-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}