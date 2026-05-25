'use client';

import type { IconType } from 'react-icons';
import { FaApple, FaGithub, FaInstagram } from 'react-icons/fa';
import {
  HiBadgeCheck,
  HiCalendar,
  HiChartBar,
  HiCheckCircle,
  HiChevronDown,
  HiChevronRight,
  HiClock,
  HiCloud,
  HiCollection,
  HiDeviceMobile,
  HiFlag,
  HiHeart,
  HiLightningBolt,
  HiMenu,
  HiSparkles,
  HiX,
} from 'react-icons/hi';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import CookieSettingsButton from './components/CookieSettingsButton';
import { trackEvent } from './lib/analytics';

const appStoreUrl = 'https://apps.apple.com/app/id6755661147';
const testFlightUrl = 'https://testflight.apple.com/join/RVMZXfse';
const instagramUrl = 'https://instagram.com/ritualist.app';
const githubUrl = 'https://github.com/vladblajovan/Ritualist';

const screenshots = {
  home: '/screenshots/website/iphone-home.jpg',
  swipe: '/screenshots/website/iphone-swipe-actions.jpg',
  progress: '/screenshots/website/iphone-progress-sheet.jpg',
  insights: '/screenshots/website/iphone-insights.jpg',
  you: '/screenshots/website/iphone-you.jpg',
  challenge: '/screenshots/website/iphone-challenge-detail.jpg',
  achievements: '/screenshots/website/iphone-achievements.jpg',
  watch: '/screenshots/website/watch-today.jpg',
  watchProgress: '/screenshots/website/watch-progress.jpg',
};

const motivationLines = [
  'Master your habits. Master yourself.',
  'Your habits shape who you become',
  'Build habits that build you',
  'Track habits. Unlock potential.',
  "Every habit tells a story. What's yours?",
  'Smart habits for a smarter you',
  'Your habits. Your insights. Your transformation.',
  'Build rituals, not just habits',
  'Where habits meet intelligence',
];

const motivationTypingDelayMs = 700;
const motivationCycleMs = 60000;

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#progress', label: 'Progress' },
  { href: '#watch', label: 'Watch' },
  { href: '#pricing', label: 'Pro' },
  { href: '#faq', label: 'FAQ' },
];

const productPillars = [
  {
    icon: HiLightningBolt,
    title: 'Fast daily logging',
    body: 'Complete, reset, edit, or review habits from the day view with swipe actions and quick controls.',
  },
  {
    icon: HiClock,
    title: 'Timed rituals',
    body: 'Run fasting and breathing sessions with focused timers and Live Activity support.',
  },
  {
    icon: HiBadgeCheck,
    title: 'Achievements',
    body: 'Earn milestones, perfect days, streak goals, and progress paths that make consistency visible.',
  },
  {
    icon: HiFlag,
    title: 'Challenges',
    body: 'Follow guided challenges that turn good intentions into concrete routines.',
  },
  {
    icon: HiChartBar,
    title: 'Personal insights',
    body: 'Read trends, completion calendars, habit patterns, and on-device personality signals.',
  },
  {
    icon: HiDeviceMobile,
    title: 'Apple Watch',
    body: 'Check today, log habits, and adjust numeric progress without reaching for your phone.',
  },
];

const lensMoments = [
  {
    title: 'Log without opening a sheet',
    body: 'Quick-add and complete controls stay attached to the habit row, so small progress takes one tap.',
    image: screenshots.home,
    focusPosition: '50% 55%',
    lensBackgroundPosition: 'right 54%',
    lensBackgroundSize: '500px auto',
    lensClassName: 'left-1/2 top-8 h-36 w-36 -translate-x-1/2 rounded-full',
  },
  {
    title: 'Ask from anywhere',
    body: 'The assistant sits within reach when you want help planning, reflecting, or turning intention into a habit.',
    image: screenshots.home,
    focusPosition: '100% 100%',
    lensBackgroundPosition: 'right 42px bottom 34px',
    lensBackgroundSize: '340px auto',
    lensClassName: 'right-7 top-8 h-36 w-36 rounded-full',
  },
  {
    title: 'Adjust progress in context',
    body: 'Progress sheets keep targets, step controls, quick adds, and complete-all actions close to the habit.',
    image: screenshots.progress,
    focusPosition: '50% 80%',
    lensBackgroundPosition: 'center 70%',
    lensBackgroundSize: '255px auto',
    lensClassName: 'left-1/2 top-8 h-36 w-36 -translate-x-1/2 rounded-full',
  },
];

const freeBenefits = [
  'Core habit tracking',
  'Up to 5 active habits',
  'Streaks and basic progress',
  'iCloud sync',
  'Apple Watch companion basics',
  'Apple Health integration',
  'Location reminders',
];

const proBenefits = [
  'Unlimited active habits',
  'Advanced analytics and heatmaps',
  'Personality insights and assistant features',
  'Richer challenge and achievement review',
  'Power-user history and progress tools',
  'Backup, restore, import, and export tools',
];

const ritualStyleOptions = [
  {
    title: 'I want the fastest daily logging',
    result: 'Start with quick actions, Apple Watch logging, widgets, Health, and location reminders. Go Pro when you want unlimited active habits and more history.',
    pro: 'Best Pro fit: unlimited active habits and power-user progress tools.',
  },
  {
    title: 'I want to understand my patterns',
    result: 'Ritualist gives you trends, calendars, streak context, and a personal place to review progress. Pro is strongest when you want deeper analysis.',
    pro: 'Best Pro fit: advanced analytics, heatmaps, and personality insights.',
  },
  {
    title: 'I want guided momentum',
    result: 'Challenges, achievements, and streaks turn vague goals into visible progress. Pro helps when your habit system grows beyond the basics.',
    pro: 'Best Pro fit: richer challenge review, achievements, backup, restore, and export tools.',
  },
];

