import type { Locale } from '../locales';
import de from './de';
import en, { type HomeCopy } from './en';
import es from './es';
import fr from './fr';
import it from './it';
import ro from './ro';

export const homeCopy: Record<Locale, HomeCopy> = { en, de, es, fr, it, ro };
