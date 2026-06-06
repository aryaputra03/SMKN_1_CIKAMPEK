'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

/* ─── Nav Data ─── */
const NAV = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Profil Sekolah',
    href: '/profil',
    children: [
      { label: 'Visi & Misi',           href: '/profil/visi-misi',           icon: '🎯' },
      { label: 'Fasilitas',             href: '/profil/fasilitas',            icon: '🏫' },
      { label: 'Jurusan',               href: '/profil/jurusan',              icon: '📚' },
      { label: 'Struktur Organisasi',   href: '/profil/struktur-organisasi',  icon: '🏛️' },
      { label: 'Staff & Guru',          href: '/profil/staff-guru',           icon: '👩‍🏫' },
    ],
  },
  {
    label: 'Keuangan',
    href: '/keuangan',
    children: [
      { label: 'Dana BOS', href: '/keuangan/bos',  icon: '💰' },
      { label: 'APBD',     href: '/keuangan/apbd', icon: '📊' },
    ],
  },
  {
    label: 'Informasi',
    href: '/informasi',
    children: [
      { label: 'Berita',                    href: '/informasi/berita',           icon: '📰' },
      { label: 'Organisasi & Ekstrakurikuler', href: '/informasi/organisasi-ekskul', icon: '⚽' },
      { label: 'Prestasi',                  href: '/informasi/prestasi',         icon: '🏆' },
    ],
  },
  { label: 'Kurikulum', href: '/kurikulum' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  /* scroll shadow */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* close mobile on route change */
  useEffect(() => { setMobileOpen(false); setOpenDropdown(null) }, [pathname])

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg bg-white' : 'bg-white'
      }`}
    >
      {/* ── Top Bar ── */}
      <div className="bg-brand-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-brand-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (0267) 123456
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-brand-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              smkn1cikampek@disdik.jabarprov.go.id
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-gray-300">Jl. Jenderal Ahmad Yani No.1, Cikampek, Karawang</span>
            {/* Socials */}
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Instagram" className="hover:text-brand-yellow-400 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-brand-yellow-400 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                {/* Logo placeholder - ganti dengan Image komponen saat asset tersedia */}
                <div className="w-12 h-12 rounded-full bg-brand-yellow-400 flex items-center justify-center shadow-md group-hover:shadow-yellow transition-shadow duration-300">
                  <span className="text-brand-navy-900 font-extrabold text-xs leading-tight text-center">SMK<br/>N1</span>
                </div>
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-brand-navy-900 text-base tracking-tight leading-none">
                  SMK Negeri 1
                </p>
                <p className="font-extrabold text-brand-navy-900 text-base tracking-tight">
                  Cikampek
                </p>
                <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-0.5">
                  Kabupaten Karawang
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => (
                <div key={item.href} className="relative">
                  {item.children ? (
                    <button
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-brand-yellow-700 bg-brand-yellow-50'
                          : 'text-gray-700 hover:text-brand-navy-900 hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-brand-yellow-700 bg-brand-yellow-50'
                          : 'text-gray-700 hover:text-brand-navy-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 transition-all duration-200 origin-top ${
                        openDropdown === item.label
                          ? 'opacity-100 scale-100 pointer-events-auto'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
                            pathname === child.href
                              ? 'text-brand-yellow-700 bg-brand-yellow-50 font-semibold'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-brand-navy-900'
                          }`}
                        >
                          <span className="text-base">{child.icon}</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}/>
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}/>
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-3 space-y-1">
          {NAV.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-800 hover:bg-gray-50"
                    onClick={() => setOpenMobileAccordion(openMobileAccordion === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${openMobileAccordion === item.label ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${openMobileAccordion === item.label ? 'max-h-60' : 'max-h-0'}`}>
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-brand-yellow-50 hover:text-brand-yellow-700"
                        >
                          <span>{child.icon}</span> {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(item.href) ? 'text-brand-yellow-700 bg-brand-yellow-50' : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}