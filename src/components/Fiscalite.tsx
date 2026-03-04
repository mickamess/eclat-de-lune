"use client";

import { useTranslations } from 'next-intl';

export default function Fiscalite() {
    const t = useTranslations('sections.fiscalite');
    return (
        <section className="py-24 bg-[#A58866] text-white" id="fiscalite">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-px bg-white/50 mx-auto mb-6"></div>
                    <h3 className="text-2xl font-light tracking-wide uppercase">
                        {t('subtitle')}
                    </h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/2 space-y-6 text-lg text-white/90 font-light leading-relaxed">
                        <p>{t('description1')}</p>
                        <p>{t('description2')}</p>
                    </div>

                    <div className="lg:w-1/2 space-y-8">
                        {/* Benefits List */}
                        <ul className="space-y-6 font-light text-lg">
                            <li className="flex items-start gap-4">
                                <div className="p-2 rounded-full bg-white/10 text-white mt-1">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span className="pt-1">{t('benefit1')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 rounded-full bg-white/10 text-white mt-1">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span className="pt-1">{t('benefit2')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 rounded-full bg-white/10 text-white mt-1">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span className="pt-1">{t('benefit3')}</span>
                            </li>
                        </ul>

                        {/* Feature Cards Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-8 mt-8 border-t border-white/20">
                            {/* Rendement Card */}
                            <div className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                <svg className="w-10 h-10 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>
                                <h4 className="text-xl font-medium mb-3 tracking-wide">{t('rendementTitle')}</h4>
                                <p className="font-light text-white/80 text-sm leading-relaxed">{t('rendementDesc')}</p>
                            </div>

                            {/* Accompagnement Card */}
                            <div className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                <svg className="w-10 h-10 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.201-.246.454-.453.735-.598l1.432-.74a3.102 3.102 0 001.086-1.161l.542-1.083c.145-.29.214-.61.189-.93zm-3.8 3.8l-1.082.541c-.246.123-.532.146-.795.048L4.6 18.24A2.652 2.652 0 013.76 13.4l1.32-.44c.404-.134.845-.11 1.227.07l1.083.542M11.42 15.17l-3.8-3.8M5.25 5.25A2.652 2.652 0 019 1.5l3.8 3.8m-7.55 7.55c-.246.123-.532.146-.795.048L3.33 11.8A2.652 2.652 0 011.5 8.05v-1.1M18.75 3.375c0 .621-.504 1.125-1.125 1.125h-.375m0 0c-.621 0-1.125-.504-1.125-1.125V3M21 5.25h-1.125M21 5.25v1.125m-2.25 0h1.125M17.625 3H21" />
                                </svg>
                                <h4 className="text-xl font-medium mb-3 tracking-wide">{t('accompagnementTitle')}</h4>
                                <p className="font-light text-white/80 text-sm leading-relaxed">{t('accompagnementDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
