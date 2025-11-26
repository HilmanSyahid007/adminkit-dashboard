"use client"; // WAJIB ADA: Karena kita pakai interaksi tombol

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, MoreHorizontal, X } from "lucide-react";

// Dummy Data
const initialUsers = [
  { id: 1, name: "Hilman Syahid", email: "hilman@example.com", role: "Admin", status: "Active", lastLogin: "2 mins ago", image: "/avatars/01.png" },
  { id: 2, name: "Sarah Wijaya", email: "sarah@example.com", role: "Editor", status: "Active", lastLogin: "1 hour ago", image: "" },
  { id: 3, name: "Budi Santoso", email: "budi@example.com", role: "Viewer", status: "Inactive", lastLogin: "3 days ago", image: "" },
];

export default function UsersPage() {
  // State untuk mengatur buka/tutup Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi pura-pura simpan data (biar kerasa interaksinya)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload browser
    alert("Simulasi: User berhasil ditambahkan ke database!");
    setIsModalOpen(false); // Tutup modal setelah submit
  };

  return (
    <div className="space-y-6 relative">
      {/* --- HEADER --- */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground text-gray-500">
            Kelola akses dan data pengguna di sini.
          </p>
        </div>
        {/* TOMBOL ADD NEW USER (Sekarang punya fungsi onClick) */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4" /> Add New User
        </button>
      </div>

      {/* --- SEARCH BAR --- */}
      <div className="flex items-center rounded-lg border bg-white px-3 py-2 shadow-sm dark:bg-slate-900">
        <Search className="mr-2 h-4 w-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Cari nama atau email..." 
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* --- TABEL --- */}
      <div className="rounded-xl border bg-white shadow-sm dark:bg-slate-900 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-slate-800 text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Last Login</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {initialUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        {user.image ? <AvatarImage src={user.image} /> : null}
                        <AvatarFallback className="font-bold text-primary">
                          {user.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.role}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      user.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" :
                      user.status === "Inactive" ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300" :
                      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{user.lastLogin}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- MODAL / POPUP ADD USER --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-slate-900 animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Add New User</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input required type="text" placeholder="John Doe" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:bg-slate-950" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:bg-slate-950" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Role</label>
                  <select className="flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:bg-slate-950">
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <select className="flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:bg-slate-950">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                >
                  Save User
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}