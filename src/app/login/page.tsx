import Link from "next/link";
import { Command, Github, Mail } from "lucide-react"; // Ikon

export default function LoginPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      
      {/* 1. BAGIAN KIRI (Branding & Testimoni) - Hilang di HP */}
      <div className="relative hidden h-full flex-col bg-zinc-900 p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Command className="mr-2 h-6 w-6" /> AdminKit Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Template dashboard ini sangat membantu mempercepat pekerjaan saya. 
              Desainnya bersih, kodenya rapi, dan fiturnya lengkap. Sangat recommended!&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis - Fullstack Developer</footer>
          </blockquote>
        </div>
      </div>

      {/* 2. BAGIAN KANAN (Form Login) */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login to Account
            </h1>
            <p className="text-sm text-gray-500">
              Masukkan email dan password untuk masuk
            </p>
          </div>

          <div className="grid gap-6">
            <form>
              <div className="grid gap-4">
                {/* Input Email */}
                <div className="grid gap-2">
                  <label className="text-sm font-medium leading-none" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                {/* Input Password */}
                <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium leading-none" htmlFor="password">
                            Password
                        </label>
                        <Link href="#" className="text-sm font-medium text-primary hover:underline">
                            Lupa password?
                        </Link>
                    </div>
                  <input
                    id="password"
                    type="password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Tombol Sign In */}
                <Link href="/dashboard"> 
                {/* Kita pakai Link biar bisa diklik langsung masuk dashboard (Simulasi) */}
                    <button className="inline-flex w-full items-center justify-center rounded-md bg-primary py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">
                    Sign In
                    </button>
                </Link>
              </div>
            </form>

            {/* Divider "Or continue with" */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-gray-500 bg-white dark:bg-slate-950">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Button (Github) */}
            <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-transparent py-2.5 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none disabled:opacity-50">
              <Github className="mr-2 h-4 w-4" />
              Github
            </button>
          </div>

          <p className="px-8 text-center text-sm text-gray-500">
            Belum punya akun?{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Daftar disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}