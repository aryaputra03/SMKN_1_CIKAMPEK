import Link from 'next/link'

const navCols = [
  {
    title: 'Profil Sekolah',
    links: [
      { label: 'Visi & Misi', href: '/profil/visi-misi' },
      { label: 'Fasilitas', href: '/profil/fasilitas' },
      { label: 'Jurusan', href: '/profil/jurusan' },
      { label: 'Struktur Organisasi', href: '/profil/struktur-organisasi' },
      { label: 'Staff & Guru', href: '/profil/staff-guru' },
    ],
  },
  {
    title: 'Informasi',
    links: [
      { label: 'Berita Terbaru', href: '/informasi/berita' },
      { label: 'Prestasi', href: '/informasi/prestasi' },
      { label: 'Organisasi & Ekskul', href: '/informasi/organisasi-ekskul' },
      { label: 'Kurikulum', href: '/kurikulum' },
    ],
  },
  {
    title: 'Keuangan',
    links: [
      { label: 'Dana BOS', href: '/keuangan/bos' },
      { label: 'APBD', href: '/keuangan/apbd' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy-900 text-white">
      {/* Yellow top bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-yellow-400 via-brand-yellow-500 to-brand-yellow-400" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo & About — 2 cols */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-brand-yellow-400 flex items-center justify-center shadow-yellow">
                <span className="text-brand-navy-900 font-extrabold text-xs text-center leading-tight">SMK<br/>N1</span>
              </div>
              <div>
                <p className="font-extrabold text-white text-base leading-none">SMK Negeri 1</p>
                <p className="font-extrabold text-white text-base">Cikampek</p>
                <p className="text-brand-yellow-400 text-[10px] font-semibold uppercase tracking-wider mt-0.5">Kabupaten Karawang</p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Mencetak tenaga kerja profesional yang unggul, berkarakter, dan berdaya saing tinggi dalam era industri global.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-brand-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Jl. Jenderal Ahmad Yani No.1, Cikampek, Kabupaten Karawang, Jawa Barat 41373</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-brand-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>(0267) 123456</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-brand-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>smkn1cikampek@disdik.jabarprov.go.id</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { label: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'YouTube',   href: '#', icon: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
                { label: 'Facebook',  href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 bg-white/10 hover:bg-brand-yellow-400 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-brand-navy-900" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-brand-yellow-400 text-sm uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-yellow-400 text-sm transition-colors duration-150 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-brand-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Maps */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src="https://maps.google.com/maps?q=SMKN+1+Cikampek+Karawang&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="200"
            className="block border-0 grayscale opacity-70"
            loading="lazy"
            title="Peta Lokasi SMKN 1 Cikampek"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2026 SMKN 1 Cikampek. Hak Cipta Dilindungi.</p>
          <p>Dikelola oleh Tim IT SMKN 1 Cikampek</p>
        </div>
      </div>
    </footer>
  )
}