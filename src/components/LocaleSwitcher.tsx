"use client";

import { useLocale, useTranslations } from 'next-intl';
import { routing, usePathname, useRouter } from '@/i18n/routing';

export default function LocaleSwitcher({ transparent = false }: { transparent?: boolean }) {
    const t = useTranslations('common.localeSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function switchLocale(nextLocale: string) {
        if (nextLocale !== locale) {
            router.replace(pathname, { locale: nextLocale });
        }
    }

    return (
        <div className="flex items-center gap-3">
            <span className="sr-only">{t('label')}</span>
            {routing.locales.map((cur) => (
                <button
                    key={cur}
                    onClick={() => switchLocale(cur)}
                    className={`text-sm font-medium tracking-wide transition-colors duration-500 ${locale === cur
                        ? `font-semibold pointer-events-none ${transparent ? 'text-white drop-shadow-sm' : 'text-[#A58866]'}`
                        : `${transparent ? 'text-white/60 hover:text-white drop-shadow-sm' : 'text-gray-400 hover:text-gray-900'}`
                        }`}
                >
                    {cur.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
