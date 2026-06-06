import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Visi & Misi' }

const misi = [
  'Menyelenggarakan pendidikan dan pelatihan kejuruan yang berkualitas, relevan, dan berdaya saing tinggi.',
  'Mengembangkan karakter siswa yang beriman, bertakwa, berintegritas, dan berwawasan kebangsaan.',
  'Membangun kemitraan yang kuat dengan dunia usaha dan dunia industri (DUDI) dalam pengembangan kompetensi lulusan.',
  'Meningkatkan kompetensi pendidik dan tenaga kependidikan secara berkelanjutan.',
  'Menyediakan sarana dan prasarana pembelajaran yang modern dan sesuai standar industri.',
  'Menghasilkan lulusan yang mampu berwirausaha dan berkontribusi pada pembangunan ekonomi bangsa.',
]

const nilaiUtama = [
  { icon:'🌟', judul:'Unggul', deskripsi:'Selalu berupaya mencapai standar tertinggi dalam setiap aspek pendidikan dan kegiatan sekolah.' },
  { icon:'🤝', judul:'Integritas', deskripsi:'Menjunjung tinggi kejujuran, tanggung jawab, dan profesionalisme dalam setiap tindakan.' },
  { icon:'🚀', judul:'Inovatif', deskripsi:'Terbuka terhadap ide baru dan terus berinovasi untuk meningkatkan kualitas pendidikan.' },
  { icon:'🌍', judul:'Berdaya Saing', deskripsi:'Menyiapkan lulusan yang mampu bersaing di tingkat nasional dan internasional.' },
]

export default function VisiMisiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-brand-yellow-400">Beranda</Link>
            <span>/</span>
            <span className="text-brand-yellow-400">Visi & Misi</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Visi & Misi</h1>
          <div className="w-12 h-1 bg-brand-yellow-400 rounded-full mt-3" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">
        {/* Visi */}
        <div>
          <h2 className="text-2xl font-extrabold text-brand-navy-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-brand-yellow-400 rounded-full block" />
            Visi
          </h2>
          <div className="bg-gradient-to-br from-brand-yellow-50 to-amber-50 border border-brand-yellow-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <p className="text-xl lg:text-2xl font-extrabold text-brand-navy-900 leading-relaxed">
              "Mewujudkan SMKN 1 Cikampek sebagai lembaga pendidikan kejuruan yang <span className="text-brand-yellow-600">unggul, berkarakter</span>, dan menghasilkan lulusan yang <span className="text-brand-yellow-600">kompeten dan berdaya saing</span> di tingkat nasional dan internasional."
            </p>
          </div>
        </div>

        {/* Misi */}
        <div>
          <h2 className="text-2xl font-extrabold text-brand-navy-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-brand-yellow-400 rounded-full block" />
            Misi
          </h2>
          <div className="space-y-3">
            {misi.map((m, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 bg-brand-yellow-400 rounded-lg flex items-center justify-center text-brand-navy-900 font-extrabold text-sm flex-shrink-0">{i+1}</div>
                <p className="text-gray-700 text-sm leading-relaxed mt-1">{m}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nilai Utama */}
        <div>
          <h2 className="text-2xl font-extrabold text-brand-navy-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-brand-yellow-400 rounded-full block" />
            Nilai Utama
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nilaiUtama.map((n) => (
              <div key={n.judul} className="bg-brand-navy-900 rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">{n.icon}</div>
                <h3 className="font-extrabold text-brand-yellow-400 text-lg mb-2">{n.judul}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{n.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}