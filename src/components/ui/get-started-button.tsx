import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

/**
 * PelajariSelengkapnyaTombol (GetStartedButton) — Tombol kustom dengan animasi premium.
 * Mengikuti standar Bahasa Indonesia sesuai aturan user.
 */
export function GetStartedButton({ 
  label = "View My Projects", 
  onClick 
}: { 
  label?: string; 
  onClick?: () => void;
}) {
  return (
    <Button 
      className="group relative overflow-hidden bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] rounded-full h-[44px] px-[24px] text-sm transition-all duration-300"
      size="lg"
      onClick={onClick}
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0 font-medium">
        {label}
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-10 place-items-center transition-all duration-500 bg-white/10 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-white">
        <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" />
      </i>
    </Button>
  );
}
