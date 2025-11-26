import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground text-gray-500">
          Atur preferensi profil akun anda.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm dark:bg-slate-900">
        <form className="space-y-6">
          
          {/* Section: Profile */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <input type="text" defaultValue="Hilman Syahid" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none dark:bg-slate-950" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" defaultValue="hilman@example.com" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none dark:bg-slate-950" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <textarea className="flex min-h-[100px] w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none dark:bg-slate-950" 
            defaultValue="Saya adalah seorang Frontend Developer yang suka ngoding Next.js." />
          </div>

          <div className="border-t pt-6"></div>

          {/* Section: Notifications */}
          <div className="space-y-4">
             <h3 className="text-lg font-medium">Notifications</h3>
             <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <label className="text-base font-medium">Email Marketing</label>
                    <p className="text-sm text-gray-500">Terima email update fitur baru.</p>
                </div>
                <input type="checkbox" className="h-5 w-5 accent-primary" defaultChecked />
             </div>
             <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <label className="text-base font-medium">Security Alerts</label>
                    <p className="text-sm text-gray-500">Notifikasi jika ada login mencurigakan.</p>
                </div>
                <input type="checkbox" className="h-5 w-5 accent-primary" defaultChecked />
             </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
                <Save className="h-4 w-4" /> Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}