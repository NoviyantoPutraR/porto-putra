# Desain Animasi Staggered Pop Tech Stack

## Deskripsi

Implementasi animasi masuk di mana logo teknologi muncul satu per satu dengan efek perbesaran (scale) dan pemudaran (fade) saat seksi memasuki layar.

## Solusi Teknis

Menggunakan Framer Motion `variants` dan `whileInView` untuk memicu animasi.

### Spesifikasi Gerakan

- **Trigger**: `whileInView` (sekali saja saat masuk viewport).
- **Animasi Unit**:
  - `initial`: `scale: 0`, `opacity: 0`
  - `animate`: `scale: 1`, `opacity: 1`
  - `transition`: Tipe `spring` untuk memberikan kesan kenyal (pop).
- **Stagger**: Jeda antar logo sekitar `0.1 detik`.

### Struktur Komponen

- Menambahkan `viewport={{ once: true }}` agar animasi tidak berulang setiap kali di-scroll (untuk efisiensi).
- Menggunakan `variants` pada kontainer untuk mengatur `staggerChildren`.

## Komponen Terdampak

- `src/components/features/tech-stack/TechStackMarquee.tsx`

## Verifikasi

- Memastikan logo muncul berurutan dari kiri ke arah kanan (pada tampilan awal).
- Memastikan animasi marquee tetap berjalan mulus setelah animasi masuk selesai.
