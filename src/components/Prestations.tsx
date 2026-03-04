"use client";

import { useTranslations } from 'next-intl';

export default function Prestations() {
    const t = useTranslations('sections.prestations');
    return (
        <section className="py-24 bg-gray-50" id="prestations">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-sm tracking-widest uppercase text-[#A58866] font-semibold block mb-4">L'Excellence</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                        {t('title', { defaultMessage: 'La Douceur de Vivre' })}
                    </h2>
                    <div className="w-24 h-1 bg-[#A58866] mx-auto mt-8"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="text-center p-8 bg-white shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-[#A58866] font-serif text-2xl">
                                {item}
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-4">{t(`item${item}.title`, { defaultMessage: `Prestation ${item}` })}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">{t(`item${item}.desc`, { defaultMessage: `Description ${item}` })}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
