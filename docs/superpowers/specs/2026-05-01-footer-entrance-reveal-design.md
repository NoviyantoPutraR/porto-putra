# Spesifikasi Desain: Animasi Reveal Garis Footer Minimalis

Dokumen ini merinci spesifikasi desain untuk perbaikan visual pada footer, khususnya implementasi garis pemisah yang tidak memenuhi lebar layar (centered) dan memiliki animasi "Entrance Reveal" untuk meningkatkan kesan premium.

## Tujuan Desain

- Menciptakan kesan footer yang lebih "contained" dan menyatu dengan grid konten utama (1200px).
- Menambahkan interaksi halus saat pengguna melakukan scroll ke bagian bawah halaman.
- Memperkuat estetika minimalis namun modern.

## Detail Visual

### Struktur Layout

- **Kontainer Footer**: Tetap memenuhi lebar layar (`w-full`), namun tanpa border atas bawaan.
- **Garis Pemisah (The Line)**:
  - Posisi: Terpusat (`mx-auto`).
  - Lebar Maksimal: `1200px` (mengikuti `max-w-[1200px]` pada konten).
  - Ketebalan: `1px`.
  - Warna: `var(--border)` dengan opacity rendah (sekitar `0.1` atau `0.2`).
- **Elemen Identitas**:
  - Brand (Kiri) dan Copyright (Kanan) tetap berada di bawah garis dengan jarak `padding-top: 1.5rem` (`pt-6`).

## Spesifikasi Animasi

### Framer Motion: Entrance Reveal

Garis akan melebar dari tengah ke arah samping saat memasuki viewport.

- **Initial State**:
  - `scaleX: 0` (lebar nol dari pusat).
  - `opacity: 0`.
- **Animate State (WhileInView)**:
  - `scaleX: 1` (lebar penuh 1200px).
  - `opacity: 0.1` (atau sesuai variabel border).
- **Transition**:
  - `duration: 0.8s` - `1.0s`.
  - `ease: [0.22, 1, 0.36, 1]` (Quintic ease-out untuk gerakan yang sangat halus).
  - `viewport: { once: true }` (hanya dijalankan sekali saat pertama kali terlihat).

## Pertimbangan Teknis

- Memastikan animasi `scaleX` menggunakan `transform-origin: center` agar ekspansi terjadi dari tengah.
- Menggunakan `motion.div` untuk garis tersebut.
- Memastikan tidak ada pergeseran layout (_layout shift_) saat animasi berjalan.

## Kriteria Keberhasilan

- Garis footer tidak menempel di pojok halaman (memiliki margin kiri-kanan).
- Garis melebar dengan halus dari tengah saat di-scroll.
- Tampilan tetap konsisten di perangkat mobile (menyesuaikan lebar layar).
