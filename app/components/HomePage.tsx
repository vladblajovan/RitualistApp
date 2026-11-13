'use client';

import type { IconType } from 'react-icons';
import { FaApple, FaInstagram } from 'react-icons/fa';
import {
  HiBell,
  HiCheck,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiCloud,
  HiCollection,
  HiDeviceMobile,
  HiHeart,
  HiLocationMarker,
  HiLightningBolt,
  HiMenu,
  HiMicrophone,
  HiMoon,
  HiPause,
  HiPlay,
  HiSparkles,
  HiSun,
  HiTemplate,
  HiX,
} from 'react-icons/hi';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import CookieSettingsButton from './CookieSettingsButton';
import LanguageSwitcher from './LanguageSwitcher';
import LocaleSetup from './LocaleSetup';
import RichText from './RichText';
import { trackEvent } from '../lib/analytics';
import { localePath, userGuidePath, type Locale } from '../i18n/locales';
import type { HomeCopy } from '../i18n/home/en';
import { homeCopy } from '../i18n/home';
import { siteCopy } from '../i18n/site';

const HomeContext = createContext<{ t: HomeCopy; locale: Locale }>({ t: homeCopy.en, locale: 'en' });
const useHome = () => useContext(HomeContext);

const appStoreUrl = 'https://apps.apple.com/app/id6755661147';
const instagramUrl = 'https://instagram.com/ritualist.app';

const shot = (name: string) => `/screenshots/v2/${name}.webp`;

const navTargets: { href: string; key: keyof HomeCopy['nav'] }[] = [
  { href: '#habits', key: 'habits' },
  { href: '#places', key: 'places' },
  { href: '#fasting', key: 'fasting' },
  { href: '#breathing', key: 'breathing' },
  { href: '#medals', key: 'medals' },
  { href: '#about-you', key: 'aboutYou' },
  { href: '#pricing', key: 'pricing' },
];

type SceneKey = keyof HomeCopy['scenes'];

type Scene = {
  key: SceneKey;
  icon: IconType;
  accent: string;
  screen: string;
};

