import { useTranslation } from 'react-i18next';
import { useHtmlAttributes } from './i18n/useHtmlAttributes.js';

const NAV_ITEMS = [
  {
    key: 'games',
    href: 'https://games.buffingchi.com',
    labelKey: 'nav.games',
    descKey: 'nav.games.desc',
  },
  {
    key: 'bookshelfai',
    href: 'https://bookshelfai.buffingchi.com',
    labelKey: 'nav.bookshelfai',
    descKey: 'nav.bookshelfai.desc',
  },
  {
    key: 'rulersai',
    href: 'https://rulersai.buffingchi.com',
    labelKey: 'nav.rulersai',
    descKey: 'nav.rulersai.desc',
  },
];

export default function App() {
  useHtmlAttributes();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center px-6 py-12">
      <main id="main-content" tabIndex={-1} className="w-full max-w-2xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">{t('title')}</h1>
          <p className="text-slate-400 text-lg">{t('subtitle')}</p>
        </header>

        <nav aria-label={t('title')}>
          <ul className="space-y-4 list-none p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="block rounded-xl border border-slate-700 bg-slate-800 p-6 hover:border-teal-500 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                >
                  <span className="block text-xl font-semibold text-white mb-1">
                    {t(item.labelKey)}
                  </span>
                  <span className="block text-slate-400 text-sm">
                    {t(item.descKey)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
