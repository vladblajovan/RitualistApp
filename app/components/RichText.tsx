import Link from 'next/link';
import type { ReactNode } from 'react';
import { localePath, userGuidePath, type Locale } from '../i18n/locales';

const linkClass = 'text-blue-600 dark:text-blue-400 hover:underline';

/**
 * Text with a little markup, so translated copy can carry emphasis and links:
 * **bold**, and [words](href) where an href starting with / is a page of this site,
 * opened in the same language.
 */
export default function RichText({ text, locale, className = linkClass }: { text: string; locale: Locale; className?: string }) {
  const parts: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else {
      const words = match[2];
      const href = match[3];
      if (href.startsWith('/')) {
        const target = href === '/user-guide' ? userGuidePath(locale) : localePath(locale, href);
        parts.push(<Link key={key++} href={target} className={className}>{words}</Link>);
      } else {
        const external = href.startsWith('http');
        parts.push(
          <a key={key++} href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {words}
          </a>,
        );
      }
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
