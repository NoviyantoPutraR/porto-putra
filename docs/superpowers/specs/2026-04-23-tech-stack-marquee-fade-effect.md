# Desain Efek Fade-Out Tech Stack Marquee

## Deskripsi

Implementasi efek visual "fade-out" pada sisi kiri dan kanan marquee teknologi untuk memberikan kesan logo muncul dan menghilang secara halus (tidak terpotong mendadak di tepi layar).

## Solusi Teknis

Menggunakan properti CSS `mask-image` dengan `linear-gradient` pada kontainer utama marquee.

### Spesifikasi Visual

- **Tipe**: Linear Gradient (Horizontal)
- **Arah**: `to right`
- **Stop Points**:
  - `transparent 0%`: Mulai memudar di tepi paling kiri.
  - `black 20%`: Terlihat penuh pada 20% lebar area.
  - `black 80%`: Mulai memudar kembali pada 80% lebar area.
  - `transparent 100%`: Hilang sepenuhnya di tepi paling kanan.

### Kode CSS Utama

```css
mask-image: linear-gradient(
  to right,
  transparent,
  black 20%,
  black 80%,
  transparent
);
-webkit-mask-image: linear-gradient(
  to right,
  transparent,
  black 20%,
  black 80%,
  transparent
);
```

## Komponen Terdampak

- `src/components/features/tech-stack/TechStackMarquee.tsx`

## Verifikasi

- Memastikan logo tidak terpotong tajam di sisi kiri/kanan.
- Memastikan gradien terasa halus dan simetris.
