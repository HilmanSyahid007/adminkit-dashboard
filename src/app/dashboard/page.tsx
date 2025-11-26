import { StatsCard } from "@/components/dashboard/statsCard";
import { OverviewChart } from "@/components/dashboard/overviewChart"; // Import baru
import { RecentSales } from "@/components/dashboard/recentSales"; // Import baru
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground text-gray-500">
          Overview performa bisnis anda hari ini.
        </p>
      </div>

      {/* Area Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Revenue" value="$45,231.89" icon={DollarSign}
          description="+20.1% dari bulan lalu" trend="up"
        />
        <StatsCard 
          title="Subscriptions" value="+2350" icon={Users}
          description="+180 user baru bergabung" trend="up"
        />
        <StatsCard 
          title="Sales" value="+12,234" icon={CreditCard}
          description="+19% penjualan produk" trend="up"
        />
        <StatsCard 
          title="Active Now" value="+573" icon={Activity}
          description="-14 user sejak jam terakhir" trend="down"
        />
      </div>

      {/* Area Grafik & Recent Sales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        
        {/* Grafik (Mengambil 4 kolom grid) */}
        <div className="col-span-4 rounded-xl border bg-white dark:bg-slate-900 shadow-sm">
            <div className="p-6">
                <h3 className="font-bold text-lg">Overview</h3>
                <p className="text-sm text-gray-500 mb-4">Pendapatan tahun ini</p>
                <OverviewChart />
            </div>
        </div>

        {/* Recent Sales (Mengambil 3 kolom grid) */}
        <div className="col-span-3 rounded-xl border bg-white dark:bg-slate-900 shadow-sm">
            <div className="p-6">
                <h3 className="font-bold text-lg mb-4">Recent Sales</h3>
                <p className="text-sm text-gray-500 mb-6">Ada 265 penjualan bulan ini.</p>
                <RecentSales />
            </div>
        </div>

      </div>
    </div>
  );
}