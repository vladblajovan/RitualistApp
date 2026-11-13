import DocPage, { docMetadata } from '../components/DocPage';
import { docFor } from '../i18n/docs';

export const metadata = docMetadata(docFor('privacy', 'en'), 'en', '/privacy');

export default function Page() {
  return <DocPage doc={docFor('privacy', 'en')} locale="en" page="privacy" />;
}
