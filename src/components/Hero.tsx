"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
    const t = useTranslations('hero');
    return (
        <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_bg.webp"
                    alt="Valmorel Éclat de Lune Background"
                    fill
                    className="object-cover"
                />
                {/* Gradient overlay: darker at top (for navbar) and bottom, lighter in center */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50" />
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 uppercase tracking-widest drop-shadow-lg">
                    {t('title', { defaultMessage: 'Éclat de Lune' })}
                </h1>
                <p className="text-xl md:text-3xl text-gray-200 font-light max-w-3xl mx-auto drop-shadow-md">
                    {t('subtitle', { defaultMessage: 'Valmorel la belle' })}
                </p>
            </div>
        </section>
    );
}
