import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Program Keahlian' }

const jurusan = [
  { slug:'tkj', nama:'Teknik Komputer & Jaringan', singkatan:'TKJ', deskripsi:'Membangun dan mengelola infrastruktur jaringan komputer modern. Lulusan siap bekerja sebagai teknisi jaringan, administrator sistem, dan network engineer.', icon:'🖥️', warna:'from-blue-500 to-blue-700', bg:'bg-blue-50', border:'border-blue-200', text:'text-blue-700', kelas:12, siswa:340 },
  { slug:'rpl', nama:'Rekayasa Perangkat Lunak', singkatan:'RPL', deskripsi:'Merancang dan mengembangkan aplikasi perangkat lunak profesional. Lulusan siap menjadi programmer, web developer, dan software engineer.', icon:'💻', warna:'from-purple-500 to-purple-700', bg:'bg-purple-50', border:'border-purple-200', text:'text-purple-700', kelas:10, siswa:280 },
  { slug:'akl', nama:'Akuntansi & Keuangan Lembaga', singkatan:'AKL', deskripsi:'Mengelola keuangan dan akuntansi perusahaan secara profesional. Lulusan siap bekerja sebagai akuntan, kasir, dan staf keuangan.', icon:'📊', warna:'from-emerald-500 to-emerald-700', bg:'bg-emerald-50', border:'border-emerald-200', text:'text-emerald-700', kelas:10, siswa:290 },
  { slug:'otkp', nama:'Otomatisasi Tata Kelola Perkantoran', singkatan:'OTKP', deskripsi:'Mengelola administrasi dan tata usaha perkantoran modern. Lulusan siap bekerja sebagai sekretaris, administrator, dan staf perkantoran.', icon:'🗂️', warna:'from-orange-500 to-orange-700', bg:'bg-orange-50', border:'border-orange-200', text:'text-orange-700', kelas:8, siswa:220 },
  { slug:'bdp', nama:'Bisnis Daring & Pemasaran', singkatan:'BDP', deskripsi:'Strategi pemasaran digital dan pengelolaan bisnis online. Lulusan siap menjadi digital marketer, sales, dan entrepreneur.', icon:'🛒', warna:'from-rose-500 to-rose-700', bg:'bg-rose-50', border:'border-rose-200', text:'text-rose-700', kelas:8, siswa:210 },
  { slug:'tbsm', nama:'Teknik & Bisnis Sepeda Motor', singkatan:'TBSM', deskripsi:'Perawatan dan perbaikan kendaraan roda dua sesuai standar industri. Lulusan siap bekerja di bengkel resmi dan industri otomotif.', icon:'🏍️', warna:'from-red-500 to-red-700', bg:'bg-red-50', border:'border-red-200', text:'text-red-700', kelas:8, siswa:200 },
  { slug:'multimedia', nama:'Multimedia', singkatan:'MM', deskripsi:'Produksi konten kreatif: desain grafis, video, dan animasi. Lulusan siap bekerja sebagai desainer, video editor, dan content creator.', icon:'🎨', warna:'from-pink-500 to-pink-700', bg:'bg-pink-50', border:'border-pink-200', text:'text-pink-700', kelas:6, siswa:168 },
  { slug:'tav', nama:'Teknik Audio Video', singkatan:'TAV', deskripsi:'Instalasi dan perawatan perangkat audio visual elektronik. Lulusan siap bekerja di industri elektronik dan broadcasting.', icon:'📡', warna:'from-teal-500 to-teal-700', bg:'bg-teal-50', border:'border-teal-200', text:'text-teal-700', kelas:6, siswa:148 },
]

export default function JurusanPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-brand-yellow-400">Beranda</Link>
            <span>/</span>
            <Link href="/profil" className="hover:text-brand-yellow-400">Profil</Link>
            <span>/</span>
            <span className="text-brand-yellow-400">Jurusan</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Program Keahlian</h1>
          <div className="w-12 h-1 bg-brand-yellow-400 rounded-full mt-3" />
          <p className="text-gray-400 mt-3 text-sm">8 program keahlian relevan dengan kebutuhan industri dan dunia kerja terkini</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jurusan.map((j) => (
            <Link key={j.slug} href={`/profil/jurusan/${j.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex">
              {/* Color strip */}
              <div className={`w-2 bg-gradient-to-b ${j.warna} flex-shrink-0`} />
              <div className="flex-1 p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${j.bg} border ${j.border} rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}>{j.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${j.text} ${j.bg}`}>{j.singkatan}</span>
                    </div>
                    <h3 className={`font-extrabold text-base text-brand-navy-900 group-hover:${j.text} transition-colors leading-snug mb-2`}>{j.nama}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{j.deskripsi}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xs text-gray-400">{j.kelas} Rombel</span>
                      <span className="text-xs text-gray-400">{j.siswa} Siswa</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}