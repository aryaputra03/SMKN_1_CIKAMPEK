import Link from 'next/link'

const jurusan = [
  {
    slug: 'tkj',
    nama: 'Teknik Komputer & Jaringan',
    singkatan: 'TKJ',
    deskripsi: 'Membangun dan mengelola infrastruktur jaringan komputer modern.',
    icon: '🖥️',
    warna: 'from-blue-500 to-blue-700',
    warnaLight: 'bg-blue-50',
    warnaText: 'text-blue-700',
    warnaBorder: 'border-blue-200',
  },
  {
    slug: 'rpl',
    nama: 'Rekayasa Perangkat Lunak',
    singkatan: 'RPL',
    deskripsi: 'Merancang dan mengembangkan aplikasi perangkat lunak profesional.',
    icon: '💻',
    warna: 'from-purple-500 to-purple-700',
    warnaLight: 'bg-purple-50',
    warnaText: 'text-purple-700',
    warnaBorder: 'border-purple-200',
  },
  {
    slug: 'akl',
    nama: 'Akuntansi & Keuangan Lembaga',
    singkatan: 'AKL',
    deskripsi: 'Mengelola keuangan dan akuntansi perusahaan secara profesional.',
    icon: '📊',
    warna: 'from-emerald-500 to-emerald-700',
    warnaLight: 'bg-emerald-50',
    warnaText: 'text-emerald-700',
    warnaBorder: 'border-emerald-200',
  },
  {
    slug: 'otkp',
    nama: 'Otomatisasi Tata Kelola Perkantoran',
    singkatan: 'OTKP',
    deskripsi: 'Mengelola administrasi dan tata usaha perkantoran modern.',
    icon: '🗂️',
    warna: 'from-orange-500 to-orange-700',
    warnaLight: 'bg-orange-50',
    warnaText: 'text-orange-700',
    warnaBorder: 'border-orange-200',
  },
  {
    slug: 'bdp',
    nama: 'Bisnis Daring & Pemasaran',
    singkatan: 'BDP',
    deskripsi: 'Strategi pemasaran digital dan pengelolaan bisnis online.',
    icon: '🛒',
    warna: 'from-rose-500 to-rose-700',
    warnaLight: 'bg-rose-50',
    warnaText: 'text-rose-700',
    warnaBorder: 'border-rose-200',
  },
  {
    slug: 'tbsm',
    nama: 'Teknik & Bisnis Sepeda Motor',
    singkatan: 'TBSM',
    deskripsi: 'Perawatan dan perbaikan kendaraan roda dua sesuai standar industri.',
    icon: '🏍️',
    warna: 'from-red-500 to-red-700',
    warnaLight: 'bg-red-50',
    warnaText: 'text-red-700',
    warnaBorder: 'border-red-200',
  },
  {
    slug: 'multimedia',
    nama: 'Multimedia',
    singkatan: 'MM',
    deskripsi: 'Produksi konten kreatif: desain grafis, video, dan animasi.',
    icon: '🎨',
    warna: 'from-pink-500 to-pink-700',
    warnaLight: 'bg-pink-50',
    warnaText: 'text-pink-700',
    warnaBorder: 'border-pink-200',
  },
  {
    slug: 'tav',
    nama: 'Teknik Audio Video',
    singkatan: 'TAV',
    deskripsi: 'Instalasi dan perawatan perangkat audio visual elektronik.',
    icon: '📡',
    warna: 'from-teal-500 to-teal-700',
    warnaLight: 'bg-teal-50',
    warnaText: 'text-teal-700',
    warnaBorder: 'border-teal-200',
  },
]

export default function JurusanSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-yellow-600 font-bold text-sm uppercase tracking-wider mb-2">Program Keahlian</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy-900 mb-3">
            Jurusan Pilihan
          </h2>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-brand-yellow-400 rounded-full" />
            <div className="w-3 h-1 bg-brand-yellow-200 rounded-full ml-1" />
          </div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            8 program keahlian yang relevan dengan kebutuhan industri dan dunia kerja terkini
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {jurusan.map((j, i) => (
            <Link
              key={j.slug}
              href={`/profil/jurusan/${j.slug}`}
              className={`group relative ${j.warnaLight} border ${j.warnaBorder} rounded-2xl p-6 card-hover transition-all duration-300 hover:shadow-card-hover overflow-hidden`}
            >
              {/* Background accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${j.warna} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}/>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {j.icon}
                </div>

                {/* Badge */}
                <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${j.warnaText} bg-white/70 group-hover:bg-white/20 group-hover:text-white transition-all duration-300 mb-2`}>
                  {j.singkatan}
                </span>

                {/* Name */}
                <h3 className={`font-extrabold text-sm leading-snug ${j.warnaText} group-hover:text-white transition-colors duration-300 mb-2`}>
                  {j.nama}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 group-hover:text-white/80 text-xs leading-relaxed transition-colors duration-300 line-clamp-2">
                  {j.deskripsi}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 text-white transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                  Selengkapnya <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/profil/jurusan"
            className="inline-flex items-center gap-2 bg-brand-navy-900 hover:bg-brand-navy-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Lihat Semua Jurusan
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}