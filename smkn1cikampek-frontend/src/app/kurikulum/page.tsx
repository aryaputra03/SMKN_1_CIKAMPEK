import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Kurikulum' }

const mapelKejuruan = [
  { kode:'C1', nama:'Dasar Kejuruan', mapel:['Simulasi dan Komunikasi Digital', 'Fisika', 'Kimia'] },
  { kode:'C2', nama:'Dasar Program Keahlian', mapel:['Sistem Komputer', 'Komputer dan Jaringan Dasar', 'Pemrograman Dasar'] },
  { kode:'C3', nama:'Kompetensi Keahlian', mapel:['Administrasi Sistem Jaringan', 'Teknologi Layanan Jaringan', 'Produk Kreatif & Kewirausahaan'] },
]

export default function KurikulumPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-brand-yellow-400">Beranda</Link>
            <span>/</span>
            <span className="text-brand-yellow-400">Kurikulum</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Kurikulum</h1>
          <div className="w-12 h-1 bg-brand-yellow-400 rounded-full mt-3" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Info */}
        <div className="bg-brand-yellow-50 border border-brand-yellow-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📋</div>
            <div>
              <h2 className="font-extrabold text-brand-navy-900 text-lg mb-2">Kurikulum Merdeka</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                SMKN 1 Cikampek mengimplementasikan Kurikulum Merdeka sesuai dengan kebijakan Kemendikbudristek. Kurikulum ini dirancang untuk memberikan fleksibilitas kepada sekolah dan siswa dalam proses pembelajaran, dengan fokus pada pengembangan kompetensi dan karakter.
              </p>
            </div>
          </div>
        </div>

        {/* Struktur Kurikulum */}
        <div>
          <h2 className="text-xl font-extrabold text-brand-navy-900 mb-5 flex items-center gap-3">
            <span className="w-1 h-6 bg-brand-yellow-400 rounded-full block" />
            Struktur Mata Pelajaran Kejuruan (Contoh: TKJ)
          </h2>
          <div className="space-y-4">
            {mapelKejuruan.map((m) => (
              <div key={m.kode} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-brand-navy-900 text-brand-yellow-400 rounded-xl flex items-center justify-center text-xs font-extrabold">{m.kode}</span>
                  <h3 className="font-extrabold text-brand-navy-900">{m.nama}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {m.mapel.map((mp) => (
                    <span key={mp} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-700 font-medium">{mp}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External link */}
        <div className="bg-brand-navy-900 rounded-2xl p-6 text-center">
          <p className="text-white font-bold mb-2">Dokumen Kurikulum Lengkap</p>
          <p className="text-gray-400 text-sm mb-4">Akses dokumen kurikulum resmi melalui platform DIKNAS</p>
          <a
            href="https://kurikulum.kemdikbud.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-navy-900 font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Buka Portal Kurikulum Merdeka
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </div>
    </div>
  )
}