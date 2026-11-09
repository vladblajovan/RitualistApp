'use client';

import type { IconType } from 'react-icons';
import { FaApple, FaInstagram } from 'react-icons/fa';
import {
  HiCheck,
  HiChevronDown,
  HiChevronRight,
  HiCloud,
  HiDeviceMobile,
  HiFingerPrint,
  HiHeart,
  HiLightningBolt,
  HiLocationMarker,
  HiLockClosed,
  HiMenu,
  HiMicrophone,
  HiSparkles,
  HiTemplate,
  HiX,
} from 'react-icons/hi';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';
import CookieSettingsButton from './components/CookieSettingsButton';
import { trackEvent } from './lib/analytics';

const appStoreUrl = 'https://apps.apple.com/app/id6755661147';
const instagramUrl = 'https://instagram.com/ritualist.app';

const shot = (name: string) => `/screenshots/v2/${name}.webp`;

const navItems = [
  { href: '#habits', label: 'Habits' },
  { href: '#fasting', label: 'Fasting' },
  { href: '#breathing', label: 'Breathing' },
  { href: '#medals', label: 'Medals' },
  { href: '#about-you', label: 'About You' },
  { href: '#pricing', label: 'Pricing' },
];

const whyChips = [
  { href: '#habits', label: 'Build habits that stick' },
  { href: '#fasting', label: 'Fast with a coach' },
  { href: '#breathing', label: 'Breathe and calm down' },
  { href: '#about-you', label: 'Get to know myself' },
];

const facts = [
  { value: '150+', label: 'ready-made habits' },
  { value: '6', label: 'plush fasting coaches' },
  { value: '42', label: 'medals to earn' },
  { value: '5', label: 'languages' },
  { value: '0', label: 'accounts to create' },
];

const coaches = [
  { name: 'Taisu', file: 'coach-taisu', tone: 'Warm and loyal, always on your side.', free: true },
  { name: 'Wren', file: 'coach-wren', tone: 'Plain and practical, in the colors of each phase.' },
  { name: 'Moss', file: 'coach-moss', tone: "Unhurried and reassuring. There's never a rush." },
  { name: 'Pip', file: 'coach-pip', tone: 'Bright and playful, with something to do.' },
  { name: 'Luna', file: 'coach-luna', tone: 'Warm and kind, and always fine with stopping.' },
  { name: 'Bruno', file: 'coach-bruno', tone: 'Short and practical, in as few words as it takes.' },
];

// One list of what each plan includes, rendered everywhere the site says it.
const freeBenefits = [
  'Up to 5 habits and 3 saved places',
  'Check, count, measure and timed habits',
  'Fasting and breathing timers, with the full Fasting Guide',
  'Taisu, your first fasting coach',
  'Bronze in every challenge, and every achievement',
  'Every progress chart: Patterns, History and Streaks',
  'Reminders at a time or at a place',
  'Apple Health, Apple Watch, widgets, Siri and iCloud',
  'Saving a backup of your data',
];

const proBenefits = [
  { title: 'A coach who knows your fasts', body: 'A pep talk at every stage in the tone you choose, notes from your own fasts, and all six coaches.' },
  { title: 'What your habits say about you', body: 'Your Big Five traits, what keeps you going, and activities that suit you.' },
  { title: 'Every habit you want', body: 'No cap on habits. Each keeps its own reminders, streaks and history.' },
  { title: 'Every place you go', body: 'Save every place that matters and get the right reminder as you arrive or leave.' },
  { title: 'Silver and Gold medals', body: 'Claim the higher tiers of every monthly challenge. The days you have done already count.' },
  { title: 'Breathe your way', body: 'Nine flowers that open as you breathe, patterns of your own, and what calms you most.' },
  { title: 'Reminders that fit your day', body: 'Smart Scheduling learns the days and times you actually follow through.' },
  { title: 'Bring your history back', body: 'Restore your habits and logs from a backup, on any device.' },
];

const plans = [
  { name: 'Annual', price: '$49.99', cadence: 'a year', note: 'Starts with 1 week free', featured: true },
  { name: 'Monthly', price: '$9.99', cadence: 'a month', note: 'Cancel anytime' },
  { name: 'Lifetime', price: '$99.99', cadence: 'once', note: 'Pay once, Pro for good' },
];

