import Link from 'next/link';
import type { Metadata } from 'next';
import CookieSettingsButton from '../components/CookieSettingsButton';

export const metadata: Metadata = {
  title: 'Support - Ritualist',
  description: 'Get help and support for Ritualist habit tracker.',
};

export default function SupportPage() {
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
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Ritualist Support</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10">We&apos;re here to help you build better habits and achieve your goals with Ritualist.</p>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Contact Us</h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">Have questions, feedback, or need assistance? Reach out to our support team:</p>
          <a
            href="mailto:ritualist.help@gmail.com"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            ritualist.help@gmail.com
          </a>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Frequently Asked Questions</h2>

          <div className="space-y-3">
            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Is Ritualist free to use?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Ritualist offers a free version with core features. Premium features like advanced analytics and unlimited habits are available through a subscription.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Which devices are supported?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Ritualist is available for iPhone, iPad, and Apple Watch. Your data syncs seamlessly across iPhone and iPad via iCloud, and the watch app stays in sync with your iPhone over WatchConnectivity even when iCloud sync is off.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Does Ritualist work with Apple Watch?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Yes! Ritualist ships with a companion Apple Watch app that stays in sync with your iPhone over WatchConnectivity. See today&apos;s habits at a glance, log binary and numeric ones from your wrist, and check your progress without reaching for your phone — even when iCloud sync is off.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Is my data private?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Yes. Your habit data stays on your device and in your personal iCloud account. Personality insights are processed entirely on-device. We never have access to your information.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">How does the personality analysis work?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Our on-device ML model analyzes your habit patterns to generate insights about your Big Five personality traits. All processing happens locally on your device for complete privacy.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Is my data synced across devices?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Yes! Ritualist uses iCloud to sync your habits, progress, and settings across all your Apple devices automatically.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">How do I export my data?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Go to Settings &gt; Export Data to download a backup of all your habits and progress in standard formats like CSV and JSON.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">How do I restore my purchases?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Go to Settings &gt; tap &ldquo;Restore Purchases&rdquo; to restore any previous subscriptions on your current device.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">How do I cancel my subscription?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Subscriptions are managed through your Apple ID. Go to Settings &gt; Apple ID &gt; Subscriptions to manage or cancel.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Does Ritualist work with Apple Health?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Yes! Ritualist can read and write health data like mindful minutes, steps, and water intake. Health integration is optional, disabled by default, and your health data never leaves your device.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">What are timed habits?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Timed habits let you track fasting and breathing exercises with built-in protocols. Start a fasting timer, follow guided breathing patterns, log your mood during sessions, and view your history.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Which languages does Ritualist support?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Ritualist is available in English, German, Spanish, French, and Romanian.</p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Can I share my achievements?</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Yes! Ritualist generates shareable snapshot cards for streak milestones, perfect days, and weekly recaps. Share them directly from the app to celebrate your progress.</p>
            </div>
          </div>
        </section>

        <div className="text-center pb-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <div className="flex justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">© 2025–{new Date().getFullYear()} Ritualist. All rights reserved.</p>
          <CookieSettingsButton />
        </div>
      </main>
    </div>
  );
}
