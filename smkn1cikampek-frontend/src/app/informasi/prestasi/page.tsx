import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Prestasi' }

const prestasi = [
  { id:1, judul:'Juara 1 LKS Provinsi Jawa Barat', bidang:'IT Network Systems Administration', tingkat:'Provinsi', tahun:'2026', siswa:'Ahmad Fauzi, XI TKJ 2', icon:'🥇' },
  { id:2, judul:'Juara 2 Olimpiade Matematika Nasional', bidang:'Matematika Terapan', tingkat:'Nasional', tahun:'2025', siswa:'Rini Oktaviani, XII AKL 1', icon:'🥈' },
  { id:3, judul:'Juara 1 Web Design Competition', bidang:'Rekayasa Perangkat Lunak', tingkat:'Kabupaten', tahun:'2025', siswa:'Bagas Pratama, XI RPL 1', icon:'🏆' },
  { id:4, judul:'Juara 1 Debat Bahasa Inggris', bidang:'Bahasa & Komunikasi', tingkat:'Provinsi', tahun:'2025', siswa:'Siti Rahayu, XII OTKP 1', icon:'🎤' },
  { id:5, judul:'Juara 2 Kejuaraan Futsal', bidang:'Olahraga', tingkat:'Kabupaten', tahun:'2025', siswa:'Tim Futsal SMKN 1', icon:'⚽' },
  { id:6, judul:'Juara 1 Video Kreatif Terbaik', bidang:'Multimedia & Seni', tingkat:'Provinsi', tahun:'2026', siswa:'Dewi Sartika, XII MM', icon:'🎬' },
  { id:7, judul:'Juara 3 Olimpiade Sains Terapan', bidang:'Fisika Terapan', tingkat:'Provinsi', tahun:'2024', siswa:'Hendra Wijaya, XI TKJ 1', icon:'🔬' },
  { id:8, judul:'Juara 1 Lomba Akuntansi', bidang:'Akuntansi', tingkat:'Kabupaten', tahun:'2024', siswa:'Nurul Hidayah, XII AKL 2', icon:'📊' },
]

const tingkatStyle: Record<string, string> = {
  Internasional: 'bg-purple-100 text-purple-700 border-purple-200',
  Nasional:      'bg-red-100 text-red-700 border-red-200',
  Provinsi:      'bg-blue-100 text-blue-700 border-blue-200',
  Kabupaten:     'bg-green-100 text-green-700 border-green-200',
}

export default function PrestasiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-brand-yellow-400 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/informasi" className="hover:text-brand-yellow-400 transition-colors">Informasi</Link>
            <span>/</span>
            <span className="text-brand-yellow-400">Prestasi</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Prestasi Sekolah</h1>
          <div className="w-12 h-1 bg-brand-yellow-400 rounded-full mt-3" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[{ num:'120+', label:'Total Prestasi', color:'text-brand-yellow-500' }, { num:'45+', label:'Tingkat Provinsi', color:'text-blue-500' }, { num:'12+', label:'Tingkat Nasional', color:'text-red-500' }, { num:'3+', label:'Tingkat Internasional', color:'text-purple-500' }].map(s => (
            <div key={s.label} className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100">
              <p className={`text-3xl font-extrabold ${s.color}`}>{s.num}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {prestasi.map((p) => (
            <div key={p.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-yellow-50 border border-brand-yellow-200 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{p.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-extrabold text-sm text-brand-navy-900 leading-snug">{p.judul}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border whitespace-nowrap flex-shrink-0 ${tingkatStyle[p.tingkat] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>{p.tingkat}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{p.bidang}</p>
                <div className="flex items-center gap-3">
                  <p className="text-xs text-gray-600">{p.siswa}</p>
                  <span className="text-xs text-brand-yellow-600 font-bold">{p.tahun}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}