const faqItems = [
  {
    question: 'Is Ritualist free?',
    answer:
      'Yes. Download it free and keep up to 5 habits and 3 places, with fasting and breathing timers, the Fasting Guide, every progress chart, Bronze medals, Apple Health, Apple Watch, widgets and iCloud. Pro removes the limits and adds the fasting coach, About You, Silver and Gold medals and more. Annual starts with a week free.',
  },
  {
    question: 'What can I track?',
    answer:
      'Four kinds of habits: ones you check off, count (glasses, pages, steps), measure (your weight, your waist) or time (fasts and breathing). A habit can repeat on chosen days, every few days or weeks, aim for a number of days or a total each week or month, link to Apple Health, and remind you at a time or as you arrive at or leave a place.',
  },
  {
    question: 'How does fasting work?',
    answer:
      'Pick a protocol such as 16:8 or 18:6 and tap Start, or tell Ritualist when your last bite was. The ring and the Fasting Guide show which phase your body is likely in, hour by hour, and a Live Activity follows the fast on your Lock Screen and in the Dynamic Island. When it ends, a report shows how far you got and how to break the fast gently. The guide is written carefully and cites its health sources; it is not medical advice.',
  },
  {
    question: 'Who are the fasting coaches?',
    answer:
      'Six plush characters, each with its own tone: Taisu, Wren, Moss, Pip, Luna and Bruno. Your coach sets the tone and color of its messages, alerts and notes; the guide\'s advice stays the same. Taisu is free. The pep talks at every stage and the other five coaches come with Pro.',
  },
  {
    question: 'Does it work on Apple Watch?',
    answer:
      'Yes. The Watch app shows today, logs habits with a tap or the Digital Crown, and follows a running fast. Widgets, Siri ("Log a habit"), Control Center and the Action button work too.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Your habits stay on your iPhone and in your own iCloud. There is no account to create. About You is worked out on your device and can sit behind Face ID. The app sends anonymous usage counts so we can improve it; the privacy policy lists exactly what.',
  },
  {
    question: 'How much is Pro, and how do I cancel?',
    answer:
      'Annual is $49.99 a year and starts with a 1 week free trial. Monthly is $9.99 a month. Lifetime is $99.99, paid once. Prices are in US dollars and vary by country; the App Store shows yours. Subscriptions renew until you cancel them in your App Store account settings, and cancelling during the free week costs nothing.',
  },
  {
    question: 'I changed phones. Are my habits gone?',
    answer:
      'No. With iCloud on, your habits, history and places come back on their own when you sign in on a new iPhone; Ritualist welcomes you back and shows them arriving. A Pro plan comes back with Restore Purchases.',
  },
];

const softwareApplicationLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ritualist',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, iPadOS, watchOS',
  description:
    'Ritualist is a habit tracker for iPhone, iPad and Apple Watch with fasting and breathing timers, a fasting coach, challenges with struck medals, and About You, a portrait of what your habits say about you.',
  screenshot: 'https://vladblajovan.github.io/RitualistApp/screenshots/v2/home.webp',
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Pro Annual', price: '49.99', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Pro Monthly', price: '9.99', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Pro Lifetime', price: '99.99', priceCurrency: 'USD' },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function track(action: string, category: string, label: string) {
  trackEvent({ action, category, label });
}

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

// MARK: - Building blocks

function AppStoreBadge({ placement, size = 'large', tone = 'dark' }: { placement: string; size?: 'large' | 'small'; tone?: 'dark' | 'light' }) {
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('app_store_click', 'conversion', placement)}
      aria-label="Download Ritualist on the App Store"
      className={cn(
        'inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-[14px] border transition hover:-translate-y-0.5',
        tone === 'dark'
          ? 'border-black bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#111] dark:border-white/30'
          : 'border-white bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-slate-100',
        size === 'large' ? 'h-14 px-5' : 'h-10 px-3.5',
      )}
    >
      <FaApple className={size === 'large' ? 'h-7 w-7' : 'h-5 w-5'} aria-hidden />
      <span className="flex flex-col text-left leading-none">
        <span className={size === 'large' ? 'text-[11px] font-medium' : 'text-[9px] font-medium'}>Download on the</span>
        <span className={size === 'large' ? 'mt-0.5 text-[22px] font-semibold tracking-tight' : 'mt-0.5 text-[15px] font-semibold tracking-tight'}>App Store</span>
      </span>
    </a>
  );
}

function PhoneShot({ src, alt, className, priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={cn('iphone-frame', className)}>
      <div className="iphone-screen">
        <Image src={src} alt={alt} fill priority={priority} sizes="330px" className="object-cover" />
      </div>
    </div>
  );
}

function WatchShot({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn('watch-frame', className)}>
      <div className="watch-screen">
        <Image src={src} alt={alt} fill sizes="200px" className="object-cover" />
      </div>
    </div>
  );
}

function Floating({ children, className, delay = 0, amplitude = 10 }: { children: ReactNode; className?: string; delay?: number; amplitude?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}

function PhonePair({ back, front, tint }: { back: { src: string; alt: string }; front: { src: string; alt: string }; tint: string }) {
  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[420px] sm:h-[600px] sm:max-w-[460px]">
      <div className={cn('absolute inset-x-6 top-16 bottom-10 rounded-full blur-3xl', tint)} aria-hidden />
      <motion.div
        className="absolute left-0 top-0 w-[56%] sm:w-[52%]"
        initial={{ opacity: 0, rotate: -12, y: 40 }}
        whileInView={{ opacity: 1, rotate: -5, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 90, damping: 15 }}
      >
        <PhoneShot src={back.src} alt={back.alt} />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-[56%] sm:w-[52%]"
        initial={{ opacity: 0, rotate: 12, y: 60 }}
        whileInView={{ opacity: 1, rotate: 4, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 90, damping: 15, delay: 0.12 }}
      >
        <PhoneShot src={front.src} alt={front.alt} />
      </motion.div>
    </div>
  );
}

