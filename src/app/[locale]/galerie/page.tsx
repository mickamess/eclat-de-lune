"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { galleryImages } from '@/lib/gallery';

export default function GaleriePage() {
    const t = useTranslations('sections.galerie');
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeLightbox = () => setSelectedIndex(null);
    const nextImage = () => setSelectedIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
    const prevImage = () => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-500 hover:text-[#A58866] transition-colors text-sm font-medium uppercase tracking-widest"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        {t('back', { defaultMessage: 'Retour à l\'accueil' })}
                    </Link>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                        {t('pageTitle', { defaultMessage: 'Galerie Complète' })}
                    </h1>
                    <div className="w-24 h-1 bg-[#A58866] mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedIndex(i)}
                            className="relative aspect-square overflow-hidden rounded-sm shadow-md group border border-gray-100 bg-white cursor-pointer"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Hover overlay with an icon to indicate clickability */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Overlay */}
                {selectedIndex !== null && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Prev button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-2 md:left-8 text-white/30 hover:text-white transition-colors p-4 z-50"
                        >
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full p-4 md:p-12 mx-auto flex items-center justify-center select-none" onClick={closeLightbox}>
                            <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
                                <Image
                                    src={galleryImages[selectedIndex].src}
                                    alt={galleryImages[selectedIndex].alt}
                                    fill
                                    className="object-contain"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        </div>

                        {/* Next button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-2 md:right-8 text-white/30 hover:text-white transition-colors p-4 z-50"
                        >
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Status text */}
                        <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 font-light tracking-widest text-sm uppercase">
                            {selectedIndex + 1} / {galleryImages.length}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
