"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Destination() {
    const t = useTranslations('sections.destination');
    return (
        <section className="py-24 bg-gray-50 overflow-hidden" id="destination">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-sm tracking-widest uppercase text-[#A58866] font-semibold block mb-4">La Station</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900 leading-tight">
                            {t('title', { defaultMessage: 'Le Grand Domaine' })}
                        </h2>
                        <div className="w-24 h-1 bg-[#A58866] mb-8"></div>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                            {t('description', { defaultMessage: 'Details...' })}
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl border border-gray-100">
                            <Image
                                src="/images/ski_map.webp"
                                alt="Valmorel Ski Map"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
