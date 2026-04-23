# Spesifikasi Desain Bagian "My Projects" (Carousel Animatif)

## Tujuan

Menggantikan antarmuka "My Projects" (`ProjectGrid`) dengan antarmuka "Interactive Carousel Showcase" (korsel kartu interaktif). Sistem ini difokuskan pada penonjolan satu proyek unggulan di tengah seraya memperlihatkan cuplikan proyek lainnya di bingkai luar. Pendekatan ini ditujukan untuk memberikan kesan visual eksklusif, dinamis, dan premium layaknya halaman presentasi produk profesional.

## Arsitektur & Perilaku (Behavior)

### 1. Tata Letak Korsel (Carousel Layout)

- **Komponen Inti**: Menggunakan logika _Headless Swiper_ atau pengaturan letak terpusat (_centered slides_) yang dibantu dengan `Framer Motion`.
- **Status Kartu Aktif (Tengah)**: Kartu di-render dalam ukuran normal atau skala lebih besar (misal skalasi `1.05`), dengan visibilitas sempurna (opasitas penuh dan ketajaman tinggi).
- **Status Kartu Samping (Tidak Aktif)**: Kartu yang berada di sebelah kiri atau kanan dikecilkan skalanya menjadi di kisaran `0.85` atau `0.9` dan meredup (opasitas berkurang dan/atau dibantu _blur_ parsial).

### 2. Interaksi Pengguna

- **Pembersihan Otomatis (Auto-play)**: Opsi opsional agar kartu dapat bergeser dengan sendirinya berdasarkan interval.
- **Klik Kartu Samping**: Bila pengguna menekan (klik) kartu yang berada di sisi samping (tidak aktif), korsel akan langsung menggeser kartu tersebut menjadi kartu aktif ke tengah.
- **Klik Kartu Tengah**: Menekan kartu yang sudah berada pada state aktif (tengah) akan memicu munculnya halaman Rincian Proyek (Detail Modal).

### 3. Modul Rincian Proyek (Detail Modal)

- **Tampilan Muncul (_Pop-up_)**: Dimuat di atas halaman web (_frontend layer z-index_ tinggi).
- **Latar Belakang (_Backdrop_)**: Halaman belakang dikaburkan menggunakan filter _glassmorphism backdrop blur_.
- **Animasi Masuk/Keluar**: Didukung oleh alat lunak animasi yang membesarkan (_scale-up_) elemen mulai dari posisi asalnya dan masuk ke tengah layar.
- **Konten**: Akan menampung ringkasan visual penuh (seperti banner gambar), Deskripsi Panjang, Label Tumpukan Teknologi (Tech Stack), beserta rujukan referensi/link Github dan Link Langsung.

## Pembagian Kerja Unit (_Unit Boundary_)

Desain ini disederhanakan ke dalam modul independen:

- `ProjectCarouselContainer.tsx`: Memiliki siklus state posisi _slide_ saat ini.
- `ProjectCarouselCard.tsx`: Komponen tata letak visual setiap profil proyek.
- `ProjectDetailModal.tsx`: Komponen independen yang mengelola presentasi modal dan logika memudarkannya.

## Skala Modul

Pengerjaan tidak akan mengganggu arsitektur antarmuka utama (`App.tsx` atau sistem _Navbar_/Hero), namun komponen `ProjectGrid` bawaan akan dihapus atau disisih-timbangkan untuk penggunaan ini. Semua kode berfokus pada optimasi animasi Framer Motion di sisi klien (`"use client"`).
