import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
  trend?: "up" | "down" | "neutral"; // Fitur indikator naik/turun
}

export function StatsCard({ title, value, icon: Icon, description, trend }: StatsCardProps) {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 bg-white dark:bg-slate-900">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium text-muted-foreground text-gray-500">
          {title}
        </h3>
        {/* Ikon dengan warna primary pudar */}
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
             <Icon className="h-4 w-4" />
        </div>
      </div>
      
      <div className="mt-2">
        <div className="text-2xl font-bold">{value}</div>
        <p className={cn(
            "text-xs mt-1",
            trend === "up" ? "text-green-500 font-medium" : 
            trend === "down" ? "text-red-500 font-medium" : "text-gray-500"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
}