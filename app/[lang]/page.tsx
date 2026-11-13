import HomePage from '../components/HomePage';
import { homeMetadata } from '../i18n/home/metadata';
import { translatedLocales, type TranslatedLocale } from '../i18n/locales';

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((lang) => ({ lang }));
}

type Props = { params: Promise<{ lang: TranslatedLocale }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return homeMetadata(lang);
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <HomePage locale={lang} />;
}
