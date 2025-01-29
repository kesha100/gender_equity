import Link from "next/link"
import type React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      <header className="bg-white shadow-md z-10">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <Link href="/" className="text-2xl font-bold text-purple-700">
            Gender Equity
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/meaning" className="hover:text-purple-700 transition-colors">
                What It Means
              </Link>
            </li>
            <li>
              <Link href="/lehigh-role" className="hover:text-purple-700 transition-colors">
                Lehigh's Role
              </Link>
            </li>
            <li>
              <Link href="/vision" className="hover:text-purple-700 transition-colors">
                Vision
              </Link>
            </li>
            <li>
              <Link href="/take-action" className="hover:text-purple-700 transition-colors">
                Take Action
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">{children}</main>
      <footer className="bg-purple-700 text-white p-8 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">
            "Gender equity is not a women's issue—it's a human issue. Let's build a future where everyone can succeed."
          </p>
          <p className="text-sm">© 2023 Aruuke Atabekova LIN: 800184902. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

