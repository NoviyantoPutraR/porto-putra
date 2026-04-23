# Spesifikasi Desain: Pembersihan Visual "My Works"

Dokumen ini merinci perubahan estetika pada seksi "My Works" untuk mencapai tampilan yang lebih bersih, profesional, dan mewah (clean look) dengan memanfaatkan latar belakang putih dan optimasi ruang kosong.

## Tujuan Desain

- Mencapai keselarasan visual dengan seksi Hero yang dominan putih.
- Meningkatkan keterbacaan label teknologi pada latar belakang terang.
- Memberikan kesan "lapang" melalui penggunaan _white space_ yang strategis.

## Perubahan Visual

### 1. Latar Belakang & Kontainer

- **Latar Belakang Seksi:** Mengubah `#F4F4F4` (abu-abu muda) menjadi `#FFFFFF` (putih murni).
- **Spasi Vertikal:** Meningkatkan padding atas dan bawah untuk menciptakan pemisahan alami dari seksi lain.
  - Desktop: `padding: 120px 0` (sekitar `py-32`).
  - Mobile: `padding: 60px 0` (sekitar `py-16`).

### 2. Label Teknologi (Tech Stack Badges)

Untuk mempertahankan keterbacaan pada latar putih tanpa merusak estetika "clean", digunakan gaya **Aksen Halus**:

- **Background:** `rgba(238, 242, 255, 0.5)` (Indigo 50 dengan opasitas 50%).
- **Teks:** `rgb(71, 85, 105)` (Slate 600).
- **Border:** `1px solid rgba(224, 231, 255, 0.8)` (Indigo 100 halus).

### 3. Kartu Proyek (Carousel Item)

- **Shadow:** Menambahkan bayangan sangat halus pada gambar utama dan thumbnail untuk memberikan dimensi pada latar putih.
  - Shadow: `shadow-sm` atau kustom `0 4px 20px -2px rgba(0,0,0,0.05)`.

## Rencana Verifikasi

- Memastikan transisi dari Hero ke Projects terlihat mulus tanpa garis pemutus.
- Memverifikasi teks pada label teknologi memiliki kontras yang cukup (AA compliant).
- Memastikan responsivitas tetap terjaga dengan padding baru.
