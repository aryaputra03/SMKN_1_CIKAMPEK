import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Organisasi & Ekstrakurikuler' }

const organisasi = [
  { nama:'OSIS', deskripsi:'Organisasi Siswa Intra Sekolah sebagai wadah kepemimpinan dan pengembangan karakter siswa.', anggota:45, icon:'🏛️', warna:'bg-blue-500' },
  { nama:'MPK', deskripsi:'Majelis Perwakilan Kelas sebagai badan legislatif siswa di lingkungan sekolah.', anggota:30, icon:'📜', warna:'bg-indigo-500' },
]

const ekskul = [
  { nama:'Pramuka', deskripsi:'Membentuk karakter disiplin, mandiri, dan berjiwa kepemimpinan.', icon:'⛺', kategori:'Wajib', anggota:320, warna:'bg-green-500' },
  { nama:'PMR', deskripsi:'Melatih kepedulian sosial dan kemampuan pertolongan pertama.', icon:'🏥', kategori:'Pilihan', anggota:85, warna:'bg-red-500' },
  { nama:'Paskibra', deskripsi:'Melatih kedisiplinan, baris-berbaris, dan kebanggaan nasional.', icon:'🚩', kategori:'Pilihan', anggota:60, warna:'bg-blue-600' },
  { nama:'Futsal', deskripsi:'Mengembangkan bakat olahraga futsal dan membina jiwa sportivitas.', icon:'⚽', kategori:'Olahraga', anggota:45, warna:'bg-emerald-500' },
  { nama:'English Club', deskripsi:'Meningkatkan kemampuan berbahasa Inggris melalui debat dan percakapan.', icon:'🗣️', kategori:'Akademik', anggota:70, warna:'bg-sky-500' },
  { nama:'Rohis', deskripsi:'Memperkuat iman dan taqwa serta membentuk karakter islami.', icon:'🕌', kategori:'Keagamaan', anggota:150, warna:'bg-teal-500' },
  { nama:'Seni & Budaya', deskripsi:'Mengembangkan bakat seni musik, tari tradisional, dan teater.', icon:'🎭', kategori:'Seni', anggota:90, warna:'bg-purple-500' },
  { nama:'Jurnalistik', deskripsi:'Mengasah kemampuan menulis berita, fotografi, dan produksi media.', icon:'📰', kategori:'Akademik', anggota:40, warna:'bg-orange-500' },
  { nama:'Robotik', deskripsi:'Merancang dan memprogram robot untuk berbagai kompetisi nasional.', icon:'🤖', kategori:'Akademik', anggota:35, warna:'bg-violet-500' },
  { nama:'Basket', deskripsi:'Mengembangkan bakat dan prestasi siswa di bidang olahraga basket.', icon:'🏀', kategori:'Olahraga', anggota:50, warna:'bg-amber-500' },
]

const kategoriColor: Record<string, string> = {
  Wajib:'bg-red-100 text-red-700', Pilihan:'bg-blue-100 text-blue-700',
  Olahraga:'bg-green-100 text-green-700', Akademik:'bg-purple-100 text-purple-700',
  Keagamaan:'bg-teal-100 text-teal-700', Seni:'bg-pink-100 text-pink-700',
}

export default function OrganisasiEkskulPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-brand-yellow-400">Beranda</Link>
            <span>/</span>
            <span className="text-brand-yellow-400">Organisasi & Ekskul</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Organisasi & Ekstrakurikuler</h1>
          <div className="w-12 h-1 bg-brand-yellow-400 rounded-full mt-3" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-14">
        {/* Organisasi */}
        <div>
          <h2 className="text-2xl font-extrabold text-brand-navy-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-brand-yellow-400 rounded-full block" />
            Organisasi Siswa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {organisasi.map((o) => (
              <div key={o.nama} className="bg-brand-navy-50 border border-brand-navy-100 rounded-2xl p-6 flex items-start gap-4">
                <div className={`w-14 h-14 ${o.warna} rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>{o.icon}</div>
                <div>
                  <h3 className="font-extrabold text-lg text-brand-navy-900 mb-1">{o.nama}</h3>
                  <p className="text-gray-600 text-sm mb-2">{o.deskripsi}</p>
                  <p className="text-xs text-brand-navy-600 font-semibold">{o.anggota} Anggota Aktif</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ekskul */}
        <div>
          <h2 className="text-2xl font-extrabold text-brand-navy-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-brand-yellow-400 rounded-full block" />
            Kegiatan Ekstrakurikuler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ekskul.map((e) => (
              <div key={e.nama} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 ${e.warna} rounded-xl flex items-center justify-center text-2xl shadow-sm`}>{e.icon}</div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${kategoriColor[e.kategori]}`}>{e.kategori}</span>
                </div>
                <h3 className="font-extrabold text-sm text-brand-navy-900 mb-1.5">{e.nama}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{e.deskripsi}</p>
                <p className="text-xs text-gray-400 font-semibold">{e.anggota} siswa aktif</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}