"use client";

import { useTranslations } from 'next-intl';

export default function Fiscalite() {
    const t = useTranslations('sections.fiscalite');
    return (
        <section className="py-32 bg-[#A58866] text-white" id="fiscalite">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                    {t('title', { defaultMessage: 'Fiscalité & Investissement' })}
                </h2>
                <div className="w-24 h-px bg-white/50 mx-auto mb-8"></div>
                <p className="text-lg md:text-xl text-white/90 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                    {t('description', { defaultMessage: 'Details about investment and taxes...' })}
                </p>
                <button className="bg-transparent border border-white text-white px-10 py-4 font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-[#A58866] transition-colors duration-300">
                    {t('cta', { defaultMessage: 'En savoir plus' })}
                </button>
            </div>
        </section>
    );
}
