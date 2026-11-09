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
const socialPreviewImageUrl = `${siteUrl}/og-image-20261109.png`;

export const metadata: Metadata = {
  title: "Ritualist: Habits, Fasting and Breathing for iPhone",
  description: "Get to know yourself, one habit at a time. Log habits in one tap, fast with a coach in your corner, breathe with a guide you can feel, earn medals you can spin, and see what your habits say about you. Free to start.",
  itunes: {
    appId: "6755661147",
  },
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
    title: "Ritualist: Get to know yourself, one habit at a time",
    description: "Habits, fasts and breathing on iPhone and Apple Watch. A fasting coach, medals you can spin, and a portrait of what your habits say about you. Free to start.",
    siteName: "Ritualist",
    images: [
      {
        url: socialPreviewImageUrl,
        width: 1200,
        height: 630,
        alt: "Ritualist on iPhone: habits, a fasting coach and struck medals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritualist: Get to know yourself, one habit at a time",
    description: "Habits, fasts and breathing on iPhone and Apple Watch. A fasting coach, medals you can spin, and a portrait of what your habits say about you.",
    images: [socialPreviewImageUrl],
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
