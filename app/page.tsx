'use client';

import { FaApple, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { useState, useEffect, useRef } from 'react';
import { motion, MotionConfig, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { trackEvent } from './lib/analytics';
import CookieSettingsButton from './components/CookieSettingsButton';


const taglines = [
  "Master your habits. Master yourself.",
  "Your habits shape who you become",
  "Build habits that build you",
  "Track habits. Unlock potential.",
  "Every habit tells a story. What's yours?",
  "Smart habits for a smarter you",
  "Your habits. Your insights. Your transformation.",
  "Build rituals, not just habits",
  "Where habits meet intelligence"
];

const softwareApplicationLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ritualist',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, iPadOS, watchOS',
  description:
    'Ritualist is a privacy-first habit tracker app for iPhone, iPad, and Apple Watch that uses on-device machine learning to turn your daily rituals into insight and progress.',
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
          'Ritualist is available for iPhone, iPad, and Apple Watch. Your data syncs seamlessly across iPhone and iPad via iCloud, and the watch app stays in sync with your iPhone over WatchConnectivity even when iCloud sync is off.',
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
          'Yes. Your habit data stays on your device and in your personal iCloud account. Personality insights are processed entirely on-device. We never have access to your information.',
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
    {
      '@type': 'Question',
      name: 'How do I restore my purchases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Go to Settings > tap "Restore Purchases" to restore any previous subscriptions on your current device.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I cancel my subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Subscriptions are managed through your Apple ID. Go to Settings > Apple ID > Subscriptions to manage or cancel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ritualist work with Apple Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Ritualist can read and write health data like mindful minutes, steps, and water intake. Health integration is optional and your health data never leaves your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ritualist work with Apple Watch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Ritualist ships with a companion Apple Watch app that stays in sync with your iPhone over WatchConnectivity. See your scheduled habits for today, log binary and numeric ones, and check your progress without reaching for your phone — even when iCloud sync is off.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are timed habits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timed habits let you track fasting and breathing exercises. Choose from built-in protocols like 16:8 fasting or box breathing, or create your own.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which languages does Ritualist support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ritualist is available in English, German, Spanish, French, and Romanian.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I share my achievements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Ritualist generates shareable snapshot cards for streak milestones, perfect days, and weekly recaps.',
      },
    },
  ],
};

// Animated counter component for stats
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {isInView ? `${count.toLocaleString()}${suffix}` : `0${suffix}`}
    </span>
  );
}

// FAQ Accordion item
function FaqItem({ question, answer, index, isOpen, onToggle }: { question: string; answer: string; index: number; isOpen: boolean; onToggle: () => void }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.05, 0.3) }}
      className="border-b border-zinc-200 dark:border-zinc-700"
    >
      <button
        onClick={() => { onToggle(); if (!isOpen) trackEvent({ action: 'faq_expand', category: 'engagement', label: question }); }}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <h3 className="text-lg font-semibold text-black dark:text-white pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <HiChevronDown className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-base text-zinc-600 dark:text-zinc-400 md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


