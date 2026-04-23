# Desain Seksi Tech Stack Marquee

Menambahkan seksi daftar teknologi dengan animasi logo berjalan (marquee) di bawah seksi proyek untuk menampilkan keahlian teknis secara dinamis dan elegan.

## Deskripsi

Seksi ini akan menampilkan logo-logo teknologi dalam format baris horizontal yang bergerak terus-menerus. Desain akan menggunakan estetika monokrom (grayscale) untuk menjaga kesan minimalis dan profesional, konsisten dengan desain "About Me".

## Detail Desain

### 1. Komponen UI

- **Nama Komponen**: `TechStackMarquee`
- **Judul**: "Tools I Use" (Typography: Sans-serif, Bold, centered, subtle color).
- **Kontainer**: Full-width, overflow hidden, dengan padding vertikal yang cukup.
- **Logo**:
  - Filter: `grayscale(100%)`
  - Opacity: `60%`
  - Hover effect: `opacity(100%)` atau transisi halus.
  - Ukuran: Tinggi tetap (sekitar 32-40px) dengan aspect ratio asli.

### 2. Daftar Teknologi

- Laravel, React, Node.js, JavaScript, PHP, MySQL, PostgreSQL, REST API / Postman, OpenAI, Tailwind CSS, Git, GitHub.

### 3. Logika Animasi (Framer Motion)

- **Metode**: Duplikasi daftar (rendering daftar yang sama dua kali secara horizontal).
- **Animasi**: Loop linear dari `x: 0` ke `x: -50%`.
- **Durasi**: 40-50 detik (lambat dan elegan).
- **Ease**: `linear` (untuk menghindari percepatan/perlambatan di titik sambung).

## Lokasi Integrasi

- Lokasi: Di bawah `<ProjectCarousel />` dalam file `src/App.tsx`.

## Rencana Verifikasi

- Memastikan animasi berjalan tanpa jeda (seamless loop).
- Memastikan responsivitas (jumlah logo yang terlihat di mobile vs desktop).
- Verifikasi filter grayscale bekerja pada semua browser modern.
