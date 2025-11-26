import { ShoppingBag, Filter } from "lucide-react";

const orders = [
  { id: "ORD-001", customer: "Hilman Syahid", product: "Premium Plan", amount: "$99.00", date: "2024-03-10", status: "Paid" },
  { id: "ORD-002", customer: "Sarah Wijaya", product: "UI Kit Bundle", amount: "$29.00", date: "2024-03-09", status: "Processing" },
  { id: "ORD-003", customer: "Budi Santoso", product: "Dashboard Template", amount: "$49.00", date: "2024-03-08", status: "Failed" },
  { id: "ORD-004", customer: "Dewi Persik", product: "E-Book React", amount: "$19.00", date: "2024-03-08", status: "Paid" },
  { id: "ORD-005", customer: "Agus Kotak", product: "Consultation", amount: "$150.00", date: "2024-03-07", status: "Paid" },
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <p className="text-muted-foreground text-gray-500">
            Daftar transaksi terbaru masuk.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:bg-slate-900 dark:border-slate-800">
          <Filter className="h-4 w-4" /> Filter Date
        </button>
      </div>

      <div className="rounded-xl border bg-white shadow-sm dark:bg-slate-900 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 dark:bg-slate-800 text-gray-500">
            <tr>
              <th className="px-6 py-4 font-medium">Order ID</th>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Product</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.product}</td>
                <td className="px-6 py-4 text-gray-500">{order.date}</td>
                <td className="px-6 py-4 font-bold">{order.amount}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    order.status === "Paid" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" :
                    order.status === "Processing" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" :
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}