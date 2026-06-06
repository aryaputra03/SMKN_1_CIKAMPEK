// Generic Strapi v4 response wrapper
export interface StrapiResponse<T> {
  data: StrapiData<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      width: number;
      height: number;
      alternativeText: string;
    };
  };
}

// Content Types
export interface Berita {
  judul: string;
  slug: string;
  konten: string;
  ringkasan: string;
  thumbnail: StrapiImage;
  publishedAt: string;
  kategori: string;
}

export interface Guru {
  nama: string;
  nip: string;
  jabatan: string;
  bidangStudi: string;
  foto: StrapiImage;
}

export interface Jurusan {
  nama: string;
  slug: string;
  deskripsi: string;
  kompetensiKeahlian: string;
  foto: StrapiImage;
}

export interface Prestasi {
  judul: string;
  deskripsi: string;
  tingkat: "Sekolah" | "Kabupaten" | "Provinsi" | "Nasional" | "Internasional";
  tahun: number;
  foto: StrapiImage;
}