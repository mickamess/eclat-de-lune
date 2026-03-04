"use client";

import { useLocale, useTranslations } from 'next-intl';
import { routing, usePathname, useRouter } from '@/i18n/routing';

export default function LocaleSwitcher() {
    const t = useTranslations('common.localeSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        router.replace(pathname, { locale: nextLocale });
    }

    return (
        <label className="flex flex-col items-center">
            <span className="sr-only">{t('label')}</span>
            <select
                className="bg-transparent border border-gray-300 rounded p-1 text-sm text-gray-900"
                defaultValue={locale}
                onChange={onSelectChange}
            >
                {routing.locales.map((cur) => (
                    <option key={cur} value={cur}>
                        {t(cur)}
                    </option>
                ))}
            </select>
        </label>
    );
}
