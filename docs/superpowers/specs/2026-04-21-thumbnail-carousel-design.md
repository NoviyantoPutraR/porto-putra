# Design Spec: "My Projects" — Thumbnail Carousel

## Purpose

Replace the existing parallax-style carousel with a **Thumbnail Carousel** layout inspired by a classic image gallery pattern. The main area shows one large featured project image with overlay text, while a row of clickable thumbnails below allows users to switch between projects.

## Architecture & Behavior

### 1. Layout

- **Main Display (Top)**: A large image container with aspect ratio ~3:2 occupying full container width (max 1044px centered). The active project image is displayed here with a gradient overlay at the bottom.
- **Overlay Content**: On top of the gradient overlay at the bottom of the main image — project title, short description, tech stack badges, year, role, and external links (GitHub / Live Demo).
- **Thumbnail Row (Bottom)**: A horizontal row of square thumbnail images (1:1 ratio). The active thumbnail has a visible ring/border indicator. Clicking a thumbnail switches the main display.

### 2. Interaction

- **Click thumbnail** → Main image transitions with a cross-fade animation (Framer Motion `AnimatePresence`).
- **No modal** — All project information is displayed inline within the overlay content area.
- **Auto-play (optional)** — Thumbnails cycle automatically every 5 seconds, paused on hover.
- **Keyboard navigation** — Arrow keys can cycle through projects.

### 3. Animation

- Main image: cross-fade transition (`opacity: 0 → 1`) using `AnimatePresence` with `mode="wait"`.
- Thumbnail active indicator: smooth border/ring transition via CSS `transition`.

## Unit Boundaries

- `ProjectCarousel.tsx` — Single self-contained component with React state (`activeIndex`). No external carousel library needed.
- `ProjectDetailModal.tsx` — **Deleted**. No longer used.
- `ProyekDetail` type — Moved into `ProjectCarousel.tsx` or a shared types file.

## Data Model

Uses the existing `ProyekDetail` interface with all fields (title, descriptions, tech stack, image, links, year, role). No schema changes needed.
