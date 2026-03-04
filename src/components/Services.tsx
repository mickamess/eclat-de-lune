"use client";

import { useTranslations } from 'next-intl';

export default function Services() {
    const t = useTranslations('sections.services');
    return (
        <section className="py-24 bg-gray-900 text-white" id="services">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-sm tracking-widest uppercase text-[#A58866] font-semibold block mb-4">Commodités</span>
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white mb-8">
                        {t('title', { defaultMessage: 'Services & Bien-être' })}
                    </h2>
                    <div className="w-24 h-1 bg-[#A58866] mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="p-8 border border-gray-800 bg-gray-800/50 backdrop-blur-sm text-center hover:bg-gray-800 transition-colors duration-300">
                            <div className="w-2 h-2 bg-[#A58866] mx-auto mb-6 transform rotate-45"></div>
                            <h3 className="font-serif text-lg tracking-wide">{t(`item${item}.title`, { defaultMessage: `Service ${item}` })}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
