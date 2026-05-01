# Spesifikasi Desain: Redesain Footer

Dokumen ini merinci desain dan rencana implementasi untuk komponen Footer baru pada portofolio web. Desain ini mengutamakan estetika yang bersih, premium, dan konsisten dengan sistem desain yang ada.

## Deskripsi

Footer akan berfungsi sebagai penutup halaman yang elegan, menyediakan akses cepat ke navigasi utama dan tautan sosial profesional (LinkedIn). Desain ini menggunakan pendekatan "Spread Balanced" (Opsi 1) dengan elemen yang tersebar secara horizontal untuk memberikan kesan luas dan rapi.

## Elemen UI

### 1. Struktur Layout

- **Kontainer Utama**: Menggunakan lebar maksimal (max-width) yang konsisten dengan seksi lain (sekitar `1126px` atau `1200px`).
- **Garis Pemisah**: Garis horizontal tipis di bagian atas footer menggunakan warna `--border`.
- **Baris Konten (Atas)**:
  - **Kiri**: Logo teks `PutraRamadhan.` (font sans-serif tebal, sesuai Navbar).
  - **Tengah**: Links navigasi (Home, My Projects, About Me, Tech Stack, Contact) disusun horizontal dengan spasi yang proporsional.
  - **Kanan**: Ikon LinkedIn (menggunakan `Linkedin` dari `lucide-react`).
- **Baris Copyright (Bawah)**:
  - Berada di bawah konten utama, rata kiri.
  - Teks: `© 2026 PutraRamadhan. All rights reserved.` (ukuran font lebih kecil, warna `--text`).

### 2. Tipografi & Warna

- **Font**: Menggunakan variabel `--sans` (Inter/Segoe UI) untuk kesan modern.
- **Warna Teks**: `--text-h` untuk logo dan link aktif, `--text` untuk copyright.
- **Warna Background**: Putih bersih (`#FFFFFF`) atau menyesuaikan dengan `--bg` untuk dukungan mode gelap.

## Animasi (Entrance Reveal)

Footer akan menggunakan `framer-motion` untuk memberikan kesan premium saat pengguna mencapai bagian akhir halaman.

- **Trigger**: `whileInView` dengan `viewport={{ once: true }}`.
- **Jenis Animasi**:
  - Kontainer footer akan muncul dengan efek fade-in dan sedikit slide-up (Y: 20px -> 0).
  - Elemen di dalamnya (Logo, Nav Links, Social Icon) akan muncul secara **staggered** (berurutan) dengan delay kecil antar elemen.
- **Hover Effects**:
  - Link navigasi: Perubahan warna halus ke `--accent` atau sedikit pergeseran vertikal.
  - Ikon LinkedIn: Sedikit pembesaran (`scale: 1.1`).

## Arsitektur Komponen

- **File Lokasi**: `src/components/features/footer/Footer.tsx`
- **Integrasi**: Ditambahkan di bagian akhir `src/App.tsx`.

## Rencana Verifikasi

1. **Responsivitas**: Memastikan layout berubah menjadi tumpukan vertikal (stacked) pada layar mobile agar tetap rapi.
2. **Interaksi**: Memastikan semua link navigasi berfungsi (anchor links) dan mengarahkan ke seksi yang benar.
3. **Aksesibilitas**: Menambahkan label `aria-label` pada ikon sosial dan memastikan kontras warna yang cukup.