const navLinkClass = "text-base font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white";
const linkClass = "text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const [taglineIndex, setTaglineIndex] = useState<number | null>(null);
  const taglineIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTaglineInterval = () => {
    if (taglineIntervalRef.current) clearInterval(taglineIntervalRef.current);
    taglineIntervalRef.current = setInterval(() => {
      setTaglineIndex((prev) => {
        const next = (prev === null ? 0 : (prev + 1) % taglines.length);
        localStorage.setItem('lastTaglineIndex', next.toString());
        return next;
      });
    }, 60000);
  };

  const rotateTagline = () => {
    setTaglineIndex((prev) => {
      const next = (prev === null ? 0 : (prev + 1) % taglines.length);
      localStorage.setItem('lastTaglineIndex', next.toString());
      return next;
    });
    startTaglineInterval();
  };

  useEffect(() => {
    const lastIndex = parseInt(localStorage.getItem('lastTaglineIndex') || '-1');
    let startIndex;
    do {
      startIndex = Math.floor(Math.random() * taglines.length);
    } while (startIndex === lastIndex && taglines.length > 1);
    localStorage.setItem('lastTaglineIndex', startIndex.toString());

    // Delay slightly so AnimatePresence is mounted and can animate the first entrance
    const timeout = setTimeout(() => {
      setTaglineIndex(startIndex);
      startTaglineInterval();
    }, 1000);

    return () => {
      clearTimeout(timeout);
      if (taglineIntervalRef.current) clearInterval(taglineIntervalRef.current);
    };
  }, []);

  // Show sticky bar after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
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
          <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
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
                  onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'features' })}
                  className={navLinkClass}
                >
                  Features
                </a>
                <a
                  href="#difference"
                  onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'why_ritualist' })}
                  className={navLinkClass}
                >
                  Why Ritualist
                </a>
                {/* Testimonials section hidden
              <a
                href="#testimonials"
                className={navLinkClass}
              >
                Testimonials
              </a>
              */}
                <a
                  href="#faq"
                  onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'faq' })}
                  className={navLinkClass}
                >
                  FAQ
                </a>
                <a
                  href="#pricing"
                  onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'pricing' })}
                  className={navLinkClass}
                >
                  Pricing
                </a>
                <Link
                  href="/roadmap"
                  onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'roadmap' })}
                  className={navLinkClass}
                >
                  What&apos;s Next
                </Link>
              </div>

              {/* Mobile Hamburger */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden overflow-hidden border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="flex flex-col px-6 py-4 space-y-4">
                    <a
                      href="#features"
                      onClick={() => { setMobileMenuOpen(false); trackEvent({ action: 'nav_click', category: 'navigation', label: 'features' }); }}
                      className={navLinkClass}
                    >
                      Features
                    </a>
                    <a
                      href="#difference"
                      onClick={() => { setMobileMenuOpen(false); trackEvent({ action: 'nav_click', category: 'navigation', label: 'why_ritualist' }); }}
                      className={navLinkClass}
                    >
                      Why Ritualist
                    </a>
                    {/* Testimonials section hidden
                  <a
                    href="#testimonials"
                    onClick={() => setMobileMenuOpen(false)}
                    className={navLinkClass}
                  >
                    Testimonials
                  </a>
                  */}
                    <a
                      href="#faq"
                      onClick={() => { setMobileMenuOpen(false); trackEvent({ action: 'nav_click', category: 'navigation', label: 'faq' }); }}
                      className={navLinkClass}
                    >
                      FAQ
                    </a>
                    <a
                      href="#pricing"
                      onClick={() => { setMobileMenuOpen(false); trackEvent({ action: 'nav_click', category: 'navigation', label: 'pricing' }); }}
                      className={navLinkClass}
                    >
                      Pricing
                    </a>
                    <Link
                      href="/roadmap"
                      onClick={() => { setMobileMenuOpen(false); trackEvent({ action: 'nav_click', category: 'navigation', label: 'roadmap' }); }}
                      className={navLinkClass}
                    >
                      Roadmap
                    </Link>
                    <a
                      href="https://vladblajovan.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { setMobileMenuOpen(false); trackEvent({ action: 'outbound_click', category: 'engagement', label: 'meet_me' }); }}
                      className={navLinkClass}
                    >
                      Meet me
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>

        <main>

          {/* Hero Section */}
          <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-white px-6 py-20 pt-32 dark:from-zinc-950 dark:to-zinc-900">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
              {/* Text block */}
              <div className="max-w-xl text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white md:text-7xl lg:text-8xl"
                >
                  Ritualist
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                  className="mb-4 text-xl font-medium text-zinc-700 dark:text-zinc-300 md:text-2xl lg:text-3xl"
                >
                  The privacy-first iOS habit tracker that{' '}
                  <span className="bg-gradient-to-r from-[#0A95C2] to-[#0556A6] bg-clip-text text-transparent">knows you</span>{' '}
                  — understand your personality, connect with Apple Health, and build rituals that actually stick.
                </motion.p>
                <div
                  className="mb-10 h-8 md:h-9 overflow-hidden cursor-pointer select-none"
                  onClick={rotateTagline}
                  title="Click for next slogan"
                >
                  <AnimatePresence mode="wait">
                    {taglineIndex !== null && (
                      <motion.p
                        key={taglineIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        className="text-lg italic text-zinc-500 dark:text-zinc-400 md:text-xl"
                      >
                        {taglines[taglineIndex]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col items-center gap-3 lg:items-start"
                >
                  <div className="flex w-full flex-row gap-3 items-center justify-center sm:gap-4 lg:justify-start">
                    {/* App Store */}
                    <a
                      href="https://apps.apple.com/app/id6755661147"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Ritualist on the App Store"
                      onClick={() => trackEvent({ action: 'app_store_click', category: 'conversion', label: 'hero' })}
                      className="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 active:scale-[0.97] hover:bg-zinc-800 sm:px-7 sm:py-3 sm:gap-3 sm:text-lg dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      <FaApple className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                      Download on AppStore
                    </a>

                  </div>
                </motion.div>
              </div>

              {/* Screenshot block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
                className="w-full max-w-[220px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[330px]"
              >
                <div className="rounded-[32px] bg-gradient-to-br from-[#0A95C2] via-[#ffe066] to-[#0556A6] p-[3px] shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03] animate-gradient animate-gradient-glow">
                  <div className="rounded-[28px] bg-white p-2 dark:bg-zinc-900">
                    <Image
                      src="/screenshots/privacy.png"
                      alt="Ritualist app showing privacy-first habit tracking dashboard"
                      width={640}
                      height={1391}
                      className="h-auto w-full rounded-[24px]"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Comparison Section */}
          <section id="difference" className="border-t border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900">
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
                What if your habits could understand you better than you understand yourself? Ritualist reveals the patterns you&apos;ve never noticed and builds rituals that work with your nature—not against it.
              </motion.p>
              <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 120, damping: 20 }}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-left shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/30">
                    <span className="text-xl">🧠</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-black dark:text-white md:text-lg">
                    Intelligence that adapts to you
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    On-device machine learning reveals your personality patterns, connects with Apple Health, and delivers insights that help you choose habits matching who you are—rather than fighting against your nature.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 120, damping: 20 }}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-left shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-black dark:text-white md:text-lg">
                    Built for lasting transformation
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Designed around streaks, fasting protocols, breathing exercises, and identity-level change. Every feature helps you build sustainable habits that become part of who you are—not temporary to-do lists.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-left shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <span className="text-xl">🔐</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-black dark:text-white md:text-lg">
                    Deeply personal, completely private
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Your journey is yours alone. Your habit data stays on your device and in your personal iCloud account, so you can focus on genuine growth—without the pressure of social validation.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>


          {/* How It Works Section - Numbered steps instead of cards */}
          <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
            <div className="mx-auto max-w-6xl text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-black dark:text-white md:text-4xl"
              >
                So simple, you&apos;ll wonder why you didn&apos;t start sooner
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
              <div className="mt-12 grid gap-8 md:grid-cols-3 md:items-start">
                {[
                  { step: '01', icon: '✨', title: 'Open & go', desc: 'Download the app, tap to create your first habit. Pick an emoji, choose a color, done. No account required.' },
                  { step: '02', icon: '👆', title: 'One tap to track', desc: 'Tap a checkmark, start a fasting timer, or begin a breathing session. Ritualist logs everything, builds your streak, and updates your insights.' },
                  { step: '03', icon: '🚀', title: 'Watch yourself grow', desc: 'See your streaks climb, your patterns emerge, and your personality insights unlock. Build rituals that stick—effortlessly.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                    className="relative text-left"
                  >
                    <div className="mb-4 text-5xl font-bold text-zinc-200 dark:text-zinc-800 md:text-6xl">{item.step}</div>
                    <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-black dark:text-white md:text-lg">
                      <span className="text-xl">{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="bg-white px-6 py-20 dark:bg-zinc-900">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-16 text-center text-4xl font-bold text-black dark:text-white md:text-5xl">
                Designed for real life
              </h2>

              {/* Feature 1: Personality Insights */}
              <div className="mb-24">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                    className="flex justify-center md:justify-start"
                  >
                    <div className="w-full max-w-[240px] md:max-w-[280px]">
                      <div className="rounded-[28px] border-2 border-cyan-200 bg-white p-2 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:shadow-cyan-500/20 dark:border-cyan-800 dark:bg-zinc-800">
                        <Image
                          src="/screenshots/personality.png"
                          alt="AI personality insights based on your habits"
                          width={280}
                          height={560}
                          className="h-auto w-full rounded-[22px]"
                        />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                  >
                    <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-3xl">
                      <span className="text-2xl md:text-4xl">🧠</span>
                      Know Yourself Better
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                      Your habits reveal who you are. Ritualist uses on-device machine learning to analyze your behavior patterns and generate insights about your Big Five personality traits. Discover patterns you never knew existed and choose habits that match your traits instead of fighting against them.
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-base">
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> ML-powered personality analysis</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Big Five trait breakdown</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Behavioral pattern recognition</li>
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Feature 2: Analytics */}
              <div className="mb-24">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                    className="md:order-1 md:text-right"
                  >
                    <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-3xl md:flex-row-reverse md:justify-start">
                      <span className="text-2xl md:text-4xl">💡</span>
                      Inspiring Insights
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                      See your progress come to life. Track your streaks, spot patterns, and get personalized motivational messages that adapt to your journey. Insights that inspire you to keep going.
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-base">
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Streak tracking and completion trends</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Personalized motivation cards</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Weekly recaps and pattern detection</li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                    className="flex justify-center md:order-2 md:justify-end"
                  >
                    <div className="w-full max-w-[240px] md:max-w-[280px]">
                      <div className="rounded-[28px] border-2 border-blue-200 bg-white p-2 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:shadow-blue-500/20 dark:border-blue-800 dark:bg-zinc-800">
                        <Image
                          src="/screenshots/analytics.png"
                          alt="Beautiful analytics dashboard with insights and trends"
                          width={280}
                          height={560}
                          className="h-auto w-full rounded-[22px]"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Feature 3: Customization */}
              <div className="mb-24">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                    className="flex justify-center md:justify-start"
                  >
                    <div className="w-full max-w-[240px] md:max-w-[280px]">
                      <div className="rounded-[28px] border-2 border-rose-200 bg-white p-2 shadow-lg shadow-rose-500/10 transition-all duration-300 hover:shadow-rose-500/20 dark:border-rose-800 dark:bg-zinc-800">
                        {/* TODO(screenshots): swap for a dedicated Apple Health screenshot. Using customization.png as placeholder — `health.png` was referenced previously but never committed. */}
                        <Image
                          src="/screenshots/customization.png"
                          alt="Apple Health integration showing mindful minutes and activity data"
                          width={280}
                          height={560}
                          className="h-auto w-full rounded-[22px]"
                        />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                  >
                    <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-3xl">
                      <span className="text-2xl md:text-4xl">❤️</span>
                      Apple Health
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                      Connect your habits to Apple Health. Sync mindful minutes from breathing sessions, track steps, water intake, and more. Your health data stays on your device — always.
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-base">
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Read and write to Apple Health</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Auto-complete habits from health data</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Mindful minutes, steps, water, and more</li>
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Feature 4: Location-based */}
              <div className="mb-24">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                    className="md:order-1 md:text-right"
                  >
                    <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-3xl md:flex-row-reverse md:justify-start">
                      <span className="text-2xl md:text-4xl">📍</span>
                      Smart Triggers
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                      Never miss a habit again. Location-based reminders trigger when you arrive at the gym or get home. Timed sessions track your fasting and breathing with live progress on your Lock Screen.
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-base">
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Location-based geofencing reminders</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Live Activities on your Lock Screen</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Smart timers for fasting and breathing</li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                    className="flex justify-center md:order-2 md:justify-end"
                  >
                    <div className="w-full max-w-[240px] md:max-w-[280px]">
                      <div className="rounded-[28px] border-2 border-green-200 bg-white p-2 shadow-lg shadow-green-500/10 transition-all duration-300 hover:shadow-green-500/20 dark:border-green-800 dark:bg-zinc-800">
                        <Image
                          src="/screenshots/location.png"
                          alt="Location-based habit reminders with geofencing"
                          width={280}
                          height={560}
                          className="h-auto w-full rounded-[22px]"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Feature 5: iCloud Sync */}
              <div className="mb-24">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                    className="flex justify-center md:justify-start"
                  >
                    <div className="w-full max-w-[240px] md:max-w-[280px]">
                      <div className="rounded-[28px] border-2 border-teal-200 bg-white p-2 shadow-lg shadow-teal-500/10 transition-all duration-300 hover:shadow-teal-500/20 dark:border-teal-800 dark:bg-zinc-800">
                        {/* TODO(screenshots): swap for a dedicated fasting/breathing screenshot. Using sync.png as placeholder — `timed.png` was referenced previously but never committed. */}
                        <Image
                          src="/screenshots/sync.png"
                          alt="Timed habits showing fasting protocols and guided breathing sessions"
                          width={280}
                          height={560}
                          className="h-auto w-full rounded-[22px]"
                        />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                  >
                    <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-3xl">
                      <span className="text-2xl md:text-4xl">🫁</span>
                      Fasting & Breathing
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                      Track intermittent fasting with built-in protocols like 16:8 and 20:4. Practice guided breathing with customizable patterns. Log your mood and watch your wellness journey unfold.
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-base">
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Fasting protocols with smart timers</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Guided breathing with haptic feedback</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Mood tracking during sessions</li>
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Feature 6: Privacy First */}
              <div className="mb-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                    className="md:order-1 md:text-right"
                  >
                    <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-black dark:text-white md:mb-4 md:gap-3 md:text-3xl md:flex-row-reverse md:justify-start">
                      <span className="text-2xl md:text-4xl">🔒</span>
                      Your Privacy, Protected
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                      Your habit data stays on your device and in your personal iCloud account. Personality insights are processed locally. Your journey is yours alone.
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:mt-6 md:space-y-2 md:text-base">
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> On-device ML processing</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> Your data stays yours</li>
                      <li className="flex items-center gap-2"><span className="text-[#0A95C2]">✓</span> No ads, no social pressure</li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
                    className="flex justify-center md:order-2 md:justify-end"
                  >
                    <div className="w-full max-w-[240px] md:max-w-[280px]">
                      <div className="rounded-[28px] border-2 border-zinc-300 bg-white p-2 shadow-lg shadow-zinc-500/10 transition-all duration-300 hover:shadow-zinc-500/20 dark:border-zinc-600 dark:bg-zinc-800">
                        <Image
                          src="/screenshots/privacy.png"
                          alt="Your privacy protected with on-device processing"
                          width={280}
                          height={560}
                          className="h-auto w-full rounded-[22px]"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* More Features Grid */}
          <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto max-w-5xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl"
              >
                And so much more
              </motion.h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                {[
                  { icon: '⌚', title: 'Apple Watch', desc: 'Log habits and check progress straight from your wrist' },
                  { icon: '☁️', title: 'iCloud Sync', desc: 'Seamless sync across all your Apple devices' },
                  { icon: '🎨', title: 'Customization', desc: 'Custom colors, emojis, and flexible categories' },
                  { icon: '🏆', title: 'Shareable Cards', desc: 'Share streak milestones, perfect days, and weekly recaps' },
                  { icon: '📱', title: 'Widgets', desc: 'Track habits from your Home Screen' },
                  { icon: '🔴', title: 'Live Activities', desc: 'Real-time progress on your Lock Screen' },
                  { icon: '✨', title: 'Inspiration', desc: 'Personalized messages that adapt to your progress' },
                  { icon: '🌍', title: '5 Languages', desc: 'English, German, Spanish, French, and Romanian' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.05, 0.3) }}
                    className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800"
                  >
                    <div className="mb-2 text-2xl">{item.icon}</div>
                    <h3 className="mb-1 text-sm font-semibold text-black dark:text-white">{item.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats & Testimonials Section Hidden
      <section id="testimonials" className="bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl font-bold text-black dark:text-white md:text-5xl"
          >
            Trusted & loved by users worldwide
          </motion.h2>

          {/* Stats * /}
          <div id="stats" className="mb-20 grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold text-black dark:text-white">
                <AnimatedCounter target={5000} suffix="+" />
              </div>
              <div className="text-lg text-zinc-600 dark:text-zinc-400">Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold text-black dark:text-white">4.8★</div>
              <div className="text-lg text-zinc-600 dark:text-zinc-400">Average Rating</div>
            </motion.div>
          </div>

          {/* Testimonials * /}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { quote: 'Finally, a habit tracker that actually understands me. The personality insights are mind-blowing!', name: 'Sarah M.', role: 'Product Designer', delay: 0.1 },
              { quote: 'The location-based reminders changed everything. I never forget my gym routine anymore.', name: 'Mike T.', role: 'Fitness Enthusiast', delay: 0.2 },
              { quote: 'Beautiful design and privacy-focused. Exactly what I needed for tracking my daily rituals.', name: 'Emma L.', role: 'Entrepreneur', delay: 0.3 },
            ].map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: t.delay, type: 'spring', stiffness: 100, damping: 20 }}
                className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="mb-4 flex items-center gap-1 text-amber-500">
                  {'★'.repeat(5)}
                </div>
                <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0A95C2] to-[#0556A6] text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-900 dark:text-white">{t.name}</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

          {/* FAQ Section */}
          <section id="faq" className="border-y border-zinc-200 bg-white px-6 py-20 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mx-auto max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center text-4xl font-bold text-black dark:text-white md:text-5xl"
              >
                Frequently asked questions
              </motion.h2>
              <div>
                <FaqItem
                  isOpen={openFaqIndex === 0}
                  index={0}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                  question="Is Ritualist free to use?"
                  answer="Ritualist offers a free version with core features. Premium features like advanced analytics and unlimited habits are available through a subscription."
                />
                <FaqItem
                  isOpen={openFaqIndex === 1}
                  index={1}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                  question="Which devices are supported?"
                  answer="Ritualist is available for iPhone, iPad, and Apple Watch. Your data syncs seamlessly across iPhone and iPad via iCloud, and the watch app stays in sync with your iPhone over WatchConnectivity even when iCloud sync is off."
                />
                <FaqItem
                  isOpen={openFaqIndex === 2}
                  index={2}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                  question="How does the personality analysis work?"
                  answer="Our on-device ML model analyzes your habit patterns to generate insights about your Big Five personality traits. All processing happens locally on your device for complete privacy."
                />
                <FaqItem
                  isOpen={openFaqIndex === 3}
                  index={3}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                  question="Is my data private?"
                  answer="Yes. Your habit data stays on your device and in your personal iCloud account. Personality insights are processed entirely on-device. We never have access to your information."
                />
                <FaqItem
                  isOpen={openFaqIndex === 4}
                  index={4}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                  question="Can I export my data?"
                  answer="Yes! You can export all your habit data, analytics, and insights at any time in standard formats like CSV and JSON."
                />
                <FaqItem
                  isOpen={openFaqIndex === 5}
                  index={5}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 5 ? null : 5)}
                  question="How do I restore my purchases?"
                  answer='Go to Settings > tap "Restore Purchases" to restore any previous subscriptions on your current device.'
                />
                <FaqItem
                  isOpen={openFaqIndex === 6}
                  index={6}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 6 ? null : 6)}
                  question="How do I cancel my subscription?"
                  answer="Subscriptions are managed through your Apple ID. Go to Settings > Apple ID > Subscriptions to manage or cancel."
                />
                <FaqItem
                  isOpen={openFaqIndex === 7}
                  index={7}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 7 ? null : 7)}
                  question="Does Ritualist work with Apple Health?"
                  answer="Yes! Ritualist can read and write health data like mindful minutes, steps, and water intake. Health integration is optional and your health data never leaves your device."
                />
                <FaqItem
                  isOpen={openFaqIndex === 8}
                  index={8}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 8 ? null : 8)}
                  question="Does Ritualist work with Apple Watch?"
                  answer="Yes! Ritualist ships with a companion Apple Watch app that stays in sync with your iPhone over WatchConnectivity. See today's habits at a glance, log binary and numeric ones from your wrist, and check your progress without reaching for your phone — even when iCloud sync is off."
                />
                <FaqItem
                  isOpen={openFaqIndex === 9}
                  index={9}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 9 ? null : 9)}
                  question="What are timed habits?"
                  answer="Timed habits let you track fasting and breathing exercises. Choose from built-in protocols like 16:8 fasting or box breathing, or create your own. Track mood, view session history, and monitor progress."
                />
                <FaqItem
                  isOpen={openFaqIndex === 10}
                  index={10}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 10 ? null : 10)}
                  question="Which languages does Ritualist support?"
                  answer="Ritualist is available in English, German, Spanish, French, and Romanian."
                />
                <FaqItem
                  isOpen={openFaqIndex === 11}
                  index={11}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === 11 ? null : 11)}
                  question="Can I share my achievements?"
                  answer="Yes! Ritualist generates shareable snapshot cards for streak milestones, perfect days, and weekly recaps. Share them directly from the app to celebrate your progress."
                />
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
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
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                  className="rounded-3xl border-2 border-zinc-200 bg-white p-8 dark:border-zinc-700 dark:bg-zinc-800"
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
                    <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-500">
                      <span>✗</span>
                      <span>Location-based reminders</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-500">
                      <span>✗</span>
                      <span>AI personality insights</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-500">
                      <span>✗</span>
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400 dark:text-zinc-500">
                      <span>✗</span>
                      <span>Apple Health integration</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Premium Features Overview */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                  className="rounded-3xl border-2 border-[#0A95C2] bg-white p-8 shadow-lg shadow-cyan-500/10 dark:border-[#0A95C2] dark:bg-zinc-800"
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
                    <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                      <span className="text-green-500">✓</span>
                      <span>Apple Health integration</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                      <span className="text-green-500">✓</span>
                      <span>Shareable snapshot cards</span>
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
                Available plans
              </motion.h3>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                {/* Weekly */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="rounded-2xl border-2 border-zinc-200 bg-white p-4 md:p-6 dark:border-zinc-700 dark:bg-zinc-800"
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
                  className="rounded-2xl border-2 border-zinc-200 bg-white p-4 md:p-6 dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <h4 className="mb-2 text-base font-bold text-black md:mb-3 md:text-lg dark:text-white">Monthly</h4>
                  <div className="mb-3 md:mb-4">
                    <span className="text-2xl font-bold text-black md:text-4xl dark:text-white">$8.99</span>
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
                  className="relative col-span-2 rounded-2xl border-2 border-[#0A95C2] bg-gradient-to-br from-[#0A95C2] to-[#0556A6] p-4 md:col-span-1 md:p-6 md:scale-105"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-0.5 text-xs font-medium text-[#0556A6] md:px-4 md:py-1">
                    Most Popular
                  </div>
                  <h4 className="mb-2 text-base font-bold text-white md:mb-3 md:text-lg">Annual</h4>
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-white md:text-4xl">$49.99</span>
                    <span className="text-xs text-blue-200 md:text-base">/year</span>
                  </div>
                  <p className="mb-1 text-xs text-blue-200 md:text-sm">Save 58% vs monthly</p>
                  <p className="mb-2 text-xs font-semibold text-amber-300 md:mb-3 md:text-sm">7-day free trial included</p>
                  <p className="text-xs text-blue-100 md:text-sm">
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

          {/* Final CTA Section */}
          <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6 py-20 dark:from-black dark:via-zinc-900 dark:to-black">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 text-3xl font-bold text-white md:text-5xl"
              >
                Start building better habits today
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-10 text-lg text-zinc-400 md:text-xl"
              >
                Join thousands of people who are transforming their daily rituals. Privacy-first, powered by intelligence, designed for you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="https://apps.apple.com/app/id6755661147"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent({ action: 'app_store_click', category: 'conversion', label: 'bottom_cta' })}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 active:scale-[0.97] hover:bg-zinc-100"
                >
                  <FaApple className="h-5 w-5" />
                  Download on AppStore
                </a>
              </motion.div>
            </div>
          </section>

          {/* Beta Section */}
          <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                  Beta
                </span>
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white md:text-3xl">
                  Try upcoming features early
                </h2>
                <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                  Join the beta via TestFlight to get early access to new features, provide feedback, and help shape the future of Ritualist.
                </p>
                <a
                  href="https://testflight.apple.com/join/RVMZXfse"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent({ action: 'testflight_click', category: 'conversion', label: 'beta_section' })}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-900 transition-all hover:scale-105 active:scale-[0.97] hover:bg-amber-100 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-300 dark:hover:bg-amber-900/40"
                >
                  <FaApple className="h-4 w-4" />
                  Join TestFlight Beta
                </a>
              </motion.div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-200 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Ritualist</h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                  Transform your life with habits that actually stick. Privacy-first habit tracking with AI insights and smart reminders.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/ritualist.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent({ action: 'outbound_click', category: 'engagement', label: 'instagram' })}
                    className={linkClass}
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#features"
                      className={linkClass}
                    >
                      Features
                    </a>
                  </li>
                  {/* Stats section link hidden
                <li>
                  <a
                    href="#stats"
                    className={linkClass}
                  >
                    Stats
                  </a>
                </li>
                */}
                  <li>
                    <a
                      href="#difference"
                      className={linkClass}
                    >
                      Why Ritualist
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className={linkClass}
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <Link href="/roadmap" className={linkClass}>
                      Roadmap
                    </Link>
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
                      onClick={() => trackEvent({ action: 'outbound_click', category: 'engagement', label: 'github' })}
                      className={linkClass}
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <Link href="/support" onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'support' })} className={linkClass}>
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'privacy' })} className={linkClass}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'terms' })} className={linkClass}>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://vladblajovan.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent({ action: 'outbound_click', category: 'engagement', label: 'meet_me' })}
                      className={linkClass}
                    >
                      Meet me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800 flex flex-col items-center gap-4">
              <a href="https://www.buymeacoffee.com/vladblajovan" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent({ action: 'outbound_click', category: 'engagement', label: 'buymeacoffee' })}>
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="h-10" />
              </a>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                © 2025–{new Date().getFullYear()} Ritualist.
              </span>
              <div className="flex items-center gap-3">
                <CookieSettingsButton />
                <button
                  onClick={() => document.documentElement.classList.toggle('dark')}
                  aria-label="Toggle theme"
                  className="flex items-center justify-center rounded-full border border-zinc-300 p-1.5 text-zinc-400 transition hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-white"
                >
                  {isDark ? (
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  ) : (
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </footer>


      </div>
    </MotionConfig>
  );
}
