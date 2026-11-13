import DocPage, { docMetadata } from '../components/DocPage';
import { docFor } from '../i18n/docs';

export const metadata = docMetadata(docFor('privacy-choices', 'en'), 'en', '/privacy-choices');

export default function Page() {
  return <DocPage doc={docFor('privacy-choices', 'en')} locale="en" page="privacy-choices" />;
}
