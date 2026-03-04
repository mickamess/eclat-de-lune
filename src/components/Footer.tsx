"use client";

import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('common.footer');
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-serif tracking-wider uppercase mb-6 text-gray-400">Éclat de Lune</h2>
                <div className="w-12 h-px bg-gray-700 mx-auto mb-6"></div>
                <p className="text-gray-500 font-light text-sm">{t('copyright', { defaultMessage: 'Copyright © 2024' })}</p>
            </div>
        </footer>
    );
}
