import { redirect } from "next/navigation";

export default function Home() {
  // Langsung lempar user ke halaman dashboard saat website dibuka
  redirect("/dashboard");
}