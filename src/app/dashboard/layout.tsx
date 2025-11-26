"use client"; // Wajib use client karena ada interaksi tombol

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Menu } from "lucide-react"; // Icon Garis Tiga

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State untuk mengatur apakah Sidebar terbuka atau tertutup (di HP)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      
      {/* 1. MOBILE HEADER (Hanya muncul di HP) */}
      <div className="flex items-center justify-between border-b bg-white p-4 md:hidden">
        <div className="flex items-center gap-2 font-bold text-xl">
           <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">A</div>
           AdminKit
        </div>
        <button onClick={() => setIsSidebarOpen(true)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* 2. SIDEBAR WRAPPER */}
      {/* Logic CSS: 
          - Desktop (md:flex): Selalu muncul (block)
          - Mobile: Default hidden, tapi kalau isSidebarOpen=true jadi fixed (numpuk diatas)
      */}
      <div className={`
        fixed inset-y-0 z-50 bg-white transition-transform duration-300 ease-in-out md:static md:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* 3. OVERLAY GELAP (Background Hitam Transparan saat Sidebar HP terbuka) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* 4. KONTEN UTAMA */}
      <main className="flex-1 bg-muted/10 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}