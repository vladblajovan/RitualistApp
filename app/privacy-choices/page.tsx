import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Your Privacy Choices - Ritualist',
  description: 'What you can see, change, export and delete in Ritualist, and where to do it.',
};

// Ritualist has no accounts: your habits live on your devices and in your own
// iCloud, which only the app on your device can reach. So every choice below is
// made in the app or in iOS Settings, and this page says where.

function Choice({ title, where, children }: { title: string; where: ReactNode; children: ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="mb-2 text-zinc-700 dark:text-zinc-300">{children}</p>
      <p className="text-sm bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-300">
        <strong>Where:</strong> {where}
      </p>
    </div>
  );
}

const section = 'mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800';
const heading = 'text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4';
const link = 'text-blue-600 dark:text-blue-400 hover:underline';

export default function PrivacyChoicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* Nav */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">
            ← Ritualist
          </Link>
          <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</Link>
            <Link href="/support" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-1">Your Privacy Choices</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">Last updated: November 10, 2026</p>

        <section className={section}>
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
            Ritualist has no accounts. Your habits, logs and profile live on your devices and in your own iCloud, where only Ritualist on your device can reach them. That&apos;s why every choice on this page is made in the app, or in iOS Settings, and this page shows you where.
          </div>
        </section>

        <section className={section}>
          <h2 className={heading}>Your Data</h2>
          <Choice title="See your data" where={<>Everything you enter is shown in the app: Home, Stats, Settings › Profile.</>}>
            Nothing about your habits is kept anywhere you can&apos;t see it.
          </Choice>
          <Choice title="Export a copy" where={<>Settings › iCloud &amp; Backups › Export.</>}>
            Save your habits, logs, categories and profile as a file you keep. Importing it again later comes with Ritualist Pro.
          </Choice>
          <Choice title="Change or correct it" where={<>Edit any habit, log or category where it&apos;s shown; your profile in Settings › Profile.</>}>
            Name, photo, gender and age group are all optional, and can be changed or cleared at any time.
          </Choice>
          <Choice title="Delete everything" where={<>Settings › iCloud &amp; Backups › Delete All Data.</>}>
            Deletes your habits, logs and profile from this device and from your iCloud, so your other devices follow. It also gives the app a new anonymous analytics identifier, so nothing sent afterwards is tied to what was sent before.
          </Choice>
          <Choice title="Keep your data off iCloud" where={<>iOS Settings › your name › iCloud, then turn off Ritualist among the apps using iCloud.</>}>
            Your habits then stay on this device only.
          </Choice>
        </section>

        <section className={section}>
          <h2 className={heading}>How Your Data Is Used</h2>
          <Choice title="Anonymous usage analytics" where={<>Settings › Privacy &amp; Data › Share Usage Analytics (Ritualist 2.1 and later).</>}>
            Ritualist sends anonymous data on how the app is used, never your habits or anything you write. Turn it off and nothing more is sent from that device. See the <Link href="/privacy" className={link}>Privacy Policy</Link> for exactly what it includes.
          </Choice>
          <Choice title="About You" where={<>Settings › About You, then its privacy details › Withdraw Consent.</>}>
            The personality analysis runs only with your consent, entirely on your device, and its results never leave it. Withdrawing your consent stops it and deletes every analysis. You can also delete past analyses one by one.
          </Choice>
        </section>

        <section className={section}>
          <h2 className={heading}>Permissions</h2>
          <Choice title="Location, Apple Health, notifications and Live Activities" where={<>iOS Settings › Apps › Ritualist.</>}>
            Each is asked for only when a feature needs it, and can be turned off at any time. Location is used only for place reminders; Apple Health data never leaves your device or your Health app.
          </Choice>
        </section>

        <section className={section}>
          <h2 className={heading}>Purchases</h2>
          <Choice title="Subscriptions" where={<>iOS Settings › your name › Subscriptions.</>}>
            Purchases are made and managed through your Apple Account. RevenueCat, which confirms your plan, receives an anonymous identifier and your App Store purchase information, never your habits.
          </Choice>
        </section>

        <section className="mb-12">
          <h2 className={heading}>Anything Else</h2>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">For a request this page doesn&apos;t cover, write to Ritualist&apos;s support:</p>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
            <p><strong>Email:</strong> <a href="mailto:ritualist.help@gmail.com" className={link}>ritualist.help@gmail.com</a></p>
            <p className="mt-1"><strong>Privacy Policy:</strong> <Link href="/privacy" className={link}>Read it in full</Link></p>
          </div>
        </section>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">© 2025–{new Date().getFullYear()} Ritualist. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
