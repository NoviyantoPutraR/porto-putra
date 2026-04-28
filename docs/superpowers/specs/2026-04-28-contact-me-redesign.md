# Spesifikasi Desain: Redesign Tombol Contact Me

**Tanggal:** 2026-04-28
**Status:** Disetujui

## Tujuan

Mengubah tampilan tombol "Contact Me" dari desain berbingkai (_bordered_) menjadi desain tautan teks yang bersih (_clean text link_) dengan ikon panah animasi guna meningkatkan estetika premium dan hierarki visual di bagian Hero.

## Detail Desain

### 1. Visual Antarmuka (UI)

- **Gaya:** Tanpa border (_Ghost/Text Style_).
- **Tipografi:** Roboto, Medium (500), 14px (`text-sm`).
- **Ikon:** `ArrowRight` dari `lucide-react`.
- **Warna:** `#0a0a0a` (Hitam pekat) untuk teks dan ikon.
- **Tata Letak:** Teks "Contact Me" diikuti oleh ikon panah dengan jarak `gap-2` (8px).

### 2. Animasi & Interaksi

- **Hover State:**
  - Ikon panah bergeser ke kanan sejauh `4px` hingga `6px`.
  - Menggunakan `framer-motion` dengan transisi `easeOut` atau `spring` yang halus.
  - Opacity teks mungkin sedikit berubah (misal 100% ke 80% atau sebaliknya) untuk feedback tambahan.

## Arsitektur Komponen

- Modifikasi akan dilakukan pada `HeroSection.tsx`.
- Menggunakan `motion.a` untuk menangani navigasi dan animasi dalam satu elemen.

## Kriteria Keberhasilan

- Tombol terlihat lebih 'ringan' dan tidak berebut fokus dengan tombol utama "View My Projects".
- Animasi pergeseran panah terasa responsif dan halus.
- Konsistensi ukuran (tinggi elemen tetap sejajar secara visual dengan tombol utama).
