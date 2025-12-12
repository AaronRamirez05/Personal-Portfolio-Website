'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/powerlifting', label: 'Powerlifting' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-muted transition-colors">
            Portfolio
          </Link>
          <ul className="flex gap-8">
            {links.map((link) => (
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
      </div>
    </nav>
  );
}
