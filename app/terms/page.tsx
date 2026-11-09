import Link from 'next/link';
import type { Metadata } from 'next';
import CookieSettingsButton from '../components/CookieSettingsButton';

export const metadata: Metadata = {
  title: 'Terms of Service - Ritualist',
  description: 'Terms of Service for Ritualist habit tracker app.',
};

export default function TermsPage() {
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
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-1">Terms of Service</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">Last updated: November 9, 2026</p>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">1. Acceptance of Terms</h2>
          <p className="text-zinc-700 dark:text-zinc-300">By downloading, installing, or using Ritualist (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">2. Description of Service</h2>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">Ritualist is a habit tracking application that helps you build and maintain positive habits. The App allows you to:</p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Create and track habits you check off, count, measure, or time</li>
            <li>Track timed activities including fasting and breathing exercises</li>
            <li>Set reminders and location-based notifications</li>
            <li>Integrate with Apple Health to read and write health data</li>
            <li>View progress, statistics, and personality insights</li>
            <li>Share achievement cards (streaks, perfect days, weekly recaps)</li>
            <li>Sync data across your Apple devices via iCloud</li>
          </ul>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">3. User Accounts</h2>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">Ritualist uses your Apple ID and iCloud account for data synchronization. You are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Maintaining the security of your Apple ID</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring your device meets the minimum requirements (iOS 18.0 or later)</li>
          </ul>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">4. Subscriptions and Payments</h2>
          <h3 className="font-semibold mb-2">4.1 Free Features</h3>
          <p className="mb-2 text-zinc-700 dark:text-zinc-300">The free version of Ritualist includes, among other features:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Up to 5 active habits and 3 saved places</li>
            <li>Check, count, measure, and timed habits, including fasting and breathing with their guides</li>
            <li>Time and place reminders, Apple Health, widgets, Siri, and Apple Watch</li>
            <li>Streaks, achievements, progress charts, and the Bronze tier of challenges</li>
            <li>iCloud sync across all your devices, and saving backups</li>
          </ul>
          <h3 className="font-semibold mb-2">4.2 Ritualist Pro</h3>
          <p className="mb-2 text-zinc-700 dark:text-zinc-300">Ritualist Pro unlocks additional features, including:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Unlimited habits and places</li>
            <li>About You personality insights</li>
            <li>The Silver and Gold tiers of challenges</li>
            <li>Every fasting coach and its pep talks</li>
            <li>Breathing shapes, your own breathing patterns, and breathing insights</li>
            <li>Smart Scheduling shortcuts and restoring backups</li>
          </ul>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">The features included in Pro may change as the App evolves. If you go over the free limits, for example after a subscription ends, habits and places beyond them are paused, not deleted.</p>
          <h3 className="font-semibold mb-2">4.3 Plans</h3>
          <p className="mb-2 text-zinc-700 dark:text-zinc-300">Ritualist Pro is available as:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li><strong>Monthly</strong> — an auto-renewing subscription billed every month</li>
            <li><strong>Annual</strong> — an auto-renewing subscription billed every year, which may begin with a free trial for eligible new subscribers</li>
            <li><strong>Lifetime</strong> — a one-time, non-renewing purchase that unlocks Pro with no further payments</li>
          </ul>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">Current prices are shown in the App before you buy and may vary by region and currency. We may offer limited-time discounts on a plan&apos;s first period.</p>
          <h3 className="font-semibold mb-2">4.4 Payment Terms</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>All payments are processed through Apple&apos;s App Store and charged to your Apple ID</li>
            <li>Monthly and Annual subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period, and your account is charged for the next period within 24 hours before it begins</li>
            <li>If a free trial is offered, you are charged when it ends unless you cancel at least 24 hours before; any unused part of a trial ends when you buy a plan</li>
            <li>You can manage and cancel subscriptions in your App Store account settings. Cancelling stops future renewals; Pro stays available until the end of the period you paid for</li>
            <li>Lifetime is paid once and never renews or charges again. It covers Pro for as long as the App is offered, for the Apple ID that bought it, and can be restored on your other devices with Restore Purchases</li>
          </ul>
          <h3 className="font-semibold mb-2">4.5 Refunds</h3>
          <p className="text-zinc-700 dark:text-zinc-300">All purchases are processed by Apple. For refund requests, please contact <a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Apple Support</a>.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">5. User Conduct</h2>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
            <li>Remove or alter any proprietary notices or labels</li>
            <li>Use the App in any way that could damage or impair the service</li>
          </ul>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">6. Intellectual Property</h2>
          <p className="text-zinc-700 dark:text-zinc-300">The App, including its design, features, and content, is owned by Ritualist and protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">7. Privacy</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Your use of the App is also governed by our <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>, which describes how we collect, use, and protect your information.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">8. Data and Content</h2>
          <h3 className="font-semibold mb-2">8.1 Your Data</h3>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">You retain ownership of all data you create within the App. You are responsible for maintaining backups of your data.</p>
          <h3 className="font-semibold mb-2">8.2 Data Loss</h3>
          <p className="text-zinc-700 dark:text-zinc-300">While we strive to ensure data integrity, we are not responsible for any data loss that may occur. We recommend keeping iCloud sync enabled for automatic backups.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">9. Disclaimers</h2>
          <div className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-400 px-4 py-3 mb-4 rounded-r-lg">
            <p className="font-semibold text-zinc-800 dark:text-zinc-200">THE APP IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND.</p>
          </div>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>We disclaim all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose</li>
            <li>We do not warrant that the App will be uninterrupted, error-free, or free of harmful components</li>
            <li>We do not guarantee any specific results from using the App</li>
          </ul>
          <h3 className="font-semibold mb-2">9.1 Personality Analysis Feature</h3>
          <p className="mb-2 text-zinc-700 dark:text-zinc-300">The personality analysis feature provides insights based on behavioral patterns observed in your habit tracking data. Please note:</p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>The analysis is <strong>for informational and entertainment purposes only</strong></li>
            <li>It is <strong>not a professional psychological assessment</strong> and should not be interpreted as a diagnosis or medical advice</li>
            <li>The results are algorithmic estimations and may not accurately reflect your complete personality</li>
            <li>If you have concerns about your mental health or well-being, please consult a qualified healthcare provider or mental health professional</li>
            <li>This feature is <strong>not a substitute for professional psychological evaluation or treatment</strong></li>
          </ul>
          <h3 className="font-semibold mb-2 mt-4">9.2 Fasting and Breathing Features</h3>
          <p className="mb-2 text-zinc-700 dark:text-zinc-300">Ritualist includes timed habit features for intermittent fasting and guided breathing exercises. Please note:</p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>These features are <strong>for general wellness and habit tracking purposes only</strong></li>
            <li>They are <strong>not medical devices</strong> and do not provide medical advice, diagnosis, or treatment</li>
            <li>Fasting may not be appropriate for everyone, including individuals with eating disorders, diabetes, or other health conditions</li>
            <li>Consult a qualified healthcare provider before starting any fasting regimen or if you experience discomfort during breathing exercises</li>
            <li>These features are <strong>not a substitute for professional medical guidance</strong></li>
          </ul>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">10. Limitation of Liability</h2>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">To the maximum extent permitted by law, Ritualist shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
          <ul className="list-disc pl-5 mb-3 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Loss of data</li>
            <li>Loss of profits</li>
            <li>Personal injury</li>
            <li>Property damage</li>
          </ul>
          <p className="text-zinc-700 dark:text-zinc-300">Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">11. Indemnification</h2>
          <p className="text-zinc-700 dark:text-zinc-300">You agree to indemnify and hold harmless Ritualist from any claims, damages, losses, or expenses arising from your use of the App or violation of these Terms.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">12. Changes to Terms</h2>
          <p className="text-zinc-700 dark:text-zinc-300">We may modify these Terms at any time. We will notify you of significant changes through the App or by other means. Your continued use of the App after changes constitutes acceptance of the modified Terms.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">13. Termination</h2>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">We reserve the right to terminate or suspend your access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.</p>
          <p className="text-zinc-700 dark:text-zinc-300">Upon termination, you may lose access to your data. You can save a backup of your data from the App before termination.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">14. Governing Law</h2>
          <p className="text-zinc-700 dark:text-zinc-300">These Terms shall be governed by and construed in accordance with the laws of Romania, without regard to its conflict of law provisions.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">15. Dispute Resolution</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration, except where prohibited by law. You agree to waive any right to participate in class action lawsuits.</p>
        </section>

        <section className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">16. Severability</h2>
          <p className="text-zinc-700 dark:text-zinc-300">If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">17. Contact Us</h2>
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">If you have any questions about these Terms, please contact us:</p>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
            <p><strong>Email:</strong> <a href="mailto:ritualist.help@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">ritualist.help@gmail.com</a></p>
            <p className="mt-1"><strong>Support:</strong> <Link href="/support" className="text-blue-600 dark:text-blue-400 hover:underline">Support page</Link></p>
          </div>
        </section>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">© 2025–{new Date().getFullYear()} Ritualist. All rights reserved.</p>
          <CookieSettingsButton />
        </div>
      </main>
    </div>
  );
}
