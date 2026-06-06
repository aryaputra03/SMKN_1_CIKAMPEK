import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Staff & Guru' }

const guru = [
  { nama:'Drs. H. Ahmad Syarifudin, M.Pd.', jabatan:'Kepala Sekolah', bidang:'', inisial:'AS', warna:'from-yellow-400 to-amber-500' },
  { nama:'Hj. Siti Nurjanah, S.Pd., M.M.', jabatan:'Waka Kurikulum', bidang:'Matematika', inisial:'SN', warna:'from-blue-400 to-indigo-500' },
  { nama:'Budi Santoso, S.T., M.T.', jabatan:'Waka Kesiswaan', bidang:'Teknik Komputer', inisial:'BS', warna:'from-emerald-400 to-green-500' },
  { nama:'Rina Permatasari, S.E., M.Ak.', jabatan:'Waka Humas', bidang:'Akuntansi', inisial:'RP', warna:'from-rose-400 to-pink-500' },
  { nama:'Dedi Kurniawan, S.Kom., M.Cs.', jabatan:'Kaprog TKJ', bidang:'Jaringan Komputer', inisial:'DK', warna:'from-purple-400 to-violet-500' },
  { nama:'Agus Setiawan, S.T.', jabatan:'Kaprog RPL', bidang:'Pemrograman', inisial:'AS', warna:'from-sky-400 to-cyan-500' },
  { nama:'Fitri Handayani, S.Pd.', jabatan:'Kaprog Multimedia', bidang:'Desain Grafis', inisial:'FH', warna:'from-orange-400 to-red-500' },
  { nama:'Hendra Wijaya, S.Pd.', jabatan:'Guru PJOK', bidang:'Pendidikan Jasmani', inisial:'HW', warna:'from-teal-400 to-green-500' },
  { nama:'Dewi Kartika, S.Pd., M.Si.', jabatan:'Guru Normatif', bidang:'Bahasa Indonesia', inisial:'DK', warna:'from-amber-400 to-yellow-500' },
  { nama:'Indah Rahayu, S.Pd.', jabatan:'Guru BK', bidang:'Bimbingan Konseling', inisial:'IR', warna:'from-pink-400 to-rose-500' },
  { nama:'Wahyu Pratama, S.Pd.', jabatan:'Guru Produktif', bidang:'TKJ', inisial:'WP', warna:'from-blue-400 to-blue-600' },
  { nama:'Sri Mulyani, S.E., M.Si.', jabatan:'Kaprog AKL', bidang:'Akuntansi', inisial:'SM', warna:'from-emerald-400 to-teal-500' },
]

export default function StaffGuruPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-brand-yellow-400">Beranda</Link>
            <span>/</span>
            <span className="text-brand-yellow-400">Staff & Guru</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Staff & Guru</h1>
          <div className="w-12 h-1 bg-brand-yellow-400 rounded-full mt-3" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {guru.map((g, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${g.warna} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                <span className="text-white font-extrabold text-2xl">{g.inisial}</span>
              </div>
              <h3 className="font-bold text-sm text-brand-navy-900 leading-snug mb-1 line-clamp-2">{g.nama}</h3>
              <p className="text-brand-yellow-600 text-xs font-semibold mb-1">{g.jabatan}</p>
              {g.bidang && <p className="text-gray-400 text-xs">{g.bidang}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}