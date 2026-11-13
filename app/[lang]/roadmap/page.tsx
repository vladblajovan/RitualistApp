import RoadmapPage, { roadmapMetadata } from '../../components/RoadmapPage';
import { translatedLocales, type TranslatedLocale } from '../../i18n/locales';

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((lang) => ({ lang }));
}

type Props = { params: Promise<{ lang: TranslatedLocale }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return roadmapMetadata(lang);
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <RoadmapPage locale={lang} />;
}
