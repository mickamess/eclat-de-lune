"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { galleryImages } from '@/lib/gallery';

export default function Galerie() {
    const t = useTranslations('sections.galerie');

    // Only show 3 images on the main page
    const featuredImages = galleryImages.slice(0, 3);

    return (
        <section className="py-24 bg-gray-50" id="galerie">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-sm tracking-widest uppercase text-[#A58866] font-semibold block mb-4">Immersion</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                        {t('title', { defaultMessage: 'La Galerie' })}
                    </h2>
                    <div className="w-24 h-1 bg-[#A58866] mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredImages.map((image, i) => (
                        <div key={i} className="relative aspect-square overflow-hidden rounded-sm shadow-md group border border-gray-100 bg-white">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/galerie"
                        className="inline-block bg-transparent border border-gray-900 text-gray-900 px-10 py-4 font-medium uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300"
                    >
                        {t('viewMore', { defaultMessage: 'Voir toute la galerie' })}
                    </Link>
                </div>
            </div>
        </section>
    );
}
