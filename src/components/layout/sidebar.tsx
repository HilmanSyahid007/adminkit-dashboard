"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  ShoppingCart, 
  LogOut,
  X // Tambah icon X untuk close di HP
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Users", href: "/dashboard/users", icon: Users },
  { title: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
];

// Tambahkan Props agar Sidebar bisa menerima perintah "Close" dari HP
interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background px-4 py-6">
      
      {/* Header Sidebar (Logo + Tombol Close di HP) */}
      <div className="mb-8 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary font-bold text-white">
            A
          </div>
          <span className="text-xl font-bold">AdminKit</span>
        </div>
        
        {/* Tombol Close (Hanya muncul di HP/Layar kecil) */}
        <button 
          onClick={onClose} 
          className="md:hidden text-gray-500 hover:text-red-500"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-1 flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose} // Kalau menu diklik di HP, sidebar otomatis nutup
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                isActive 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto border-t pt-4">
        <Link 
          href="/login" 
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Link>
      </div>
    </aside>
  );
}