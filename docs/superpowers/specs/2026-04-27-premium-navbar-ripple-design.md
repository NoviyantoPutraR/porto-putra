# Spesifikasi Desain: Premium Navbar Ripple Expansion

Dokumen ini merinci desain dan perilaku interaksi navigasi baru untuk portofolio, menggantikan desain navigasi tradisional dengan sistem menu overlay yang dipicu oleh efek riak (ripple).

## Deskripsi Fitur

Mengubah navigasi desktop agar konsisten dengan pendekatan mobile: menu tersembunyi secara default dan muncul sebagai overlay layar penuh saat tombol hamburger diklik. Fokus utama adalah pada kehalusan animasi transisi.

## Detail Visual

### 1. Tombol Pemicu (Hamburger Trigger)

- **Posisi**: Header pojok kanan (`justify-self: end` dalam grid navbar).
- **Elemen**: Dua garis horizontal (lebar ~24px - 32px).
- **Gaya**: Minimalis, warna hitam (#0a0a0a).
- **Hover State**:
  - Lingkaran latar belakang semi-transparan muncul secara halus.
  - Transformasi skala kecil (1.05x).

### 2. Transisi Ripple (The Ripple)

- **Bentuk**: Lingkaran (`border-radius: 50%`).
- **Posisi Awal**: Tersembunyi tepat di bawah tombol hamburger.
- **Warna**: Putih solid (#ffffff).
- **Z-Index**: Tinggi (di atas konten halaman tapi di bawah tombol tutup).
- **Animasi Scale**:
  - `0%`: `scale(0)`
  - `100%`: `scale(20)` (atau cukup besar untuk menutupi layar).
  - `Duration`: 0.8s - 1s.
  - `Easing`: `cubic-bezier(0.76, 0, 0.24, 1)` (Quart).

### 3. Overlay Menu (Menu Items)

- **Layout**: Tengah layar (Flexbox center).
- **Link Navigasi**:
  - Ukuran font: `text-4xl` hingga `text-6xl`.
  - Font: Serif (Playfair Display atau sejenisnya).
  - Spasi: `tracking-wider`.
- **Animasi Muncul**:
  - _Staggered delay_ (penundaan bertahap) setiap item.
  - _Fade-in_ + _Slide-up_ (dari y: 20px ke y: 0).
  - Efek hover pada link: underline tipis yang meluncur dari kiri ke kanan.

## Perilaku Interaksi

- **Buka Menu**: Klik hamburger -> Ripple membesar -> Link muncul bertahap.
- **Tutup Menu**: Klik ikon 'X' atau klik link navigasi -> Link menghilang -> Ripple mengecil atau _fade out_.
- **Scroll Lock**: `overflow: hidden` pada `body` saat menu terbuka.

## Teknologi

- **Framework**: React.
- **Animasi**: Framer Motion.
- **Styling**: Vanilla CSS / Inline styles (mengikuti pola `Navbar.tsx` saat ini).

## Kriteria Keberhasilan (Success Criteria)

- Transisi tidak patah-patah (lancar di 60fps).
- Responsif di berbagai ukuran layar desktop hingga mobile.
- Tipografi terasa premium dan mudah dibaca.
