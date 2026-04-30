import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Guide - Ritualist',
  description:
    'Step-by-step guide to building habits, tracking fasting and breathing, syncing with Apple Health, and getting the most out of Ritualist.',
};

export default function UserGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