function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('mb-3 text-xs font-bold uppercase tracking-[0.22em]', className)}>{children}</p>;
}

function Check({ children, className, iconClassName }: { children: ReactNode; className?: string; iconClassName?: string }) {
  return (
    <li className={cn('flex gap-3 text-base leading-7', className)}>
      <HiCheck className={cn('mt-1 h-5 w-5 shrink-0', iconClassName)} aria-hidden />
      <span>{children}</span>
    </li>
  );
}

function ProTag({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#ffcf4d] to-[#ff9f0a] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#3d2300]', className)}>
      <HiSparkles className="h-3 w-3" aria-hidden />
      Pro
    </span>
  );
}

function FreeTag({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-full bg-[#dff6e6] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#14632f] dark:bg-[#143524] dark:text-[#7ee2a0]', className)}>
      Free
    </span>
  );
}

function ProNote({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={cn(
        'mt-8 flex items-start gap-3 rounded-2xl border p-4 text-sm leading-6',
        dark ? 'border-white/15 bg-white/[0.06] text-white/85' : 'border-[#f3d48a] bg-[#fff8e6] text-[#5a3d00] dark:border-[#5a4513] dark:bg-[#2a2210] dark:text-[#ffe19a]',
      )}
    >
      <ProTag className="mt-0.5 shrink-0" />
      <p>
        {children}{' '}
        <a
          href="#pricing"
          onClick={() => track('pro_note_click', 'conversion', 'section')}
          className={cn('font-bold underline-offset-4 hover:underline', dark ? 'text-white' : 'text-[#7a4b00] dark:text-[#ffd54f]')}
        >
          Try it free for a week
        </a>
      </p>
    </div>
  );
}

// MARK: - Header

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#07111c]/85">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6" aria-label="Primary">
        <a href="#top" onClick={() => track('nav_click', 'navigation', 'logo')} className="flex items-center gap-2.5">
          <Image src="/brand-icon-128.png" alt="" width={36} height={36} className="rounded-[9px]" priority />
          <span className="text-lg font-extrabold tracking-tight text-[#15181c] dark:text-white">Ritualist</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
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

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <AppStoreBadge placement="nav" size="small" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 dark:border-white/20 dark:bg-white/10 dark:text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <HiX className="h-5 w-5" aria-hidden /> : <HiMenu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#07111c] lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    track('nav_click', 'navigation', item.label.toLowerCase());
                  }}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// MARK: - Sections

