import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import CookieSettingsButton from '../components/CookieSettingsButton';

export const metadata: Metadata = {
  title: 'Support - Ritualist',
  description: 'Get help and support for Ritualist habit tracker.',
};

type Faq = { question: string; answer: ReactNode };

const faqs: Faq[] = [
  {
    question: 'Is Ritualist free to use?',
    answer: 'Yes. The free version includes all four kinds of habits (check, count, measure, and timed), up to 5 active habits and 3 places, fasting and breathing with their guides, reminders, Apple Health, widgets, Siri, iCloud sync, Apple Watch, and the Bronze tier of every challenge. Ritualist Pro adds unlimited habits and places, About You, Silver and Gold challenge tiers, every fasting coach, breathing flowers and your own patterns, Smart Scheduling, and restoring backups.',
  },
  {
    question: 'How much does Ritualist Pro cost?',
    answer: 'Pro comes three ways: Monthly at $9.99 a month, Annual at $49.99 a year with a 1-week free trial, or Lifetime at $99.99, paid once. Prices may vary by region, and the app shows the price in your currency before you buy.',
  },
  {
    question: 'What is Lifetime?',
    answer: 'Lifetime is a one-time, non-renewing purchase that unlocks Pro with no further payments: there\'s nothing to cancel. "Lifetime" means for as long as Ritualist is offered and supported, not a person\'s lifetime, and it includes every Pro feature, including ones added later. It belongs to the Apple Account that bought it and can be restored on your other devices with Restore Purchases. If we ever stop offering Ritualist, we\'ll say so in the app at least 90 days ahead, and Pro stays unlocked on your device for as long as iOS runs it.',
  },
  {
    question: 'Can I switch from a subscription to Lifetime?',
    answer: 'Yes. Buy Lifetime from the Pro page, then cancel your subscription in your Apple Account settings so it doesn\'t renew. Your subscription stays active until the end of the period you already paid for.',
  },
  {
    question: 'Will my subscription price change?',
    answer: 'No. If you already subscribe, you keep the price you subscribed at for as long as your subscription stays active.',
  },
  {
    question: 'How do I restore my purchases?',
    answer: 'Open the Pro page in Ritualist, for example from Settings, and tap Restore Purchases. Your subscription or Lifetime purchase comes back on any device signed in with the same Apple Account.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'Subscriptions are managed through your Apple Account: open the Settings app, tap your name, then Subscriptions. Cancel at least 24 hours before the end of the current period to stop the next renewal. Lifetime has nothing to cancel.',
  },
  {
    question: 'What happens to my habits if my subscription ends?',
    answer: 'Nothing is deleted. If you have more than the free limits, the habits and places beyond them are paused, keeping their history, until you upgrade again or remove some.',
  },
  {
    question: 'Which devices are supported?',
    answer: 'Ritualist runs on iPhone and iPad with iOS 18 or later, with a companion Apple Watch app. Your data syncs across iPhone and iPad through iCloud, and the watch stays in sync with your iPhone even when iCloud sync is off.',
  },
  {
    question: 'What can I do on Apple Watch?',
    answer: 'See today\'s habits and progress, check off habits, change amounts, set a Measure habit\'s reading with the Digital Crown, and start or stop fasts and breathing sessions.',
  },
  {
    question: 'What are Measure habits and weekly goals?',
    answer: 'A Measure habit records a reading, like your weight or waist, and shows its trend. Any habit can also repeat on a schedule of its own (every few days, weeks, months, or years) or aim for a number of days or a total each week or month, such as 3 workouts a week or 70,000 steps a week.',
  },
  {
    question: 'How do fasting and breathing work?',
    answer: 'Fasting follows your fast phase by phase, with a guide, alerts as each phase begins, a Live Activity, and a report at the end. Breathing paces every breath with a shape that opens and closes and haptics you can follow with your eyes closed. Both keep a history of your sessions and moods.',
  },
  {
    question: 'Who are the fasting coaches?',
    answer: 'Your fasting coach is a hero who speaks in your alerts, Live Activity, and guide: Taisu, Wren, Moss, Pip, Luna, or Bruno, each with its own tone. Taisu is free, and the others come with Pro. The guide\'s advice is the same whichever you choose.',
  },
  {
    question: 'Can I use Siri?',
    answer: 'Yes. Say "Start a fast in Ritualist", "Stop my fast in Ritualist", "How long have I been fasting in Ritualist", or "Breathe with Ritualist". The same actions are in the Shortcuts app and Spotlight, and Start Fast and Breathe can go in Control Center, on the Lock Screen, or on the Action button.',
  },
  {
    question: 'What are challenges?',
    answer: 'Every month brings a new challenge, with seasonal ones and lifetime paths too. Reach Bronze, then Silver and Gold, each a medal. Bronze is free; Silver and Gold come with Pro, and days you\'ve already done count when you upgrade.',
  },
  {
    question: 'How does About You work?',
    answer: 'About You reads the habits you keep to estimate your Big Five personality traits, suggests activities that suit you, and shows how your traits change over time. It runs only with your consent, entirely on your device, can be locked with Face ID, and is guidance, not a psychological assessment. It\'s part of Pro.',
  },
  {
    question: 'Is my data private?',
    answer: <>Yes. Your habits stay on your device and in your own iCloud account. About You and the fasting coach&apos;s pep talks are worked out on your device. We never see your habits or personal information; we only receive anonymous usage analytics, described in the <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.</>,
  },
  {
    question: 'Is my data synced across devices?',
    answer: 'Yes. Your habits, progress, places, and profile sync through iCloud automatically. On a new device or after reinstalling, Ritualist brings your habits back from iCloud.',
  },
  {
    question: 'Does Ritualist work with Apple Health?',
    answer: 'Yes, for free. Link any habit except a fast to a Health measure, such as steps, water, sleep, mindful minutes, or weight, and let Health fill it in, send your logs to Health, or both. Your Health data is never sent to us or to analytics.',
  },
  {
    question: 'How do I back up my data?',
    answer: 'Open Settings › iCloud & Backups and tap Save Backup to save your habits, logs, and profile to a file. Restoring a backup is part of Pro.',
  },
  {
    question: 'Which languages does Ritualist support?',
    answer: 'English, German, Spanish, French, and Romanian.',
  },
  {
    question: 'Can I share my progress?',
    answer: 'Yes. Earned achievements can be shared as cards with your streak, a perfect day, or your weekly recap, and so can a fast\'s report and your About You archetype. Cards carry a QR code to Ritualist and nothing private.',
  },
];

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
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg px-4 py-4">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">{faq.question}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">For step-by-step help with every feature, see the <Link href="/user-guide" className="text-blue-600 dark:text-blue-400 hover:underline">User Guide</Link>.</p>
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
