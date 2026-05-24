'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { getConsent, setConsent, removeGACookies } from '../lib/analytics';

export default function ConsentBanner({ onConsent }: { onConsent: (granted: boolean) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const consent = getConsent();
      if (consent === null) {
        setVisible(true);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  function handleAccept() {
    setConsent('granted');
    setVisible(false);
    onConsent(true);
  }

  function handleDecline() {
    setConsent('denied');
    removeGACookies();
    setVisible(false);
    onConsent(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-xl rounded-[8px] border border-slate-300 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.18)] dark:border-white/20 dark:bg-[#101b2a]">
            <p className="mb-4 text-sm text-slate-700 dark:text-slate-200">
              We use cookies for anonymous site analytics to understand how visitors interact with our site.{' '}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-black dark:hover:text-white">
                Privacy Policy
              </Link>
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 rounded-lg border border-slate-400 px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:border-white/25 dark:text-slate-100 dark:hover:bg-white/10"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
