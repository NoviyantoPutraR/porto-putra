# Perincian Teks Proyek Carousel — Spesifikasi Desain

**Tanggal:** 2026-04-22
**Status:** Sedang Ditinjau

## Gambaran Umum

Spesifikasi ini mengatur pembaruan pada bagian perincian teks di komponen `ProjectCarousel`. Tujuannya adalah untuk meningkatkan hierarki visual dan memberikan penekanan pada keahlian teknis melalui tampilan _tech stack_ yang modern.

## Perubahan Desain

### 1. Tipografi Judul

- **Tingkat**: `h3` atau `p` (tergantung semantik konteks).
- **Gaya**: `font-bold` (Tebal).
- **Ukuran**: `text-lg` (1.125rem).
- **Warna**: `text-neutral-900`.
- **Margin**: `mb-2`.

### 2. Deskripsi

- **Gaya**: `font-normal`.
- **Ukuran**: `text-xs`.
- **Warna**: `text-neutral-700`.
- **Margin**: `mb-4`.

### 3. Badge Tech Stack (Ghost Style)

- **Kontainer**: `flex flex-wrap gap-2 mt-4`.
- **Gaya Badge**:
  - **Latar Belakang**: `bg-neutral-100`.
  - **Teks**: `text-[10px]`, `text-neutral-600`, `font-medium`.
  - **Padding**: `px-2 py-0.5`.
  - **Border Radius**: `rounded-full`.
- **Label**: Tidak perlu label judul (seperti "Tech Stack:"), langsung deretan badge.

### 4. Penyederhanaan Data

- **Dihapus**: Informasi **Role** dan **Year** akan dihapus dari UI untuk memberikan tampilan yang lebih bersih.

## Verifikasi

- [ ] Judul proyek terlihat lebih menonjol dengan gaya tebal.
- [ ] Deretan badge tech stack muncul di bawah deskripsi.
- [ ] Informasi Role dan Year sudah tidak terlihat lagi.
- [ ] Tata letak tetap responsif dan rapi pada berbagai ukuran layar.
