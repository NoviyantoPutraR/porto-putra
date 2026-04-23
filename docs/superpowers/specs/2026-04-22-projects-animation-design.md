# Animasi Seksi My Works — Spesifikasi Desain

**Tanggal:** 2026-04-22
**Status:** Sedang Ditinjau

## Gambaran Umum

Spesifikasi ini mendefinisikan perilaku animasi kemunculan (_entry animation_) untuk seksi "My Works" menggunakan Framer Motion. Tujuannya adalah menciptakan pengalaman yang dipandu secara visual saat pengguna menggulir halaman ke bagian proyek.

## Spesifikasi Animasi (Konsep: Rhythmic Assembly)

### 1. Kontainer Utama (Scroll Trigger)

- **Trigger**: Deteksi saat seksi masuk viewport (`whileInView`).
- **Margin Viewport**: `-100px` (animasi dimulai saat seksi sudah masuk cukup jauh).
- **Trigger Sekali**: `viewport: { once: true }`.

### 2. Judul Seksi ("My Works.")

- **Awal (Initial)**: `y: 30`, `opacity: 0`.
- **Akhir (Animate)**: `y: 0`, `opacity: 1`.
- **Transisi**: `duration: 0.8`, `ease: [0.33, 1, 0.68, 1]`.

### 3. Carousel Slides (Gambar Utama & Detail)

- **Awal (Initial)**: `y: 50`, `opacity: 0`.
- **Akhir (Animate)**: `y: 0`, `opacity: 1`.
- **Transisi**: `duration: 0.8`, `delay: 0.2`, `ease: [0.33, 1, 0.68, 1]`.

### 4. Thumbnail List (Staggered Animation)

- **Kontainer Thumbnail**:
  - `staggerChildren: 0.05`.
  - `delayChildren: 0.4`.
- **Item Thumbnail**:
  - **Awal (Initial)**: `scale: 0.9`, `opacity: 0`.
  - **Akhir (Animate)**: `scale: 1`, `opacity: 1`.
  - **Transisi**: `type: "spring"`, `stiffness: 260`, `damping: 20`.

## Verifikasi

- [ ] Judul muncul lebih dulu dengan gerakan halus ke atas.
- [ ] Carousel utama menyusul di belakang judul.
- [ ] Thumbnail muncul secara berurutan dengan efek pegas (_spring_).
- [ ] Animasi hanya dipicu satu kali saat pengguna pertama kali menggulir ke seksi tersebut.
