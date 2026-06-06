import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Berita' }

const berita = [
  { id:1, slug:'kunjungan-industri-2026', judul:'Kunjungan Industri Siswa Jurusan TKJ ke PT Telkom Indonesia', ringkasan:'Ratusan siswa jurusan Teknik Komputer dan Jaringan melakukan kunjungan industri ke kantor pusat PT Telkom untuk menambah wawasan dunia kerja.', kategori:'Kegiatan', tanggal:'5 Jun 2026', foto:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80' },
  { id:2, slug:'juara-lks-2026', judul:'Siswa SMKN 1 Cikampek Raih Juara 1 LKS Provinsi Jawa Barat', ringkasan:'Tim kami berhasil meraih juara pertama dalam Lomba Kompetensi Siswa tingkat provinsi Jawa Barat bidang IT Network Systems Administration.', kategori:'Prestasi', tanggal:'2 Jun 2026', foto:'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80' },
  { id:3, slug:'ppdb-2026', judul:'Informasi Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027', ringkasan:'SMKN 1 Cikampek membuka pendaftaran peserta didik baru. Tersedia jalur reguler, prestasi, dan afirmasi.', kategori:'Pengumuman', tanggal:'1 Jun 2026', foto:'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80' },
  { id:4, slug:'praktek-kerja-industri', judul:'Program Praktek Kerja Industri Angkatan 2025 Resmi Dimulai', ringkasan:'Sebanyak 320 siswa kelas XI mulai menjalankan program PRAKERIN di berbagai perusahaan mitra selama 3 bulan.', kategori:'Kegiatan', tanggal:'28 Mei 2026', foto:'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80' },
  { id:5, slug:'wisuda-praktik-2026', judul:'Upacara Wisuda Praktik Siswa Kelas XII Berjalan Hikmat', ringkasan:'Ratusan siswa kelas XII mengikuti upacara wisuda praktik sebagai tanda telah menyelesaikan seluruh rangkaian program kejuruan.', kategori:'Kegiatan', tanggal:'20 Mei 2026', foto:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80' },
  { id:6, slug:'mou-industri-2026', judul:'SMKN 1 Cikampek Tanda Tangani MoU dengan 12 Perusahaan Baru', ringkasan:'Sebagai upaya memperkuat link and match, sekolah menandatangani perjanjian kerjasama dengan 12 perusahaan industri baru.', kategori:'Informasi', tanggal:'15 Mei 2026', foto:'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80' },
]

const kategoriColor: Record<string, string> = {
  Kegiatan:    'bg-blue-100 text-blue-700',
  Prestasi:    'bg-yellow-100 text-yellow-700',
  Pengumuman:  'bg-red-100 text-red-700',
  Informasi:   'bg-green-100 text-green-700',
}

export default function BeritaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-brand-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-brand-yellow-400 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-brand-yellow-400">Berita</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Berita Terbaru</h1>
          <div className="w-12 h-1 bg-brand-yellow-400 rounded-full mt-3" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Semua', 'Kegiatan', 'Prestasi', 'Pengumuman', 'Informasi'].map((k) => (
            <button key={k} className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${k === 'Semua' ? 'bg-brand-yellow-400 border-brand-yellow-400 text-brand-navy-900' : 'border-gray-200 text-gray-600 hover:border-brand-yellow-400 hover:text-brand-yellow-600'}`}>
              {k}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {berita.map((b) => (
            <Link key={b.id} href={`/informasi/berita/${b.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${b.foto}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${kategoriColor[b.kategori] || 'bg-gray-100 text-gray-700'}`}>{b.kategori}</span>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{b.tanggal}</p>
                <h3 className="font-extrabold text-base text-brand-navy-900 group-hover:text-brand-yellow-600 transition-colors leading-snug mb-2 line-clamp-2">{b.judul}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{b.ringkasan}</p>
                <div className="mt-4 flex items-center gap-1 text-brand-yellow-600 text-xs font-semibold">
                  Baca Selengkapnya
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}