import DocPage, { docMetadata } from '../components/DocPage';
import { docFor } from '../i18n/docs';

export const metadata = docMetadata(docFor('terms', 'en'), 'en', '/terms');

export default function Page() {
  return <DocPage doc={docFor('terms', 'en')} locale="en" page="terms" />;
}
