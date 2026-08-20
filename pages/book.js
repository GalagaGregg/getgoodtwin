import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

const CALENDLY_URL = 'https://calendly.com/matt-gregg-martinez/new-meeting';

export default function Book() {
  useEffect(() => {
    function mount() {
      const el = document.getElementById('calendly-embed');
      if (!el || el.childElementCount > 0) return;
      if (window.Calendly && window.Calendly.initInlineWidget) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: el,
        });
      }
    }
    if (window.Calendly) {
      mount();
    } else {
      const t = setInterval(() => {
        if (window.Calendly) {
          clearInterval(t);
          mount();
        }
      }, 200);
      return () => clearInterval(t);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white">
      <Head>
        <title>Book Your Call — GetGoodTwin</title>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </Head>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

      <nav className="flex justify-between items-center px-8 py-6 border-b border-blue-700">
        <div className="text-3xl font-black">GetGoodTwin</div>
        <div className="text-sm text-blue-300">Real Estate Lead Management</div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 py-16 text-center">
        <h1 className="text-5xl font-black mb-6 leading-tight">
          Never Miss Another Lead to a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Busy Schedule
          </span>{' '}
          — Or a Night's Sleep
        </h1>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Pick a time below for a free call. We'll show you exactly what an AI department
          would handle for your brokerage — around the clock, so no lead ever waits for you to wake up.
        </p>

        <div className="bg-white rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-2xl">
          <div id="calendly-embed" style={{ minWidth: '280px', height: '700px' }} />
        </div>
      </div>
    </div>
  );
}
