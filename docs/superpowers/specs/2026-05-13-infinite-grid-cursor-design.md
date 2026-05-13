# Design Spec: Infinite Grid Background (Global Cursor Reveal)

**Tanggal:** 2026-05-13  
**Fitur:** Efek infinite grid animasi dengan cursor reveal berbasis `framer-motion`  
**Status:** Disetujui, siap implementasi

---

## Latar Belakang

Portfolio Noviyanto Putra memerlukan elemen visual interaktif yang meningkatkan kesan premium
tanpa mengganggu keterbacaan konten. Infinite grid dengan efek cursor reveal adalah solusi yang:

- Menambah kedalaman visual secara subtle di latar terang (light theme)
- Memberikan umpan balik interaktif yang elegan terhadap gerakan kursor pengguna
- Menggunakan `framer-motion` yang sudah tersedia di proyek (tanpa dependency baru)

---

## Keputusan Desain

| Aspek           | Keputusan                                                      |
| --------------- | -------------------------------------------------------------- |
| Cakupan efek    | Global — seluruh halaman (semua section)                       |
| Tema            | Light (background putih, dipertahankan)                        |
| Glow blobs      | Hanya aktif di Hero section (`#beranda`), fade out saat scroll |
| Dependency baru | Tidak ada — `framer-motion` sudah terpasang                    |

---

## Arsitektur

### Pendekatan: Fixed Background Layer

Satu komponen `InfiniteGridBackground` di-render di dalam `App.tsx` di posisi pertama
sebelum `<Navbar>`. Komponen menggunakan `position: fixed` + `pointer-events: none`
sehingga bekerja global di semua section tanpa memblokir interaksi pengguna.

### Struktur Komponen

```
InfiniteGridBackground (main export)
├── useGridState()              ← custom hook: manajemen state mouse & scroll offset
├── <GridPattern />             ← sub-component: SVG grid dengan motion.pattern
└── <GlowBlobs />               ← sub-component: 3 blob warna (conditional di Hero)
```

**Prinsip:** Setiap unit memiliki satu tanggung jawab yang jelas dan dapat dipahami
tanpa membaca unit lain.

---

## Spesifikasi File

### [BARU] `src/components/ui/InfiniteGridBackground.tsx`

**Estimasi:** ~120 baris (di bawah batas 200 baris)

#### `useGridState` (custom hook)

- `mouseX`, `mouseY`: `useMotionValue` — posisi kursor di viewport
- `gridOffsetX`, `gridOffsetY`: `useMotionValue` — offset scroll grid animasi
- `useAnimationFrame`: menambah offset `0.5px` per frame, mod 40 (ukuran sel grid)
- `window.addEventListener('mousemove')` — tracking global, di-cleanup saat unmount
- `heroVisible`: `boolean` state via `IntersectionObserver` pada elemen `#beranda`

#### `GridPattern` (sub-component)

- SVG dengan `<motion.pattern>` yang menerima `offsetX` dan `offsetY`
- Ukuran sel: `40x40px`
- Warna garis: `text-muted-foreground` (Tailwind) → abu-abu di light mode
- `stroke-width: 1`

#### `GlowBlobs` (sub-component)

- Menerima prop `visible: boolean`
- Dibungkus `<AnimatePresence>` untuk fade in/out smooth (durasi 1 detik)
- 3 blob:
  - Kanan atas: `bg-orange-400/15`, `blur-[120px]`
  - Tengah atas: `bg-primary/10`, `blur-[100px]`
  - Kiri bawah: `bg-blue-400/15`, `blur-[120px]`

#### Layer Stack (z-index)

| Layer       | Posisi                      | Z-index | Keterangan                                                |
| ----------- | --------------------------- | ------- | --------------------------------------------------------- |
| Grid Statis | `position: fixed, inset: 0` | `z-[0]` | Opacity 5%, selalu bergerak                               |
| Grid Mask   | `position: fixed, inset: 0` | `z-[1]` | Opacity 20%, cursor reveal via radial-gradient mask 300px |
| Glow Blobs  | `position: fixed, inset: 0` | `z-[0]` | Conditional, fade via AnimatePresence                     |

Seluruh komponen: `pointer-events: none` — tidak pernah memblokir klik.

### [MODIFIKASI] `src/App.tsx`

Penambahan minimal:

```tsx
import { InfiniteGridBackground } from "@/components/ui/InfiniteGridBackground";

// Di dalam <main>:
<InfiniteGridBackground heroSectionId="beranda" />;
```

`heroSectionId` diteruskan ke `IntersectionObserver` untuk mengamati elemen dengan
`id="beranda"` yang sudah ada di `HeroSection.tsx`.

---

## Penyesuaian Visual Light Theme

| Parameter            | Komponen Asli      | Adaptasi                     |
| -------------------- | ------------------ | ---------------------------- |
| Grid bg opacity      | `opacity-[0.05]`   | **Tetap**                    |
| Grid mask opacity    | `opacity-40`       | **Dikurangi** → `opacity-20` |
| Cursor reveal radius | `300px`            | **Tetap**                    |
| Grid cell size       | `40x40px`          | **Tetap**                    |
| Scroll speed         | `0.5px/frame`      | **Tetap**                    |
| Blob oranye          | `bg-orange-500/40` | → `bg-orange-400/15`         |
| Blob primary         | `bg-primary/30`    | → `bg-primary/10`            |
| Blob biru            | `bg-blue-500/40`   | → `bg-blue-400/15`           |

---

## Rencana Verifikasi

### Manual — Browser `http://localhost:5173`

1. **Grid animasi** — Buka halaman, pastikan grid halus bergerak perlahan di background
2. **Cursor reveal** — Gerakkan kursor di Hero section → area grid terang mengikuti kursor
3. **Global effect** — Scroll ke section lain (About, Projects, dst.), cursor reveal tetap bekerja
4. **Glow blobs saat di Hero** — Scroll kembali ke atas → 3 blob warna muncul fade in
5. **Glow blobs fade out** — Scroll ke bawah melewati Hero → blob menghilang smooth
6. **Tidak memblokir interaksi** — Klik semua tombol dan link, pastikan semua berfungsi normal
7. **Responsif** — Cek di viewport mobile (375px) dan tablet (768px), tidak ada artefak visual

---

## Batasan & Asumsi

- `id="beranda"` sudah ada di `HeroSection.tsx` (dikonfirmasi dari kode)
- `framer-motion` sudah terpasang (dikonfirmasi dari `package.json` via `HeroSection.tsx`)
- Tidak ada perubahan pada komponen lain selain `App.tsx`
- Komponen asli dari prompt (`the-infinite-grid.tsx`) **tidak** di-copy langsung —
  direfaktor menjadi arsitektur yang lebih modular dan sesuai konvensi proyek
