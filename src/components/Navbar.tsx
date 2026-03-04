"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import { Link } from '@/i18n/routing';

export default function Navbar() {
    const t = useTranslations('common.nav');
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { href: "/#destination", label: t('destination', { defaultMessage: 'Destination' }) },
        { href: "/#appartement", label: t('appartement', { defaultMessage: 'Appartement' }) },
        { href: "/#prestations", label: t('prestations', { defaultMessage: 'Prestations' }) },
        { href: "/#artdevivre", label: t('artDeVivre', { defaultMessage: 'Art de Vivre' }) },
        { href: "/#contact", label: t('contact', { defaultMessage: 'Contact' }) },
        { href: "/galerie", label: t('galerie', { defaultMessage: 'Galerie' }) },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled || mobileOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'bg-transparent border-b border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className={`text-2xl font-serif tracking-wider uppercase transition-colors duration-500 ${scrolled || mobileOpen ? 'text-gray-900' : 'text-white drop-shadow-md'
                    }`}>Éclat de Lune</Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide uppercase">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={`transition-colors duration-500 ${scrolled ? 'text-gray-600 hover:text-[#A58866]' : 'text-white/90 hover:text-white drop-shadow-sm'
                            }`}>{link.label}</Link>
                    ))}
                    <div className={`border-l h-6 mx-2 transition-colors duration-500 ${scrolled ? 'border-gray-300' : 'border-white/40'
                        }`}></div>
                    <LocaleSwitcher transparent={!scrolled} />
                </nav>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke={scrolled || mobileOpen ? '#1f2937' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke={scrolled ? '#1f2937' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            style={{ filter: scrolled ? 'none' : 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))' }}>
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <nav className="md:hidden flex flex-col items-center gap-4 py-6 text-sm font-medium tracking-wide uppercase bg-white/95 backdrop-blur-md border-t border-gray-100">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 hover:text-[#A58866] transition-colors duration-300"
                            onClick={() => setMobileOpen(false)}
                        >{link.label}</Link>
                    ))}
                    <div className="border-t border-gray-200 w-16 my-1"></div>
                    <LocaleSwitcher transparent={false} />
                </nav>
            )}
        </header>
    );
}
