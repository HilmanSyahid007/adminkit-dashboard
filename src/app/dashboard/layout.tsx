import { Sidebar } from "@/components/layout/sidebar"; // Pastikan path import ini benar

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-muted/10 p-8">
        {children}
      </main>
    </div>
  );
}