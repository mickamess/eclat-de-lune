"use client";

import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import { Link } from '@/i18n/routing';

export default function Navbar() {
    const t = useTranslations('common.nav');
    return (
        <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif text-gray-900 tracking-wider uppercase">Éclat de Lune</Link>
                <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide uppercase text-gray-600">
                    <Link href="/#destination" className="hover:text-[#A58866] transition-colors">{t('destination', { defaultMessage: 'Destination' })}</Link>
                    <Link href="/#appartement" className="hover:text-[#A58866] transition-colors">{t('appartement', { defaultMessage: 'Appartement' })}</Link>
                    <Link href="/#prestations" className="hover:text-[#A58866] transition-colors">{t('prestations', { defaultMessage: 'Prestations' })}</Link>
                    <Link href="/#artdevivre" className="hover:text-[#A58866] transition-colors">{t('artDeVivre', { defaultMessage: 'Art de Vivre' })}</Link>
                    <Link href="/#contact" className="hover:text-[#A58866] transition-colors">{t('contact', { defaultMessage: 'Contact' })}</Link>
                    <Link href="/galerie" className="hover:text-[#A58866] transition-colors">{t('galerie', { defaultMessage: 'Galerie' })}</Link>
                    <div className="border-l border-gray-300 h-6 mx-2"></div>
                    <LocaleSwitcher />
                </nav>
            </div>
        </header>
    );
}
