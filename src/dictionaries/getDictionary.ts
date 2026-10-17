
import 'server-only';
const dictionaries = {
  de: () => import('./tr.json').then((m) => m.default),
  en: () => import('./tr.json').then((m) => m.default),
  tr: () => import('./tr.json').then((m) => m.default),
};
export const getDictionary = async (locale: 'de' | 'en' | 'tr') => {
  return dictionaries[locale]?.() ?? dictionaries.tr();
};
