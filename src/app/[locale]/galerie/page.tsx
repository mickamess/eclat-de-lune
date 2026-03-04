import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { galleryImages } from '@/lib/gallery';

export default function GaleriePage() {
    const t = useTranslations('sections.galerie');

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
            </div>
        </div>
    );
}
