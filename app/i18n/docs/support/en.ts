import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Support - Ritualist',
  metaDescription: 'Get help and support for Ritualist habit tracker.',
  title: 'Ritualist Support',
  lead: 'We’re here to help you build better habits and achieve your goals with Ritualist.',
  sections: [
    {
      title: 'Contact Us',
      blocks: [
        { p: 'Have questions, feedback, or need assistance? Reach out to our support team:' },
        { button: { text: 'ritualist.help@gmail.com', href: 'mailto:ritualist.help@gmail.com' } },
      ],
    },
    {
      title: 'Frequently Asked Questions',
      blocks: [
        {
          faq: [
            { q: 'Is Ritualist free to use?', a: 'Yes. The free version includes all four kinds of habits (check, count, measure, and timed), up to 5 active habits and 3 places, fasting and breathing with their guides, reminders, Apple Health, widgets, Siri, iCloud sync, Apple Watch, and the Bronze tier of every challenge. Ritualist Pro adds unlimited habits and places, About You, Silver and Gold challenge tiers, every fasting coach, breathing flowers and your own patterns, Smart Scheduling, and restoring backups.' },
            { q: 'How much does Ritualist Pro cost?', a: 'Pro comes three ways: Monthly at $9.99 a month, Annual at $39.99 a year with a 1-week free trial, or Lifetime at $69.99, paid once. Prices may vary by region, and the app shows the price in your currency before you buy.' },
            { q: 'What is Lifetime?', a: 'Lifetime is a one-time, non-renewing purchase that unlocks Pro with no further payments: there’s nothing to cancel. “Lifetime” means for as long as Ritualist is offered and supported, not a person’s lifetime, and it includes every Pro feature, including ones added later. It belongs to the Apple Account that bought it and can be restored on your other devices with Restore Purchases. If we ever stop offering Ritualist, we’ll say so in the app at least 90 days ahead, and Pro stays unlocked on your device for as long as iOS runs it.' },
            { q: 'Can I switch from a subscription to Lifetime?', a: 'Yes. Buy Lifetime from the Pro page, then cancel your subscription in your Apple Account settings so it doesn’t renew. Your subscription stays active until the end of the period you already paid for.' },
            { q: 'Will my subscription price change?', a: 'No. If you already subscribe, you keep the price you subscribed at for as long as your subscription stays active.' },
            { q: 'How do I restore my purchases?', a: 'Open the Pro page in Ritualist, for example from Settings, and tap Restore Purchases. Your subscription or Lifetime purchase comes back on any device signed in with the same Apple Account.' },
            { q: 'How do I cancel my subscription?', a: 'Subscriptions are managed through your Apple Account: open the Settings app, tap your name, then Subscriptions. Cancel at least 24 hours before the end of the current period to stop the next renewal. Lifetime has nothing to cancel.' },
            { q: 'What happens to my habits if my subscription ends?', a: 'Nothing is deleted. If you have more than the free limits, the habits and places beyond them are paused, keeping their history, until you upgrade again or remove some.' },
            { q: 'Which devices are supported?', a: 'Ritualist runs on iPhone and iPad with iOS 18 or later, with a companion Apple Watch app. Your data syncs across iPhone and iPad through iCloud, and the watch stays in sync with your iPhone even when iCloud sync is off.' },
            { q: 'What can I do on Apple Watch?', a: 'See today’s habits and progress, check off habits, change amounts, set a Measure habit’s reading with the Digital Crown, and start or stop fasts and breathing sessions.' },
            { q: 'What are Measure habits and weekly goals?', a: 'A Measure habit records a reading, like your weight or waist, and shows its trend. Any habit can also repeat on a schedule of its own (every few days, weeks, months, or years) or aim for a number of days or a total each week or month, such as 3 workouts a week or 70,000 steps a week.' },
            { q: 'How do fasting and breathing work?', a: 'Fasting follows your fast phase by phase, with a guide, alerts as each phase begins, a Live Activity, and a report at the end. Breathing paces every breath with a shape that opens and closes and haptics you can follow with your eyes closed. Both keep a history of your sessions and moods.' },
            { q: 'Who are the fasting coaches?', a: 'Your fasting coach is one of six plush heroes who speak in your alerts, Live Activity, and guide: Taisu (loyal, warm), Wren (clear, practical), Moss (patient, calm), Pip (lively, playful), Luna (gentle, caring), or Bruno (steady, brief). Swipe through them on the Fasting Coach page and each introduces itself. Taisu is free. The other coaches come with Pro. The guide’s advice is the same whichever you choose.' },
            { q: 'Can I use Siri?', a: 'Yes. Say “Start a fast in Ritualist”, “Stop my fast in Ritualist”, “How long have I been fasting in Ritualist”, or “Breathe with Ritualist”. The same actions are in the Shortcuts app and Spotlight, and Start Fast and Breathe can go in Control Center, on the Lock Screen, or on the Action button.' },
            { q: 'What are challenges?', a: 'Every month brings a new challenge, with seasonal ones and lifetime paths too. Reach Bronze, then Silver and Gold, each a medal. Bronze is free; Silver and Gold come with Pro, and days you’ve already done count when you upgrade.' },
            { q: 'How does About You work?', a: 'About You reads the habits you keep to estimate your Big Five personality traits, suggests activities that suit you, and shows how your traits change over time. It runs only with your consent, entirely on your device, can be locked with Face ID, and is guidance, not a psychological assessment. It’s part of Pro.' },
            { q: 'Is my data private?', a: 'Yes. Your habits stay on your device and in your own iCloud account. About You and the fasting coach’s pep talks are worked out on your device. We never see your habits or personal information; we only receive anonymous usage analytics, described in the [Privacy Policy](/privacy).' },
            { q: 'Is my data synced across devices?', a: 'Yes. Your habits, progress, places, and profile sync through iCloud automatically. On a new device or after reinstalling, Ritualist brings your habits back from iCloud.' },
            { q: 'Does Ritualist work with Apple Health?', a: 'Yes, for free. Link any habit except a fast to a Health measure, such as steps, water, sleep, mindful minutes, or weight, and let Health fill it in, send your logs to Health, or both. Your Health data is never sent to us or to analytics.' },
            { q: 'How do I back up my data?', a: 'Open Settings › iCloud & Backups and tap Save Backup to save your habits, logs, and profile to a file. Restoring a backup is part of Pro.' },
            { q: 'Which languages does Ritualist support?', a: 'English, German, Spanish, French, Italian, and Romanian.' },
            { q: 'Can I share my progress?', a: 'Yes. Earned achievements can be shared as cards with your streak, a perfect day, or your weekly recap, and so can a fast’s report and your About You archetype. Cards carry a QR code to Ritualist and nothing private.' },
          ],
        },
        { p: 'For step-by-step help with every feature, see the [User Guide](/user-guide).' },
      ],
    },
  ],
};

export default doc;
