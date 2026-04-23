import { create } from 'zustand'

/**
 * UI Store: Mengelola state UI global seperti tema atau status sidebar.
 * Menerapkan prinsip 'rerender-split-combined-hooks' dengan memisahkan pemilihan state.
 */
interface UIState {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}))

// Selector khusus untuk efisiensi re-render
export const useIsMenuOpen = () => useUIStore((state) => state.isMenuOpen)
export const useUIActions = () => useUIStore((state) => ({
  toggleMenu: state.toggleMenu,
  closeMenu: state.closeMenu,
}))
