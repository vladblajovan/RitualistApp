import type { Doc } from '../../../components/DocPage';

// Ritualist has no accounts: your habits live on your devices and in your own
// iCloud, which only the app on your device can reach. So every choice below is
// made in the app or in iOS Settings, and this page says where.
const doc: Doc = {
  metaTitle: 'Your Privacy Choices - Ritualist',
  metaDescription: 'What you can see, change, export and delete in Ritualist, and where to do it.',
  title: 'Your Privacy Choices',
  updated: 'November 10, 2026',
  sections: [
    {
      blocks: [
        { note: 'Ritualist has no accounts. Your habits, logs and profile live on your devices and in your own iCloud, where only Ritualist on your device can reach them. That’s why every choice on this page is made in the app, or in iOS Settings, and this page shows you where.' },
      ],
    },
    {
      title: 'Your Data',
      blocks: [
        { choice: { title: 'See your data', body: 'Nothing about your habits is kept anywhere you can’t see it.', where: 'Everything you enter is shown in the app: Home, Stats, Settings › Profile.' } },
        { choice: { title: 'Export a copy', body: 'Save your habits, logs, categories and profile as a file you keep. Importing it again later comes with Ritualist Pro.', where: 'Settings › iCloud & Backups › Export.' } },
        { choice: { title: 'Change or correct it', body: 'Name, photo, gender and age group are all optional, and can be changed or cleared at any time.', where: 'Edit any habit, log or category where it’s shown; your profile in Settings › Profile.' } },
        { choice: { title: 'Delete everything', body: 'Deletes your habits, logs and profile from this device and from your iCloud, so your other devices follow. It also gives the app a new anonymous analytics identifier, so nothing sent afterwards is tied to what was sent before.', where: 'Settings › iCloud & Backups › Delete All Data.' } },
        { choice: { title: 'Keep your data off iCloud', body: 'Your habits then stay on this device only.', where: 'iOS Settings › your name › iCloud, then turn off Ritualist among the apps using iCloud.' } },
      ],
    },
    {
      title: 'How Your Data Is Used',
      blocks: [
        { choice: { title: 'Anonymous usage analytics', body: 'Ritualist sends anonymous data on how the app is used, never your habits or anything you write. Turn it off and nothing more is sent from that device. See the [Privacy Policy](/privacy) for exactly what it includes.', where: 'Settings › iCloud & Backups › Share Usage Analytics (Ritualist 2.1 and later).' } },
        { choice: { title: 'About You', body: 'The personality analysis runs only with your consent, entirely on your device, and its results never leave it. Withdrawing your consent stops it and deletes every analysis. You can also delete past analyses one by one.', where: 'Settings › About You, then its privacy details › Withdraw Consent.' } },
      ],
    },
    {
      title: 'Permissions',
      blocks: [
        { choice: { title: 'Location, Apple Health, notifications and Live Activities', body: 'Each is asked for only when a feature needs it, and can be turned off at any time. Location is used only for place reminders; Apple Health data never leaves your device or your Health app.', where: 'iOS Settings › Apps › Ritualist.' } },
      ],
    },
    {
      title: 'Purchases',
      blocks: [
        { choice: { title: 'Subscriptions', body: 'Purchases are made and managed through your Apple Account. RevenueCat, which confirms your plan, receives an anonymous identifier and your App Store purchase information, never your habits.', where: 'iOS Settings › your name › Subscriptions.' } },
      ],
    },
    {
      title: 'Anything Else',
      blocks: [
        { p: 'For a request this page doesn’t cover, write to Ritualist’s support:' },
        {
          contact: [
            { label: 'Email', value: '[ritualist.help@gmail.com](mailto:ritualist.help@gmail.com)' },
            { label: 'Privacy Policy', value: '[Read it in full](/privacy)' },
          ],
        },
      ],
    },
  ],
};

export default doc;
