'use client';

import type { IconType } from 'react-icons';
import { FaApple, FaInstagram } from 'react-icons/fa';
import {
  HiBell,
  HiCheck,
  HiChevronDown,
  HiCloud,
  HiCollection,
  HiDeviceMobile,
  HiHeart,
  HiLocationMarker,
  HiLightningBolt,
  HiLockClosed,
  HiMenu,
  HiMicrophone,
  HiMoon,
  HiSparkles,
  HiSun,
  HiTemplate,
  HiX,
} from 'react-icons/hi';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import CookieSettingsButton from './components/CookieSettingsButton';
import { trackEvent } from './lib/analytics';

const appStoreUrl = 'https://apps.apple.com/app/id6755661147';
const instagramUrl = 'https://instagram.com/ritualist.app';

const shot = (name: string) => `/screenshots/v2/${name}.webp`;

const navItems = [
  { href: '#habits', label: 'Habits' },
  { href: '#places', label: 'Places' },
  { href: '#fasting', label: 'Fasting' },
  { href: '#breathing', label: 'Breathing' },
  { href: '#medals', label: 'Medals' },
  { href: '#about-you', label: 'About You' },
  { href: '#pricing', label: 'Pricing' },
];

type Scene = {
  key: string;
  label: string;
  icon: IconType;
  accent: string;
  line: string;
  screen: string;
  alt: string;
};

// The hero's rotating scenes: one screen and one moment each, all real.
const scenes: Scene[] = [
  {
    key: 'habits',
    label: 'Habits',
    icon: HiCheck,
    accent: '#2a9d4b',
    line: 'Log a habit in one tap and watch your day turn green.',
    screen: 'home',
    alt: "Ritualist Home: today's habits with a fast running",
  },
  {
    key: 'fasting',
    label: 'Fasting',
    icon: HiMoon,
    accent: '#ff8a3d',
    line: 'Fast with a coach who walks you through every phase.',
    screen: 'fast',
    alt: 'A running 16:8 fast: time remaining and the current phase',
  },
  {
    key: 'breathing',
    label: 'Breathing',
    icon: HiSun,
    accent: '#2bb6d6',
    line: 'Breathe in time with a guide you can see and feel.',
    screen: 'breath1',
    alt: 'A box breathing session with its ring of phases',
  },
  {
    key: 'places',
    label: 'My Places',
    icon: HiLocationMarker,
    accent: '#e5484d',
    line: 'Save your places and get reminded the moment you arrive.',
    screen: 'my-places',
    alt: 'My Places: Home, Work and the Gym on a map, with Drink Water reminding at the Gym',
  },
  {
    key: 'gallery',
    label: 'Gallery',
    icon: HiCollection,
    accent: '#7b3fe4',
    line: 'Start from 150+ ready-made habits, one tap each.',
    screen: 'gallery',
    alt: 'The Habits Gallery: Drink Water, Exercise, Eat Fruits and more',
  },
  {
    key: 'reminders',
    label: 'Reminders',
    icon: HiBell,
    accent: '#0d6efd',
    line: 'Reminders at the right time, or the right place.',
    screen: 'home-places',
    alt: "Home's My Places card: the Gym reminds you to drink water",
  },
];

const coaches = [
  { name: 'Taisu', file: 'coach-taisu', free: true },
  { name: 'Wren', file: 'coach-wren' },
  { name: 'Moss', file: 'coach-moss' },
  { name: 'Pip', file: 'coach-pip' },
  { name: 'Luna', file: 'coach-luna' },
  { name: 'Bruno', file: 'coach-bruno' },
];

// One list of what each plan includes, rendered everywhere the site says it.
const freeBenefits = [
  'Up to 5 habits and 3 saved places',
  'Fasting and breathing, with the full Fasting Guide',
  'Taisu, your first fasting coach',
  'Bronze medals and every achievement',
  'Every progress chart',
  'Apple Health, Apple Watch, widgets, Siri and iCloud',
];

