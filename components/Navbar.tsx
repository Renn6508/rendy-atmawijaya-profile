'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar({ companyName }: { companyName?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-zinc-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-md border-b border-zinc-200'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            {companyName || 'Portfolio'}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors relative group"
            >
              Tentang
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all group-hover:w-full" />
            </a>
            <a
              href="#services"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors relative group"
            >
              Layanan
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all group-hover:w-full" />
            </a>
            <a
              href="#values"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors relative group"
            >
              Nilai
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all group-hover:w-full" />
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors relative group"
            >
              Kontak
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all group-hover:w-full" />
            </a>
            <Link
              href="/"
              className="px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-700 transition-all hover:scale-105"
            >
              Semua Perusahaan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-zinc-200">
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Tentang
                </a>
                <a
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Layanan
                </a>
                <a
                  href="#values"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Nilai
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Kontak
                </a>
                <Link
                  href="/"
                  className="block px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg text-center hover:bg-zinc-700 transition-colors"
                >
                  Semua Perusahaan
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
