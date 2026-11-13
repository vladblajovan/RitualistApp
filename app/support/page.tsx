import DocPage, { docMetadata } from '../components/DocPage';
import { docFor } from '../i18n/docs';

export const metadata = docMetadata(docFor('support', 'en'), 'en', '/support');

export default function Page() {
  return <DocPage doc={docFor('support', 'en')} locale="en" page="support" />;
}