// The hero's rotating scenes: one screen and one moment each, all real.
const scenes: Scene[] = [
  {
    key: 'habits',
    icon: HiCheck,
    accent: '#2a9d4b',
    screen: 'home',
  },
  {
    key: 'fasting',
    icon: HiMoon,
    accent: '#ff8a3d',
    screen: 'fast',
  },
  {
    key: 'breathing',
    icon: HiSun,
    accent: '#2bb6d6',
    screen: 'breath1',
  },
  {
    key: 'places',
    icon: HiLocationMarker,
    accent: '#e5484d',
    screen: 'my-places',
  },
  {
    key: 'gallery',
    icon: HiCollection,
    accent: '#7b3fe4',
    screen: 'gallery',
  },
  {
    key: 'reminders',
    icon: HiBell,
    accent: '#0d6efd',
    screen: 'home-places',
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

const planOrder = ['annual', 'monthly', 'lifetime'] as const;

function softwareApplicationLd(t: HomeCopy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Ritualist',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, iPadOS, watchOS',
    description: t.meta.ldDescription,
    screenshot: 'https://vladblajovan.github.io/RitualistApp/screenshots/v2/home.webp',
    offers: [
      { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Pro Annual', price: '49.99', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Pro Monthly', price: '9.99', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Pro Lifetime', price: '99.99', priceCurrency: 'USD' },
    ],
  };
}

function faqLd(t: HomeCopy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

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
  const { t } = useHome();
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('app_store_click', 'conversion', placement)}
      aria-label={t.appStoreLabel}
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
        <span className={size === 'large' ? 'text-[11px] font-medium' : 'text-[9px] font-medium'}>{t.appStoreTop}</span>
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

type Shot = { src: string; alt: string };

/** A phone that steps through several screens on its own, with the hero's hover or tap pause. */
function CyclingPhone({ shots, intervalMs = 3600 }: { shots: Shot[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const multiple = shots.length > 1;

  useEffect(() => {
    if (!multiple || paused || reduceMotion) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % shots.length), intervalMs);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduceMotion, multiple, shots.length, intervalMs]);

  const current = shots[index];
  const phone = (
    <div className="relative">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={current.src}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <PhoneShot src={current.src} alt={current.alt} />
        </motion.div>
      </AnimatePresence>
      {multiple && (
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-1.5" aria-hidden>
          {shots.map((item, dotIndex) => (
            <span key={item.src} className={cn('h-1.5 rounded-full transition-all duration-300', dotIndex === index ? 'w-5 bg-current opacity-70' : 'w-1.5 bg-current opacity-25')} />
          ))}
        </div>
      )}
    </div>
  );

  if (!multiple) return phone;
  return (
    <PausableShot paused={paused} onToggle={() => setPaused((value) => !value)} className="relative w-full">
      {phone}
    </PausableShot>
  );
}

function PhonePair({ back, front, tint }: { back: Shot; front: Shot | Shot[]; tint: string }) {
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
        <CyclingPhone shots={Array.isArray(front) ? front : [front]} />
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
  const { t } = useHome();
  return (
    <span className={cn('inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-[#ffcf4d] to-[#ff9f0a] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#3d2300]', className)}>
      <HiSparkles className="h-3 w-3" aria-hidden />
      {t.pro}
    </span>
  );
}

function FreeTag({ className }: { className?: string }) {
  const { t } = useHome();
  return (
    <span className={cn('inline-flex shrink-0 items-center rounded-full bg-[#dff6e6] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[#14632f] dark:bg-[#143524] dark:text-[#7ee2a0]', className)}>
      {t.free}
    </span>
  );
}

/** What Pro adds to a section, shown in the section so visitors see it where it matters. */
function ProList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const { t } = useHome();
  return (
    <div
      className={cn(
        'mt-6 rounded-2xl border p-4',
        dark ? 'border-[#ffcf4d]/40 bg-[#ffcf4d]/[0.08]' : 'border-[#f3d48a] bg-[#fff8e6] dark:border-[#5a4513] dark:bg-[#2a2210]',
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={cn('flex items-center gap-2 text-sm font-extrabold', dark ? 'text-white' : 'text-[#5a3d00] dark:text-[#ffe19a]')}>
          <ProTag />
        </span>
        <a
          href="#pricing"
          onClick={() => track('pro_list_click', 'conversion', items[0])}
          className={cn('text-sm font-bold underline-offset-4 hover:underline', dark ? 'text-[#ffd27a]' : 'text-[#7a4b00] dark:text-[#ffd54f]')}
        >
          {t.seePlans}
        </a>
      </div>
      <ul className="mt-3 space-y-1.5">
        {items.map((item) => (
          <li key={item} className={cn('flex gap-2 text-sm leading-6', dark ? 'text-white/90' : 'text-[#5a3d00] dark:text-[#ffe19a]')}>
            <HiSparkles className={cn('mt-1 h-4 w-4 shrink-0', dark ? 'text-[#ffcf4d]' : 'text-[#c98a12] dark:text-[#ffd54f]')} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The notification a place reminder sends, in the app's own words (HabitReminderWording): the habit as the title, then where you are and what to do. */
function PlaceReminderNotification() {
  const { t } = useHome();
  return (
    <motion.div
      initial={{ opacity: 0, y: -24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: 'spring', stiffness: 140, damping: 16, delay: 0.5 }}
      className="absolute -left-6 top-[38%] z-10 w-[118%] sm:-left-16 sm:w-[130%]"
    >
      <div className="flex items-start gap-3 rounded-[22px] bg-white/75 p-3.5 shadow-[0_24px_50px_rgba(15,23,42,0.28)] ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#1c2430]/80 dark:ring-white/10">
        <Image src="/brand-icon-128.png" alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-[10px]" />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="truncate text-[15px] font-semibold text-[#15181c] dark:text-white">{t.notification.title}</p>
            <p className="shrink-0 text-xs text-slate-500 dark:text-slate-400">{t.notification.time}</p>
          </div>
          <p className="text-[15px] leading-5 text-[#15181c] dark:text-slate-100">{t.notification.body}</p>
        </div>
      </div>
    </motion.div>
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
  fades,
  children,
}: {
  fades?: ReactNode;
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
    <section id={id} className={cn('relative isolate scroll-mt-16 overflow-hidden px-4 py-12 sm:px-6 lg:py-16', className)}>
      {fades}
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
  const { t } = useHome();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#07111c]/85">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6" aria-label={t.primaryNav}>
        <a href="#top" onClick={() => track('nav_click', 'navigation', 'logo')} className="flex items-center gap-2.5">
          <Image src="/brand-icon-128.png" alt="" width={36} height={36} className="rounded-[9px]" priority />
          <span className="text-lg font-extrabold tracking-tight text-[#15181c] dark:text-white">Ritualist</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navTargets.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => track('nav_click', 'navigation', item.key.toLowerCase())}
              className="text-sm font-semibold text-slate-700 transition hover:text-[#075cb5] dark:text-slate-200 dark:hover:text-[#7bdcff]"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <AppStoreBadge placement="nav" size="small" />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 dark:border-white/20 dark:bg-white/10 dark:text-white lg:hidden"
            aria-label={open ? t.closeMenu : t.openMenu}
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
              {navTargets.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    track('nav_click', 'navigation', item.key.toLowerCase());
                  }}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/10"
                >
                  {t.nav[item.key]}
                </a>
              ))}
              <div className="px-3 py-3 sm:hidden">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// MARK: - Hero

const sceneDurationMs = 4800;

type Chip = { key: string; icon?: IconType; image?: string; round?: boolean; color: string };

// Small notes around the hero's phone, three for each scene, each about what that scene shows; their words are the copy's.
const sceneChips: Record<SceneKey, Chip[]> = {
  habits: [
    { key: 'streak', image: 'medal-silver', round: true, color: '#8a8f98' },
    { key: 'tap', icon: HiCheck, color: '#2a9d4b' },
    { key: 'health', icon: HiHeart, color: '#ff375f' },
  ],
  fasting: [
    { key: 'taisu', image: 'coach-taisu', color: '#ff8a3d' },
    { key: 'phase', icon: HiMoon, color: '#0a84ff' },
    { key: 'lock', icon: HiDeviceMobile, color: '#ff9f0a' },
  ],
  breathing: [
    { key: 'box', icon: HiSun, color: '#2bb6d6' },
    { key: 'haptics', icon: HiSparkles, color: '#5e5ce6' },
    { key: 'mindful', icon: HiHeart, color: '#ff375f' },
  ],
  places: [
    { key: 'gym', icon: HiLocationMarker, color: '#e5484d' },
    { key: 'arrive', icon: HiBell, color: '#0d6efd' },
    { key: 'three', icon: HiCheck, color: '#2a9d4b' },
  ],
  gallery: [
    { key: 'count', icon: HiCollection, color: '#7b3fe4' },
    { key: 'foryou', icon: HiSparkles, color: '#bf5af2' },
    { key: 'own', icon: HiTemplate, color: '#0d6efd' },
  ],
  reminders: [
    { key: 'card', icon: HiBell, color: '#0d6efd' },
    { key: 'when', icon: HiLocationMarker, color: '#e5484d' },
    { key: 'siri', icon: HiMicrophone, color: '#5e5ce6' },
  ],
};

const chipSlots = [
  'right-0 top-[14%] sm:-right-2',
  'left-0 top-[44%] sm:-left-4',
  'right-0 bottom-[16%] sm:-right-4',
];

function FloatingChips({ sceneKey }: { sceneKey: SceneKey }) {
  const { t } = useHome();
  const chips = sceneChips[sceneKey] ?? [];

  return (
    <>
      {chips.slice(0, chipSlots.length).map((chip, slot) => {
        const Icon = chip.icon;
        return (
          <div key={slot} className={cn('absolute z-10', chipSlots[slot])}>
            <AnimatePresence mode="wait">
              <motion.div
                key={chip.key}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: 0.25 + slot * 0.18 }}
                className="flex max-w-[8.5rem] items-center gap-2 rounded-2xl bg-white/80 py-1.5 pl-1.5 pr-3 shadow-[0_10px_28px_rgba(15,23,42,0.18)] ring-1 ring-black/5 backdrop-blur-md dark:bg-[#132233]/80 dark:ring-white/10"
              >
                {chip.image ? (
                  <Image src={shot(chip.image)} alt="" width={64} height={64} className={cn('h-7 w-7 shrink-0 object-cover', chip.round ? 'rounded-full' : 'rounded-lg')} />
                ) : (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ background: chip.color }}>
                    {Icon && <Icon className="h-4 w-4" aria-hidden />}
                  </span>
                )}
                <span className="text-[12px] font-bold leading-tight text-[#15181c] dark:text-white">{t.chips[sceneKey][slot]}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setMatches(list.matches);
    update();
    list.addEventListener('change', update);
    return () => list.removeEventListener('change', update);
  }, [query]);
  return matches;
}

/**
 * The hero's phone, with a pause button in its middle: it shows while the pointer is over the phone and
 * fades as it leaves; on a touch screen a tap shows it for a few seconds.
 */
function PausableShot({
  paused,
  onToggle,
  children,
  className = 'relative mx-auto w-[66%] sm:w-[62%]',
}: {
  paused: boolean;
  onToggle: () => void;
  children: ReactNode;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const { t } = useHome();

  const showFor = (ms: number) => {
    setVisible(true);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setVisible(false), ms);
  };

  useEffect(() => () => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
  }, []);

  return (
    <div
      className={className}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') {
          if (hideTimer.current) window.clearTimeout(hideTimer.current);
          setVisible(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setVisible(false);
      }}
      onPointerUp={(event) => {
        if (event.pointerType !== 'mouse') showFor(2500);
      }}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onPointerUp={(event) => event.stopPropagation()}
            onClick={() => {
              onToggle();
              showFor(1500);
            }}
            className="absolute left-1/2 top-1/2 z-20 -ml-8 -mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-black/55 text-white shadow-2xl ring-1 ring-white/30 backdrop-blur-md"
            aria-label={paused ? t.playTour : t.pauseTour}
          >
            {paused ? <HiPlay className="h-8 w-8" aria-hidden /> : <HiPause className="h-8 w-8" aria-hidden />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// On small screens each scene's line is said by one of the coaches, in its own voice.
// On small screens each scene's line is said by one of the coaches, in its own voice.
const sceneCoaches: Record<SceneKey, { coach: string; file: string }> = {
  habits: { coach: 'Taisu', file: 'coach-taisu' },
  fasting: { coach: 'Wren', file: 'coach-wren' },
  breathing: { coach: 'Moss', file: 'coach-moss' },
  places: { coach: 'Pip', file: 'coach-pip' },
  gallery: { coach: 'Luna', file: 'coach-luna' },
  reminders: { coach: 'Bruno', file: 'coach-bruno' },
};

function CoachQuote({ sceneKey, className, align = 'center' }: { sceneKey: SceneKey; className?: string; align?: 'center' | 'start' }) {
  const { t } = useHome();
  const item = { ...sceneCoaches[sceneKey], quote: t.quotes[sceneKey] };
  if (!item) return null;
  return (
    <div className={className} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.figure
          key={sceneKey}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className={cn('flex items-center gap-3 text-left', align === 'start' ? 'justify-start' : 'justify-center')}
        >
          <Image src={shot(item.file)} alt="" width={96} height={88} className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white/20" />
          <span className="min-w-0">
            <blockquote className="text-[15px] font-medium italic leading-5 text-white/90">“{item.quote}”</blockquote>
            <figcaption className="mt-1 text-xs font-bold text-white/60">{item.coach}</figcaption>
          </span>
        </motion.figure>
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  const { t } = useHome();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const scene = scenes[index];

  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % scenes.length), sceneDurationMs);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduceMotion]);

  const choose = (next: number) => {
    const wrapped = (next + scenes.length) % scenes.length;
    setIndex(wrapped);
    track('hero_scene_select', 'engagement', scenes[wrapped].key);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0b1220] px-4 pb-16 pt-20 text-white sm:px-6 sm:pt-24 lg:pb-40 lg:pt-40">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_15%_15%,rgba(13,110,253,0.45),transparent_55%),radial-gradient(ellipse_at_85%_90%,rgba(255,138,61,0.30),transparent_55%),radial-gradient(ellipse_at_50%_50%,rgba(191,90,242,0.22),transparent_60%)]" aria-hidden />
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ background: `radial-gradient(ellipse at 72% 40%, ${scene.accent}40, transparent 50%)` }}
        transition={{ duration: 0.8 }}
        aria-hidden
      />
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
          <div className="hidden items-center gap-3 lg:flex">
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
            <p className="text-sm font-bold text-white/85">{t.heroKicker}</p>
          </div>
          <h1 className="text-[2rem] font-extrabold leading-[1.05] tracking-tight text-white min-[400px]:text-[2.2rem] sm:text-5xl lg:mt-5 lg:text-[3.5rem] xl:text-[3.75rem]">
            <span className="block text-[0.82em]">{t.heroLine1}</span>
            <span className="block bg-gradient-to-r from-[#6fb1ff] via-[#d08cff] to-[#ffb27a] bg-clip-text text-transparent">{t.heroLine2}</span>
          </h1>
          <CoachQuote sceneKey={scene.key} align="start" className="mt-6 hidden h-16 max-w-xl lg:block" />
          <div className="mt-4 hidden flex-col items-start lg:flex">
            <AppStoreBadge placement="hero" tone="light" />
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[420px] pt-6 lg:max-w-[480px] lg:pt-0">
        <div className="relative w-full">
          <PausableShot paused={paused} onToggle={() => setPaused((value) => !value)}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={scene.key}
                initial={{ opacity: 0, x: 40, rotate: 4 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -40, rotate: -4 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <PhoneShot src={shot(scene.screen)} alt={t.scenes[scene.key].alt} priority={index === 0} />
              </motion.div>
            </AnimatePresence>
          </PausableShot>
          <FloatingChips sceneKey={scene.key} />
        </div>
        <CoachQuote sceneKey={scene.key} className="mx-auto mt-8 h-16 w-full max-w-sm lg:hidden" />
        <SceneCarousel index={index} onChoose={choose} />
        </div>
      </div>
    </section>
  );
}

/** The scenes as a carousel under the phone: one track of cards that slides, the current one centred and its neighbours faded. */
const carouselGap = 6;
const carouselFallbackWidth = 120;

function SceneCarousel({ index, onChoose }: { index: number; onChoose: (index: number) => void }) {
  const { t } = useHome();
  const showsNeighbours = useMediaQuery('(min-width: 640px)');
  const wheelLock = useRef(false);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [widths, setWidths] = useState<number[]>(() => scenes.map(() => carouselFallbackWidth));
  const count = scenes.length;

  // Cards keep their own width, so the track packs them with an even gap.
  useEffect(() => {
    const measure = () => setWidths(scenes.map((_, i) => cardRefs.current[i]?.offsetWidth ?? carouselFallbackWidth));
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const widthAt = (offset: number) => widths[(index + offset + count * 2) % count];
  const centerOffset = (distance: number) => {
    if (distance === 0) return 0;
    const sign = Math.sign(distance);
    let x = widthAt(0) / 2;
    for (let step = 1; step < Math.abs(distance); step++) x += carouselGap + widthAt(step * sign);
    return sign * (x + carouselGap + widthAt(distance) / 2);
  };
  const control =
    'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/85 transition hover:bg-white/20 hover:text-white';

  return (
    <div className="mx-auto mt-2 flex w-full max-w-[440px] items-center justify-center gap-1.5 lg:absolute lg:inset-x-0 lg:top-full lg:mt-8">
      <button type="button" onClick={() => onChoose(index - 1)} className={control} aria-label={t.previous}>
        <HiChevronLeft className="h-5 w-5" aria-hidden />
      </button>
    <motion.div
      className={cn('relative h-12 min-w-0 cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing', showsNeighbours && 'flex-1')}
      role="tablist"
      aria-label={t.scenesLabel}
      onPanEnd={(_, info) => {
        if (info.offset.x < -30) onChoose(index + 1);
        else if (info.offset.x > 30) onChoose(index - 1);
      }}
      onWheel={(event) => {
        if (Math.abs(event.deltaX) < 20 || wheelLock.current) return;
        wheelLock.current = true;
        onChoose(index + (event.deltaX > 0 ? 1 : -1));
        window.setTimeout(() => (wheelLock.current = false), 500);
      }}
      style={showsNeighbours ? { maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)' } : { width: widthAt(0) + 56, maskImage: 'linear-gradient(90deg, transparent, #000 28px, #000 calc(100% - 28px), transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 28px, #000 calc(100% - 28px), transparent)' }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') onChoose(index + 1);
        if (event.key === 'ArrowLeft') onChoose(index - 1);
      }}
    >
      {scenes.map((item, itemIndex) => {
        // Shortest way round the loop, so the cards slide the near way.
        let distance = itemIndex - index;
        if (distance > count / 2) distance -= count;
        if (distance < -count / 2) distance += count;
        const isCurrent = distance === 0;
        const isVisible = isCurrent || (showsNeighbours && Math.abs(distance) === 1);
        const Icon = item.icon;
        return (
          <motion.button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={isCurrent}
            tabIndex={isVisible ? 0 : -1}
            onClick={() => onChoose(index + distance)}
            initial={false}
            animate={{ x: centerOffset(distance) - widths[itemIndex] / 2, opacity: isCurrent ? 1 : isVisible ? 0.45 : 0, filter: isCurrent || isVisible ? 'blur(0px)' : 'blur(4px)' }}
            transition={{ type: 'spring', stiffness: 170, damping: 24, mass: 0.9, opacity: { duration: 0.5, ease: 'easeInOut' }, filter: { duration: 0.5 } }}
            ref={(element) => {
              cardRefs.current[itemIndex] = element;
            }}
            className="absolute left-1/2 top-0 flex h-12 items-center"
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
          >
            <span
              className={cn(
                'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-[13px] font-semibold transition-colors duration-300',
                isCurrent ? 'border-transparent text-white shadow-lg' : 'border-white/20 bg-white/10 text-white/85',
              )}
              style={isCurrent ? { background: item.accent } : undefined}
            >
              <Icon className="h-4 w-4" aria-hidden />
              {t.scenes[item.key].label}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
      <button type="button" onClick={() => onChoose(index + 1)} className={control} aria-label={t.next}>
        <HiChevronRight className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}

// MARK: - Sections

function CoachesStrip() {
  const { t } = useHome();
  return (
    <motion.div {...reveal} className="mx-auto mt-8 max-w-6xl rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t.coaches.title}</h3>
          <p className="mt-2 text-base leading-7 text-white/80">{t.coaches.body}</p>
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
              <Image src={shot(coach.file)} alt={t.coaches.alt.replace('{name}', coach.name)} width={320} height={293} className="h-auto w-full rounded-2xl" />
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
  const { t } = useHome();
  return (
    <Feature
      id="medals"
      reverse
      className="bg-white dark:bg-[#0a1522]"
      eyebrow={t.medals.eyebrow}
      accent="#b07a00"
      title={t.medals.title}
      body={t.medals.body}
      points={t.medals.points}
      visual={
        <PhonePair
          tint="bg-[#ffcf4d]/25"
          back={{ src: shot('challenges'), alt: t.medals.alts.challenges }}
          front={[
            { src: shot('achievement'), alt: t.medals.alts.achievement },
            { src: shot('achievements'), alt: t.medals.alts.achievements },
            { src: shot('challenge'), alt: t.medals.alts.challenge },
          ]}
        />
      }
    >
      <ProList items={t.medals.pro} />
    </Feature>
  );
}

const tileIcons: IconType[] = [HiDeviceMobile, HiTemplate, HiMicrophone, HiHeart, HiCloud, HiLightningBolt];

function EverywhereSection() {
  const { t } = useHome();
  const tiles = t.everywhere.tiles.map((tile, index) => ({ ...tile, icon: tileIcons[index] }));

  return (
    <section className="bg-[#f8fbff] px-4 py-12 dark:bg-[#07111c] sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#075cb5] dark:text-[#7bdcff]">{t.everywhere.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#15181c] dark:text-white sm:text-5xl">{t.everywhere.title}</h2>
        </motion.div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto h-[330px] w-full max-w-[360px]">
            <motion.div className="absolute left-2 top-0" initial={{ opacity: 0, rotate: -14, y: 30 }} whileInView={{ opacity: 1, rotate: -6, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ type: 'spring', stiffness: 95, damping: 15 }}>
              <WatchShot src={shot('watch-today')} alt={t.everywhere.watchTodayAlt} />
            </motion.div>
            <motion.div className="absolute bottom-0 right-2" initial={{ opacity: 0, rotate: 16, y: 40 }} whileInView={{ opacity: 1, rotate: 6, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ type: 'spring', stiffness: 95, damping: 15, delay: 0.12 }}>
              <WatchShot src={shot('watch-water')} alt={t.everywhere.watchWaterAlt} />
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
  const { t } = useHome();
  return (
    <section id="pricing" className="scroll-mt-16 bg-white px-4 py-12 dark:bg-[#0a1522] sm:px-6 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#075cb5] dark:text-[#7bdcff]">{t.pricing.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#15181c] dark:text-white sm:text-5xl">{t.pricing.title}</h2>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...reveal} className="rounded-[28px] border border-slate-200 bg-[#f8fbff] p-6 dark:border-white/10 dark:bg-[#0d1928] sm:p-8">
            <h3 className="text-2xl font-extrabold text-[#15181c] dark:text-white">{t.free}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t.pricing.freeLead}</p>
            <ul className="mt-6 space-y-2">
              {t.pricing.freeBenefits.map((item) => (
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
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t.pricing.proLead}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {t.pricing.proBenefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-3">
                  <HiSparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#c98a12] dark:text-[#ffd54f]" aria-hidden />
                  <span>
                    <span className="block text-sm font-bold text-[#15181c] dark:text-white">{benefit.title}</span>
                    <span className="mt-0.5 block text-sm leading-6 text-slate-600 dark:text-slate-300">{benefit.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
              {planOrder.map((planKey) => {
                const plan = { ...t.pricing.plans[planKey], featured: planKey === 'annual' };
                return (
                <div
                  key={planKey}
                  className={cn(
                    'relative flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 sm:block sm:p-4',
                    plan.featured ? 'border-[#c98a12] bg-white shadow-[0_14px_34px_rgba(201,138,18,0.22)] dark:border-[#ffd54f] dark:bg-[#1d1708]' : 'border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/5',
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-2.5 left-4 rounded-full bg-[#c98a12] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white dark:bg-[#ffd54f] dark:text-[#2a1d00]">
                      {t.pricing.bestValue}
                    </span>
                  )}
                  <div className="min-w-0 sm:contents">
                    <p className="text-sm font-bold text-[#15181c] dark:text-white">{plan.name}</p>
                    <p className={cn('mt-0.5 text-xs font-semibold sm:hidden', plan.featured ? 'text-[#8a5a00] dark:text-[#ffd54f]' : 'text-slate-600 dark:text-slate-300')}>{plan.note}</p>
                  </div>
                  <p className="shrink-0 text-right sm:mt-2 sm:text-left">
                    <span className="text-xl font-extrabold tracking-tight text-[#15181c] dark:text-white sm:text-2xl">{plan.price}</span>{' '}
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{plan.cadence}</span>
                  </p>
                  <p className={cn('mt-1.5 hidden text-xs font-semibold sm:block', plan.featured ? 'text-[#8a5a00] dark:text-[#ffd54f]' : 'text-slate-600 dark:text-slate-300')}>{plan.note}</p>
                </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center sm:justify-start">
              <AppStoreBadge placement="pricing_pro" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const { t, locale } = useHome();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-16 bg-[#f8fbff] px-4 py-12 dark:bg-[#07111c] sm:px-6 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-[#15181c] dark:text-white sm:text-5xl">{t.faq.title}</h2>
        <div className="mt-10">
          {t.faq.items.map((item, index) => {
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
          <RichText text={t.faq.more} locale={locale} className="font-bold text-[#075cb5] hover:underline dark:text-[#7bdcff]" />
        </p>
      </div>
    </section>
  );
}

function FinalCta() {
  const { t } = useHome();
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1220] px-4 py-24 text-center text-white sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_20%,rgba(13,110,253,0.45),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(255,138,61,0.35),transparent_55%),radial-gradient(ellipse_at_50%_50%,rgba(191,90,242,0.25),transparent_60%)]" aria-hidden />
      <motion.div {...reveal} className="mx-auto max-w-3xl">
        <div className="mx-auto flex w-fit -space-x-3">
          {coaches.map((coach) => (
            <Image key={coach.name} src={shot(coach.file)} alt="" width={160} height={147} className="h-14 w-14 rounded-full object-cover ring-4 ring-[#0b1220] sm:h-16 sm:w-16" />
          ))}
        </div>
        <h2 className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">{t.cta.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/80">{t.cta.body}</p>
      </motion.div>
    </section>
  );
}

function Footer() {
  const { t, locale } = useHome();
  const site = siteCopy[locale];
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
            {t.footer.tagline}
          </p>
          <p className="mt-5 text-xs text-slate-600 dark:text-slate-300">{t.footer.copyright}</p>
        </div>
        <div className="grid grid-cols-3 gap-6 sm:gap-8">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#15181c] dark:text-white">Ritualist</p>
            <div className="space-y-2 text-sm">
              {navTargets.map((item) => (
                <a key={item.href} href={item.href} className={linkClass}>
                  {t.nav[item.key]}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-[#15181c] dark:text-white">{t.footer.help}</p>
            <div className="space-y-2 text-sm">
              <Link href={userGuidePath(locale)} className={linkClass}>{site.userGuide}</Link>
              <Link href={localePath(locale, '/support')} className={linkClass}>{site.support}</Link>
              <Link href={localePath(locale, '/roadmap')} className={linkClass}>{site.roadmap}</Link>
              <Link href={localePath(locale, '/privacy')} className={linkClass}>{site.privacy}</Link>
              <Link href={localePath(locale, '/terms')} className={linkClass}>{site.terms}</Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-[#15181c] dark:text-white">{t.footer.follow}</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('outbound_click', 'engagement', 'instagram')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-[#075cb5] hover:text-[#075cb5] dark:border-white/20 dark:text-slate-200 dark:hover:border-[#7bdcff] dark:hover:text-[#7bdcff]"
              aria-label={t.footer.instagram}
            >
              <FaInstagram className="h-5 w-5" aria-hidden />
            </a>
            <div className="mt-4">
              <CookieSettingsButton />
            </div>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// MARK: - Page

export default function HomePage({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];
  return (
    <HomeContext.Provider value={{ t, locale }}>
    <LocaleSetup locale={locale} path="/" />
    <MotionConfig reducedMotion="user">
      <main id="top" className="min-h-screen overflow-hidden bg-[#f8fbff] text-[#15181c] dark:bg-[#07111c] dark:text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd(t)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(t)) }} />

        <Header />
        <Hero />
        <Feature
          id="habits"
          className="bg-white dark:bg-[#0a1522]"
          eyebrow={t.habits.eyebrow}
          accent="#2a9d4b"
          title={t.habits.title}
          body={t.habits.body}
          points={t.habits.points}
          visual={
            <PhonePair
              tint="bg-[#34c759]/25"
              back={{ src: shot('month'), alt: t.habits.alts.month }}
              front={[
                { src: shot('log-water'), alt: t.habits.alts.logWater },
                { src: shot('habit-stats'), alt: t.habits.alts.habitStats },
                { src: shot('patterns'), alt: t.habits.alts.patterns },
              ]}
            />
          }
        >
          <ProList items={t.habits.pro} />
        </Feature>
        <Feature
          id="places"
          reverse
          className="bg-[linear-gradient(180deg,#fff5f5_0%,#f8fbff_100%)] dark:bg-[linear-gradient(180deg,#1f0f12_0%,#07111c_100%)]"
          eyebrow={t.places.eyebrow}
          accent="#e5484d"
          title={t.places.title}
          body={t.places.body}
          points={t.places.points}
          visual={
            <motion.div {...reveal} className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
              <div className="absolute inset-x-0 top-16 bottom-10 rounded-full bg-[#e5484d]/20 blur-3xl" aria-hidden />
              <CyclingPhone
                shots={[
                  { src: shot('remind-gym'), alt: t.places.alts.remindGym },
                  { src: shot('add-place'), alt: t.places.alts.addPlace },
                ]}
              />
              <PlaceReminderNotification />
            </motion.div>
          }
        >
          <ProList items={t.places.pro} />
        </Feature>
        <section id="fasting" className="relative isolate scroll-mt-16 overflow-hidden bg-[#140b05] text-white">
          <div className="absolute inset-0 z-[-10] bg-[radial-gradient(ellipse_at_30%_10%,rgba(255,138,61,0.35),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(10,132,255,0.25),transparent_55%)]" aria-hidden />
          <Feature
            id="fasting-intro"
            dark
            className="py-12 lg:py-16 lg:pb-8"
            eyebrow={t.fasting.eyebrow}
              accent="#ffb27a"
            title={t.fasting.title}
            body={t.fasting.body}
            points={t.fasting.points}
            visual={
              <div className="relative">
                <PhonePair
                  tint="bg-[#ff8a3d]/30"
                  back={{ src: shot('guide'), alt: t.fasting.alts.guide }}
                  front={[
                    { src: shot('guide-coach'), alt: t.fasting.alts.guideCoach },
                    { src: shot('coach-picker'), alt: t.fasting.alts.coachPicker },
                  ]}
                />
                <motion.div {...reveal} className="absolute -bottom-4 left-0 w-[70%] drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)] sm:w-[60%]">
                  <Image src={shot('live-activity-lock')} alt={t.fasting.alts.liveActivity} width={900} height={375} className="h-auto w-full" />
                </motion.div>
              </div>
            }
          >
            <ProList
              dark
              items={t.fasting.pro}
            />
          </Feature>
          <div className="relative px-4 pb-12 sm:px-6 lg:pb-16">
            <CoachesStrip />
          </div>
        </section>
        <Feature
          id="breathing"
          reverse
          dark
          className="bg-[linear-gradient(160deg,#0b3b4a_0%,#245d7a_45%,#c98a5a_100%)] text-white"
          eyebrow={t.breathing.eyebrow}
          accent="#a8f0ff"
          title={t.breathing.title}
          body={t.breathing.body}
          points={t.breathing.points}
          visual={
            <motion.div {...reveal} className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
              <CyclingPhone
                shots={[
                  { src: shot('breath-lotus'), alt: t.breathing.alts.lotus },
                  { src: shot('breath-star'), alt: t.breathing.alts.star },
                  { src: shot('breath-clover'), alt: t.breathing.alts.clover },
                ]}
              />
            </motion.div>
          }
        >
          <ProList dark items={t.breathing.pro} />
        </Feature>
        <MedalsSection />
        <Feature
          id="about-you"
          className="bg-[linear-gradient(180deg,#f7f0ff_0%,#fdf2f8_100%)] dark:bg-[linear-gradient(180deg,#1a1030_0%,#200f22_100%)]"
          eyebrow={t.aboutYou.eyebrow}
          tag={<ProTag />}
          accent="#9b3fd4"
          title={t.aboutYou.title}
          body={t.aboutYou.body}
          points={t.aboutYou.points}
          visual={
            <PhonePair
              tint="bg-[#bf5af2]/25"
              back={{ src: shot('foryou'), alt: t.aboutYou.alts.forYou }}
              front={[
                { src: shot('aboutyou'), alt: t.aboutYou.alts.aboutYou },
                { src: shot('aboutyou-traits'), alt: t.aboutYou.alts.traits },
              ]}
            />
          }
        >
          <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{t.aboutYou.note}</p>
          <ProList items={t.aboutYou.pro} />
        </Feature>
        <EverywhereSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
        <Footer />
      </main>
    </MotionConfig>
    </HomeContext.Provider>
  );
}
