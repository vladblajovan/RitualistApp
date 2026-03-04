'use client';

import { FaGithub, FaApple, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdRocketLaunch } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const taglines = [
  "Master your habits. Master yourself. 💪",
  "Your habits shape who you become 🌱",
  "Build habits that build you 🔨",
  "Track habits. Unlock potential. 🚀",
  "Every habit tells a story. What's yours? 📖",
  "Smart habits for a smarter you 🧠",
  "Your habits. Your insights. Your transformation. ✨",
  "Build rituals, not just habits 🕯️",
  "Where habits meet intelligence 💡"
];

const softwareApplicationLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ritualist',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, iPadOS',
  description:
    'Ritualist is a privacy-first habit tracker app for iPhone and iPad that uses on-device machine learning to turn your daily rituals into insight and progress.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Ritualist free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ritualist offers a free version with core features. Premium features like advanced analytics and unlimited habits are available through a subscription.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which devices are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ritualist is available for iPhone and iPad, and your data syncs seamlessly across your devices via iCloud.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the personality analysis work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Our on-device machine learning model analyzes your habit patterns to generate insights about your Big Five personality traits. All processing happens locally on your device for complete privacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Everything runs on your device and your data is stored in your personal iCloud account. We never collect, track, or have access to your information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I export my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'You can export all your habit data, analytics, and insights at any time in standard formats like CSV and JSON.',
      },
    },
  ],
};


