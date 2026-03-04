"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ArtDeVivre() {
    const t = useTranslations('sections.artDeVivre');
    return (
        <section className="py-24 bg-white" id="artdevivre">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="md:w-1/2 relative w-full aspect-square rounded-sm overflow-hidden shadow-2xl">
                        <Image
                            src="/images/interior_1.png"
                            alt="Art de vivre interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-sm tracking-widest uppercase text-[#A58866] font-semibold block mb-4">L'Expérience</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900 leading-tight">
                            {t('title', { defaultMessage: 'L\'Art de Vivre' })}
                        </h2>
                        <div className="w-24 h-1 bg-[#A58866] mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            {t('description', { defaultMessage: 'L\'Art de vivre details placeholder...' })}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
