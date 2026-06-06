import Link from 'next/link'

const footerLinks = [
  {
    title: 'Profil Sekolah',
    links: [
      { label: 'Visi & Misi',         href: '/profil/visi-misi' },
      { label: 'Fasilitas',           href: '/profil/fasilitas' },
      { label: 'Jurusan',             href: '/profil/jurusan' },
      { label: 'Struktur Organisasi', href: '/profil/struktur-organisasi' },
      { label: 'Staff & Guru',        href: '/profil/staff-guru' },
    ],
  },
  {
    title: 'Informasi',
    links: [
      { label: 'Berita',                       href: '/informasi/berita' },
      { label: 'Organisasi & Ekskul',          href: '/informasi/organisasi-ekskul' },
      { label: 'Prestasi',                     href: '/informasi/prestasi' },
      { label: 'Dana BOS',                     href: '/keuangan/bos' },
      { label: 'APBD',                         href: '/keuangan/apbd' },
      { label: 'Kurikulum',                    href: '/kurikulum' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy-900 text-white">

      {/* ── CTA Strip ── */}
      <div className="bg-brand-yellow-500">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-bold text-brand-navy-900 text-lg leading-tight">Bergabunglah Bersama Kami</p>
            <p className="text-brand-navy-800 text-sm">Penerimaan Peserta Didik Baru SMKN 1 Cikampek</p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 bg-brand-navy-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-navy-700 transition-colors shadow-md"
          >
            Info PPDB →
          </a>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-brand-yellow-400 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-navy-900 font-extrabold text-xs text-center leading-tight">SMK<br/>N1</span>
              </div>
              <div>
                <p className="font-extrabold text-white leading-tight">SMK Negeri 1</p>
                <p className="font-extrabold text-white">Cikampek</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Mencetak tenaga kerja terampil, profesional, dan berkarakter untuk menghadapi tantangan dunia industri.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'YouTube', path: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
                { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-yellow-500 flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-navy-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-brand-yellow-400 transition-colors duration-150 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-yellow-500 flex-shrink-0"/>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Map */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Kontak & Lokasi</h4>
            <div className="space-y-3 mb-5">
              {[
                { icon: '📍', text: 'Jl. Jenderal Ahmad Yani No.1, Cikampek, Karawang 41373' },
                { icon: '📞', text: '(0267) 123456' },
                { icon: '✉️', text: 'smkn1cikampek@disdik.jabarprov.go.id' },
                { icon: '🕐', text: 'Senin–Jumat, 07.00–15.00 WIB' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <span className="text-base flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="text-gray-400 text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
            {/* Google Maps embed placeholder */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-32">
              <iframe
                src="https://maps.google.com/maps?q=SMKN+1+Cikampek&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SMKN 1 Cikampek"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {year} SMKN 1 Cikampek. Hak cipta dilindungi undang-undang.</p>
          <p>Dikembangkan oleh Tim IT SMKN 1 Cikampek</p>
        </div>
      </div>
    </footer>
  )
}