function WhyChips({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">I want to</p>
      <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
        {whyChips.map((chip) => (
          <a
            key={chip.href}
            href={chip.href}
            onClick={() => track('why_chip_click', 'engagement', chip.label)}
            className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#075cb5] hover:text-[#075cb5] dark:border-white/20 dark:bg-white/5 dark:text-slate-100 dark:hover:border-[#7bdcff] dark:hover:text-[#7bdcff]"
          >
            {chip.label}
            <HiChevronRight className="h-4 w-4" aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-14 pt-20 sm:px-6 sm:pt-32 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_0%,rgba(13,110,253,0.18),transparent_55%),radial-gradient(ellipse_at_90%_30%,rgba(255,138,61,0.20),transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(191,90,242,0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_20%_0%,rgba(13,110,253,0.32),transparent_55%),radial-gradient(ellipse_at_90%_30%,rgba(255,138,61,0.22),transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(191,90,242,0.2),transparent_55%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
          <p className="mx-auto hidden items-center gap-2 rounded-full border border-[#b8d7ff] sm:inline-flex bg-white/80 px-3.5 py-1.5 text-xs font-bold text-[#075cb5] shadow-sm dark:border-[#2d6cae] dark:bg-[#102033]/80 dark:text-[#7bdcff] lg:mx-0">
            <HiSparkles className="h-4 w-4" aria-hidden />
            New in 2.0: fasting coaches, struck medals and About You
          </p>
          <h1 className="text-[2.4rem] sm:mt-5 font-extrabold leading-[1.02] tracking-tight text-[#15181c] dark:text-white sm:text-6xl lg:text-7xl">
            Get to know yourself,{' '}
            <span className="bg-gradient-to-r from-[#0d6efd] via-[#bf5af2] to-[#ff8a3d] bg-clip-text text-transparent">one habit at a time.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-700 dark:text-slate-200 sm:mt-5 sm:text-xl sm:leading-8 lg:mx-0">
            Habits, fasts and breathing on iPhone and Apple Watch. Log in one tap, fast with a coach in your corner,
            earn medals you can spin, and see what your habits say about you.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2 sm:mt-7 sm:flex-row sm:gap-3 sm:justify-center lg:justify-start">
            <AppStoreBadge placement="hero" />
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Free to start. Pro free for a week.
            </p>
          </div>
          <WhyChips className="mt-8 hidden lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto h-[540px] w-full max-w-[440px] sm:h-[640px] lg:h-[700px] lg:max-w-[500px]"
        >
          <Floating className="absolute inset-x-0 top-0 mx-auto w-[68%] sm:w-[64%]" amplitude={8}>
            <PhoneShot src={shot('home')} alt="Ritualist Home: today's habits with a fast running" priority />
          </Floating>
          <Floating className="absolute -left-1 bottom-24 w-[64%] sm:-left-6 sm:bottom-28" delay={0.8} amplitude={7}>
            <div className="drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)]">
              <Image src={shot('live-activity-lock')} alt="A running fast on the Lock Screen: phase, time left and a pep talk" width={900} height={375} priority className="h-auto w-full" />
            </div>
          </Floating>
          <Floating className="absolute -right-1 top-24 sm:-right-4" delay={1.4} amplitude={12}>
            <div className="flex w-[170px] items-center gap-2 rounded-2xl bg-white/95 p-2.5 shadow-[0_18px_44px_rgba(15,23,42,0.22)] ring-1 ring-black/5 dark:bg-[#132233]/95 dark:ring-white/10 sm:w-[200px]">
              <Image src={shot('coach-taisu')} alt="" width={160} height={147} className="h-12 w-12 shrink-0 rounded-xl object-cover" priority />
              <p className="text-[12px] font-semibold leading-4 text-slate-800 dark:text-slate-100">“Look what&apos;s ahead! We&apos;ll take it one phase at a time.”</p>
            </div>
          </Floating>
          <Floating className="absolute bottom-0 right-2 sm:right-0" delay={2} amplitude={9}>
            <div className="flex items-center gap-2 rounded-full bg-white/95 py-2 pl-2 pr-4 shadow-[0_16px_40px_rgba(15,23,42,0.2)] ring-1 ring-black/5 dark:bg-[#132233]/95 dark:ring-white/10">
              <Image src={shot('medal-silver')} alt="" width={120} height={120} className="h-9 w-9" priority />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">30-day streak</span>
            </div>
          </Floating>
        </motion.div>
        <WhyChips className="text-center lg:hidden" />
      </div>

      <motion.dl {...reveal} className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-5">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-4 text-center backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
            <dt className="sr-only">{fact.label}</dt>
            <dd>
              <span className="block text-3xl font-extrabold tracking-tight text-[#15181c] dark:text-white">{fact.value}</span>
              <span className="mt-1 block text-xs font-semibold text-slate-600 dark:text-slate-300">{fact.label}</span>
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}

function FeatureSection({
  id,
  eyebrow,
  eyebrowClass,
  title,
  body,
  points,
  checkClass,
  visual,
  reverse = false,
  tag,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  eyebrowClass: string;
  title: ReactNode;
  body: string;
  points: ReactNode[];
  checkClass: string;
  visual: ReactNode;
  reverse?: boolean;
  tag?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('scroll-mt-16 px-4 py-20 sm:px-6 lg:py-28', className)}>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className={cn('min-w-0', reverse && 'lg:order-2')}>{visual}</div>
        <motion.div {...reveal} className={cn('min-w-0', reverse && 'lg:order-1')}>
          <div className="flex flex-wrap items-center gap-2">
            <Eyebrow className={cn('mb-0', eyebrowClass)}>{eyebrow}</Eyebrow>
            {tag}
          </div>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 opacity-85">{body}</p>
          <ul className="mt-7 space-y-3">
            {points.map((point, index) => (
              <Check key={index} iconClassName={checkClass}>
                {point}
              </Check>
            ))}
          </ul>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function FastingSection() {
  return (
    <section id="fasting" className="relative scroll-mt-16 overflow-hidden bg-[#140b05] px-4 py-20 text-white sm:px-6 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_10%,rgba(255,138,61,0.35),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(10,132,255,0.25),transparent_55%)]" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div {...reveal}>
            <div className="flex flex-wrap items-center gap-2">
              <Eyebrow className="mb-0 text-[#ffb27a]">Fasting</Eyebrow>
              <FreeTag />
            </div>
            <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              A fast feels shorter with a friend in your corner.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              Pick 16:8, 18:6 or your own protocol and tap Start. Ritualist shows which phase your body is likely in,
              hour by hour, from blood sugar settling to the metabolic switch, and tells you what helps right now.
            </p>
            <ul className="mt-7 space-y-3 text-white/90">
              <Check iconClassName="text-[#ffb27a]">The Fasting Guide: every phase, what you may feel and what helps, with its health sources</Check>
              <Check iconClassName="text-[#ffb27a]">Feeling off? Tap hunger, headache or low energy for ways to ease it</Check>
              <Check iconClassName="text-[#ffb27a]">On your Lock Screen and in the Dynamic Island, without opening the app</Check>
              <Check iconClassName="text-[#ffb27a]">A report when you stop: how far you got and how to break your fast gently</Check>
            </ul>
          </motion.div>
          <PhonePair
            tint="bg-[#ff8a3d]/30"
            back={{ src: shot('fast'), alt: 'A running 16:8 fast: the ring, time remaining and the current phase' }}
            front={{ src: shot('guide-coach'), alt: 'The Fasting Guide with Taisu the coach and the Feeling Off? tips' }}
          />
        </div>

        <motion.div {...reveal} className="mt-20 rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <Eyebrow className="mb-0 text-[#ffb27a]">Meet your coaches</Eyebrow>
          </div>
          <h3 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Six plush coaches. Pick the voice that gets you through.
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
            Each one talks you through your fast in its own tone, with a pep talk at every stage and notes written
            from your own fasts. The advice stays the same; only the voice changes.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-6">
            {coaches.map((coach, index) => (
              <motion.figure
                key={coach.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group rounded-2xl border border-white/10 bg-black/20 p-2 text-center sm:p-3"
              >
                <motion.div whileHover={{ rotate: [0, -6, 6, 0], scale: 1.06 }} transition={{ duration: 0.5 }}>
                  <Image src={shot(coach.file)} alt={`${coach.name}, a plush fasting coach`} width={320} height={293} className="mx-auto h-auto w-full rounded-xl" />
                </motion.div>
                <figcaption className="mt-3">
                  <span className="flex flex-col items-center justify-center gap-1 text-sm font-extrabold sm:flex-row sm:gap-1.5 sm:text-base">
                    {coach.name}
                    {coach.free ? <FreeTag /> : <ProTag />}
                  </span>
                  <span className="mt-1 hidden text-xs leading-5 text-white/70 sm:block">{coach.tone}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
          <ProNote dark>Taisu is free. The pep talks at every stage, notes from your own fasts and the other five coaches come with Pro.</ProNote>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:items-center">
          <motion.div {...reveal}>
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Your fast, right on the Lock Screen.</h3>
            <p className="mt-3 text-base leading-7 text-white/80">
              The time left, the phase you&apos;re in and the track to your goal stay live on the Lock Screen and in the
              Dynamic Island, and a Start Fast control sits in Control Center or on the Action button.
            </p>
          </motion.div>
          <div className="space-y-4">
            <motion.div {...reveal} className="drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]">
              <Image src={shot('live-activity-island')} alt="The fast in the expanded Dynamic Island" width={900} height={348} className="h-auto w-full" />
            </motion.div>
            <motion.div {...reveal} className="drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]">
              <Image src={shot('live-activity-lock')} alt="The fast on the Lock Screen" width={900} height={375} className="h-auto w-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BreathingSection() {
  return (
    <section id="breathing" className="relative scroll-mt-16 overflow-hidden bg-[linear-gradient(160deg,#0b3b4a_0%,#245d7a_45%,#c98a5a_100%)] px-4 py-20 text-white sm:px-6 lg:py-28">
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px]">
          <motion.div
            className="absolute inset-x-0 top-[22%] mx-auto h-72 w-72 rounded-full bg-[#9fa8ff]/40 blur-3xl"
            animate={{ scale: [0.8, 1.15, 1.15, 0.8, 0.8], opacity: [0.5, 0.9, 0.9, 0.5, 0.5] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1] }}
            aria-hidden
          />
          <motion.div {...reveal} className="relative">
            <PhoneShot src={shot('breath1')} alt="A breathing session: a flower that opens as you breathe, inside a ring of the breath's phases" className="w-full" />
          </motion.div>
        </div>
        <motion.div {...reveal}>
          <div className="flex flex-wrap items-center gap-2">
            <Eyebrow className="mb-0 text-[#a8f0ff]">Breathing</Eyebrow>
            <FreeTag />
          </div>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">Breathing you can see, and feel.</h2>
          <p className="mt-5 text-lg leading-8 text-white/85">
            A glowing orb swells as you breathe in and settles as you let go, while your iPhone ticks and swells
            under your thumb in time with each breath. You can follow a session with your eyes closed.
          </p>
          <ul className="mt-7 space-y-3 text-white/90">
            <Check iconClassName="text-[#a8f0ff]">Box breathing, 4-7-8, cyclic sighing, coherent breathing and more</Check>
            <Check iconClassName="text-[#a8f0ff]">Log how you feel before and after, and watch the difference</Check>
            <Check iconClassName="text-[#a8f0ff]">Counts as mindful minutes in Apple Health</Check>
          </ul>
          <ProNote dark>Breathe with nine flowers that open petal by petal, like the one here, make patterns of your own, and see which breathing and which time of day calm you most.</ProNote>
        </motion.div>
      </div>
    </section>
  );
}

function MedalsSection() {
  return (
    <section id="medals" className="relative scroll-mt-16 overflow-hidden bg-white px-4 py-20 dark:bg-[#0a1522] sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2">
            <Eyebrow className="mb-0 text-[#b07a00] dark:text-[#ffd54f]">Challenges and achievements</Eyebrow>
          </div>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#15181c] dark:text-white sm:text-5xl">
            Medals worth showing off.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
            Every medal is a struck coin in its own metal, ray-traced live on your iPhone. Swipe one and it spins,
            catches the light and ticks under your finger. Join a new challenge every month, chase seasons, and earn 42 achievements as
            you go.
          </p>
        </motion.div>

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
          {[
            { src: shot('challenges'), alt: 'The Challenges tab: active challenges and ones to join', caption: 'A challenge every month', body: 'November Reflection, December Wrap, seasons and lifetime paths.' },
            { src: shot('achievement'), alt: 'A silver medal for a 30-day streak, just unlocked', caption: 'Struck the moment you earn it', body: 'Bronze, Silver, Gold and Platinum, each in its own metal.' },
            { src: shot('achievements'), alt: 'The Achievements grid with bronze and silver streak medals', caption: 'A collection that grows', body: 'Streaks, perfect days, consistency and fasting milestones.' },
          ].map((item, index) => (
            <motion.figure
              key={item.caption}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={cn('w-[70%] shrink-0 snap-center text-center md:w-auto', index === 1 && 'md:-mt-6')}
            >
              <PhoneShot src={item.src} alt={item.alt} className="mx-auto w-full max-w-[260px] md:w-[78%] md:max-w-[300px]" />
              <figcaption className="mt-5">
                <span className="block text-lg font-extrabold text-[#15181c] dark:text-white">{item.caption}</span>
                <span className="mt-1 block text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div {...reveal} className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#fbf6ee] p-4 dark:border-white/10 dark:bg-[#1b1710]">
            <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-[#e8a46b] to-[#8a4f20]" aria-hidden />
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
              <strong className="text-[#15181c] dark:text-white">Bronze is free</strong> in every challenge, and so is every achievement.
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-[#f3d48a] bg-[#fff8e6] p-4 dark:border-[#5a4513] dark:bg-[#2a2210]">
            <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-[#fff1b8] to-[#c99a1a]" aria-hidden />
            <p className="text-sm leading-6 text-[#5a3d00] dark:text-[#ffe19a]">
              <strong>Silver and Gold come with Pro</strong>, and the days you&apos;ve already done count toward them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutYouSection() {
  return (
    <section id="about-you" className="relative scroll-mt-16 overflow-hidden bg-[linear-gradient(180deg,#f7f0ff_0%,#fdf2f8_100%)] px-4 py-20 dark:bg-[linear-gradient(180deg,#1a1030_0%,#200f22_100%)] sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div {...reveal}>
          <div className="flex flex-wrap items-center gap-2">
            <Eyebrow className="mb-0 text-[#9b3fd4] dark:text-[#e0a8ff]">About You</Eyebrow>
            <ProTag />
          </div>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#15181c] dark:text-white sm:text-5xl">
            Your habits say a lot about you. Now you can read it.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
            Ritualist reads the habits you keep, and how you keep them, and draws your Big Five personality traits,
            with the reasons behind each one. Then it tells you what keeps you going and suggests activities that suit
            who you are.
          </p>
          <ul className="mt-7 space-y-3 text-slate-800 dark:text-slate-100">
            <Check iconClassName="text-[#9b3fd4] dark:text-[#e0a8ff]">“Why we think so” under every trait, from your own days</Check>
            <Check iconClassName="text-[#9b3fd4] dark:text-[#e0a8ff]">What stands out, written privately on your device</Check>
            <Check iconClassName="text-[#9b3fd4] dark:text-[#e0a8ff]">Your strongest day, your rhythm, and how you change over time</Check>
            <Check iconClassName="text-[#9b3fd4] dark:text-[#e0a8ff]">Locked behind Face ID if you like</Check>
          </ul>
          <p className="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
            A reflection for fun and self-knowledge, not a diagnosis. It needs three habits to start, and it&apos;s worked out on your iPhone.
          </p>
          <ProNote>About You comes with Pro.</ProNote>
        </motion.div>
        <PhonePair
          tint="bg-[#bf5af2]/25"
          back={{ src: shot('foryou'), alt: 'For You: About You, Streaks, Patterns and History' }}
          front={{ src: shot('aboutyou'), alt: 'About You: your dominant trait and what stands out' }}
        />
      </div>
    </section>
  );
}

function EverywhereSection() {
  const tiles: { icon: IconType; title: string; body: string }[] = [
    { icon: HiDeviceMobile, title: 'Apple Watch', body: 'Today on your wrist. Log with a tap or the Digital Crown, and follow your fast.' },
    { icon: HiTemplate, title: 'Widgets', body: 'Today, streaks, your calendar and a running fast on the Home and Lock Screens.' },
    { icon: HiMicrophone, title: 'Siri and Shortcuts', body: '“Log a habit”, start or stop a fast, or breathe, without opening the app.' },
    { icon: HiHeart, title: 'Apple Health', body: 'Steps, water, workouts and weigh-ins fill your habits in by themselves.' },
    { icon: HiLocationMarker, title: 'Place reminders', body: 'A walk as you leave home, water at the gym, a chapter at the library.' },
    { icon: HiCloud, title: 'iCloud sync', body: 'iPhone, iPad and Watch stay in step, through your own iCloud.' },
  ];

  return (
    <section className="bg-[#f8fbff] px-4 py-20 dark:bg-[#07111c] sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative mx-auto h-[360px] w-full max-w-[380px]">
          <motion.div
            className="absolute left-2 top-0"
            initial={{ opacity: 0, rotate: -14, y: 30 }}
            whileInView={{ opacity: 1, rotate: -6, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 95, damping: 15 }}
          >
            <WatchShot src={shot('watch-today')} alt="Apple Watch: today's habits with a fast running" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-2"
            initial={{ opacity: 0, rotate: 16, y: 40 }}
            whileInView={{ opacity: 1, rotate: 6, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 95, damping: 15, delay: 0.12 }}
          >
            <WatchShot src={shot('watch-water')} alt="Apple Watch: adding a glass of water" />
          </motion.div>
        </div>
        <motion.div {...reveal}>
          <div className="flex flex-wrap items-center gap-2">
            <Eyebrow className="mb-0 text-[#075cb5] dark:text-[#7bdcff]">Wherever you are</Eyebrow>
            <FreeTag />
          </div>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#15181c] dark:text-white sm:text-5xl">
            Built into your iPhone, not just onto it.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {tiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <div key={tile.title} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#101b2a]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#dcebff] text-[#075cb5] dark:bg-[#15304c] dark:text-[#7bdcff]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-bold text-[#15181c] dark:text-white">{tile.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{tile.body}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PrivacyBand() {
  return (
    <section className="bg-[#10151c] px-4 py-16 text-white sm:px-6">
      <motion.div {...reveal} className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {[
          { icon: HiLockClosed, title: 'Your habits stay yours', body: 'On your iPhone and in your own iCloud. No account, no sign-up, no ads.' },
          { icon: HiFingerPrint, title: 'Private by design', body: 'About You and the coach\'s words are worked out on your device.' },
          { icon: HiLightningBolt, title: 'Works offline', body: 'Log, fast and breathe anywhere. Sync catches up when you\'re back.' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#7bdcff]">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-white/75">{item.body}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-white px-4 py-20 dark:bg-[#0a1522] sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-[#075cb5] dark:text-[#7bdcff]">Pricing</Eyebrow>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#15181c] dark:text-white sm:text-5xl">
            Start free. Try everything for a week.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
            The free plan is a complete habit tracker, not a demo. Pro is for when you want the coach, the medals, the
            insight into you and no limits.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...reveal} className="rounded-[28px] border border-slate-200 bg-[#f8fbff] p-6 dark:border-white/10 dark:bg-[#0d1928] sm:p-8">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-extrabold text-[#15181c] dark:text-white">Free</h3>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">forever</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Everything you need to build your first habits.</p>
            <ul className="mt-6 space-y-2.5">
              {freeBenefits.map((item) => (
                <Check key={item} className="text-sm leading-6 text-slate-700 dark:text-slate-200" iconClassName="mt-0.5 h-5 w-5 text-[#2a9d4b] dark:text-[#7ee2a0]">
                  {item}
                </Check>
              ))}
            </ul>
            <div className="mt-8">
              <AppStoreBadge placement="pricing_free" />
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-[28px] border border-[#f3c95a] bg-[linear-gradient(160deg,#fffaf0_0%,#ffffff_45%,#f3f0ff_100%)] p-6 shadow-[0_30px_80px_rgba(201,138,18,0.18)] dark:border-[#6b5216] dark:bg-[linear-gradient(160deg,#241b0a_0%,#101b2a_50%,#1a1230_100%)] sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-2xl font-extrabold text-[#15181c] dark:text-white">Ritualist Pro</h3>
              <ProTag />
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">Everything in Free, and:</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {proBenefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-3">
                  <HiSparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#c98a12] dark:text-[#ffd54f]" aria-hidden />
                  <span>
                    <span className="block text-sm font-bold text-[#15181c] dark:text-white">{benefit.title}</span>
                    <span className="mt-0.5 block text-sm leading-6 text-slate-600 dark:text-slate-300">{benefit.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    'relative rounded-2xl border p-4',
                    plan.featured
                      ? 'border-[#c98a12] bg-white shadow-[0_14px_34px_rgba(201,138,18,0.22)] dark:border-[#ffd54f] dark:bg-[#1d1708]'
                      : 'border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/5',
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-2.5 left-4 rounded-full bg-[#c98a12] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white dark:bg-[#ffd54f] dark:text-[#2a1d00]">
                      Best value
                    </span>
                  )}
                  <p className="text-sm font-bold text-[#15181c] dark:text-white">{plan.name}</p>
                  <p className="mt-2">
                    <span className="text-2xl font-extrabold tracking-tight text-[#15181c] dark:text-white">{plan.price}</span>{' '}
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{plan.cadence}</span>
                  </p>
                  <p className={cn('mt-1.5 text-xs font-semibold', plan.featured ? 'text-[#8a5a00] dark:text-[#ffd54f]' : 'text-slate-600 dark:text-slate-300')}>{plan.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <AppStoreBadge placement="pricing_pro" />
              <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">
                Download free, then start your week of Pro in the app. Prices in US dollars; the App Store shows yours.
                Monthly and Annual renew until cancelled. Lifetime never renews.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-16 bg-[#f8fbff] px-4 py-20 dark:bg-[#07111c] sm:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-[#15181c] dark:text-white sm:text-5xl">Questions, answered.</h2>
        <div className="mt-10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-slate-200 py-5 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setOpenIndex(isOpen ? -1 : index);
                    if (!isOpen) track('faq_expand', 'engagement', item.question);
                  }}
                  className="flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-[#15181c] dark:text-white">{item.question}</span>
                  <HiChevronDown className={cn('h-5 w-5 shrink-0 text-[#075cb5] transition-transform dark:text-[#7bdcff]', isOpen && 'rotate-180')} aria-hidden />
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
                      <p className="pt-3 text-base leading-7 text-slate-700 dark:text-slate-200">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-300">
          More in the{' '}
          <Link href="/user-guide" className="font-bold text-[#075cb5] hover:underline dark:text-[#7bdcff]">
            User Guide
          </Link>{' '}
          and on{' '}
          <Link href="/support" className="font-bold text-[#075cb5] hover:underline dark:text-[#7bdcff]">
            Support
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1220] px-4 py-24 text-center text-white sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_20%,rgba(13,110,253,0.45),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(255,138,61,0.35),transparent_55%),radial-gradient(ellipse_at_50%_50%,rgba(191,90,242,0.25),transparent_60%)]" aria-hidden />
      <motion.div {...reveal} className="mx-auto max-w-3xl">
        <div className="mx-auto flex w-fit -space-x-3">
          {coaches.map((coach) => (
            <Image key={coach.name} src={shot(coach.file)} alt="" width={160} height={147} className="h-14 w-14 rounded-full object-cover ring-4 ring-[#0b1220] sm:h-16 sm:w-16" />
          ))}
        </div>
        <h2 className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          The best day to start a habit is today.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/80">
          Pick one from the gallery, tap it once, and watch your first day turn green. Your coaches are waiting.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <AppStoreBadge placement="bottom_cta" tone="light" />
          <p className="text-sm font-semibold text-white/70">Free to start. Pro free for a week. iPhone, iPad and Apple Watch.</p>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const linkClass = 'block text-slate-700 hover:text-[#075cb5] dark:text-slate-200 dark:hover:text-[#7bdcff]';
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 dark:border-white/10 dark:bg-[#07111c] sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/brand-icon-128.png" alt="" width={36} height={36} className="rounded-[9px]" />
            <span className="text-lg font-extrabold text-[#15181c] dark:text-white">Ritualist</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-700 dark:text-slate-200">
            Habits, fasts and breathing for iPhone, iPad and Apple Watch. Get to know yourself, one habit at a time.
          </p>
          <p className="mt-5 text-xs text-slate-600 dark:text-slate-300">Copyright 2026 Vlad Blajovan. All rights reserved.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#15181c] dark:text-white">Ritualist</p>
            <div className="space-y-2 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-[#15181c] dark:text-white">Help</p>
            <div className="space-y-2 text-sm">
              <Link href="/user-guide" className={linkClass}>User Guide</Link>
              <Link href="/support" className={linkClass}>Support</Link>
              <Link href="/roadmap" className={linkClass}>Roadmap</Link>
              <Link href="/privacy" className={linkClass}>Privacy</Link>
              <Link href="/terms" className={linkClass}>Terms</Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-[#15181c] dark:text-white">Follow</p>
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
            <div className="mt-4">
              <CookieSettingsButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileAppStoreBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-2.5 shadow-[0_-12px_32px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#07111c]/95 sm:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <Image src="/brand-icon-128.png" alt="" width={36} height={36} className="rounded-[9px]" />
          <div className="min-w-0">
            <p className="text-sm font-bold text-[#15181c] dark:text-white">Ritualist</p>
            <p className="truncate text-xs text-slate-600 dark:text-slate-300">Free. Pro free for a week.</p>
          </div>
        </div>
        <AppStoreBadge placement="sticky_mobile" size="small" />
      </div>
    </div>
  );
}

// MARK: - Page

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main id="top" className="min-h-screen overflow-hidden bg-[#f8fbff] pb-16 text-[#15181c] dark:bg-[#07111c] dark:text-white sm:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <Header />
        <Hero />

        <FeatureSection
          id="habits"
          className="bg-white text-[#15181c] dark:bg-[#0a1522] dark:text-white"
          eyebrow="Every day"
          eyebrowClass="text-[#2a9d4b] dark:text-[#7ee2a0]"
          tag={<FreeTag />}
          title="One tap, and your day turns green."
          body="Tap + to add a glass, a check to mark a walk done, or swipe a habit for more. Every day you finish fills the calendar with color, and your streaks count themselves."
          checkClass="text-[#2a9d4b] dark:text-[#7ee2a0]"
          points={[
            'Check, count, measure or time anything: water, pages, steps, weight, fasts',
            'Your schedule: chosen days, every few days, or 3 times a week',
            'Goals per week or month, like 70,000 steps or 100 km of running',
            'Reminders at a time, or the moment you arrive at a place',
            '150+ ready-made habits, each one tap away',
          ]}
          visual={
            <PhonePair
              tint="bg-[#34c759]/25"
              back={{ src: shot('month'), alt: 'A month of finished days in green and orange' }}
              front={{ src: shot('home'), alt: "Today's habits: a fast, a walk, water and reading" }}
            />
          }
        />

        <FastingSection />
        <BreathingSection />
        <MedalsSection />
        <AboutYouSection />
        <EverywhereSection />
        <PrivacyBand />
        <PricingSection />
        <FaqSection />
        <FinalCta />
        <Footer />
        <MobileAppStoreBar />
      </main>
    </MotionConfig>
  );
}

