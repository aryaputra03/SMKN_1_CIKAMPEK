import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Dana BOS' }

const dataBOS = [
  { no:1, uraian:'Pengembangan Kompetensi Guru dan Tenaga Kependidikan', pagu:45000000, realisasi:43250000 },
  { no:2, uraian:'Penerimaan Peserta Didik Baru (PPDB)', pagu:12000000, realisasi:11800000 },
  { no:3, uraian:'Pembelajaran dan Ekstrakurikuler', pagu:85000000, realisasi:82500000 },
  { no:4, uraian:'Pembiayaan Asesmen dan Evaluasi Pembelajaran', pagu:30000000, realisasi:29100000 },
  { no:5, uraian:'Pemeliharaan Sarana dan Prasarana', pagu:60000000, realisasi:58750000 },
  { no:6, uraian:'Pembayaran Honorarium', pagu:120000000, realisasi:120000000 },
  { no:7, uraian:'Penyediaan Alat Multi Media Pembelajaran', pagu:40000000, realisasi:39200000 },
  { no:8, uraian:'Pengelolaan Sekolah', pagu:18000000, realisasi:17600000 },
]

const total = dataBOS.reduce((acc, d) => ({ pagu: acc.pagu + d.pagu, realisasi: acc.realisasi + d.realisasi }), { pagu: 0, realisasi: 0 })

export default function BosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-brand-yellow-400">Beranda</Link>
            <span>/</span>
            <span className="text-brand-yellow-400">Dana BOS</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">Transparansi Dana BOS</h1>
          <div className="w-12 h-1 bg-brand-yellow-400 rounded-full mt-3" />
          <p className="text-gray-400 text-sm mt-3">Laporan penggunaan Dana Bantuan Operasional Sekolah (BOS) Tahun 2026</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-brand-yellow-50 border border-brand-yellow-200 rounded-2xl p-5 text-center">
            <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">Total Pagu</p>
            <p className="text-2xl font-extrabold text-brand-navy-900">Rp {(total.pagu/1000000).toFixed(0)} Juta</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
            <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">Total Realisasi</p>
            <p className="text-2xl font-extrabold text-green-700">Rp {(total.realisasi/1000000).toFixed(1)} Juta</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
            <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">Persentase Serapan</p>
            <p className="text-2xl font-extrabold text-blue-700">{((total.realisasi/total.pagu)*100).toFixed(1)}%</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-navy-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold w-10">No</th>
                  <th className="px-4 py-3 text-left text-xs font-bold">Uraian Kegiatan</th>
                  <th className="px-4 py-3 text-right text-xs font-bold">Pagu (Rp)</th>
                  <th className="px-4 py-3 text-right text-xs font-bold">Realisasi (Rp)</th>
                  <th className="px-4 py-3 text-center text-xs font-bold">Serapan</th>
                </tr>
              </thead>
              <tbody>
                {dataBOS.map((d, i) => {
                  const pct = ((d.realisasi/d.pagu)*100).toFixed(0)
                  return (
                    <tr key={d.no} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-gray-500 text-center">{d.no}</td>
                      <td className="px-4 py-3 text-gray-700">{d.uraian}</td>
                      <td className="px-4 py-3 text-right text-gray-700 font-medium">{d.pagu.toLocaleString('id-ID')}</td>
                      <td className="px-4 py-3 text-right text-gray-700 font-medium">{d.realisasi.toLocaleString('id-ID')}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                            <div className="bg-brand-yellow-400 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-xs font-bold text-gray-600 w-10 text-right">{pct}%</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot className="bg-brand-yellow-50 border-t-2 border-brand-yellow-400">
                <tr>
                  <td colSpan={2} className="px-4 py-3 font-extrabold text-brand-navy-900">TOTAL</td>
                  <td className="px-4 py-3 text-right font-extrabold text-brand-navy-900">{total.pagu.toLocaleString('id-ID')}</td>
                  <td className="px-4 py-3 text-right font-extrabold text-brand-navy-900">{total.realisasi.toLocaleString('id-ID')}</td>
                  <td className="px-4 py-3 text-center font-extrabold text-brand-yellow-600">{((total.realisasi/total.pagu)*100).toFixed(1)}%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">Data per Juni 2026 · Sumber: Administrasi Keuangan SMKN 1 Cikampek</p>
      </div>
    </div>
  )
}