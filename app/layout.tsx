import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "./components/AnalyticsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vladblajovan.github.io/RitualistApp";

export const metadata: Metadata = {
  title: "Ritualist - Private Habit Tracking for iPhone and Apple Watch",
  description: "Build rituals with a private habit tracker for iPhone, iPad, and Apple Watch. Log habits fast, follow challenges, earn achievements, run Live Activities, and understand progress with on-device insights.",
  metadataBase: new URL(siteUrl),
  keywords: ["habit tracker", "Apple Watch habit tracker", "iOS app", "iPad app", "Live Activities", "achievements", "challenges", "personality insights", "privacy-first", "Apple Health", "fasting tracker", "breathing exercises", "wellness", "iCloud sync", "habit analytics"],
  authors: [{ name: "Vlad Blajovan" }],
  creator: "Vlad Blajovan",
  publisher: "Ritualist",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ritualist - Private Habit Tracking for iPhone and Apple Watch",
    description: "Fast habit logging, Apple Watch support, Live Activities, challenges, achievements, Apple Health, iCloud sync, and on-device insights.",
    siteName: "Ritualist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ritualist habit tracker for iPhone and Apple Watch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritualist - Private Habit Tracking for iPhone and Apple Watch",
    description: "Fast logging, challenges, achievements, Live Activities, Apple Watch support, and private on-device insights.",
    images: ["/og-image.png"],
    creator: "@ritualistapp",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // TODO: Add verification codes when you set up:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#edf6ff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#07111c" media="(prefers-color-scheme: dark)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.addEventListener('load', function() {
                setTimeout(function() {
                  window.scrollTo(0, 0);
                }, 0);
              });
              (function() {
                var mq = window.matchMedia('(prefers-color-scheme: dark)');
                if (mq.matches) document.documentElement.classList.add('dark');
                mq.addEventListener('change', function(e) {
                  document.documentElement.classList.toggle('dark', e.matches);
                });
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
