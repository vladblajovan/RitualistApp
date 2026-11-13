import type { Doc } from '../../../components/DocPage';

const doc: Doc = {
  metaTitle: 'Privacy Policy - Ritualist',
  metaDescription: 'Privacy Policy for Ritualist habit tracker app.',
  title: 'Privacy Policy',
  updated: 'November 10, 2026',
  legal: true,
  sections: [
    {
      title: 'Introduction',
      blocks: [
        { p: 'Ritualist (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our iOS application.' },
        { note: '**Key Point:** Ritualist is designed with privacy first. Your habit data stays on your device and in your personal iCloud account. We do not have access to your data. The only exceptions are anonymous usage analytics, which never include anything you write, and minimal, non-identifying timing data for fasting Live Activities, both described below.' },
      ],
    },
    {
      title: 'Information We Collect',
      blocks: [
        { h3: 'Data You Provide' },
        {
          ul: [
            '**Profile Information:** Name, profile picture, gender, and age group (all optional)',
            '**Habit Data:** Habits you create, including names, schedules, reminders, and completion records',
            '**Categories:** Custom categories you create to organize your habits',
          ],
        },
        { h3: 'Data Collected Automatically' },
        {
          ul: [
            '**Location Data:** Only when you enable location-based reminders for specific habits. We use geofencing to trigger reminders when you arrive at or leave designated locations.',
            '**Fasting Live Activity Timing:** When a fasting Live Activity is running, the app sends a Live Activity push token and the fast’s start and goal times to our backend so the Lock Screen, Dynamic Island, and Apple Watch update on time. See “Live Activity Updates” below.',
            '**Anonymous Usage Data:** We collect anonymous product interaction data (such as which screens are visited and which features are used), app performance and diagnostics, subscription and purchase events, and an approximate location (country and city) derived from your IP address, to understand how the app is used and improve the experience. This data is not linked to your identity. See the “Analytics” section below for details.',
          ],
        },
        { h3: 'Data We Do NOT Collect' },
        {
          ul: [
            'We do not use advertising or cross-app tracking SDKs',
            'We do not collect device identifiers for tracking or advertising purposes',
            'We do not send habit or category names, notes, moods, pep-talk messages, or Apple Health values to our backend or to analytics',
            'We do not collect your precise location',
            'We do not sell or share your data with third parties',
          ],
        },
      ],
    },
    {
      title: 'How We Store Your Data',
      blocks: [
        { h3: 'Local Storage' },
        { p: 'All your habit data is stored locally on your device using Apple’s secure storage mechanisms.' },
        { h3: 'iCloud Sync' },
        { p: 'If you’re signed into iCloud, your data automatically syncs across your Apple devices using Apple’s CloudKit service. This means:' },
        {
          ul: [
            'Your data is encrypted in transit and at rest by Apple',
            'Only you can access your data through your Apple ID',
            'We cannot access, read, or decrypt your iCloud data',
            'Data syncing is governed by [Apple’s Privacy Policy](https://www.apple.com/legal/privacy/)',
          ],
        },
        { h3: 'Secure Storage' },
        { p: 'Sensitive information (such as subscription status) is stored in the iOS Keychain, Apple’s secure credential storage system.' },
      ],
    },
    {
      title: 'Location Data',
      blocks: [
        { p: 'Ritualist requests location access only if you choose to set up location-based reminders for your habits.' },
        { h3: 'How We Use Location' },
        {
          ul: [
            'To send you habit reminders when you arrive at or leave specific locations',
            'Location monitoring happens entirely on-device using Apple’s geofencing APIs',
            'Your saved places and location reminders are never sent to us or to third parties. Like the rest of your data, they sync only through your personal iCloud account',
            'Analytics may record an approximate location (country and city) derived from your IP address, never your precise location; see “Analytics” below',
          ],
        },
        { h3: 'Your Control' },
        {
          ul: [
            'Location access is optional and can be disabled at any time in iOS Settings',
            'You can remove location-based reminders from individual habits',
            'We support “When In Use” and “Always” permissions based on your preference',
          ],
        },
      ],
    },
    {
      title: 'Live Activity Updates',
      blocks: [
        { p: 'Fasting Live Activities show your progress on the Lock Screen, in the Dynamic Island, and in the Apple Watch Smart Stack. To update them at each stage of a fast while the app is closed, Ritualist schedules push updates through our backend on Google Cloud (Firebase).' },
        { h3: 'What Is Sent' },
        {
          ul: [
            'The Live Activity push token issued by Apple for that activity',
            'The fast’s start time and goal time, and the times of its upcoming stage changes',
            'A random session identifier and a revision number, so updates can be replaced or cancelled',
          ],
        },
        { h3: 'What Is Not Sent' },
        {
          ul: [
            'Your name, Apple ID, habit names, notes, moods, or the motivational messages shown in the activity (these stay on your device)',
            'Any health, location, or analytics data',
          ],
        },
        { h3: 'Retention and Control' },
        {
          ul: [
            'This data is not linked to your identity and is not used for tracking, advertising, or analytics',
            'We do not store it in a database. Each scheduled update is deleted once it is sent, and remaining updates are deleted when you end, discard, or change the fast',
            'Push updates are delivered by Apple Push Notification Service',
            'You can turn off Live Activities for Ritualist at any time in iOS Settings > Ritualist > Live Activities; no Live Activity data is sent while they are off',
          ],
        },
      ],
    },
    {
      title: 'Data Retention',
      blocks: [
        {
          ul: [
            '**Active Data:** Your data is retained as long as you use the app',
            '**Deleted Habits:** When you delete a habit, it is removed from your device and iCloud within 30 days',
            '**Account Deletion:** You can delete all your data at any time from Settings > iCloud & Backups > Delete All Data',
          ],
        },
      ],
    },
    {
      title: 'Your Rights',
      blocks: [
        {
          ul: [
            '**Access:** View all your data within the app',
            '**Export:** Export your habit data from Settings > iCloud & Backups > Export; importing it again is part of Ritualist Pro',
            '**Deletion:** Delete all your data from Settings at any time',
            '**Analytics:** Turn off anonymous usage analytics in Settings > iCloud & Backups > Share Usage Analytics (Ritualist 2.1 and later); nothing more is sent from that device',
            '**All your choices:** [Your Privacy Choices](/privacy-choices) lists each one and where to make it',
            '**Portability:** Your data syncs via iCloud and can be accessed on any of your Apple devices',
          ],
        },
      ],
    },
    {
      title: 'Third-Party Services',
      blocks: [
        { h3: 'Apple Services' },
        {
          ul: [
            '**iCloud/CloudKit:** For data synchronization across your devices',
            '**StoreKit:** For processing in-app purchases and subscriptions',
            '**Apple Push Notification Service:** For delivering Live Activity updates',
            '**WatchConnectivity:** For peer-to-peer sync between your iPhone and paired Apple Watch. Habit data flows directly between your devices over Bluetooth/Wi-Fi without going through any server, so the watch app works even when iCloud sync is off.',
          ],
        },
        { p: 'These services are provided by Apple and governed by [Apple’s Privacy Policy](https://www.apple.com/legal/privacy/).' },
        { h3: 'Google Firebase' },
        { p: 'We use [Google Firebase](https://firebase.google.com) for the following, without Firebase Analytics or advertising features:' },
        {
          ul: [
            '**Remote Config and Hosting:** To deliver app settings and content catalogs (such as habit suggestions and challenges). Firebase processes technical information needed for delivery, such as an app instance identifier, app version, device language, country, and time zone.',
            '**App Check:** To verify that requests to our backend come from the genuine Ritualist app, using Apple’s App Attest.',
            '**Cloud Functions and Cloud Tasks:** To schedule Live Activity updates, as described in “Live Activity Updates”.',
          ],
        },
        { p: 'Firebase processing is governed by [Firebase’s privacy and security terms](https://firebase.google.com/support/privacy).' },
        { h3: 'Subscriptions (RevenueCat)' },
        { p: 'We use [RevenueCat](https://www.revenuecat.com) to manage subscription status. RevenueCat receives an anonymous app user identifier and your App Store purchase information to confirm access to Pro features. It does not receive your habit data. See [RevenueCat’s Privacy Policy](https://www.revenuecat.com/privacy).' },
        { h3: 'Analytics (PostHog)' },
        { p: 'We use [PostHog](https://posthog.com), an open-source product analytics platform hosted in the EU, to understand how features are used and improve the app. This includes:' },
        {
          ul: [
            'Feature interactions (e.g., which screens are visited, which actions are taken)',
            'App performance and diagnostics (e.g., load times and the type of an error)',
            'Subscription and purchase events (e.g., which plan was viewed or purchased, whether it began with a free trial, and your current plan)',
            'Technical information: app version, device model, iOS version, language, time zone, and screen size',
            'An approximate location (country and city) derived from your IP address; the IP address itself is not stored',
            'An anonymous device identifier (not linked to your identity)',
          ],
        },
        { p: 'Analytics never include habit or category names, notes, moods, Apple Health values, or anything else you write.' },
        { p: 'Analytics data is:' },
        {
          ul: [
            'Not linked to your personal identity',
            'Not used for advertising or cross-app tracking',
            'Not shared with third parties for marketing',
            'Processed and stored in the European Union',
          ],
        },
        { p: 'You can turn analytics off in Settings > iCloud & Backups > Share Usage Analytics (Ritualist 2.1 and later). Delete All Data also gives the app a new anonymous identifier.' },
        { p: 'We do not use any advertising networks, data brokers, or crash reporting services.' },
        { h3: 'Feature Roadmap (Sidetrack)' },
        { p: 'The in-app roadmap is provided by [Sidetrack](https://sidetrack.app). Opening it loads the list of planned features and their vote counts; voting for a feature sends an anonymous vote for that feature. No identifier or personal data is sent with it.' },
      ],
    },
    {
      title: 'Apple Health (HealthKit)',
      blocks: [
        { p: 'Ritualist can optionally integrate with Apple Health to read and write health data related to your habits (e.g., Mindful Minutes for breathing exercises, step counts, water intake).' },
        { h3: 'How We Use Health Data' },
        {
          ul: [
            'Health data is used solely to display progress and auto-complete habits based on your activity',
            'Health data stays on your device and in your personal iCloud account',
            'Health data is **never** sent to our servers, analytics services, or any third party',
            'Health data is **never** used for advertising or marketing purposes',
          ],
        },
        { h3: 'Your Control' },
        {
          ul: [
            'Health integration is optional and disabled by default',
            'You choose which habits sync with Apple Health',
            'You can revoke Health permissions at any time in iOS Settings > Health > Ritualist',
          ],
        },
      ],
    },
    {
      title: 'Children’s Privacy',
      blocks: [
        { p: 'Ritualist is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us to have it removed.' },
      ],
    },
    {
      title: 'Changes to This Policy',
      blocks: [
        { p: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last updated” date.' },
      ],
    },
    {
      title: 'Contact Us',
      blocks: [
        { p: 'If you have any questions about this Privacy Policy, please contact us:' },
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
