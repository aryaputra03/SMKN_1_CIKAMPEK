# Struktur Folder Project Website SMKN 1 Cikampek

## Root Project
```
smkn1cikampek/
├── frontend/          # Next.js App
├── backend/           # Strapi CMS
├── docs/              # Dokumentasi project
└── docker-compose.yml # (opsional) local dev orchestration
```

---

## 📁 FRONTEND — Next.js + Tailwind CSS

```
frontend/
├── public/
│   ├── fonts/
│   ├── icons/
│   └── images/
│       ├── hero/
│       ├── logo/
│       └── placeholder/
│
├── src/
│   ├── app/                          # Next.js 14 App Router
│   │   ├── layout.tsx                # Root layout (Header + Footer)
│   │   ├── page.tsx                  # Homepage / Landing Page
│   │   ├── not-found.tsx
│   │   │
│   │   ├── profil/                   # Profil Sekolah
│   │   │   ├── visi-misi/
│   │   │   │   └── page.tsx
│   │   │   ├── fasilitas/
│   │   │   │   └── page.tsx
│   │   │   ├── jurusan/
│   │   │   │   ├── page.tsx          # List semua jurusan
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Detail jurusan
│   │   │   ├── struktur-organisasi/
│   │   │   │   └── page.tsx
│   │   │   └── staff-guru/
│   │   │       └── page.tsx
│   │   │
│   │   ├── keuangan/                 # Transparansi Keuangan
│   │   │   ├── bos/
│   │   │   │   └── page.tsx
│   │   │   └── apbd/
│   │   │       └── page.tsx
│   │   │
│   │   ├── informasi/                # Informasi Sekolah
│   │   │   ├── berita/
│   │   │   │   ├── page.tsx          # List berita
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Detail berita
│   │   │   ├── prestasi/
│   │   │   │   └── page.tsx
│   │   │   └── organisasi-ekskul/
│   │   │       └── page.tsx
│   │   │
│   │   └── kurikulum/
│   │       └── page.tsx              # Redirect ke URL eksternal
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── home/                     # Komponen khusus Homepage
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BannerSlider.tsx
│   │   │   ├── BeritaTerbaru.tsx
│   │   │   ├── PrestasiSection.tsx
│   │   │   ├── OrganisasiSection.tsx
│   │   │   └── GuruCarousel.tsx
│   │   │
│   │   ├── ui/                       # Komponen UI reusable
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── SectionHeader.tsx
│   │   │
│   │   └── shared/                   # Komponen antar halaman
│   │       ├── NewsCard.tsx
│   │       ├── StaffCard.tsx
│   │       ├── PrestasiCard.tsx
│   │       └── GoogleMapsEmbed.tsx
│   │
│   ├── lib/
│   │   ├── api.ts                    # Fungsi fetch ke Strapi API
│   │   ├── utils.ts                  # Helper functions
│   │   └── constants.ts              # Konstanta (URL, config)
│   │
│   ├── hooks/                        # Custom React Hooks
│   │   ├── useBerita.ts
│   │   └── usePrestasi.ts
│   │
│   ├── types/                        # TypeScript type definitions
│   │   ├── berita.ts
│   │   ├── guru.ts
│   │   ├── jurusan.ts
│   │   ├── prestasi.ts
│   │   └── strapi.ts                 # Generic Strapi response types
│   │
│   └── styles/
│       └── globals.css               # Tailwind directives + custom CSS
│
├── .env.local                        # ENV development
├── .env.example                      # Template ENV
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 📁 BACKEND — Strapi CMS

```
backend/
├── src/
│   ├── api/                          # Content Types (otomatis dibuat Strapi)
│   │   ├── berita/
│   │   │   ├── content-types/
│   │   │   │   └── berita/
│   │   │   │       └── schema.json
│   │   │   ├── controllers/
│   │   │   ├── routes/
│   │   │   └── services/
│   │   │
│   │   ├── guru/
│   │   ├── jurusan/
│   │   ├── prestasi/
│   │   ├── organisasi/
│   │   ├── fasilitas/
│   │   ├── slider/                   # Banner/Slider homepage
│   │   ├── keuangan-bos/
│   │   ├── keuangan-apbd/
│   │   └── profil-sekolah/           # Single Type
│   │
│   ├── components/                   # Reusable components (Strapi)
│   │   └── shared/
│   │       └── seo/
│   │           └── schema.json
│   │
│   └── extensions/                   # Custom Strapi extensions
│
├── config/
│   ├── database.ts                   # Konfigurasi PostgreSQL
│   ├── server.ts
│   ├── middlewares.ts
│   └── plugins.ts
│
├── .env                              # ENV Strapi
├── .env.example
└── package.json
```

---

## 📁 DOCS — Dokumentasi Project

```
docs/
├── 01-setup.md                       # Panduan instalasi
├── 02-environment.md                 # Konfigurasi ENV
├── 03-api-endpoints.md               # Daftar endpoint Strapi
├── 04-content-guide.md               # Panduan input konten (untuk admin)
├── 05-deployment.md                  # Panduan deploy Vercel + VPS
└── 06-handover.md                    # Dokumen serah terima
```

---

## Navigasi Struktur Menu (Header)

```
Beranda
Profil Sekolah  ▾
  └── Visi Misi
  └── Fasilitas
  └── Jurusan
  └── Struktur Organisasi
  └── Staff Guru
Keuangan        ▾
  └── BOS
  └── APBD
Informasi Sekolah ▾
  └── Berita
  └── Organisasi & Ekstrakurikuler
  └── Prestasi
Kurikulum
```

---

## Milestone Hari 1 — Checklist

### ✅ Setup Infrastruktur
- [ ] Init Next.js project (`npx create-next-app@latest`)
- [ ] Init Strapi project (`npx create-strapi-app@latest`)
- [ ] Konfigurasi PostgreSQL lokal (via Docker atau install langsung)
- [ ] Setup `.env.local` (Frontend) dan `.env` (Backend)
- [ ] Koneksi Strapi ke PostgreSQL
- [ ] Jalankan kedua project secara bersamaan
- [ ] Push ke GitHub (2 repo: `smkn1cikampek-frontend`, `smkn1cikampek-backend`)

### ✅ Kerangka Navigasi (Frontend)
- [ ] Buat semua folder routing di `src/app/`
- [ ] Buat `page.tsx` placeholder di setiap route
- [ ] Buat komponen `Header.tsx` dengan navigasi lengkap
- [ ] Buat komponen `Footer.tsx` (placeholder)
- [ ] Buat `layout.tsx` root yang menyertakan Header & Footer
- [ ] Test semua route dapat diakses di browser
- [ ] Setup Tailwind CSS dan konfigurasi tema warna sekolah
