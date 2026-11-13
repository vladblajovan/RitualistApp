import type { Doc, DocPageName } from '../../components/DocPage';
import type { Locale } from '../locales';
import privacyEn from './privacy/en';
import privacyDe from './privacy/de';
import privacyEs from './privacy/es';
import privacyFr from './privacy/fr';
import privacyIt from './privacy/it';
import privacyRo from './privacy/ro';
import termsEn from './terms/en';
import termsDe from './terms/de';
import termsEs from './terms/es';
import termsFr from './terms/fr';
import termsIt from './terms/it';
import termsRo from './terms/ro';
import choicesEn from './privacy-choices/en';
import choicesDe from './privacy-choices/de';
import choicesEs from './privacy-choices/es';
import choicesFr from './privacy-choices/fr';
import choicesIt from './privacy-choices/it';
import choicesRo from './privacy-choices/ro';
import supportEn from './support/en';
import supportDe from './support/de';
import supportEs from './support/es';
import supportFr from './support/fr';
import supportIt from './support/it';
import supportRo from './support/ro';

// Every text page in every language.
const docs: Record<DocPageName, Record<Locale, Doc>> = {
  'privacy': { en: privacyEn, de: privacyDe, es: privacyEs, fr: privacyFr, it: privacyIt, ro: privacyRo },
  'terms': { en: termsEn, de: termsDe, es: termsEs, fr: termsFr, it: termsIt, ro: termsRo },
  'privacy-choices': { en: choicesEn, de: choicesDe, es: choicesEs, fr: choicesFr, it: choicesIt, ro: choicesRo },
  'support': { en: supportEn, de: supportDe, es: supportEs, fr: supportFr, it: supportIt, ro: supportRo },
};

export function docFor(page: DocPageName, locale: Locale): Doc {
  return docs[page][locale];
}
