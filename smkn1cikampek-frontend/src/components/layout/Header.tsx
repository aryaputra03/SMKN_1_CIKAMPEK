"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil Sekolah",
    href: "/profil",
    children: [
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Fasilitas", href: "/profil/fasilitas" },
      { label: "Jurusan", href: "/profil/jurusan" },
      { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
      { label: "Staff Guru", href: "/profil/staff-guru" },
    ],
  },
  {
    label: "Keuangan",
    href: "/keuangan",
    children: [
      { label: "Dana BOS", href: "/keuangan/bos" },
      { label: "APBD", href: "/keuangan/apbd" },
    ],
  },
  {
    label: "Informasi Sekolah",
    href: "/informasi",
    children: [
      { label: "Berita", href: "/informasi/berita" },
      { label: "Organisasi & Ekstrakurikuler", href: "/informasi/organisasi-ekskul" },
      { label: "Prestasi", href: "/informasi/prestasi" },
    ],
  },
  { label: "Kurikulum", href: "/kurikulum" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-xs py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Selamat datang di Website Resmi SMKN 1 Cikampek</span>
          <span>Jl. Jenderal Ahmad Yani No.1, Cikampek</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Nama */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
              SMK
            </div>
            <div>
              <p className="font-bold text-blue-900 text-sm leading-tight">SMKN 1 Cikampek</p>
              <p className="text-gray-500 text-xs">Sekolah Menengah Kejuruan Negeri</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-lg shadow-lg min-w-48 py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                      >
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
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-8 py-2 text-sm text-gray-500 hover:bg-blue-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}