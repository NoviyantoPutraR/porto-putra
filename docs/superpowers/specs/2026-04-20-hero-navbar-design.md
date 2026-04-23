# Hero Section & Navbar — Design Spec

**Date:** 2026-04-20
**Status:** Approved

## Overview

Design specification for the Hero Section and Navbar of **Putra's** professional portfolio website. The portfolio is fully in **English**. The visual language is clean, white-based minimalism with smooth micro-interactions using Framer Motion.

---

## Design System

### Color Palette

| Token      | Value     | Usage                            |
| ---------- | --------- | -------------------------------- |
| Background | `#FFFFFF` | Page background                  |
| Foreground | `#0a0a0a` | Primary text, headings           |
| Muted      | `#6b7280` | Secondary text, descriptions     |
| Border     | `#e5e7eb` | Subtle dividers and card borders |
| Accent     | `#22c55e` | "Available" badge indicator dot  |

### Typography (Roboto — Google Fonts)

Font import:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
  rel="stylesheet"
/>
```

| Level       | Size                         | Weight | Usage                   |
| ----------- | ---------------------------- | ------ | ----------------------- |
| H1          | `4rem` → `6rem` (responsive) | `700`  | Hero headline / name    |
| H2          | `1.5rem`                     | `600`  | Section subheadings     |
| Body Strong | `1rem`                       | `600`  | Bold description        |
| Body Muted  | `1rem`                       | `400`  | Secondary description   |
| Badge       | `0.75rem`                    | `500`  | Status badge, uppercase |

### Spacing System

8px grid: `0.5rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`, `6rem`.

---

## Navbar

### Layout

```
[Logo: "Putra"]          [Home] [My Projects] [About Me] [Tech Stack] [Contact]
```

### Behavior

| State            | Style                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| At top (default) | Transparent background, `#0a0a0a` text, no shadow                                                               |
| After scroll     | `background: rgba(255,255,255,0.8)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid rgba(0,0,0,0.06)` |

### Specifications

- Position: `fixed`, `z-index: 50`
- Padding: `1rem 2rem`
- Logo: `"Putra"`, Roboto `700`, `1.25rem`
- Menu items: Roboto `500`, `0.875rem`, slight letter-spacing
- State transition: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Menu item hover: color fades to `#6b7280`, `transition: 0.2s`

### Component

- `src/components/features/navbar/Navbar.tsx`
- Contains its own `useEffect` scroll listener for state management.
- Imported directly (no barrel file).

---

## Hero Section

### Approved Approach: Classic Split (Option A)

Two-column grid layout — photo on the left, content on the right.

### ASCII Wireframe

```
┌────────────────────────────────────────────────────────────┐
│  NAVBAR (fixed)                                            │
├─────────────────────┬──────────────────────────────────────┤
│                     │  🟢 AVAILABLE FOR NEW PROJECTS       │
│   📷 PHOTO CARD     │                                      │
│   (upright,         │  Hi! I am                            │
│    rounded,         │  Putra                               │
│    subtle border,   │                                      │
│    shadow)          │  Engineering High-Performance Web    │
│                     │  Apps with AI-Driven Features.      │
│   Hover → -3deg     │                                      │
│   Framer Motion     │  Experienced in building clean...   │
│                     │  (muted color)                       │
│                     │                                      │
│                     │  [View My Projects] [Contact Me]     │
└─────────────────────┴──────────────────────────────────────┘
```

### Content

| Element           | Value                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Badge             | `🟢 Available for New Projects`                                                                                                                                   |
| H1 Line 1         | `Hi! I am`                                                                                                                                                        |
| H1 Line 2         | `Putra`                                                                                                                                                           |
| Bold Description  | `Engineering High-Performance Web Apps with AI-Driven Features.`                                                                                                  |
| Muted Description | `Experienced in building clean, responsive full-stack architectures. Combining code precision with the power of AI to create more intuitive digital experiences.` |
| Primary CTA       | `View My Projects` — `bg: #0a0a0a`, white text, `rounded-full`                                                                                                    |
| Secondary CTA     | `Contact Me` — transparent, border `#0a0a0a`, `rounded-full`, hover fill                                                                                          |

### Layout Specifications

| Property           | Value                             |
| ------------------ | --------------------------------- |
| Grid columns       | `grid-cols-[2fr_3fr]`, gap `4rem` |
| Min height         | `100vh`                           |
| Vertical alignment | `items-center`                    |
| Max width          | `max-w-6xl mx-auto px-6`          |

### Photo Card (`PhotoCard.tsx`)

| Property      | Value                                                                               |
| ------------- | ----------------------------------------------------------------------------------- |
| Default state | Upright, `border-radius: 1.5rem`, `border: 2px solid #e5e7eb`, `box-shadow: subtle` |
| Hover state   | `rotate(-3deg)`, triggered on hover of the entire Hero section area                 |
| Animation     | Framer Motion `whileHover={{ rotate: -3 }}`, `transition: spring`                   |

### Entrance Animations (Stagger)

All text elements animate in sequentially on page load:

- `opacity: 0 → 1`
- `y: 20px → 0px`
- Duration: `0.5s`, easing: `[0.4, 0, 0.2, 1]`
- Stagger delay: `0.1s` between each element

### Responsive Behavior

| Breakpoint               | Layout                                                       |
| ------------------------ | ------------------------------------------------------------ |
| Desktop (`lg+`, ≥1024px) | 2-column grid                                                |
| Mobile/Tablet (`< lg`)   | Stacked vertical: photo centered on top, text centered below |

### Components

| File                                           | Responsibility                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------ |
| `src/components/features/hero/HeroSection.tsx` | Replaces existing file. Orchestrates layout and stagger animation. |
| `src/components/features/hero/PhotoCard.tsx`   | Isolated photo card with hover rotation animation.                 |
| `src/components/features/navbar/Navbar.tsx`    | New file. Manages fixed navbar with scroll-based style switching.  |

---

## Verification

- [ ] Navbar transitions smoothly on scroll
- [ ] Photo card rotates on hover
- [ ] All text animates in on page load
- [ ] Layout stacks correctly on mobile
- [ ] Fonts load from Google Fonts (Roboto)
- [ ] All labels and copy are in English
