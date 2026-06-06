import Link from 'next/link'
import Image from 'next/image'

const berita = [
  {
    id: 1,
    slug: 'kunjungan-industri-2026',
    judul: 'Kunjungan Industri Siswa Jurusan TKJ ke PT Telkom Indonesia',
    ringkasan: 'Ratusan siswa jurusan Teknik Komputer dan Jaringan melakukan kunjungan industri ke kantor pusat PT Telkom untuk menambah wawasan dunia kerja.',
    kategori: 'Kegiatan',
    tanggal: '5 Jun 2026',
    foto: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  },
  {
    id: 2,
    slug: 'juara-lks-2026',
    judul: 'Siswa SMKN 1 Cikampek Raih Juara 1 LKS Provinsi Jawa Barat',
    ringkasan: 'Bangga! Tim kami berhasil meraih juara pertama dalam Lomba Kompetensi Siswa tingkat provinsi Jawa Barat bidang IT Network Systems Administration.',
    kategori: 'Prestasi',
    tanggal: '2 Jun 2026',
    foto: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80',
  },
  {
    id: 3,
    slug: 'ppdb-2026',
    judul: 'Informasi Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027',
    ringkasan: 'SMKN 1 Cikampek membuka pendaftaran peserta didik baru. Tersedia jalur reguler, prestasi, dan afirmasi. Simak info lengkapnya di sini.',
    kategori: 'Pengumuman',
    tanggal: '1 Jun 2026',
    foto: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
  },
  {
    id: 4,
    slug: 'praktek-kerja-industri',
    judul: 'Program Praktek Kerja Industri Angkatan 2025 Resmi Dimulai',
    ringkasan: 'Sebanyak 320 siswa kelas XI mulai menjalankan program PRAKERIN di berbagai perusahaan mitra selama 3 bulan ke depan.',
    kategori: 'Kegiatan',
    tanggal: '28 Mei 2026',
    foto: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
  },
]

const kategoriColor: Record<string, string> = {
  Kegiatan:    'bg-blue-100 text-blue-700',
  Prestasi:    'bg-yellow-100 text-yellow-700',
  Pengumuman:  'bg-red-100 text-red-700',
  Informasi:   'bg-green-100 text-green-700',
}

export default function BeritaTerbaru() {
  const [featured, ...rest] = berita

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-brand-yellow-600 font-bold text-sm uppercase tracking-wider mb-2">Terkini</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy-900 section-accent">
              Berita Terbaru
            </h2>
          </div>
          <Link
            href="/informasi/berita"
            className="hidden sm:flex items-center gap-2 text-brand-yellow-600 font-semibold text-sm hover:gap-3 transition-all"
          >
            Semua Berita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Featured */}
          <Link href={`/informasi/berita/${featured.slug}`} className="lg:col-span-2 group card-hover bg-white rounded-3xl overflow-hidden shadow-card block">
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${featured.foto}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${kategoriColor[featured.kategori] || 'bg-gray-100 text-gray-700'}`}>
                {featured.kategori}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-400 mb-2">{featured.tanggal}</p>
              <h3 className="font-extrabold text-xl text-brand-navy-900 group-hover:text-brand-yellow-600 transition-colors leading-snug mb-2">
                {featured.judul}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{featured.ringkasan}</p>
            </div>
          </Link>

          {/* Side list */}
          <div className="flex flex-col gap-4">
            {rest.map((item) => (
              <Link key={item.id} href={`/informasi/berita/${item.slug}`} className="group card-hover bg-white rounded-2xl overflow-hidden shadow-card flex gap-4 p-4">
                <div
                  className="w-24 h-20 flex-shrink-0 rounded-xl bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.foto}')` }}
                />
                <div className="flex-1 min-w-0">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5 ${kategoriColor[item.kategori] || 'bg-gray-100 text-gray-700'}`}>
                    {item.kategori}
                  </span>
                  <h4 className="font-bold text-sm text-brand-navy-900 group-hover:text-brand-yellow-600 transition-colors leading-snug line-clamp-2">
                    {item.judul}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1.5">{item.tanggal}</p>
                </div>
              </Link>
            ))}
            <Link
              href="/informasi/berita"
              className="sm:hidden flex items-center justify-center gap-2 text-brand-yellow-600 font-semibold text-sm py-3 border-2 border-brand-yellow-400 rounded-xl hover:bg-brand-yellow-50 transition-colors"
            >
              Lihat Semua Berita →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}