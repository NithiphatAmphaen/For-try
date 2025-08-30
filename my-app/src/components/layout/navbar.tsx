"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hook/useToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm z-30 bg-white/30 dark:bg-slate-900/30 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">MyApp</h1>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`block py-2 hover:text-orange-500 ${isDark ? 'text-white': ''}`}>Home</Link>
          <Link href="/about" className={`block py-2 hover:text-orange-500 ${isDark ? 'text-white': ''}`}>About</Link>
          <Link href="/main/login" className={`block py-2 hover:text-orange-500 ${isDark ? 'text-white': ''}`}>Login</Link>
          <button onClick={toggleDarkMode} className="ml-2 hover:text-orange-500 transition-colors">
            {isDark ? <Sun size={20} className="text-white"/> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden mr-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2 space-y-2">
          <Link href="/" className={`block py-2 hover:text-orange-500 ${isDark ? 'text-white': ''}`}>Home</Link>
          <Link href="/about" className={`block py-2 hover:text-orange-500 ${isDark ? 'text-white': ''}`}>About</Link>
          <Link href="/main/login" className={`block py-2 hover:text-orange-500 ${isDark ? 'text-white': ''}`}>Login</Link>
          <button onClick={toggleDarkMode} className={`py-2 hover:text-orange-500 flex items-center ${isDark ? 'text-white': ''}`}>
            {isDark ? <Sun size={18} className="mr-2" /> : <Moon size={18} className="mr-2" />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