export default function Home() {
  const [state, setState] = useState({ tagline: '', mounted: false });
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Only run in the browser
    const lastIndex = parseInt(localStorage.getItem('lastTaglineIndex') || '-1');

    // Generate a new random index that's different from the last one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * taglines.length);
    } while (newIndex === lastIndex && taglines.length > 1);

    // Save the new index for next time
    localStorage.setItem('lastTaglineIndex', newIndex.toString());

    setState({ tagline: taglines[newIndex], mounted: true });
  }, []);

  const handleWaitlistSubmit = (event: any) => {
    event.preventDefault();
    if (!waitlistEmail.trim()) return;
    setWaitlistSubmitted(true);
    // TODO: Connect this form to your email provider or backend
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* Navigation */}
      <header>
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
          <div className="mx-auto flex max-w-6xl items-center justify-between py-4 px-6">
            <a href="#" className="flex items-center gap-3 text-2xl font-extrabold">
              <Image
                src="/brand-icon.png"
                alt="Ritualist Logo"
                width={36}
                height={36}
                className="rounded-md"
              />
              <span className="bg-gradient-to-r from-[#0A95C2] to-[#0556A6] bg-clip-text text-transparent">
                Ritualist
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Features
              </a>
              <a
                href="#difference"
                className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Why Ritualist
              </a>
              <a
                href="#testimonials"
                className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                FAQ
              </a>
              <a
                href="#pricing"
                className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Contact
              </a>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
              <div className="flex flex-col px-6 py-4 space-y-4">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#difference"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  Why Ritualist
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  FAQ
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-white px-6 py-20 pt-32 dark:from-black dark:to-zinc-950">
  <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
    {/* Text block */}
    <div className="max-w-xl text-center lg:text-left">
      <h1 className="mb-6 text-7xl font-bold tracking-tight text-black dark:text-white md:text-8xl">
        Ritualist
      </h1>
      <p className="mb-4 text-2xl font-medium text-zinc-600 dark:text-zinc-400 md:text-3xl">
        The privacy-first iOS habit tracker that{' '}
        <span className="text-black dark:text-white">knows you</span>{' '}
        — understand your personality, spot patterns that hold you back, and build rituals that actually stick.
      </p>
      <p className="mb-10 text-lg italic text-zinc-500 dark:text-zinc-500 md:text-xl">
        {state.mounted ? state.tagline : '\u00A0'}
      </p>
      <div className="flex flex-col items-center gap-2 lg:items-start">
        <div className="flex w-full flex-row gap-2 items-center justify-center sm:gap-3 lg:justify-start">
          {/* App Store disabled */}
          <a
            href="#"
            aria-disabled="true"
            aria-label="App Store download - Coming soon"
            className="flex items-center justify-center gap-2 rounded-full bg-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 opacity-70 cursor-not-allowed sm:px-7 sm:py-3 sm:gap-3 sm:text-lg dark:bg-zinc-700 dark:text-zinc-300"
          >
            <FaApple className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            App Store
          </a>
          {/* TestFlight */}
          <a
            href="https://testflight.apple.com/join/RVMZXfse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Ritualist beta on TestFlight (opens in new tab)"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-black px-4 py-2 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-black hover:text-white sm:px-7 sm:py-3 sm:gap-3 sm:text-lg dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <MdRocketLaunch className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            <span className="sm:hidden">TestFlight</span>
            <span className="hidden sm:inline">Join Beta on TestFlight</span>
          </a>
        </div>
      </div>
    </div>

    {/* Screenshot block */}
    <div className="w-full max-w-[220px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[330px]">
      <div className="rounded-[32px] bg-gradient-to-br from-[#0A95C2] via-[#ffe066] to-[#0556A6] p-[3px] shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.03] animate-gradient animate-gradient-glow">
        <div className="rounded-[28px] bg-white p-2 dark:bg-zinc-900">
          <Image
            src="/screenshots/privacy.png"
            alt="Ritualist overview screen"
            width={640}
            height={1391}
            className="h-auto w-full rounded-[24px]"
            priority
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Comparison Section */}
      <section id="difference" className="border-t border-zinc-200 bg-white px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-black dark:text-white md:text-4xl"
          >
            How Ritualist is different
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-zinc-600 dark:text-zinc-400 md:text-lg"
          >
            What if your habits could understand you better than you understand yourself? Ritualist reveals the patterns you've never noticed and builds rituals that work with your nature—not against it.
          </motion.p>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-left dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 flex items-start gap-2 text-base font-semibold text-black dark:text-white md:text-lg">
                <span className="text-xl md:text-2xl">🧠</span>
                Intelligence that adapts to you
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                On-device machine learning reveals your personality patterns and behavior insights, helping you choose habits that match who you are—rather than fighting against your nature.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-left dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 flex items-start gap-2 text-base font-semibold text-black dark:text-white md:text-lg">
                <span className="text-xl md:text-2xl">🎯</span>
                Built for lasting transformation
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Designed around streaks, rituals, and identity-level change. Every feature helps you build sustainable habits that become part of who you are—not temporary to-do lists.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-left dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 flex items-start gap-2 text-base font-semibold text-black dark:text-white md:text-lg">
                <span className="text-xl md:text-2xl">🔐</span>
                Deeply personal, completely private
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Your journey is yours alone. Everything runs on-device with zero data collection, so you can focus on genuine growth—without the pressure of social validation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-black dark:text-white md:text-4xl"
          >
            So simple, you'll wonder why you didn't start sooner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-zinc-600 dark:text-zinc-400 md:text-lg"
          >
            No lengthy onboarding. No confusing settings. Just open the app and start building better habits in under 60 seconds.
          </motion.p>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-left dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 flex items-start gap-2 text-base font-semibold text-black dark:text-white md:text-lg">
                <span className="text-xl md:text-2xl">✨</span>
                Open & go (literally 60 seconds)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Download the app, tap to create your first habit—maybe "Morning run" or "Read 10 pages." Pick an emoji, choose a color, done. No account required. No form to fill out. You're already building better habits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-left dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 flex items-start gap-2 text-base font-semibold text-black dark:text-white md:text-lg">
                <span className="text-xl md:text-2xl">👆</span>
                One tap to track
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Finished your workout? Just tap the checkmark. That's it. Ritualist automatically logs the time, builds your streak, and updates your analytics. The app adapts to your life—not the other way around.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-left dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 flex items-start gap-2 text-base font-semibold text-black dark:text-white md:text-lg">
                <span className="text-xl md:text-2xl">🚀</span>
                Watch yourself grow
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Over the next few weeks, you'll see your streaks climb, your patterns emerge, and your personality insights unlock. Before you know it, you've built rituals that stick—effortlessly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white px-6 py-32 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-24 text-center text-5xl font-bold text-black dark:text-white md:text-6xl">
            Designed for real life
          </h2>

          {/* Feature 1: Personality Insights */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-4 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1"
              >
                <div className="w-full max-w-[140px] md:max-w-[280px]">
                  <div className="rounded-[32px] bg-gradient-to-br from-[#0A95C2] via-[#ffe066] to-[#0556A6] p-[3px] shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.03] animate-gradient">
                    <div className="rounded-[28px] bg-white p-2 dark:bg-zinc-900">
                      <Image
                        src="/screenshots/personality.png"
                        alt="AI personality insights based on your habits"
                        width={280}
                        height={560}
                        className="h-auto w-full rounded-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2"
              >
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-4xl">
                  <span className="text-3xl md:text-5xl">🧠</span>
                  Know Yourself Better
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Your habits reveal who you are. Ritualist uses on-device machine learning to analyze your behavior patterns and generate insights about your Big Five personality traits. Discover patterns you never knew existed and choose habits that match your traits instead of fighting against them.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• ML-powered personality analysis</li>
                  <li>• Big Five trait breakdown</li>
                  <li>• Behavioral pattern recognition</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Feature 2: Analytics */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-4 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1 md:text-right"
              >
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-4xl md:flex-row-reverse md:justify-start">
                  <span className="text-3xl md:text-5xl">📊</span>
                  Beautiful Analytics
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  See your progress come to life. Track your streaks, completion rates, and trends with stunning visualizations. The analytics dashboard makes it easy to understand your habits at a glance, so you don&apos;t lose motivation when life gets messy.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• Current and best streak tracking</li>
                  <li>• Completion rate analytics</li>
                  <li>• Weekly and monthly trends</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="w-full max-w-[140px] md:max-w-[280px] md:ml-auto">
                  <div className="rounded-[32px] bg-gradient-to-br from-[#0A95C2] via-[#ffe066] to-[#0556A6] p-[3px] shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.03] animate-gradient">
                    <div className="rounded-[28px] bg-white p-2 dark:bg-zinc-900">
                      <Image
                        src="/screenshots/analytics.png"
                        alt="Beautiful analytics dashboard with insights and trends"
                        width={280}
                        height={560}
                        className="h-auto w-full rounded-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Feature 3: Customization */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-4 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1"
              >
                <div className="w-full max-w-[140px] md:max-w-[280px]">
                  <div className="rounded-[32px] bg-gradient-to-br from-[#0A95C2] via-[#ffe066] to-[#0556A6] p-[3px] shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.03] animate-gradient">
                    <div className="rounded-[28px] bg-white p-2 dark:bg-zinc-900">
                      <Image
                        src="/screenshots/customization.png"
                        alt="Customize habits with colors, emojis, and categories"
                        width={280}
                        height={560}
                        className="h-auto w-full rounded-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2"
              >
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-4xl">
                  <span className="text-3xl md:text-5xl">🎨</span>
                  Make It Yours
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Personalize every detail. Choose from custom colors, emojis, and categories to make your habit tracker uniquely yours. Beautiful design meets powerful functionality.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• Custom colors for each habit</li>
                  <li>• Emoji support</li>
                  <li>• Flexible categories</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Feature 4: Location-based */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-4 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1 md:text-right"
              >
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-4xl md:flex-row-reverse md:justify-start">
                  <span className="text-3xl md:text-5xl">📍</span>
                  Smart Location Triggers
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Never miss a habit again. Ritualist uses intelligent geofencing to remind you about your habits when you arrive at specific locations, so you&apos;re not relying on annoying time-based reminders that interrupt you at the wrong moment. Hit the gym? Get reminded to log your workout. Arrive home? Time for your evening meditation.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• Set custom locations for each habit</li>
                  <li>• Smart notifications at the right moment</li>
                  <li>• No annoying time-based reminders</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="w-full max-w-[140px] md:max-w-[280px] md:ml-auto">
                  <div className="rounded-[32px] bg-gradient-to-br from-[#0A95C2] via-[#ffe066] to-[#0556A6] p-[3px] shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.03] animate-gradient">
                    <div className="rounded-[28px] bg-white p-2 dark:bg-zinc-900">
                      <Image
                        src="/screenshots/location.png"
                        alt="Location-based habit reminders with geofencing"
                        width={280}
                        height={560}
                        className="h-auto w-full rounded-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Feature 5: iCloud Sync */}
          <div className="mb-40">
            <div className="grid grid-cols-2 gap-4 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1"
              >
                <div className="w-full max-w-[140px] md:max-w-[280px]">
                  <div className="rounded-[32px] bg-gradient-to-br from-[#0A95C2] via-[#ffe066] to-[#0556A6] p-[3px] shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.03] animate-gradient">
                    <div className="rounded-[28px] bg-white p-2 dark:bg-zinc-900">
                      <Image
                        src="/screenshots/sync.png"
                        alt="Seamless iCloud sync across all your devices"
                        width={280}
                        height={560}
                        className="h-auto w-full rounded-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2"
              >
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-4xl">
                  <span className="text-3xl md:text-5xl">☁️</span>
                  Seamless Everywhere
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Your habits follow you. iCloud sync keeps your data up-to-date across all your Apple devices. Start on iPhone, continue on iPad.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• Automatic iCloud synchronization</li>
                  <li>• Real-time updates across devices</li>
                  <li>• Your data stays private</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Feature 6: Privacy First */}
          <div className="mb-20">
            <div className="grid grid-cols-2 gap-4 md:items-center md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1 md:text-right"
              >
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-4xl md:flex-row-reverse md:justify-start">
                  <span className="text-3xl md:text-5xl">🔒</span>
                  Your Privacy, Protected
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Everything runs on your device. Your habit data, personality insights, and personal information never leave your control. No tracking, no data collection, no compromises.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-lg">
                  <li>• 100% on-device processing</li>
                  <li>• Zero data collection</li>
                  <li>• You own your data completely</li>
                  <li>• No third-party tracking</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="w-full max-w-[140px] md:max-w-[280px] md:ml-auto">
                  <div className="rounded-[32px] bg-gradient-to-br from-[#0A95C2] via-[#ffe066] to-[#0556A6] p-[3px] shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.03] animate-gradient">
                    <div className="rounded-[28px] bg-white p-2 dark:bg-zinc-900">
                      <Image
                        src="/screenshots/privacy.png"
                        alt="Your privacy protected with on-device processing"
                        width={280}
                        height={560}
                        className="h-auto w-full rounded-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Testimonials Section */}
      <section id="testimonials" className="bg-zinc-50 px-6 py-32 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl font-bold text-black dark:text-white md:text-5xl"
          >
            Trusted & loved by users worldwide
          </motion.h2>

          {/* Stats */}
          <div id="stats" className="mb-20 grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold text-black dark:text-white">5K+</div>
              <div className="text-lg text-zinc-600 dark:text-zinc-400">Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold text-black dark:text-white">4.8★</div>
              <div className="text-lg text-zinc-600 dark:text-zinc-400">Average Rating</div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {'★'.repeat(5)}
              </div>
              <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
                &ldquo;Finally, a habit tracker that actually understands me. The personality insights are mind-blowing!&rdquo;
              </p>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">Sarah M.</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Product Designer</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {'★'.repeat(5)}
              </div>
              <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
                &ldquo;The location-based reminders changed everything. I never forget my gym routine anymore.&rdquo;
              </p>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">Mike T.</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Fitness Enthusiast</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex items-center gap-1 text-yellow-500">
                {'★'.repeat(5)}
              </div>
              <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
                &ldquo;Beautiful design and privacy-focused. Exactly what I needed for tracking my daily rituals.&rdquo;
              </p>
              <div className="text-sm font-medium text-zinc-900 dark:text-white">Emma L.</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Entrepreneur</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-y border-zinc-200 bg-white px-6 py-32 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl font-bold text-black dark:text-white md:text-5xl"
          >
            Frequently asked questions
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Is Ritualist free to use?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Ritualist offers a free version with core features. Premium features like advanced analytics and unlimited habits are available through a subscription.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Which devices are supported?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Ritualist is available for iPhone and iPad. Your data syncs seamlessly across your devices via iCloud.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                How does the personality analysis work?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Our on-device ML model analyzes your habit patterns to generate insights about your Big Five personality traits. All processing happens locally on your device for complete privacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Is my data private?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Absolutely. Everything runs on your device and your data is stored in your personal iCloud account. We never collect, track, or have access to your information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Can I export my data?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Yes! You can export all your habit data, analytics, and insights at any time in standard formats like CSV and JSON.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-zinc-50 px-6 py-32 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center text-4xl font-bold text-black dark:text-white md:text-5xl"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-16 text-center text-xl text-zinc-600 dark:text-zinc-400"
          >
            Start free, upgrade to unlock premium features
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mb-12 text-center text-base text-zinc-600 dark:text-zinc-400"
          >
            Ritualist is a modern habit tracker app for iPhone and iPad — privacy-first habit tracking with on-device analytics and on-device machine learning (ML) insights.
          </motion.p>

          {/* Free vs Premium Comparison */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border-2 border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">Free</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-black dark:text-white">$0</span>
              </div>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                Perfect for getting started with habit tracking
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Up to 5 habits</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Streak tracking</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>iCloud sync</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-600">
                  <span>✗</span>
                  <span>Location-based reminders</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-600">
                  <span>✗</span>
                  <span>AI personality insights</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-600">
                  <span>✗</span>
                  <span>Advanced analytics</span>
                </li>
              </ul>
            </motion.div>

            {/* Premium Features Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-3xl border-2 border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">Premium</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-black dark:text-white">Flexible pricing options</span>
              </div>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                All premium plans include the same features
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span><strong>Unlimited habits</strong></span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span><strong>Location-based reminders</strong></span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span><strong>AI personality insights</strong></span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span><strong>Advanced analytics</strong></span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Custom categories & colors</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-500">✓</span>
                  <span>Export data (CSV, JSON)</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Premium Pricing Options */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-3xl font-bold text-black dark:text-white"
          >
            Choose your plan
          </motion.h3>

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
            {/* Weekly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border-2 border-zinc-200 bg-white p-4 md:p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h4 className="mb-2 text-base font-bold text-black md:mb-3 md:text-lg dark:text-white">Weekly</h4>
              <div className="mb-3 md:mb-4">
                <span className="text-2xl font-bold text-black md:text-4xl dark:text-white">$2.99</span>
                <span className="text-xs text-zinc-600 md:text-base dark:text-zinc-400">/week</span>
              </div>
              <p className="text-xs text-zinc-600 md:text-sm dark:text-zinc-400">
                Try premium features short-term
              </p>
            </motion.div>

            {/* Monthly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border-2 border-zinc-200 bg-white p-4 md:p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h4 className="mb-2 text-base font-bold text-black md:mb-3 md:text-lg dark:text-white">Monthly</h4>
              <div className="mb-3 md:mb-4">
                <span className="text-2xl font-bold text-black md:text-4xl dark:text-white">$9.99</span>
                <span className="text-xs text-zinc-600 md:text-base dark:text-zinc-400">/month</span>
              </div>
              <p className="text-xs text-zinc-600 md:text-sm dark:text-zinc-400">
                Most flexible option
              </p>
            </motion.div>

            {/* Annual - Most Popular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl border-2 border-black bg-black p-4 md:p-6 dark:border-white dark:bg-white"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-0.5 text-[10px] font-medium text-white md:px-4 md:py-1 md:text-xs">
                Most Popular
              </div>
              <h4 className="mb-2 text-base font-bold text-white md:mb-3 md:text-lg dark:text-black">Annual</h4>
              <div className="mb-1">
                <span className="text-2xl font-bold text-white md:text-4xl dark:text-black">$49.99</span>
                <span className="text-xs text-zinc-400 md:text-base dark:text-zinc-600">/year</span>
              </div>
              <p className="mb-1 text-[10px] text-zinc-400 md:text-xs dark:text-zinc-600">Save 58% vs monthly</p>
              <p className="mb-2 text-[10px] text-zinc-400 md:mb-3 md:text-xs dark:text-zinc-600">7-day free trial</p>
              <p className="text-xs text-zinc-300 md:text-sm dark:text-zinc-700">
                Best value for committed users
              </p>
            </motion.div>

          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400"
          >
            <p className="font-medium text-zinc-700 dark:text-zinc-300">
              Try free for 7 days, then unlock your full potential for less than a coffee per week.
            </p>
            <p className="mt-3">
              Start free—no credit card required. Install the app, build your first rituals, and experience the difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-zinc-50 px-6 py-32 dark:bg-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-bold text-black dark:text-white md:text-6xl">
            Ready to build better habits?
          </h2>
          {/* <p className="mb-6 text-xl text-zinc-600 dark:text-zinc-400">
            Download Ritualist for iOS or explore the source code on GitHub.
          </p> */}

          <form
            onSubmit={handleWaitlistSubmit}
            className="mx-auto mb-6 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email address for App Store launch updates
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              placeholder="Enter your email to get App Store launch updates"
              aria-label="Email address for App Store launch updates"
              className="flex-1 rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-white dark:focus:ring-white"
            />
            <button
              type="submit"
              aria-label="Join waitlist for App Store launch"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
            >
              Join waitlist
            </button>
          </form>

          {waitlistSubmitted && (
            <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
              Thanks! You&apos;re on the list. We&apos;ll email you when Ritualist launches on the App Store.
            </p>
          )}

          {/* <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              aria-disabled="true"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-zinc-300 px-12 py-5 text-xl font-medium text-zinc-600 opacity-70 cursor-not-allowed dark:bg-zinc-700 dark:text-zinc-300"
            >
              <FaApple className="h-7 w-7" />
              App Store
            </a>
            <a
              href="https://github.com/vladblajovan/Ritualist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-zinc-300 px-12 py-5 text-xl font-medium text-zinc-700 transition-all hover:scale-105 hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <FaGithub className="h-6 w-6" />
              View on GitHub
            </a>
          </div> */}
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Ritualist</h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                Transform your life with habits that actually stick. Privacy-first habit tracking with AI insights and smart reminders.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vladblajovan/Ritualist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  <FaTiktok className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#stats"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    Stats
                  </a>
                </li>
                <li>
                  <a
                    href="#difference"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    Why Ritualist
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/vladblajovan/Ritualist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vladblajovan/Ritualist/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    Report Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vladblajovan/Ritualist/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  >
                    License
                  </a>
                </li>
                <li>
                  <Link href="/support" className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            © 2025 Ritualist. Built with ❤️ by Vlad Blajovan
          </div>
        </div>
      </footer>
    </div>
  );
}
