# Layout Samping "Sticky Pillar" — Spesifikasi Desain

**Tanggal:** 2026-04-22
**Status:** Sedang Ditinjau

## Gambaran Umum

Dokumen ini menspesifikasikan redesign arsitektur layout untuk seksi "My Works". Layout akan diubah dari susunan atas-bawah (judul di atas carousel) menjadi susunan kiri-kanan (judul vertikal di sisi kiri, carousel di sisi kanan) dengan proporsi 30/70 dan perilaku penjangkaran (sticky alignment).

## Spesifikasi Layout (Konsep: Sticky Pillar)

### 1. Arsitektur Grid (Grid Architecture)

- Menggunakan CSS Grid atau Flexbox pada kontainer `.max-w-7xl`.
- **Desktop (md ke atas)**: Flex/Grid dengan pembagian:
  - Kolom Kiri (Judul): 30% lebar (_width_).
  - Kolom Kanan (Konten): 70% lebar (_width_).
- **Mobile (di bawah md)**: Struktur atas-bawah (stack) standar. Judul kembali horizontal di atas carousel untuk menjaga keterbacaan di layar kecil.

### 2. Kolom Judul (Kiri)

- **Rotasi Vertikal**: Transformasi `-rotate-90` untuk membuat teks terbaca dari bawah ke atas. Posisi absolut atau transformasi spesifik agar mengisi tinggi ruang yang tersedia (_space-filling_).
- **Tipografi**:
  - Ukuran: Sangat besar (misal: `text-7xl` atau `text-[8rem]`).
  - Gaya: Miring/Italic (`italic`) dipadu dengan `font-extrabold`.
  - Warna: Gradient saat ini atau solid dengan transparansi rendah (bergantung pada kontras).
- **Perilaku Sticky**: Menerapkan `sticky top-20` (atau nilai lain) pada kontainer judul agar teks tetap terlihat saat area kanan digulir (jika konten kanan cukup panjang).

### 3. Kolom Konten/Carousel (Kanan)

- Mengisi 70% area yang tersisa.
- Semua struktur animasi kemunculan ("Rhythmic Assembly") yang sudah dibuat sebelumnya tetap dipertahankan utuh dalam kolom ini.

## Verifikasi

- [ ] Layout terpisah menjadi dua kolom (kiri judul, kanan carousel) pada tampilan desktop.
- [ ] Judul di kiri berotasi 90 derajat secara vertikal dan menggunakan _font_ miring (italic).
- [ ] Lebar kolom terkunci di proporsi ~30% dan ~70%.
- [ ] Tampilan kembali normal (atas-bawah) pad layar berukuran kecil (mobile responsive).
