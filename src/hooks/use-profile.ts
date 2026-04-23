import { useQuery } from '@tanstack/react-query'

/**
 * Hook untuk mengambil data profil pengguna.
 * Menerapkan pola fetching yang dapat diparalelkan.
 */
export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      // Simulasi delay API
      await new Promise(resolve => setTimeout(resolve, 1000))
      return {
        name: "Antigravity",
        role: "Senior AI Coding Assistant",
        bio: "Membangun solusi perangkat lunak yang aman, scalable, dan elegan.",
      }
    },
  })
}
