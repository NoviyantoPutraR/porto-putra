# Desain Layout Terpusat Tech Stack

## Deskripsi

Mengubah layout marquee yang semula memenuhi lebar layar (full-width) menjadi terpusat di dalam kontainer dengan lebar terbatas. Hal ini menciptakan area kosong (padding) di sisi kiri dan kanan halaman.

## Solusi Teknis

Implementasi menggunakan utilitas `container mx-auto` dari Tailwind CSS.

### Spesifikasi Layout

- **Kontainer Luar**: Tetap `w-full` dengan latar belakang putih.
- **Kontainer Marquee**:
  - Kelas: `container mx-auto px-6 md:px-12 max-w-6xl`
  - Efek: Membatasi area lari logo agar tidak sampai ke pojok layar.
- **Masking**:
  - Intensitas `mask-image` disesuaikan atau dipertahankan untuk transisi masuk-keluar yang halus di batas kontainer tersebut.

## Komponen Terdampak

- `src/components/features/tech-stack/TechStackMarquee.tsx`

## Verifikasi

- Memastikan logo langsung "menghilang" atau memudar saat mencapai batas kontainer (bukan batas layar).
- Memastikan responsivitas tetap terjaga pada perangkat mobile.
