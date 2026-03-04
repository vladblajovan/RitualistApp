import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Ritualist',
  description: 'Privacy Policy for Ritualist habit tracker app.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* Nav */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity">
            ← Ritualist
          </Link>
          <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="/support" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Support</Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-1">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">Last updated: December 22, 2025</p>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Introduction</h2>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">Ritualist ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our iOS application.</p>
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>Key Point:</strong> Ritualist is designed with privacy first. Your habit data stays on your device and in your personal iCloud account. We do not have access to your data.
          </div>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Information We Collect</h2>
          <h3 className="font-semibold mb-2">Data You Provide</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li><strong>Profile Information:</strong> Name, profile picture, gender, and age group (all optional)</li>
            <li><strong>Habit Data:</strong> Habits you create, including names, schedules, reminders, and completion records</li>
            <li><strong>Categories:</strong> Custom categories you create to organize your habits</li>
          </ul>
          <h3 className="font-semibold mb-2">Data Collected Automatically</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li><strong>Location Data:</strong> Only when you enable location-based reminders for specific habits. We use geofencing to trigger reminders when you arrive at or leave designated locations.</li>
          </ul>
          <h3 className="font-semibold mb-2">Data We Do NOT Collect</h3>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>We do not collect analytics or usage data</li>
            <li>We do not use third-party tracking or advertising SDKs</li>
            <li>We do not collect device identifiers for tracking purposes</li>
            <li>We do not sell or share your data with third parties</li>
          </ul>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">How We Store Your Data</h2>
          <h3 className="font-semibold mb-2">Local Storage</h3>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">All your habit data is stored locally on your device using Apple's secure storage mechanisms.</p>
          <h3 className="font-semibold mb-2">iCloud Sync</h3>
          <p className="mb-2 text-zinc-700 dark:text-zinc-300">If you're signed into iCloud, your data automatically syncs across your Apple devices using Apple's CloudKit service. This means:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Your data is encrypted in transit and at rest by Apple</li>
            <li>Only you can access your data through your Apple ID</li>
            <li>We cannot access, read, or decrypt your iCloud data</li>
            <li>Data syncing is governed by <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Apple's Privacy Policy</a></li>
          </ul>
          <h3 className="font-semibold mb-2">Secure Storage</h3>
          <p className="text-zinc-700 dark:text-zinc-300">Sensitive information (such as subscription status) is stored in the iOS Keychain, Apple's secure credential storage system.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Location Data</h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">Ritualist requests location access only if you choose to set up location-based reminders for your habits.</p>
          <h3 className="font-semibold mb-2">How We Use Location</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>To send you habit reminders when you arrive at or leave specific locations</li>
            <li>Location monitoring happens entirely on-device using Apple's geofencing APIs</li>
            <li>Location data is not transmitted to any servers</li>
          </ul>
          <h3 className="font-semibold mb-2">Your Control</h3>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Location access is optional and can be disabled at any time in iOS Settings</li>
            <li>You can remove location-based reminders from individual habits</li>
            <li>We support "When In Use" and "Always" permissions based on your preference</li>
          </ul>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Data Retention</h2>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li><strong>Active Data:</strong> Your data is retained as long as you use the app</li>
            <li><strong>Deleted Habits:</strong> When you delete a habit, it is removed from your device and iCloud within 30 days</li>
            <li><strong>Account Deletion:</strong> You can delete all your data at any time from Settings &gt; Data Management &gt; Delete All Data</li>
          </ul>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Your Rights</h2>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li><strong>Access:</strong> View all your data within the app</li>
            <li><strong>Export:</strong> Export your habit data (available with Pro subscription)</li>
            <li><strong>Deletion:</strong> Delete all your data from Settings at any time</li>
            <li><strong>Portability:</strong> Your data syncs via iCloud and can be accessed on any of your Apple devices</li>
          </ul>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Third-Party Services</h2>
          <h3 className="font-semibold mb-2">Apple Services</h3>
          <ul className="list-disc pl-5 mb-3 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li><strong>iCloud/CloudKit:</strong> For data synchronization across your devices</li>
            <li><strong>StoreKit:</strong> For processing in-app purchases and subscriptions</li>
            <li><strong>Apple Push Notification Service:</strong> For habit reminders</li>
          </ul>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">These services are provided by Apple and governed by <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Apple's Privacy Policy</a>.</p>
          <h3 className="font-semibold mb-2">No Third-Party Analytics</h3>
          <p className="text-zinc-700 dark:text-zinc-300">We do not use any third-party analytics, crash reporting, or advertising services.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Children's Privacy</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Ritualist is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us to have it removed.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Changes to This Policy</h2>
          <p className="text-zinc-700 dark:text-zinc-300">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Contact Us</h2>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
            <p><strong>Email:</strong> <a href="mailto:ritualist.help@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">ritualist.help@gmail.com</a></p>
            <p className="mt-1"><strong>Support:</strong> <Link href="/support" className="text-blue-600 dark:text-blue-400 hover:underline">Support page</Link></p>
          </div>
        </section>

        <p className="text-center text-sm text-zinc-400 dark:text-zinc-500">© 2025–2026 Ritualist. All rights reserved.</p>
      </main>
    </div>
  );
}
