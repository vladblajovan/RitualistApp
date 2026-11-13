import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Terms of Service - Ritualist',
  metaDescription: 'Terms of Service for Ritualist habit tracker app.',
  title: 'Terms of Service',
  updated: 'November 9, 2026',
  legal: true,
  sections: [
    {
      title: '1. Acceptance of Terms',
      blocks: [{ p: 'By downloading, installing, or using Ritualist (“the App”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, do not use the App.' }],
    },
    {
      title: '2. Description of Service',
      blocks: [
        { p: 'Ritualist is a habit tracking application that helps you build and maintain positive habits. The App allows you to:' },
        {
          ul: [
            'Create and track habits you check off, count, measure, or time',
            'Track timed activities including fasting and breathing exercises',
            'Set reminders and location-based notifications',
            'Integrate with Apple Health to read and write health data',
            'View progress, statistics, and personality insights',
            'Share achievement cards (streaks, perfect days, weekly recaps)',
            'Sync data across your Apple devices via iCloud',
          ],
        },
      ],
    },
    {
      title: '3. User Accounts',
      blocks: [
        { p: 'Ritualist uses your Apple ID and iCloud account for data synchronization. You are responsible for:' },
        {
          ul: [
            'Maintaining the security of your Apple ID',
            'All activities that occur under your account',
            'Ensuring your device meets the minimum requirements (iOS 18.0 or later)',
          ],
        },
      ],
    },
    {
      title: '4. Subscriptions and Payments',
      blocks: [
        { h3: '4.1 Free Features' },
        { p: 'The free version of Ritualist includes, among other features:' },
        {
          ul: [
            'Up to 5 active habits and 3 saved places',
            'Check, count, measure, and timed habits, including fasting and breathing with their guides',
            'Time and place reminders, Apple Health, widgets, Siri, and Apple Watch',
            'Streaks, achievements, progress charts, and the Bronze tier of challenges',
            'iCloud sync across all your devices, and saving backups',
          ],
        },
        { h3: '4.2 Ritualist Pro' },
        { p: 'Ritualist Pro unlocks additional features, including:' },
        {
          ul: [
            'Unlimited habits and places',
            'About You personality insights',
            'The Silver and Gold tiers of challenges',
            'Every fasting coach and its pep talks',
            'Breathing shapes, your own breathing patterns, and breathing insights',
            'Smart Scheduling shortcuts and restoring backups',
          ],
        },
        { p: 'The features included in Pro may change as the App evolves. If you go over the free limits, for example after a subscription ends, habits and places beyond them are paused, not deleted.' },
        { h3: '4.3 Plans' },
        { p: 'Ritualist Pro is available as:' },
        {
          ul: [
            '**Monthly** — an auto-renewing subscription billed every month',
            '**Annual** — an auto-renewing subscription billed every year, which may begin with a free trial for eligible new subscribers',
            '**Lifetime** — a one-time, non-renewing purchase that unlocks Pro with no further payments (see 4.5)',
          ],
        },
        { p: 'Current prices are shown in the App before you buy and may vary by region and currency. We may offer limited-time discounts on a plan’s first period.' },
        { h3: '4.4 Payment Terms' },
        {
          ul: [
            'All payments are processed through Apple’s App Store and charged to your Apple Account',
            'Monthly and Annual subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period, and your account is charged for the next period within 24 hours before it begins',
            'If a free trial is offered, you are charged when it ends unless you cancel at least 24 hours before; any unused part of a trial ends when you buy a plan',
            'You can manage and cancel subscriptions in your App Store account settings. Cancelling stops future renewals; Pro stays available until the end of the period you paid for',
          ],
        },
        { h3: '4.5 Lifetime' },
        { p: 'Ritualist Pro Lifetime is a one-time, non-renewing purchase that unlocks Pro with no further payments: there’s nothing to cancel. “Lifetime” means for as long as Ritualist is offered and supported, not a person’s lifetime. It includes every Pro feature, including ones added later. It belongs to the Apple Account that bought it and can be restored on your other devices with Restore Purchases. If we ever stop offering Ritualist, we’ll say so in the App at least 90 days ahead, and Pro stays unlocked in the App on your device for as long as iOS runs it. Refunds are handled by Apple.' },
        { h3: '4.6 Price Changes' },
        { p: 'We may change the prices of our plans. Existing subscribers keep the price they subscribed at for as long as their subscription stays active.' },
        { h3: '4.7 Refunds' },
        { p: 'All purchases are processed by Apple. For refund requests, please contact [Apple Support](https://support.apple.com/en-us/HT204084).' },
      ],
    },
    {
      title: '5. User Conduct',
      blocks: [
        { p: 'You agree not to:' },
        {
          ul: [
            'Use the App for any unlawful purpose',
            'Attempt to reverse engineer, decompile, or disassemble the App',
            'Remove or alter any proprietary notices or labels',
            'Use the App in any way that could damage or impair the service',
          ],
        },
      ],
    },
    {
      title: '6. Intellectual Property',
      blocks: [{ p: 'The App, including its design, features, and content, is owned by Ritualist and protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.' }],
    },
    {
      title: '7. Privacy',
      blocks: [{ p: 'Your use of the App is also governed by our [Privacy Policy](/privacy), which describes how we collect, use, and protect your information.' }],
    },
    {
      title: '8. Data and Content',
      blocks: [
        { h3: '8.1 Your Data' },
        { p: 'You retain ownership of all data you create within the App. You are responsible for maintaining backups of your data.' },
        { h3: '8.2 Data Loss' },
        { p: 'While we strive to ensure data integrity, we are not responsible for any data loss that may occur. We recommend keeping iCloud sync enabled for automatic backups.' },
      ],
    },
    {
      title: '9. Disclaimers',
      blocks: [
        { warn: 'THE APP IS PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND.' },
        { p: 'To the maximum extent permitted by law:' },
        {
          ul: [
            'We disclaim all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose',
            'We do not warrant that the App will be uninterrupted, error-free, or free of harmful components',
            'We do not guarantee any specific results from using the App',
          ],
        },
        { h3: '9.1 Personality Analysis Feature' },
        { p: 'The personality analysis feature provides insights based on behavioral patterns observed in your habit tracking data. Please note:' },
        {
          ul: [
            'The analysis is **for informational and entertainment purposes only**',
            'It is **not a professional psychological assessment** and should not be interpreted as a diagnosis or medical advice',
            'The results are algorithmic estimations and may not accurately reflect your complete personality',
            'If you have concerns about your mental health or well-being, please consult a qualified healthcare provider or mental health professional',
            'This feature is **not a substitute for professional psychological evaluation or treatment**',
          ],
        },
        { h3: '9.2 Fasting and Breathing Features' },
        { p: 'Ritualist includes timed habit features for intermittent fasting and guided breathing exercises. Please note:' },
        {
          ul: [
            'These features are **for general wellness and habit tracking purposes only**',
            'They are **not medical devices** and do not provide medical advice, diagnosis, or treatment',
            'Fasting may not be appropriate for everyone, including individuals with eating disorders, diabetes, or other health conditions',
            'Consult a qualified healthcare provider before starting any fasting regimen or if you experience discomfort during breathing exercises',
            'These features are **not a substitute for professional medical guidance**',
          ],
        },
      ],
    },
    {
      title: '10. Limitation of Liability',
      blocks: [
        { p: 'To the maximum extent permitted by law, Ritualist shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:' },
        { ul: ['Loss of data', 'Loss of profits', 'Personal injury', 'Property damage'] },
        { p: 'Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.' },
      ],
    },
    {
      title: '11. Indemnification',
      blocks: [{ p: 'You agree to indemnify and hold harmless Ritualist from any claims, damages, losses, or expenses arising from your use of the App or violation of these Terms.' }],
    },
    {
      title: '12. Changes to Terms',
      blocks: [{ p: 'We may modify these Terms at any time. We will notify you of significant changes through the App or by other means. Your continued use of the App after changes constitutes acceptance of the modified Terms.' }],
    },
    {
      title: '13. Termination',
      blocks: [
        { p: 'We reserve the right to terminate or suspend your access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.' },
        { p: 'Upon termination, you may lose access to your data. You can save a backup of your data from the App before termination.' },
      ],
    },
    {
      title: '14. Governing Law',
      blocks: [{ p: 'These Terms shall be governed by and construed in accordance with the laws of Romania, without regard to its conflict of law provisions.' }],
    },
    {
      title: '15. Dispute Resolution',
      blocks: [{ p: 'Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration, except where prohibited by law. You agree to waive any right to participate in class action lawsuits.' }],
    },
    {
      title: '16. Severability',
      blocks: [{ p: 'If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.' }],
    },
    {
      title: '17. Contact Us',
      blocks: [
        { p: 'If you have any questions about these Terms, please contact us:' },
        {
          contact: [
            { label: 'Email', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Support', value: '[Support page](/support)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