const proPlanPrices = [
  {
    name: 'Weekly',
    price: '$2.99',
    cadence: '/ week',
    note: 'Flexible access',
  },
  {
    name: 'Monthly',
    price: '$9.99',
    cadence: '/ month',
    note: 'Best for building momentum',
  },
  {
    name: 'Annual',
    price: '$49.99',
    cadence: '/ year',
    note: 'Most popular',
    featured: true,
  },
];

const socialProofs = [
  {
    quote: 'Ritualist makes habit tracking feel fast instead of heavy. The Watch flow is exactly what I wanted.',
    name: 'Alex M.',
    handle: '@alexbuilds',
  },
  {
    quote: 'The progress view helped me understand which routines were actually sticking, not just what I hoped was working.',
    name: 'Maya R.',
    handle: '@mayaroutines',
  },
  {
    quote: 'I came for simple tracking and stayed for the challenges, achievements, and the way the app fits into my day.',
    name: 'Chris L.',
    handle: '@dailyrituals',
  },
];

const faqItems = [
  {
    question: 'What can Ritualist track?',
    answer:
      'Ritualist supports simple habits, numeric habits, timed habits like fasting and breathing, Apple Health-connected habits, and routines that need reminders or location context.',
  },
  {
    question: 'Does Ritualist work on Apple Watch?',
    answer:
      'Yes. The Apple Watch companion shows today, completion progress, and habit cards so you can log habits or adjust numeric progress from your wrist.',
  },
  {
    question: 'What are Live Activities for?',
    answer:
      'Live Activities are designed for timed habits. They keep active fasting or breathing sessions visible on supported system surfaces while the session runs.',
  },
  {
    question: 'What is the You tab?',
    answer:
      'The You tab brings together achievements, challenges, streaks, and personal insights so progress has one clear place to live.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Ritualist is built around local ownership, optional iCloud sync through your own account, and on-device insight generation wherever possible.',
  },
  {
    question: 'Which devices are supported?',
    answer:
      'Ritualist is built for iPhone, iPad, and Apple Watch, with widgets and system integrations for faster day-to-day logging.',
  },
  {
    question: 'How much does Ritualist Pro cost?',
    answer:
      'Ritualist Pro supports weekly, monthly, and annual plans. Final plan amounts can be shown once they are confirmed.',
  },
  {
    question: 'Do I need Pro for Apple Health or location reminders?',
    answer:
      'No. Apple Health integration and location reminders are available in the free version. Pro is focused on unlimited active habits, deeper insights, and power-user data tools.',
  },
];

const softwareApplicationLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ritualist',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, iPadOS, watchOS',
  description:
    'Ritualist is a private habit tracker for iPhone, iPad, and Apple Watch with Live Activities, challenges, achievements, progress sheets, Apple Health support, iCloud sync, and on-device insights.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function track(action: string, category: string, label: string) {
  trackEvent({ action, category, label });
}

function pickMotivationIndex(currentIndex: number) {
  let nextIndex = currentIndex;

  while (nextIndex === currentIndex && motivationLines.length > 1) {
    nextIndex = Math.floor(Math.random() * motivationLines.length);
  }

  localStorage.setItem('lastMotivationIndex', String(nextIndex));
  return nextIndex;
}

function getNextMotivationIndex(currentIndex: number | null) {
  const storedIndex = Number.parseInt(localStorage.getItem('lastMotivationIndex') ?? '-1', 10);
  const fallbackIndex = currentIndex ?? (Number.isNaN(storedIndex) ? -1 : storedIndex);

  return pickMotivationIndex(fallbackIndex);
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);

    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, [query]);

  return matches;
}

function TypingDots() {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDotCount((currentCount) => (currentCount % 3) + 1);
    }, 260);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="inline-block min-w-8 text-left" aria-label="Writing motivation">
      {'.'.repeat(dotCount)}
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-300 bg-[#f8fbff]/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#07111c]">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6" aria-label="Primary">
        <a
          href="#top"
          onClick={() => track('nav_click', 'navigation', 'logo')}
          className="flex items-center gap-3"
        >
          <Image src="/brand-icon.png" alt="Ritualist" width={40} height={40} className="rounded-[8px]" />
          <span className="text-xl font-extrabold tracking-tight text-[#15181c] dark:text-white">Ritualist</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 dark:border-white/20 dark:bg-white/10 dark:text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <HiX className="h-5 w-5" aria-hidden /> : <HiMenu className="h-5 w-5" aria-hidden />}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => track('nav_click', 'navigation', item.label.toLowerCase())}
              className="text-sm font-semibold text-slate-700 transition hover:text-[#075cb5] dark:text-slate-200 dark:hover:text-[#7bdcff]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <AppStoreButton label="nav" compact />
        </div>

      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-300 bg-[#f8fbff] dark:border-white/10 dark:bg-[#07111c] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    track('nav_click', 'navigation', item.label.toLowerCase());
                  }}
                  className="rounded-[8px] px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-white dark:text-slate-100 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={testFlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setOpen(false);
                  track('testflight_click', 'conversion', 'mobile_nav');
                }}
                className="rounded-[8px] px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-white dark:text-slate-100 dark:hover:bg-white/10"
              >
                TestFlight
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function AppStoreButton({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('app_store_click', 'conversion', label)}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full bg-[#15181c] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-[#10151c] dark:hover:bg-slate-100',
        compact ? 'px-4 py-2 text-sm' : 'min-h-12 px-5 text-sm sm:px-6 sm:text-base',
      )}
      aria-label="Download Ritualist on the App Store"
    >
      <FaApple className={compact ? 'h-4 w-4' : 'h-5 w-5'} aria-hidden />
      App Store
    </a>
  );
}

function OutlineButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={() => track('nav_click', 'navigation', label)}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-400 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#075cb5] hover:text-[#075cb5] dark:border-white/25 dark:bg-[#122236] dark:text-slate-100 dark:hover:border-[#7bdcff] dark:hover:text-[#7bdcff] sm:px-6 sm:text-base"
    >
      {children}
      <HiChevronRight className="h-4 w-4" aria-hidden />
    </a>
  );
}

function PhoneShot({
  src,
  alt,
  className,
  priority = false,
  sizes = '(min-width: 1024px) 320px, 72vw',
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn('iphone-17-pro-max-frame', className)}>
      <div className="iphone-17-pro-max-screen">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}

function StackedPhoneShots({
  items,
  className,
  compact = false,
}: {
  items: { src: string; alt: string }[];
  className?: string;
  compact?: boolean;
}) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const placements = [
    {
      frame: 'left-6 top-3 z-20 w-[58%] sm:left-5 sm:top-0 sm:w-[56%]',
      baseRotate: -4,
      swingFrom: -14,
      idleRotate: [-4, -2, -4],
      desktopIdleRotate: [-4, -0.5, -4],
      y: [0, -8, 0],
      desktopY: [0, -16, 0],
    },
    {
      frame: 'bottom-3 right-6 z-10 w-[58%] sm:bottom-0 sm:right-5 sm:w-[56%]',
      baseRotate: 5,
      swingFrom: 15,
      idleRotate: [5, 3, 5],
      desktopIdleRotate: [5, 1.5, 5],
      y: [0, 10, 0],
      desktopY: [0, 18, 0],
    },
  ];

  return (
    <div
      className={cn(
        'relative mx-auto h-[560px] w-full max-w-[390px] sm:h-[570px] sm:max-w-[560px]',
        compact ? 'lg:h-[560px]' : 'lg:h-[620px]',
        className,
      )}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.src}
          className={cn('absolute', placements[index].frame)}
          initial={{ opacity: 0, y: 46, rotate: placements[index].swingFrom, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, rotate: placements[index].baseRotate, scale: 1 }}
          viewport={{ once: true, amount: 0.42, margin: '-80px' }}
          transition={{
            type: 'spring',
            stiffness: 95,
            damping: 14,
            mass: 0.9,
            delay: index * 0.14,
          }}
        >
          <motion.div
            animate={{
              rotate: isDesktop ? placements[index].desktopIdleRotate : placements[index].idleRotate,
              y: isDesktop ? placements[index].desktopY : placements[index].y,
            }}
            transition={{
              duration: (isDesktop ? 6.2 : 7) + index,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: 0.65 + index * 0.35,
            }}
          >
            <PhoneShot src={item.src} alt={item.alt} className="w-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function HeroDeviceStack() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[560px] sm:h-[640px]">
      <motion.div
        className="absolute right-[3%] top-4 z-30 sm:right-[6%] sm:top-2"
        initial={{ opacity: 0, y: 24, rotate: 10, scale: 0.96 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: isDesktop ? [4, 0.5, 4] : [4, 2.2, 4],
          y: isDesktop ? [0, -17, 0] : [0, -9, 0],
        }}
        transition={{
          opacity: { duration: 0.45 },
          scale: { duration: 0.45 },
          y: { duration: isDesktop ? 6.8 : 7.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 0.45 },
          rotate: { duration: isDesktop ? 6.8 : 7.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 0.45 },
        }}
      >
        <PhoneShot
          src={screenshots.home}
          alt="Ritualist Home screen with habit logging"
          priority
          sizes="(min-width: 1024px) 320px, 68vw"
          className="w-[min(72vw,330px)] sm:w-[330px]"
        />
      </motion.div>
      <motion.div
        className="absolute left-[1%] top-[42%] z-40 sm:left-[3%] sm:top-[40%]"
        initial={{ opacity: 0, y: 26, rotate: -14, scale: 0.9 }}
        animate={{
          opacity: 1,
          y: isDesktop ? [0, 12, 0] : [0, 7, 0],
          rotate: isDesktop ? [-9, -4.5, -9] : [-9, -6, -9],
          scale: 1,
        }}
        transition={{
          opacity: { duration: 0.45, delay: 0.35 },
          scale: { duration: 0.45, delay: 0.35 },
          y: { duration: isDesktop ? 7.2 : 8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 0.7 },
          rotate: { duration: isDesktop ? 7.2 : 8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 0.7 },
        }}
      >
        <WatchShot className="w-[min(34vw,170px)]" />
      </motion.div>
    </div>
  );
}

function WatchShot({
  src = screenshots.watch,
  alt = 'Ritualist Apple Watch Today screen',
  className,
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={cn('watch-ultra-3-frame', className)}>
      <div className="watch-ultra-3-screen">
        <Image src={src} alt={alt} fill sizes="260px" className="object-cover" />
      </div>
    </div>
  );
}

