"use client";

import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('sections.contact');

    return (
        <section className="py-24 bg-white" id="contact">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-stretch">

                    {/* Left Column */}
                    <div className="flex-1 space-y-10">
                        {/* Header Area */}
                        <div>
                            <span className="text-sm tracking-widest uppercase text-[#A58866] font-semibold block mb-4">
                                {t('subtitle', { defaultMessage: 'CONTACT & LANCEMENT' })}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
                                {t('title', { defaultMessage: "L'Équipe mv-residences Valmorel" })}
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">
                                {t('description', { defaultMessage: "Notre équipe est à votre disposition pour vous accompagner dans votre projet d'investissement à Valmorel." })}
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6 text-gray-800 font-light">
                            <div className="flex items-center gap-4">
                                {/* Map Pin Icon */}
                                <svg className="w-6 h-6 text-[#A58866]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>{t('address', { defaultMessage: "MV Résidences, Grenoble" })}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                {/* Phone Icon */}
                                <svg className="w-6 h-6 text-[#A58866]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <span>{t('phone', { defaultMessage: "+33 (0)4 76 24 80 60" })}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                {/* Mail Icon */}
                                <svg className="w-6 h-6 text-[#A58866]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span>{t('email', { defaultMessage: "contact@mv-residences.com" })}</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gray-100 w-full" />

                        {/* Footer stats */}
                        <div className="flex items-start gap-16">
                            <div>
                                <svg className="w-8 h-8 text-[#A58866] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 00-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                </svg>
                                <span className="text-2xl font-serif text-gray-900">{t('re2020', { defaultMessage: "RE 2020" })}</span>
                            </div>

                            <div>
                                <svg className="w-8 h-8 text-[#A58866] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5M12 15h.008v.008H12V15z" />
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-serif text-gray-900">{t('delivery', { defaultMessage: "12/2028" })}</span>
                                    <span className="text-xs tracking-widest uppercase text-gray-400 font-semibold">{t('deliveryLabel', { defaultMessage: "LIVRAISON PRÉVUE" })}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column / Card */}
                    <div className="lg:w-5/12">
                        <div className="bg-[#FCFCFC] p-10 md:p-14 h-full flex flex-col border border-gray-100">
                            <h3 className="text-2xl font-serif text-gray-900 mb-10">
                                {t('interlocuteurs', { defaultMessage: "Vos interlocuteurs privilégiés" })}
                            </h3>

                            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-12">
                                <div>
                                    <h4 className="text-lg text-gray-900 mb-2 font-light">{t('contact1.name', { defaultMessage: "Alexandre Messina" })}</h4>
                                    <span className="text-xs tracking-widest uppercase text-[#A58866] font-semibold">{t('contact1.role', { defaultMessage: "DIRECTEUR D'AGENCE" })}</span>
                                </div>
                                <div>
                                    <h4 className="text-lg text-gray-900 mb-2 font-light">{t('contact2.name', { defaultMessage: "Jordan Burdet" })}</h4>
                                    <span className="text-xs tracking-widest uppercase text-[#A58866] font-semibold">{t('contact2.role', { defaultMessage: "CHARGÉ D'AFFAIRES" })}</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <div className="h-px bg-gray-200 w-full mb-8"></div>
                                <a href="#" className="block w-full text-center bg-[#2A2A2A] text-white py-4 font-medium uppercase tracking-widest text-sm hover:bg-[#A58866] transition-colors duration-300">
                                    {t('videoCta', { defaultMessage: "LIEN VIDÉO" })}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
