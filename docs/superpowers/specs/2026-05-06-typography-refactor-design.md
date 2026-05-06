# Desain Sistem Tipografi: Clean Tech

Dokumen ini menjelaskan rencana _refactoring_ sistem tipografi untuk mencapai desain yang lebih bersih, konsisten, dan mudah dikelola (bergaya Apple-like minimalis).

## Ringkasan Eksekutif

Sistem tipografi saat ini menggunakan tiga jenis font yang berbeda secara tidak konsisten. Tujuannya adalah untuk menyederhanakan sistem ini menjadi:

- **Font Utama:** Inter (untuk semua body, navigasi, dan heading).
- **Font Aksentuasi:** Playfair Display (HANYA digunakan untuk kata yang disorot atau teks tampilan yang sangat besar).
- **Dihapus Sepenuhnya:** Roboto.

## Perubahan yang Diusulkan

### 1. Pembersihan Dependensi Font

- Menghapus referensi `Roboto` dari import Google Fonts di `index.css`.
- Menyederhanakan penarikan Google Fonts hanya untuk `Inter` (bobot: 400, 500, 600, 700) dan `Playfair Display` (bobot: 400 italic).

### 2. Pembaruan Konfigurasi Global & Tailwind

- **CSS Globals (`index.css` & `globals.css`):**
  - Mengubah `--sans` dan `--heading` agar hanya menggunakan `Inter`.
  - Mengatur `body` untuk murni menggunakan variabel font `--sans`.
- **Tailwind (`tailwind.config.js`):**
  - Mendefinisikan ulang:
    - `sans: ["Inter", "system-ui", "sans-serif"]`
    - `accent: ["Playfair Display", "serif"]`
  - Membuang referensi `roboto`.

### 3. Pembaruan Spesifik Komponen

- **`Navbar.tsx` (Navigasi):**
  - Mengganti gaya `font-family: 'Playfair Display'` menjadi `font-sans`.
  - Mengubah ke bobot `font-medium` / `font-semibold` sesuai instruksi untuk visibilitas dan gaya elegan minimalis.
- **`HeroSection.tsx` & `PhotoCard.tsx`:**
  - Mengganti semua inline styles `fontFamily: "'Roboto', sans-serif"` menjadi penggunaan kelas utility Tailwind (`font-sans` atau tidak mendefinisikan apa pun karena defaultnya adalah sans).
- **`BagianProyek.tsx` & `ProjectGrid.tsx`:**
  - Menghapus kelas `font-roboto` sepenuhnya.
  - Skala tipografi pada judul akan diselaraskan dengan hierarki `Inter`.
- **`AboutMe.tsx` & `TechStackMarquee.tsx`:**
  - "ABOUT ME" (watermark latar belakang berukuran `text-[80px]` ke `text-[220px]`) dan elemen marquee yang sangat besar mungkin tetap mempertahankan `font-accent` sebagai variasi aksen desain editorial jika disetujui, ATAU diseragamkan seluruhnya ke `font-sans` (sesuai aturan "Limit Playfair Usage"). Rekomendasi: Gunakan `font-accent` HANYA untuk "Large Display".
- **`GetInTouch.tsx` & `Footer.tsx`:**
  - Pastikan bahwa teks utama bebas dari font Playfair, kecuali untuk 1-2 kata sorotan.

## Rencana Verifikasi

- Melakukan tinjauan visual melalui simulasi _browser_ untuk memastikan tidak ada jenis font Roboto yang termuat.
- Memeriksa konsol elemen inspector untuk melihat apakah _font request_ sangat minimal (hanya `Inter` & `Playfair Display`).
- Menguji kompilasi Tailwind agar tidak memunculkan pesan kesalahan akibat kelas yang dihapus.

---

> [!IMPORTANT]
> Harap konfirmasikan apakah teks raksasa (watermark latar belakang seperti "ABOUT ME" di `AboutMe.tsx` dan bagian Hero) masih diperbolehkan menggunakan Playfair (sebagai aksen besar) atau sepenuhnya kita ganti ke Inter. Rekomendasi saya adalah menyisakan Playfair hanya di tempat aksen / teks layar penuh (sebagai hiasan).