const proBenefits = [
  { title: 'A coach who knows your fasts', body: 'Pep talks at every stage, notes from your fasts, all six coaches.' },
  { title: 'What your habits say about you', body: 'Your Big Five traits, what keeps you going, activities that suit you.' },
  { title: 'Every habit and every place', body: 'No limits, each with its own reminders and history.' },
  { title: 'Silver and Gold medals', body: 'The higher tiers of every monthly challenge.' },
  { title: 'Breathe your way', body: 'Nine flowers, patterns of your own, and what calms you most.' },
  { title: 'Smarter reminders and backups', body: 'Smart Scheduling, and restoring a backup on any device.' },
];

const plans = [
  { name: 'Annual', price: '$49.99', cadence: 'a year', note: 'Starts with 1 week free', featured: true },
  { name: 'Monthly', price: '$9.99', cadence: 'a month', note: 'Cancel anytime' },
  { name: 'Lifetime', price: '$99.99', cadence: 'once', note: 'Pay once, Pro for good' },
];

const faqItems = [
  {
    question: 'What can I track?',
    answer:
      'Anything you check off, count, measure or time: water, pages, steps, your weight, fasts and breathing. Habits repeat on your schedule, can aim for a total each week or month, fill in from Apple Health, and remind you at a time or a place.',
  },
  {
    question: 'How do place reminders work?',
    answer:
      'Save a place, like home or the gym, and choose a habit for it. Ritualist reminds you as you arrive or leave, on the days and at the times you pick. It needs Always location access, and your places stay on your iPhone and in your iCloud.',
  },
  {
    question: 'Is the fasting guide medical advice?',
    answer:
      'No. It shows which phase your body is likely in and what tends to help, written carefully and with its health sources. Talk to a doctor before longer fasts or if you have a health condition.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Your habits stay on your iPhone and in your own iCloud, with no account to create. About You is worked out on your device and can sit behind Face ID. The app sends anonymous usage counts so we can improve it; the privacy policy lists exactly what.',
  },
  {
    question: 'How do I cancel Pro?',
    answer:
      'In your App Store account settings, under Subscriptions, anytime. Cancel during the free week and you pay nothing. Lifetime is paid once and never renews.',
  },
];

const softwareApplicationLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ritualist',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, iPadOS, watchOS',
  description:
    'Ritualist is a habit tracker for iPhone, iPad and Apple Watch with place reminders, fasting and breathing, a fasting coach, challenges with struck medals, and About You, a portrait of what your habits say about you.',
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
    <span className={cn('inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-[#ffcf4d] to-[#ff9f0a] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#3d2300]', className)}>
      <HiSparkles className="h-3 w-3" aria-hidden />
      Pro
    </span>
  );
}

