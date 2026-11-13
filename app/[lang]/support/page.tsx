import DocPage, { docMetadata } from '../../components/DocPage';
import { docFor } from '../../i18n/docs';
import { translatedLocales, type TranslatedLocale } from '../../i18n/locales';

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((lang) => ({ lang }));
}

type Props = { params: Promise<{ lang: TranslatedLocale }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return docMetadata(docFor('support', lang), lang, '/support');
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <DocPage doc={docFor('support', lang)} locale={lang} page="support" />;
}
