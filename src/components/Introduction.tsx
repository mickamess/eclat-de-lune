"use client";

import { useTranslations } from 'next-intl';

export default function Introduction() {
    const t = useTranslations('intro');
    return (
        <section className="py-24 bg-white" id="introduction">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="text-sm tracking-widest uppercase text-[#A58866] font-semibold block mb-4">Bienvenue</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-900 leading-tight">
                    {t('title', { defaultMessage: 'Un village de charme' })}
                </h2>
                <div className="w-24 h-1 bg-[#A58866] mx-auto mb-8"></div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                    {t('text', { defaultMessage: 'Nichée au pied de l’imposante montagne du Cheval Noir...' })}
                </p>
            </div>
        </section>
    );
}