function StackedWatchShots() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[390px] sm:h-[390px]">
      <motion.div
        className="absolute left-4 top-4 z-20"
        initial={{ opacity: 0, y: 28, rotate: -15, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, rotate: -5, scale: 1 }}
        viewport={{ once: true, amount: 0.45, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 105, damping: 15 }}
      >
        <motion.div
          animate={{
            rotate: isDesktop ? [-5, -1.5, -5] : [-5, -3, -5],
            y: isDesktop ? [0, -14, 0] : [0, -7, 0],
          }}
          transition={{ duration: isDesktop ? 6.4 : 7.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 0.65 }}
        >
          <WatchShot />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-4 z-10"
        initial={{ opacity: 0, y: 32, rotate: 17, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, rotate: 7, scale: 1 }}
        viewport={{ once: true, amount: 0.45, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 105, damping: 15, delay: 0.12 }}
      >
        <motion.div
          animate={{
            rotate: isDesktop ? [7, 2.5, 7] : [7, 4.5, 7],
            y: isDesktop ? [0, 16, 0] : [0, 8, 0],
          }}
          transition={{ duration: isDesktop ? 7 : 8.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 0.8 }}
        >
          <WatchShot
            src={screenshots.watchProgress}
            alt="Ritualist Apple Watch progress logging screen"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: 'center' | 'left';
}) {
  return (
    <div className={cn('mx-auto max-w-3xl', align === 'center' ? 'text-center' : 'text-left')}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#075cb5] dark:text-[#7bdcff]">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#15181c] dark:text-white sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-200 sm:text-lg">{body}</p>
    </div>
  );
}

function FeatureMoment({
  visual,
  eyebrow,
  title,
  body,
  features,
  reverse = false,
  children,
}: {
  visual: ReactNode;
  eyebrow: string;
  title: string;
  body: string;
  features: { icon: IconType; title: string; body: string }[];
  reverse?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        'grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center',
        reverse && 'lg:grid-cols-[1.08fr_0.92fr]',
      )}
    >
      <div className={cn('relative min-w-0 px-2 sm:px-0', reverse && 'lg:order-2')}>{visual}</div>
      <motion.div
        initial={{ x: reverse ? -18 : 18 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={cn(
          'min-w-0 rounded-[8px] border border-slate-300 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.07)] dark:border-white/20 dark:bg-[#101b2a] dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-8',
          reverse && 'lg:order-1',
        )}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#075cb5] dark:text-[#7bdcff]">
          {eyebrow}
        </p>
        <h3 className="text-3xl font-bold leading-tight tracking-tight text-[#15181c] dark:text-white sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-200">{body}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[8px] border border-slate-200 bg-white/90 p-4 shadow-[0_12px_34px_rgba(15,23,42,0.055)] dark:border-white/10 dark:bg-[#111d2c]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#dcebff] text-[#075cb5] dark:bg-[#15304c] dark:text-[#7bdcff]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h4 className="text-base font-semibold text-[#15181c] dark:text-white">{feature.title}</h4>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{feature.body}</p>
              </div>
            );
          })}
        </div>
        {children}
      </motion.div>
    </div>
  );
}

