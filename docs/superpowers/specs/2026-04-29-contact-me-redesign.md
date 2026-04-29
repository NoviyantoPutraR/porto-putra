# Spesifikasi Desain: Redesign Tombol Contact Me (Pesan/Obrolan)

**Tanggal:** 2026-04-29
**Status:** Menunggu Persetujuan

## Tujuan

Memperbarui desain tombol "Contact Me" di Hero Section dengan menggunakan ikon Pesan/Obrolan (`MessageCircle`) beserta indikator status (titik hijau) untuk memberikan kesan ramah, responsif, dan membedakannya secara fungsional dari tombol utama "View My Projects" (yang menggunakan ikon panah).

## Detail Desain

### 1. Visual Antarmuka (UI)

- **Gaya:** Tanpa latar belakang blok (_Ghost/Text Style_).
- **Tipografi:** Tetap menggunakan Roboto, Medium (500), teks berwarna `#0a0a0a` (Hitam pekat).
- **Ikon:** `MessageCircle` dari `lucide-react` dengan warna `#0a0a0a`.
- **Indikator Aksentuasi:** Titik (dot) kecil berwarna hijau (`#22c55e`) yang diposisikan di pojok ikon `MessageCircle` untuk merepresentasikan status "Online/Tersedia", selaras dengan _badge_ "Available for New Projects" di bagian atas halaman.
- **Tata Letak:** Teks "Contact Me" di sebelah kiri, diikuti oleh ikon di sebelah kanan dengan jarak `gap-2` (8px).

### 2. Animasi & Interaksi

- **Gerakan Tombol (Hover):**
  - Tombol akan sedikit terangkat ke atas (`y: -2`) secara halus.
- **Gerakan Ikon (Hover):**
  - Ikon pesan akan memiliki animasi berdenyut pelan (_subtle pulse_ / _scale_ membesar sedikit) untuk memberikan kesan dinamis dan hidup.
- Menggunakan `framer-motion` dengan transisi tipe `spring` (misal `stiffness: 400`, `damping: 10`).

## Arsitektur Komponen

- Perubahan dilakukan secara langsung pada struktur elemen animasi (terutama properti `variants` Framer Motion) di dalam `HeroSection.tsx`.
- Modifikasi juga memerlukan isolasi komponen titik hijau agar tertata rapi di dalam batas/ruang ikon `MessageCircle` (bisa menggunakan posisi relatif-absolut).

## Kriteria Keberhasilan

- Pengguna memiliki visual yang seimbang: "View My Projects" membawa energi eksplorasi (panah), sedangkan "Contact Me" membawa energi interaksi manusia (pesan/obrolan).
- Animasi titik hijau dan denyut ikon berjalan mulus dari status diam ke status di-hover.
- Bahasa UI (_green dot_ status) menjadi konsisten dari bagian _badge_ ke bagian tombol _Call-to-Action_.
