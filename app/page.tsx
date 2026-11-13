import type { Metadata } from 'next';
import HomePage from './components/HomePage';
import { homeMetadata } from './i18n/home/metadata';

export const metadata: Metadata = homeMetadata('en');

export default function Home() {
  return <HomePage locale="en" />;
}
