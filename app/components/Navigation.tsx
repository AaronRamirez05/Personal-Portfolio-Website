'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/powerlifting', label: 'Powerlifting' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-accent-purple/20 via-background/90 to-background/80 backdrop-blur-md border-b border-accent-purple/30">
      <div className="max-w-6xl mx-auto px-6 py-2">
        {/* Desktop Navigation */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Left nav items */}
          <ul className="flex gap-12 justify-start">
            {links.slice(0, 3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    pathname === link.href
                      ? 'text-white font-semibold'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity flex justify-center">
            <img
              src="/portfolioLogo.png"
              alt="Portfolio Logo"
              className="h-16 w-auto"
              style={{ filter: 'brightness(2.5) contrast(1.5)' }}
            />
          </Link>

          {/* Right nav items */}
          <ul className="flex gap-12 justify-end">
            {links.slice(3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    pathname === link.href
                      ? 'text-white font-semibold'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/portfolioLogo.png"
              alt="Portfolio Logo"
              className="h-12 w-auto"
              style={{ filter: 'brightness(2.5) contrast(1.5)' }}
            />
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:text-accent-cyan transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm uppercase tracking-wider transition-colors ${
                      pathname === link.href
                        ? 'text-white font-semibold'
                        : 'text-muted hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
