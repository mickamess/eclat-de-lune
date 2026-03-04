"use client";

import { useTranslations } from 'next-intl';

export default function Appartement() {
    const t = useTranslations('sections.appartement');
    return (
        <section className="py-24 bg-white" id="appartement">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-sm tracking-widest uppercase text-[#A58866] font-semibold block mb-4">Intérieurs</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-900 leading-tight">
                    {t('title', { defaultMessage: 'Les Espaces de Vie Cosy' })}
                </h2>
                <div className="w-24 h-1 bg-[#A58866] mx-auto mb-16"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 border border-gray-100 p-12 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-serif text-gray-900 mb-4">{t('type1.title', { defaultMessage: 'Atmosphère Cosy' })}</h3>
                        <p className="text-gray-600 font-light leading-relaxed">{t('type1.description', { defaultMessage: 'Rien n’égale la chaleur...' })}</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-12 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-serif text-gray-900 mb-4">{t('type2.title', { defaultMessage: 'Confort & Design' })}</h3>
                        <p className="text-gray-600 font-light leading-relaxed">{t('type2.description', { defaultMessage: 'Architecture maîtrisée...' })}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
