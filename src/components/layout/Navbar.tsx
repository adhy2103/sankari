'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Dance',
    children: [
      { label: 'Indian Classical Dances', href: '/dance/indian-classical' },
      { label: 'Group Dances', href: '/dance/group-dances' },
      { label: 'Other Dances', href: '/dance/other-dances' },
    ],
  },
  {
    label: 'Music',
    children: [
      { label: 'String Instruments', href: '/music/string-instruments' },
    ],
  },
  { label: 'Our Mentors', href: '/mentors' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

// ─── Scroll hook ─────────────────────────────────────────────────────────────

function useScrollPosition() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}

// ─── Desktop Dropdown ────────────────────────────────────────────────────────

function DesktopDropdown({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = item.children?.some((c) => pathname === c.href);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex items-center gap-1 font-body text-sm font-medium transition-colors duration-200',
          isActive ? 'text-antique-gold' : 'text-warm-ivory hover:text-antique-gold'
        )}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full mt-2 min-w-[220px] rounded-md border border-antique-gold/20 bg-deep-brown py-2 shadow-xl"
          >
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block px-4 py-2 font-body text-sm transition-colors duration-150',
                  pathname === child.href
                    ? 'text-antique-gold'
                    : 'text-warm-ivory hover:bg-royal-maroon/60 hover:text-antique-gold'
                )}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'bg-royal-maroon shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <DesktopDropdown key={item.label} item={item} pathname={pathname} />
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={cn(
                    'font-body text-sm font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'text-antique-gold'
                      : 'text-warm-ivory hover:text-antique-gold'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/admissions"
              className="hidden rounded border border-antique-gold px-4 py-1.5 font-body text-sm font-medium text-antique-gold transition-colors duration-200 hover:bg-antique-gold hover:text-deep-brown lg:inline-flex"
            >
              Join Our Academy
            </Link>

            <button
              className="flex h-9 w-9 items-center justify-center rounded text-warm-ivory lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-down panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 overflow-hidden bg-royal-maroon shadow-xl lg:hidden"
          >
            <nav className="flex flex-col divide-y divide-antique-gold/10 px-4 pb-4">
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  const isOpen = mobileDropdown === item.label;
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() =>
                          setMobileDropdown(isOpen ? null : item.label)
                        }
                        className="flex w-full items-center justify-between py-3 font-body text-sm font-medium text-warm-ivory"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            'transition-transform duration-200',
                            isOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  'block py-2 pl-4 font-body text-sm',
                                  pathname === child.href
                                    ? 'text-antique-gold'
                                    : 'text-warm-ivory/80 hover:text-antique-gold'
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={cn(
                      'block py-3 font-body text-sm font-medium',
                      pathname === item.href
                        ? 'text-antique-gold'
                        : 'text-warm-ivory hover:text-antique-gold'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/admissions"
                  className="block rounded border border-antique-gold px-4 py-2 text-center font-body text-sm font-medium text-antique-gold hover:bg-antique-gold hover:text-deep-brown"
                >
                  Join Our Academy
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
