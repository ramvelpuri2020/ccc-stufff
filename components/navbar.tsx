"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#0a0a16] text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          </div>
          <span className="text-xl font-semibold text-purple-400">QuitBet</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-gray-300 hover:text-purple-400">
            Features
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400">
            About
          </Link>
          <Link href="/testimonials" className="text-gray-300 hover:text-purple-400">
            Testimonials
          </Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-purple-400">
            Dashboard
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-full px-8">DOWNLOAD</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0d0d1f] py-4">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            <Link
              href="/features"
              className="text-gray-300 hover:text-purple-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-purple-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-300 hover:text-purple-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-purple-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Button
              className="bg-purple-600 hover:bg-purple-700 rounded-full w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              DOWNLOAD
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