function LensMomentCard({
  title,
  body,
  image,
  focusPosition,
  lensBackgroundPosition,
  lensBackgroundSize,
  lensClassName,
  index,
}: {
  title: string;
  body: string;
  image: string;
  focusPosition: string;
  lensBackgroundPosition: string;
  lensBackgroundSize: string;
  lensClassName: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className={cn(
        'overflow-hidden rounded-[8px] border border-slate-600 bg-[#1d2b3d] shadow-[0_20px_50px_rgba(0,0,0,0.28)]',
        index === 1 && 'sm:translate-y-5',
        index === 2 && 'sm:translate-y-10',
      )}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 220px, 90vw"
          className="scale-110 object-cover opacity-55 blur-[6px]"
          style={{ objectPosition: focusPosition }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#0b111a]/35" aria-hidden />
        <div
          className={cn(
            'absolute overflow-hidden rounded-[8px] border border-white/45 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.36)] ring-1 ring-black/10',
            lensClassName,
          )}
          style={{
            backgroundImage: `url(/RitualistApp${image})`,
            backgroundPosition: lensBackgroundPosition,
            backgroundRepeat: 'no-repeat',
            backgroundSize: lensBackgroundSize,
          }}
          aria-hidden
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-200">{body}</p>
      </div>
    </motion.div>
  );
}

function BulletList({ items, icon = 'check' }: { items: string[]; icon?: 'check' | 'sparkle' }) {
  const Icon = icon === 'sparkle' ? HiSparkles : HiCheckCircle;

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
          <Icon className={cn('mt-0.5 h-5 w-5 shrink-0', icon === 'sparkle' ? 'text-[#b96500] dark:text-[#ffd54f]' : 'text-[#075cb5] dark:text-[#7bdcff]')} aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProNudge({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-7 rounded-[8px] border border-[#b8d7ff] bg-[#f1f7ff] p-4 dark:border-[#2d6cae] dark:bg-[#0d2238]">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#075cb5] dark:bg-[#15304c] dark:text-[#7bdcff]">
          <HiSparkles className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-sm font-bold text-[#15181c] dark:text-white">{title}</p>
          <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">{body}</p>
          <a
            href="#pricing"
            onClick={() => track('pro_nudge_click', 'conversion', title)}
            className="mt-3 inline-flex text-sm font-bold text-[#075cb5] hover:text-[#064a93] dark:text-[#7bdcff] dark:hover:text-white"
          >
            Compare Free and Pro
          </a>
        </div>
      </div>
    </div>
  );
}

function RitualStyleQuiz() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = ritualStyleOptions[selectedIndex];

  return (
    <section className="bg-white px-5 py-20 dark:bg-[#0a1522] sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#075cb5] dark:text-[#7bdcff]">Find your fit</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#15181c] dark:text-white sm:text-4xl md:text-5xl">
            Pick the way you want Ritualist to help.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-200 sm:text-lg">
            A quick path helps visitors understand the app before they download, and shows where Pro becomes useful.
          </p>
        </div>

        <div className="rounded-[8px] border border-slate-300 bg-[#f8fbff] p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] dark:border-white/20 dark:bg-[#101b2a] dark:shadow-[0_22px_70px_rgba(0,0,0,0.3)] sm:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {ritualStyleOptions.map((option, index) => (
              <button
                key={option.title}
                type="button"
                onClick={() => {
                  setSelectedIndex(index);
                  track('ritual_style_select', 'engagement', option.title);
                }}
                className={cn(
                  'rounded-[8px] border p-4 text-left text-sm font-semibold transition',
                  selectedIndex === index
                    ? 'border-[#075cb5] bg-white text-[#075cb5] shadow-[0_12px_30px_rgba(13,110,253,0.13)] dark:border-[#7bdcff] dark:bg-[#102a43] dark:text-[#7bdcff]'
                    : 'border-slate-300 bg-white/70 text-slate-800 hover:border-[#81b9ff] dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-[#2d6cae]',
                )}
              >
                {option.title}
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-[8px] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#0d1b2b]">
            <p className="text-sm font-bold text-[#15181c] dark:text-white">Your Ritualist path</p>
            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{selected.result}</p>
            <p className="mt-4 rounded-[8px] bg-[#fff7df] px-4 py-3 text-sm font-semibold leading-6 text-[#6c4300] dark:bg-[#2c230f] dark:text-[#ffd54f]">
              {selected.pro}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <AppStoreButton label="ritual-style" compact />
              <OutlineButton href="#pricing" label="ritual-style-pricing">
                See Pro benefits
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileAppStoreBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-300 bg-white/95 px-4 py-3 shadow-[0_-16px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-[#07111c]/95 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-[#15181c] dark:text-white">Ritualist</p>
          <p className="text-xs text-slate-600 dark:text-slate-300">Free to start. Pro when the system grows.</p>
        </div>
        <AppStoreButton label="sticky-mobile" compact />
      </div>
    </div>
  );
}

function SocialProofSection() {
  return (
    <section className="bg-[#f8fbff] px-5 py-20 dark:bg-[#07111c] sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#075cb5] dark:text-[#7bdcff]">Social proof</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#15181c] dark:text-white sm:text-4xl">
              Built for people who want habits to fit real life.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-200">
              Replace these draft quotes with real App Store reviews, social posts, or customer notes once you have them.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {socialProofs.map((proof) => (
              <figure
                key={proof.handle}
                className="rounded-[8px] border border-slate-300 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.07)] dark:border-white/20 dark:bg-[#101b2a]"
              >
                <div className="mb-4 flex text-[#ffd54f]" aria-label="5 star placeholder review">
                  {'★★★★★'}
                </div>
                <blockquote className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                  “{proof.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="text-sm font-bold text-[#15181c] dark:text-white">{proof.name}</p>
                  <p className="text-xs font-medium text-[#075cb5] dark:text-[#7bdcff]">{proof.handle}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200 py-6 dark:border-white/10">
      <button
        type="button"
        onClick={() => {
          onToggle();
          if (!isOpen) track('faq_expand', 'engagement', item.question);
        }}
        className="flex w-full items-center justify-between gap-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-[#15181c] dark:text-white">{item.question}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-[#075cb5] dark:border-white/20 dark:bg-[#122236] dark:text-[#7bdcff]">
          <HiChevronDown className={cn('h-5 w-5 transition-transform', isOpen && 'rotate-180')} aria-hidden />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pt-4 text-base leading-7 text-slate-700 dark:text-slate-200">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [motivationIndex, setMotivationIndex] = useState<number | null>(null);
  const [isMotivationWriting, setIsMotivationWriting] = useState(true);
  const motivationTimeoutRef = useRef<number | null>(null);
  const motivationCycleRef = useRef<number | null>(null);

  const showNextMotivation = useCallback(() => {
    if (motivationTimeoutRef.current) {
      window.clearTimeout(motivationTimeoutRef.current);
    }

    setIsMotivationWriting(true);
    motivationTimeoutRef.current = window.setTimeout(() => {
      setMotivationIndex((currentIndex) => getNextMotivationIndex(currentIndex));
      setIsMotivationWriting(false);
      motivationTimeoutRef.current = null;
    }, motivationTypingDelayMs);
  }, []);

  const startMotivationCycle = useCallback(() => {
    if (motivationCycleRef.current) {
      window.clearInterval(motivationCycleRef.current);
    }

    motivationCycleRef.current = window.setInterval(showNextMotivation, motivationCycleMs);
  }, [showNextMotivation]);

  useEffect(() => {
    motivationTimeoutRef.current = window.setTimeout(() => {
      setMotivationIndex(getNextMotivationIndex(null));
      setIsMotivationWriting(false);
      motivationTimeoutRef.current = null;
      startMotivationCycle();
    }, motivationTypingDelayMs);

    return () => {
      if (motivationTimeoutRef.current) {
        window.clearTimeout(motivationTimeoutRef.current);
      }

      if (motivationCycleRef.current) {
        window.clearInterval(motivationCycleRef.current);
      }
    };
  }, [startMotivationCycle]);

  const handleMotivationTap = () => {
    showNextMotivation();
    startMotivationCycle();
  };

  return (
    <MotionConfig reducedMotion="user">
      <main id="top" className="min-h-screen overflow-hidden bg-[#f8fbff] pb-20 text-[#15181c] dark:bg-[#07111c] dark:text-white md:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <Header />

        <section className="relative isolate bg-[linear-gradient(180deg,#f1f8ff_0%,#f8fbff_74%,#ffffff_100%)] px-5 pb-16 pt-28 dark:bg-[linear-gradient(180deg,#07111c_0%,#0b1726_74%,#0a1522_100%)] sm:px-6 sm:pt-32 lg:pb-24">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(13,110,253,0.16),rgba(23,162,184,0.09),rgba(255,213,79,0.16))] dark:bg-[linear-gradient(115deg,rgba(13,110,253,0.26),rgba(23,162,184,0.14),rgba(255,149,0,0.14))]" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <button
                type="button"
                onClick={handleMotivationTap}
                className="relative mx-auto mb-5 inline-flex min-h-11 translate-x-8 items-center gap-2 rounded-full border border-[#b8d7ff] bg-white px-4 py-2 text-sm font-bold text-[#075cb5] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f8fbff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#075cb5] dark:border-[#2d6cae] dark:bg-[#102033] dark:text-[#7bdcff] dark:hover:bg-[#13283f] sm:translate-x-12 lg:mx-0"
                aria-label="Show another Ritualist motivation"
                title="Tap for another motivation"
              >
                <span className="pointer-events-none absolute -bottom-2 -left-4 h-3.5 w-3.5 rounded-full border border-[#b8d7ff] bg-white shadow-sm dark:border-[#2d6cae] dark:bg-[#102033]" aria-hidden />
                <span className="pointer-events-none absolute -bottom-4 -left-8 h-2.5 w-2.5 rounded-full border border-[#b8d7ff] bg-white shadow-sm dark:border-[#2d6cae] dark:bg-[#102033]" aria-hidden />
                <HiSparkles className="relative z-10 h-4 w-4 shrink-0" aria-hidden />
                <span className="relative z-10 inline-flex min-w-[14.5rem] justify-start text-left sm:min-w-[18rem]">
                  <AnimatePresence mode="wait" initial={false}>
                    {isMotivationWriting || motivationIndex === null ? (
                      <motion.span
                        key="typing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.16 }}
                      >
                        <TypingDots />
                      </motion.span>
                    ) : (
                      <motion.span
                        key={motivationIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        {motivationLines[motivationIndex]}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>
              <h1 className="text-5xl font-extrabold leading-none tracking-tight text-[#15181c] dark:text-white sm:text-7xl lg:text-8xl">
                Ritualist
              </h1>
              <p className="mx-auto mt-5 max-w-[23rem] text-xl font-semibold leading-tight text-slate-700 dark:text-slate-200 sm:max-w-2xl sm:text-3xl lg:mx-0">
                Build rituals that keep up with real life.
              </p>
              <p className="mx-auto mt-6 max-w-[23rem] text-base leading-8 text-slate-700 dark:text-slate-200 sm:max-w-2xl sm:text-lg lg:mx-0">
                Track daily habits, timed rituals, challenges, achievements, Apple Watch progress, Live Activities,
                and private insights in one focused app.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <AppStoreButton label="hero" />
                <OutlineButton href="#pricing" label="hero-pro">
                  See Pro benefits
                </OutlineButton>
              </div>
              <p className="mx-auto mt-4 max-w-[25rem] text-sm font-medium leading-6 text-slate-600 dark:text-slate-300 lg:mx-0">
                Free to start with Health, location reminders, iCloud, and Apple Watch basics. Pro unlocks unlimited habits,
                deeper insights, and power-user data tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mx-auto w-full min-w-0 max-w-[520px]"
            >
              <HeroDeviceStack />
            </motion.div>
          </div>
        </section>

        <section id="features" className="border-t border-slate-300 bg-white px-5 py-20 dark:border-white/10 dark:bg-[#0a1522] sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Daily flow"
              title="Everything you need for today is close."
              body="Home brings the calendar, habit list, quick logging, swipe actions, and progress sheets into a single view that is fast enough to use several times a day."
            />

            <div className="mt-14">
              <FeatureMoment
                visual={
                  <StackedPhoneShots
                    compact
                    items={[
                      { src: screenshots.swipe, alt: 'Ritualist swipe quick actions' },
                      { src: screenshots.progress, alt: 'Ritualist progress sheet' },
                    ]}
                  />
                }
                eyebrow="Swipe, tap, adjust"
                title="Fast enough for the moments between things."
                body="Screenshots lead the story, with the everyday controls close beside them: quick swipes, habit sheets, timers, achievements, and challenge paths are all easy to scan."
                features={productPillars.slice(0, 4)}
              >
                <ProNudge
                  title="When your system grows"
                  body="Pro removes the active-habit ceiling and adds deeper progress tools, while Health, location reminders, iCloud, and Apple Watch basics stay available free."
                />
              </FeatureMoment>
            </div>
          </div>
        </section>

        <section id="progress" className="bg-[#f8fbff] px-5 py-20 dark:bg-[#07111c] sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Progress"
              title="The habit loop goes beyond checkmarks."
              body="Achievements, challenges, streaks, trend charts, and personal insights give your routines shape without turning them into noise."
            />

            <div className="mt-14">
              <FeatureMoment
                reverse
                visual={
                  <StackedPhoneShots
                    compact
                    items={[
                      { src: screenshots.achievements, alt: 'Ritualist Achievements screen' },
                      { src: screenshots.challenge, alt: 'Ritualist challenge detail screen' },
                    ]}
                  />
                }
                eyebrow="Challenges, achievements, history"
                title="Progress has a place to collect."
                body="Achievements, challenges, trends, and calendars live as a connected loop, giving the page a clearer product story with less card clutter."
                features={[
                  {
                    icon: HiBadgeCheck,
                    title: 'Achievements',
                    body: 'Milestones, perfect days, and streak goals make consistent effort visible.',
                  },
                  {
                    icon: HiFlag,
                    title: 'Challenges',
                    body: 'Guided challenge paths turn a broad goal into a clear set of daily actions.',
                  },
                  {
                    icon: HiCalendar,
                    title: 'Readable history',
                    body: 'Completion calendars separate full days from partial progress so momentum is easier to understand.',
                  },
                  {
                    icon: HiCollection,
                    title: 'Weekly recaps',
                    body: 'Recaps and streak summaries keep the bigger pattern easy to review.',
                  },
                ]}
              >
                <ProNudge
                  title="For deeper review"
                  body="Pro is strongest when you want advanced analytics, heatmaps, personality insights, and better tools for reviewing a growing routine."
                />
              </FeatureMoment>
            </div>

            <div className="mt-24 grid gap-10 sm:mt-28 lg:mt-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <StackedPhoneShots
                items={[
                  { src: screenshots.insights, alt: 'Ritualist Insights screen' },
                  { src: screenshots.you, alt: 'Ritualist You tab with personal insights' },
                ]}
              />
              <div className="rounded-[8px] border border-slate-300 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.07)] dark:border-white/20 dark:bg-[#101b2a] dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#128596] dark:text-[#7cecff]">Insights</p>
                <h3 className="text-2xl font-bold leading-tight tracking-tight text-[#15181c] dark:text-white sm:text-3xl">See what your routine is actually doing.</h3>
                <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-200">
                  Trend charts, completion calendars, streaks, and personality patterns help you understand what is
                  working and where a ritual needs support.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      icon: HiChartBar,
                      title: 'Trend lines',
                      body: 'Track completion over time and spot the days where consistency starts to drift.',
                    },
                    {
                      icon: HiCalendar,
                      title: 'Completion calendar',
                      body: 'Scan daily history by habit, period, and completion rate without digging through logs.',
                    },
                    {
                      icon: HiSparkles,
                      title: 'Personal context',
                      body: 'Pair streaks, achievements, and personality insights with the habits that shape them.',
                    },
                    {
                      icon: HiHeart,
                      title: 'Habit patterns',
                      body: 'Compare habits side by side to see which routines need a lighter target or better timing.',
                    },
                  ].map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <div
                        key={detail.title}
                        className="rounded-[8px] border border-slate-200 bg-[#f8fbff] p-4 dark:border-white/10 dark:bg-[#122236]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#dcebff] text-[#075cb5] dark:bg-[#15304c] dark:text-[#7bdcff]">
                            <Icon className="h-5 w-5" aria-hidden />
                          </div>
                          <h4 className="text-sm font-semibold text-[#15181c] dark:text-white">{detail.title}</h4>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{detail.body}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="watch" className="bg-white px-5 py-20 dark:bg-[#0a1522] sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Apple system"
              title="Ritualist fits the devices you already use."
              body="Apple Watch, Live Activities, widgets, Health, location reminders, and iCloud keep the app close to real daily context."
            />

            <div className="mt-14">
              <FeatureMoment
                visual={<StackedWatchShots />}
                eyebrow="Watch, Health, widgets"
                title="The system surfaces do useful work."
                body="Watch logging, widgets, Health, iCloud, and location reminders are presented together because they all reduce the distance between intention and action."
                features={[
                  {
                    icon: HiDeviceMobile,
                    title: 'Apple Watch',
                    body: 'Log habits and adjust numeric progress from your wrist.',
                  },
                  {
                    icon: HiCollection,
                    title: 'Widgets',
                    body: 'Keep streaks, calendars, and progress visible from the Home Screen.',
                  },
                  {
                    icon: HiHeart,
                    title: 'Apple Health',
                    body: 'Connect mindful minutes, steps, water, and other health signals.',
                  },
                  {
                    icon: HiCloud,
                    title: 'iCloud sync',
                    body: 'Sync progress across Apple devices through your own iCloud account.',
                  },
                ]}
              >
                <ProNudge
                  title="System features start free"
                  body="Apple Health, location reminders, iCloud, and Apple Watch basics are included free. Pro is for scale: unlimited habits, deeper insights, and data tools."
                />
              </FeatureMoment>
            </div>
          </div>
        </section>

        <section className="bg-[#10151c] px-5 py-20 text-white sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#7bdcff]">Designed for rhythm</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Calm when planning. Bright when progress lands.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                Ritualist balances a quiet daily workspace with warm moments of recognition. The interface stays easy
                to scan, while completed habits, streaks, challenges, and achievements still feel rewarding.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {lensMoments.map((moment, index) => (
                <LensMomentCard key={moment.title} {...moment} index={index} />
              ))}
            </div>
          </div>
        </section>

        <RitualStyleQuiz />

        <SocialProofSection />

        <section id="pricing" className="bg-[#f8fbff] px-5 py-20 dark:bg-[#07111c] sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Plans"
              title="Start free. Go Pro when the ritual grows."
              body="Ritualist includes Health, location reminders, iCloud, and Apple Watch basics for free. Pro is for people who want more scale, deeper review, and stronger data ownership tools."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[8px] border border-slate-300 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.07)] dark:border-white/20 dark:bg-[#101b2a] dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800 dark:text-slate-200">Free</p>
                <h3 className="mt-2 text-3xl font-bold text-[#15181c] dark:text-white">Build the habit loop</h3>
                <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  Core tracking plus Apple system features for getting started without friction.
                </p>
                <div className="mt-8">
                  <BulletList items={freeBenefits} />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[8px] border border-[#81b9ff] bg-white p-6 shadow-[0_20px_70px_rgba(13,110,253,0.16)] dark:border-[#2d6cae] dark:bg-[#0f1d2f] dark:shadow-[0_22px_70px_rgba(0,0,0,0.34)] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0d6efd] via-[#17a2b8] to-[#ffd54f]" />
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#075cb5] dark:text-[#7bdcff]">Ritualist Pro</p>
                <h3 className="mt-2 text-3xl font-bold text-[#15181c] dark:text-white">Unlock the full system</h3>
                <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  Old plan prices are shown here as placeholders until the App Store plans are finalized.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {proPlanPrices.map((plan) => (
                    <div
                      key={plan.name}
                      className={cn(
                        'relative rounded-[8px] border p-4',
                        plan.featured
                          ? 'border-[#075cb5] bg-[#edf6ff] shadow-[0_14px_34px_rgba(13,110,253,0.14)] dark:border-[#7bdcff] dark:bg-[#102a43]'
                          : 'border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5',
                      )}
                    >
                      {plan.featured && (
                        <span className="absolute -top-3 left-4 rounded-full bg-[#075cb5] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white dark:bg-[#7bdcff] dark:text-[#061523]">
                          {plan.note}
                        </span>
                      )}
                      <p className="text-sm font-bold text-[#15181c] dark:text-white">{plan.name}</p>
                      <div className="mt-3 flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold tracking-tight text-[#15181c] dark:text-white">{plan.price}</span>
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{plan.cadence}</span>
                      </div>
                      {!plan.featured && (
                        <p className="mt-2 text-xs font-medium text-slate-600 dark:text-slate-300">{plan.note}</p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <BulletList items={proBenefits} icon="sparkle" />
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <p className="text-xs font-medium leading-5 text-slate-600 dark:text-slate-300">
                    Subscribe and manage plans through your App Store account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-slate-300 bg-white px-5 py-20 dark:border-white/10 dark:bg-[#0a1522] sm:px-6 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionIntro
              eyebrow="FAQ"
              title="Questions, answered."
              body="A quick look at devices, Live Activities, privacy, the You tab, and Ritualist Pro."
            />
            <div className="mt-10">
              {faqItems.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fbff] px-5 py-20 dark:bg-[#07111c] sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl rounded-[8px] border border-slate-300 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.09)] dark:border-white/20 dark:bg-[#101b2a] dark:shadow-[0_22px_70px_rgba(0,0,0,0.32)] sm:p-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#075cb5] dark:text-[#7bdcff]">Try Ritualist</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#15181c] dark:text-white sm:text-4xl md:text-5xl">
              Bring Ritualist to your day.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-200 sm:text-lg">
              Download Ritualist or join TestFlight to help shape Apple Watch, Live Activity, challenge, and insight
              improvements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <AppStoreButton label="bottom_cta" />
              <a
                href={testFlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('testflight_click', 'conversion', 'bottom_cta')}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-400 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#075cb5] hover:text-[#075cb5] dark:border-white/25 dark:bg-[#122236] dark:text-slate-100 dark:hover:border-[#7bdcff] dark:hover:text-[#7bdcff] sm:px-6 sm:text-base"
              >
                <HiCollection className="h-5 w-5" aria-hidden />
                TestFlight
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-300 bg-white px-5 py-12 dark:border-white/10 dark:bg-[#07111c] sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/brand-icon.png" alt="" width={40} height={40} className="rounded-[8px]" />
                <span className="text-lg font-extrabold text-[#15181c] dark:text-white">Ritualist</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-700 dark:text-slate-200">
                Private habit tracking for iPhone, iPad, Apple Watch, widgets, Live Activities, and daily rituals that
                deserve attention.
              </p>
              <p className="mt-5 text-xs text-slate-600 dark:text-slate-300">Copyright 2026 Vlad Blajovan. All rights reserved.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="mb-3 text-sm font-semibold text-[#15181c] dark:text-white">Product</p>
                <div className="space-y-2 text-sm">
                  {navItems.map((item) => (
                    <a key={item.href} href={item.href} className="block text-slate-700 hover:text-[#075cb5] dark:text-slate-200 dark:hover:text-[#7bdcff]">
                      {item.label}
                    </a>
                  ))}
                  <Link href="/roadmap" className="block text-slate-700 hover:text-[#075cb5] dark:text-slate-200 dark:hover:text-[#7bdcff]">
                    Roadmap
                  </Link>
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-[#15181c] dark:text-white">Company</p>
                <div className="space-y-2 text-sm">
                  <Link href="/support" className="block text-slate-700 hover:text-[#075cb5] dark:text-slate-200 dark:hover:text-[#7bdcff]">
                    Support
                  </Link>
                  <Link href="/privacy" className="block text-slate-700 hover:text-[#075cb5] dark:text-slate-200 dark:hover:text-[#7bdcff]">
                    Privacy
                  </Link>
                  <Link href="/terms" className="block text-slate-700 hover:text-[#075cb5] dark:text-slate-200 dark:hover:text-[#7bdcff]">
                    Terms
                  </Link>
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-[#15181c] dark:text-white">Follow</p>
                <div className="flex items-center gap-2">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('outbound_click', 'engagement', 'instagram')}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-[#075cb5] hover:text-[#075cb5] dark:border-white/20 dark:text-slate-200 dark:hover:border-[#7bdcff] dark:hover:text-[#7bdcff]"
                    aria-label="Ritualist on Instagram"
                  >
                    <FaInstagram className="h-5 w-5" aria-hidden />
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('outbound_click', 'engagement', 'github')}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-[#075cb5] hover:text-[#075cb5] dark:border-white/20 dark:text-slate-200 dark:hover:border-[#7bdcff] dark:hover:text-[#7bdcff]"
                    aria-label="Ritualist on GitHub"
                  >
                    <FaGithub className="h-5 w-5" aria-hidden />
                  </a>
                </div>
                <div className="mt-4">
                  <CookieSettingsButton />
                </div>
              </div>
            </div>
          </div>
        </footer>

        <MobileAppStoreBar />
      </main>
    </MotionConfig>
  );
}