function FreeTag({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex shrink-0 items-center rounded-full bg-[#dff6e6] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#14632f] dark:bg-[#143524] dark:text-[#7ee2a0]', className)}>
      Free
    </span>
  );
}

function ProNote({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={cn(
        'mt-6 flex items-start gap-3 rounded-2xl border p-4 text-sm leading-6',
        dark ? 'border-white/15 bg-white/[0.06] text-white/85' : 'border-[#f3d48a] bg-[#fff8e6] text-[#5a3d00] dark:border-[#5a4513] dark:bg-[#2a2210] dark:text-[#ffe19a]',
      )}
    >
      <ProTag className="mt-0.5" />
      <span>
        {children}{' '}
        <a
          href="#pricing"
          onClick={() => track('pro_note_click', 'conversion', 'section')}
          className={cn('font-bold underline-offset-4 hover:underline', dark ? 'text-white' : 'text-[#7a4b00] dark:text-[#ffd54f]')}
        >
          Try it free for a week
        </a>
      </span>
    </p>
  );
}

/** Every feature section shares one shape: a short title, one paragraph, three points and its screens. */
function Feature({
  id,
  eyebrow,
  tag,
  title,
  body,
  points,
  accent,
  visual,
  reverse = false,
  dark = false,
  className,
  children,
}: {
  id: string;
  eyebrow: string;
  tag?: ReactNode;
  title: string;
  body: string;
  points: string[];
  accent: string;
  visual: ReactNode;
  reverse?: boolean;
  dark?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={cn('relative scroll-mt-16 overflow-hidden px-4 py-12 sm:px-6 lg:py-16', className)}>
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
        <div className={cn('min-w-0', reverse && 'lg:order-2')}>{visual}</div>
        <motion.div {...reveal} className={cn('min-w-0', reverse && 'lg:order-1')}>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>
              {eyebrow}
            </p>
            {tag}
          </div>
          <h2 className={cn('mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl', !dark && 'text-[#15181c] dark:text-white')}>{title}</h2>
          <p className={cn('mt-5 text-lg leading-8', dark ? 'text-white/85' : 'text-slate-700 dark:text-slate-200')}>{body}</p>
          <ul className={cn('mt-6 space-y-2', dark ? 'text-white/90' : 'text-slate-800 dark:text-slate-100')}>
            {points.map((point) => (
              <Check key={point}>
                <span>{point}</span>
              </Check>
            ))}
          </ul>
          {children}
        </motion.div>
      </div>
    </section>
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

// MARK: - Hero

const sceneDurationMs = 4800;

type Chip = { key: string; text: string; icon?: IconType; image?: string; round?: boolean; color: string };

// Small notes that drift around the hero's phone, three at a time, each about something real in the app.
const chips: Chip[] = [
  { key: 'streak', text: '30-day streak', image: 'medal-silver', round: true, color: '#8a8f98' },
  { key: 'taisu', text: 'Taisu: one phase at a time', image: 'coach-taisu', color: '#ff8a3d' },
  { key: 'gym', text: 'Water as you reach the gym', icon: HiLocationMarker, color: '#e5484d' },
  { key: 'box', text: 'Box breathing, 4 rounds', icon: HiSun, color: '#2bb6d6' },
  { key: 'gallery', text: '150+ ready-made habits', icon: HiCollection, color: '#7b3fe4' },
  { key: 'health', text: 'Steps fill in from Apple Health', icon: HiHeart, color: '#ff375f' },
  { key: 'siri', text: '“Log a habit” with Siri', icon: HiMicrophone, color: '#5e5ce6' },
  { key: 'watch', text: 'Log from your Apple Watch', icon: HiDeviceMobile, color: '#0a84ff' },
  { key: 'traits', text: 'Your Big Five, from your habits', icon: HiSparkles, color: '#bf5af2' },
  { key: 'lock', text: 'Your fast on the Lock Screen', icon: HiMoon, color: '#ff9f0a' },
  { key: 'pip', text: 'Six coaches, six voices', image: 'coach-pip', color: '#34c759' },
  { key: 'perfect', text: 'Perfect day: all done', icon: HiCheck, color: '#2a9d4b' },
  { key: 'widgets', text: 'Widgets for Home and Lock Screen', icon: HiTemplate, color: '#0d6efd' },
  { key: 'private', text: 'No account needed', icon: HiLockClosed, color: '#636366' },
];

const chipSlots = [
  'right-0 top-[14%] sm:-right-2',
  'left-0 top-[44%] sm:-left-4',
  'right-0 bottom-[16%] sm:-right-4',
];

function FloatingChips() {
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState([0, 1, 2]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => {
      setShown((current) => {
        const next = [...current];
        const slot = step % next.length;
        next[slot] = (Math.max(...current) + 1) % chips.length;
        // Wrapping around, skip any chip that is still on screen.
        while (current.includes(next[slot]) && next[slot] !== current[slot]) next[slot] = (next[slot] + 1) % chips.length;
        return next;
      });
      setStep((value) => value + 1);
    }, 2200);
    return () => window.clearTimeout(timer);
  }, [step, reduceMotion]);

  return (
    <>
      {shown.map((chipIndex, slot) => {
        const chip = chips[chipIndex];
        const Icon = chip.icon;
        return (
          <div key={slot} className={cn('absolute z-10', chipSlots[slot])}>
            <AnimatePresence mode="wait">
              <motion.div
                key={chip.key}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white/95 py-1.5 pl-1.5 pr-3 shadow-[0_10px_28px_rgba(15,23,42,0.18)] ring-1 ring-black/5 backdrop-blur dark:bg-[#132233]/95 dark:ring-white/10"
              >
                {chip.image ? (
                  <Image src={shot(chip.image)} alt="" width={64} height={64} className={cn('h-7 w-7 shrink-0 object-cover', chip.round ? 'rounded-full' : 'rounded-lg')} />
                ) : (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ background: chip.color }}>
                    {Icon && <Icon className="h-4 w-4" aria-hidden />}
                  </span>
                )}
                <span className="text-[12px] font-bold text-[#15181c] dark:text-white">{chip.text}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const scene = scenes[index];

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % scenes.length), sceneDurationMs);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduceMotion]);

  const choose = (next: number) => {
    setIndex(next);
    setPaused(true);
    track('hero_scene_select', 'engagement', scenes[next].key);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0b1220] px-4 pb-12 pt-20 text-white sm:px-6 sm:pt-24 lg:pb-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_15%_15%,rgba(13,110,253,0.45),transparent_55%),radial-gradient(ellipse_at_85%_90%,rgba(255,138,61,0.30),transparent_55%),radial-gradient(ellipse_at_50%_50%,rgba(191,90,242,0.22),transparent_60%)]" aria-hidden />
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ background: `radial-gradient(ellipse at 72% 40%, ${scene.accent}40, transparent 50%)` }}
        transition={{ duration: 0.8 }}
        aria-hidden
      />
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-center">
            <div className="flex -space-x-2.5">
              {coaches.map((coach, coachIndex) => (
                <motion.span
                  key={coach.name}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + coachIndex * 0.07 }}
                >
                  <Image src={shot(coach.file)} alt="" width={160} height={147} priority className="h-11 w-11 rounded-full object-cover ring-[3px] ring-[#0b1220] sm:h-12 sm:w-12" />
                </motion.span>
              ))}
            </div>
            <p className="text-sm font-bold text-white/85">The best day to start is today.</p>
          </div>
          <h1 className="mt-5 text-[2.4rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Get to know yourself,{' '}
            <span className="bg-gradient-to-r from-[#6fb1ff] via-[#d08cff] to-[#ffb27a] bg-clip-text text-transparent">one habit at a time.</span>
          </h1>
          <div className="mx-auto mt-5 h-16 max-w-xl sm:h-14 lg:mx-0" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={scene.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-lg leading-7 text-white/85 sm:text-xl sm:leading-8"
              >
                {scene.line}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 lg:justify-start">
            <AppStoreBadge placement="hero" tone="light" />
            <p className="text-sm font-semibold text-white/75">Free to start. Pro free for a week.</p>
          </div>
          <SceneTabs index={index} onChoose={choose} className="mt-7 hidden lg:flex" />
        </motion.div>

        <div className="relative mx-auto h-[520px] w-full max-w-[420px] sm:h-[640px] lg:h-[680px] lg:max-w-[480px]">
          <div className="absolute inset-x-0 top-0 mx-auto w-[66%] sm:w-[62%]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={scene.key}
                initial={{ opacity: 0, x: 40, rotate: 4 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -40, rotate: -4 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <PhoneShot src={shot(scene.screen)} alt={scene.alt} priority={index === 0} />
              </motion.div>
            </AnimatePresence>
          </div>
          <FloatingChips />
        </div>
        <SceneTabs index={index} onChoose={choose} className="flex lg:hidden" />
      </div>
    </section>
  );
}

function SceneTabs({ index, onChoose, className }: { index: number; onChoose: (index: number) => void; className?: string }) {
  return (
    <div className={cn('flex-wrap justify-center gap-2 lg:justify-start', className)} role="tablist" aria-label="What Ritualist does">
      {scenes.map((item, itemIndex) => {
        const Icon = item.icon;
        const selected = itemIndex === index;
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChoose(itemIndex)}
            className={cn(
              'relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border px-3 py-1.5 text-[13px] font-semibold transition',
              selected
                ? 'border-transparent text-white shadow-md'
                : 'border-white/20 bg-white/10 text-white/85 hover:bg-white/15',
            )}
            style={selected ? { background: item.accent } : undefined}
          >
            <Icon className="h-4 w-4" aria-hidden />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

// MARK: - Sections

function CoachesStrip() {
  return (
    <motion.div {...reveal} className="mx-auto mt-8 max-w-6xl rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Pick the coach that gets you through.</h3>
          <p className="mt-2 text-base leading-7 text-white/80">Six plush coaches, each with its own voice. Taisu is free; pep talks at every stage and the other five come with Pro.</p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
          {coaches.map((coach, index) => (
            <motion.figure
              key={coach.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -6, rotate: index % 2 ? 3 : -3 }}
              className="text-center"
            >
              <Image src={shot(coach.file)} alt={`${coach.name}, a plush fasting coach`} width={320} height={293} className="h-auto w-full rounded-2xl" />
              <figcaption className="mt-2 flex flex-col items-center gap-1 text-sm font-extrabold">
                {coach.name}
                {coach.free ? <FreeTag /> : <ProTag />}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MedalsSection() {
  const items = [
    { src: shot('challenges'), alt: 'The Challenges tab: active challenges and ones to join', caption: 'A new challenge every month' },
    { src: shot('achievement'), alt: 'A silver medal for a 30-day streak, just unlocked', caption: 'Struck the moment you earn it' },
    { src: shot('achievements'), alt: 'The Achievements grid with bronze and silver medals', caption: '42 to collect' },
  ];

  return (
    <section id="medals" className="relative scroll-mt-16 overflow-hidden bg-white px-4 py-12 dark:bg-[#0a1522] sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b07a00] dark:text-[#ffd54f]">Challenges and medals</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#15181c] dark:text-white sm:text-5xl">Medals worth showing off.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
            Real-looking coins, drawn live on your iPhone. Swipe one and it spins and catches the light.
          </p>
        </motion.div>

        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:mt-10 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
          {items.map((item, index) => (
            <motion.figure
              key={item.caption}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className={cn('w-[70%] shrink-0 snap-center text-center md:w-auto', index === 1 && 'md:-mt-6')}
            >
              <PhoneShot src={item.src} alt={item.alt} className="mx-auto w-full max-w-[260px] md:w-[78%] md:max-w-[300px]" />
              <figcaption className="mt-5 text-lg font-extrabold text-[#15181c] dark:text-white">{item.caption}</figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.p {...reveal} className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-slate-700 dark:text-slate-200">
          <FreeTag className="mr-1.5 align-middle" /> Bronze and every achievement. <ProTag className="mx-1.5 align-middle" /> Silver and Gold, and the days you&apos;ve done already count.
        </motion.p>
      </div>
    </section>
  );
}

function EverywhereSection() {
  const tiles: { icon: IconType; title: string; body: string }[] = [
    { icon: HiDeviceMobile, title: 'Apple Watch', body: 'Log from your wrist and follow your fast.' },
    { icon: HiTemplate, title: 'Widgets and Lock Screen', body: 'Today, streaks and your fast at a glance.' },
    { icon: HiMicrophone, title: 'Siri', body: '“Log a habit”, or start a fast, hands free.' },
    { icon: HiHeart, title: 'Apple Health', body: 'Steps, water and workouts fill in by themselves.' },
    { icon: HiCloud, title: 'iCloud', body: 'iPhone, iPad and Watch stay in step.' },
    { icon: HiLightningBolt, title: 'Control Center', body: 'Start a fast from Control Center or the Action button.' },
  ];

  return (
    <section className="bg-[#f8fbff] px-4 py-12 dark:bg-[#07111c] sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#075cb5] dark:text-[#7bdcff]">Wherever you are</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#15181c] dark:text-white sm:text-5xl">Built into your iPhone.</h2>
        </motion.div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto h-[330px] w-full max-w-[360px]">
            <motion.div className="absolute left-2 top-0" initial={{ opacity: 0, rotate: -14, y: 30 }} whileInView={{ opacity: 1, rotate: -6, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ type: 'spring', stiffness: 95, damping: 15 }}>
              <WatchShot src={shot('watch-today')} alt="Apple Watch: today's habits with a fast running" />
            </motion.div>
            <motion.div className="absolute bottom-0 right-2" initial={{ opacity: 0, rotate: 16, y: 40 }} whileInView={{ opacity: 1, rotate: 6, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ type: 'spring', stiffness: 95, damping: 15, delay: 0.12 }}>
              <WatchShot src={shot('watch-water')} alt="Apple Watch: adding a glass of water" />
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <motion.div key={tile.title} {...reveal} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#101b2a]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#dcebff] text-[#075cb5] dark:bg-[#15304c] dark:text-[#7bdcff]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-base font-bold text-[#15181c] dark:text-white">{tile.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{tile.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-white px-4 py-12 dark:bg-[#0a1522] sm:px-6 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#075cb5] dark:text-[#7bdcff]">Pricing</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#15181c] dark:text-white sm:text-5xl">Start free. Try Pro for a week.</h2>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...reveal} className="rounded-[28px] border border-slate-200 bg-[#f8fbff] p-6 dark:border-white/10 dark:bg-[#0d1928] sm:p-8">
            <h3 className="text-2xl font-extrabold text-[#15181c] dark:text-white">Free</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">A complete habit tracker, not a demo.</p>
            <ul className="mt-6 space-y-2">
              {freeBenefits.map((item) => (
                <Check key={item} className="text-sm leading-6 text-slate-700 dark:text-slate-200" iconClassName="mt-0.5 h-5 w-5 text-[#2a9d4b] dark:text-[#7ee2a0]">
                  {item}
                </Check>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-[28px] border border-[#f3c95a] bg-[linear-gradient(160deg,#fffaf0_0%,#ffffff_45%,#f3f0ff_100%)] p-6 shadow-[0_30px_80px_rgba(201,138,18,0.18)] dark:border-[#6b5216] dark:bg-[linear-gradient(160deg,#241b0a_0%,#101b2a_50%,#1a1230_100%)] sm:p-8"
          >
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-extrabold text-[#15181c] dark:text-white">Ritualist Pro</h3>
              <ProTag />
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Everything in Free, and:</p>
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
                    plan.featured ? 'border-[#c98a12] bg-white shadow-[0_14px_34px_rgba(201,138,18,0.22)] dark:border-[#ffd54f] dark:bg-[#1d1708]' : 'border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/5',
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
                Download free, then start your free week in the app. Prices in US dollars; the App Store shows yours. Monthly and Annual renew until cancelled.
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
    <section id="faq" className="scroll-mt-16 bg-[#f8fbff] px-4 py-12 dark:bg-[#07111c] sm:px-6 lg:py-16">
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
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
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
    <section className="relative isolate overflow-hidden bg-[#0b1220] px-4 py-16 text-center text-white sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_20%,rgba(13,110,253,0.45),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(255,138,61,0.35),transparent_55%),radial-gradient(ellipse_at_50%_50%,rgba(191,90,242,0.25),transparent_60%)]" aria-hidden />
      <motion.div {...reveal} className="mx-auto max-w-3xl">
        <div className="mx-auto flex w-fit -space-x-3">
          {coaches.map((coach) => (
            <Image key={coach.name} src={shot(coach.file)} alt="" width={160} height={147} className="h-14 w-14 rounded-full object-cover ring-4 ring-[#0b1220] sm:h-16 sm:w-16" />
          ))}
        </div>
        <h2 className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">The best day to start is today.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/80">Pick a habit, tap it once, and watch your first day turn green.</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <AppStoreBadge placement="bottom_cta" tone="light" />
          <p className="text-sm font-semibold text-white/70">Free to start. Pro free for a week.</p>
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
            Habits, places, fasting and breathing for iPhone, iPad and Apple Watch.
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

        <Feature
          id="habits"
          className="bg-white dark:bg-[#0a1522]"
          eyebrow="Every day"
          tag={<FreeTag />}
          accent="#2a9d4b"
          title="One tap, and your day turns green."
          body="Pick from 150+ ready-made habits or make your own. Tap to log, and watch the month fill with color."
          points={['Check it, count it, measure it or time it', 'Any schedule: chosen days, every few days, 3 times a week', 'Streaks and charts that count themselves']}
          visual={
            <PhonePair
              tint="bg-[#34c759]/25"
              back={{ src: shot('month'), alt: 'A month of finished days in green and orange' }}
              front={{ src: shot('patterns'), alt: 'Patterns: categories and your weekly rhythm, Tuesday the best day' }}
            />
          }
        />

        <Feature
          id="places"
          reverse
          className="bg-[linear-gradient(180deg,#fff5f5_0%,#f8fbff_100%)] dark:bg-[linear-gradient(180deg,#1f0f12_0%,#07111c_100%)]"
          eyebrow="My Places"
          tag={<FreeTag />}
          accent="#e5484d"
          title="Reminders that know where you are."
          body="Save the places that matter and tell Ritualist what to remind you of there. Water as you walk into the gym, a walk as you leave home."
          points={['As you arrive, as you leave, or both', 'Only on the days and at the times you choose', 'Or simply at a time, like any reminder']}
          visual={
            <motion.div {...reveal} className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
              <div className="absolute inset-x-0 top-16 bottom-10 rounded-full bg-[#e5484d]/20 blur-3xl" aria-hidden />
              <PhoneShot src={shot('remind-gym')} alt="The Gym reminds you about Drink Water the first time you arrive each day" className="w-full" />
            </motion.div>
          }
        />

        <section id="fasting" className="relative scroll-mt-16 overflow-hidden bg-[#140b05] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_10%,rgba(255,138,61,0.35),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(10,132,255,0.25),transparent_55%)]" aria-hidden />
          <Feature
            id="fasting-intro"
            dark
            className="py-12 lg:py-16 lg:pb-8"
            eyebrow="Fasting"
            tag={<FreeTag />}
            accent="#ffb27a"
            title="A fast feels shorter with a friend."
            body="Tap Start and Ritualist shows which phase your body is likely in, hour by hour, and what helps right now."
            points={['On your Lock Screen and in the Dynamic Island', 'Quick help for hunger, headaches or low energy', 'A report at the end, and how to break your fast']}
            visual={
              <div className="relative">
                <PhonePair
                  tint="bg-[#ff8a3d]/30"
                  back={{ src: shot('guide'), alt: 'The Fasting Guide: the phase you are in and what comes next' }}
                  front={{ src: shot('guide-coach'), alt: 'The Fasting Guide with Taisu the coach and help for hunger or headaches' }}
                />
                <motion.div {...reveal} className="absolute -bottom-4 left-0 w-[70%] drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)] sm:w-[60%]">
                  <Image src={shot('live-activity-lock')} alt="The fast on the Lock Screen" width={900} height={375} className="h-auto w-full" />
                </motion.div>
              </div>
            }
          />
          <div className="relative px-4 pb-12 sm:px-6 lg:pb-16">
            <CoachesStrip />
          </div>
        </section>

        <Feature
          id="breathing"
          reverse
          dark
          className="bg-[linear-gradient(160deg,#0b3b4a_0%,#245d7a_45%,#c98a5a_100%)] text-white"
          eyebrow="Breathing"
          tag={<FreeTag />}
          accent="#a8f0ff"
          title="Breathing you can see, and feel."
          body="Follow the shape as it swells and settles, while your iPhone taps along with every breath. It works with your eyes closed."
          points={['Box breathing, 4-7-8, cyclic sighing and more', 'Note how you feel before and after', 'Counts as mindful minutes in Apple Health']}
          visual={
            <motion.div {...reveal} className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
              <PhoneShot src={shot('breath-lotus')} alt="Choosing a breathing shape: Lotus, one of nine flowers" className="w-full" />
            </motion.div>
          }
        >
          <ProNote dark>Nine flowers that open with each breath, like Lotus here, and patterns of your own.</ProNote>
        </Feature>

        <MedalsSection />

        <Feature
          id="about-you"
          className="bg-[linear-gradient(180deg,#f7f0ff_0%,#fdf2f8_100%)] dark:bg-[linear-gradient(180deg,#1a1030_0%,#200f22_100%)]"
          eyebrow="About You"
          tag={<ProTag />}
          accent="#9b3fd4"
          title="See what your habits say about you."
          body="Ritualist reads the habits you keep and draws your personality, with the reasons behind each trait and activities that suit you."
          points={['Your Big Five traits, from your own days', 'What keeps you going, and your best day', 'Worked out on your iPhone, behind Face ID if you like']}
          visual={
            <PhonePair
              tint="bg-[#bf5af2]/25"
              back={{ src: shot('foryou'), alt: 'For You: About You, Streaks, Patterns and History' }}
              front={{ src: shot('aboutyou'), alt: 'About You: your dominant trait and what stands out' }}
            />
          }
        >
          <ProNote>A reflection for fun and self-knowledge, not a diagnosis.</ProNote>
        </Feature>

        <EverywhereSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
        <Footer />
        <MobileAppStoreBar />
      </main>
    </MotionConfig>
  );
}
