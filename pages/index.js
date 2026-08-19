import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { ArrowRight, CheckCircle, Users, TrendingUp, Clock } from 'lucide-react';

const GLOW_BUTTON = "bg-gradient-to-r from-yellow-400 to-red-500 text-black font-black rounded-xl hover:shadow-2xl transform hover:scale-105 transition inline-flex items-center gap-3 shadow-[0_0_25px_8px_rgba(251,191,36,0.45)] hover:shadow-[0_0_40px_12px_rgba(251,191,36,0.65)] animate-pulse";

export default function WebinarFunnel() {
  const [page, setPage] = useState('landing');

  // The GHL widget script injects a <chat-widget> element at the end of
  // <body> regardless of where the loader <script> tag sits. Move it into
  // our styled container so it actually appears centered on the page.
  useEffect(() => {
    const container = document.getElementById('register-widget-slot');
    if (!container) return;

    const tryMove = () => {
      const widget = document.querySelector('body > chat-widget');
      if (widget && widget.parentElement !== container) {
        container.appendChild(widget);
        return true;
      }
      return false;
    };

    if (tryMove()) return;

    const observer = new MutationObserver(() => {
      if (tryMove()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true });
    return () => observer.disconnect();
  }, []);

  const scrollToRegister = () =>
    document.getElementById('register-widget')?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (page === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white">
        {/* Nav */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-blue-700">
          <div className="text-3xl font-black">GetGoodTwin</div>
          <div className="text-sm text-blue-300">Real Estate Lead Management</div>
        </nav>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-8 py-12">
          {/* SCARCITY BANNER */}
          <div
            onClick={scrollToRegister}
            className="bg-red-600 text-white px-8 py-4 rounded-lg text-center mb-8 animate-pulse cursor-pointer hover:bg-red-700 transition"
          >
            <div className="font-black text-lg">⚡ URGENT: Only 7 Spots Left for Sunday's Webinar</div>
            <div className="text-sm">Next session: Sept 15 (2+ week wait)</div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-7xl font-black mb-6 leading-tight">
              Your Real Estate Business Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Hemorrhaging Money</span>
            </h1>
            <p className="text-3xl text-yellow-300 font-bold mb-6">
              And Your Leads Are Walking Right Out the Door
            </p>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              While you sleep tonight, at least <span className="text-red-400 font-bold">$2,847</span> in commission is slipping away from you because of ONE simple system failure that 91% of brokers don't know they have.
            </p>
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-8 py-5 rounded-lg inline-block text-2xl font-black mb-8">
              🎯 WATCH: The 3 Framework System That Recovered $156K+ For Our Brokers
            </div>
            <div>
              <button onClick={scrollToRegister} className={`${GLOW_BUTTON} text-xl px-10 py-5`}>
                🚀 SAVE MY SPOT NOW <ArrowRight size={28} />
              </button>
            </div>
          </div>

          {/* VIDEO SECTION */}
          <div className="mb-16 bg-gradient-to-b from-blue-800 to-blue-900 rounded-2xl p-8 border-2 border-yellow-400">
            <div className="aspect-video bg-blue-950 rounded-lg flex items-center justify-center mb-6 border-4 border-yellow-400">
              <div className="text-center">
                <div className="text-6xl mb-4">▶️</div>
                <div className="text-white font-bold text-xl">Your VSL Video Goes Here</div>
                <div className="text-blue-300 text-sm mt-2">(Replace with your video URL for maximum impact)</div>
              </div>
            </div>
            <p className="text-blue-100 text-center italic text-sm">
              ☝️ Watch the exact 3-framework system that's currently recovering an average of $156,000 per broker annually
            </p>
          </div>

          {/* Social Proof - RESULTS PROOF */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-8 border-l-4 border-yellow-400">
              <div className="text-5xl font-black text-yellow-300 mb-2">$156K</div>
              <div className="text-green-100 font-bold mb-1">Average $ Recovered</div>
              <div className="text-sm text-green-200">Per broker in Year 1</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 border-l-4 border-yellow-400">
              <div className="text-5xl font-black text-yellow-300 mb-2">537</div>
              <div className="text-blue-100 font-bold mb-1">Active Brokers</div>
              <div className="text-sm text-blue-200">Actively using system RIGHT NOW</div>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-8 border-l-4 border-yellow-400">
              <div className="text-5xl font-black text-yellow-300 mb-2">23%</div>
              <div className="text-red-100 font-bold mb-1">Deal Increase</div>
              <div className="text-sm text-red-200">Average additional deals closed</div>
            </div>
          </div>

          {/* TRUST SECTION */}
          <div className="bg-blue-900 border border-yellow-400 rounded-xl p-12 mb-16 text-center">
            <p className="text-yellow-400 font-bold text-lg mb-4">✓ PROVEN TRACK RECORD</p>
            <div className="grid grid-cols-2 gap-6 text-sm text-blue-100">
              <div>📊 $50M+ in deals recovered (verified)</div>
              <div>⭐ 4.9/5 rating (247 reviews)</div>
              <div>💰 30-day money-back guarantee</div>
              <div>🔒 Used by top 1% of brokers</div>
            </div>
          </div>

          {/* Problem - THE BLEEDING */}
          <div className="bg-gradient-to-br from-red-950 to-red-900 border-2 border-red-500 rounded-xl p-12 mb-12">
            <h2 className="text-4xl font-black mb-8 text-red-300">💉 The 7 Ways Brokers Hemorrhage Deals</h2>
            <div className="space-y-4 text-lg text-red-50">
              <div className="flex items-start gap-4 bg-red-900 bg-opacity-50 p-4 rounded-lg">
                <span className="text-red-400 text-3xl font-black flex-shrink-0">①</span>
                <p><span className="font-bold text-red-200">The Multi-Source Chaos:</span> Leads coming from website, calls, Facebook, referrals, walk-ins—but NO central system. They're drowning in a sea of disorganized data.</p>
              </div>
              <div className="flex items-start gap-4 bg-red-900 bg-opacity-50 p-4 rounded-lg">
                <span className="text-red-400 text-3xl font-black flex-shrink-0">②</span>
                <p><span className="font-bold text-red-200">The Follow-Up Failure:</span> Nobody on your team is tracking follow-ups consistently. Leads go cold in 48 hours because there's no system. That's where 60% of deals die.</p>
              </div>
              <div className="flex items-start gap-4 bg-red-900 bg-opacity-50 p-4 rounded-lg">
                <span className="text-red-400 text-3xl font-black flex-shrink-0">③</span>
                <p><span className="font-bold text-red-200">The Visibility Blackout:</span> Your team doesn't know which leads are hot TODAY, which need a follow-up THIS WEEK, which are dead. You're flying blind.</p>
              </div>
              <div className="flex items-start gap-4 bg-red-900 bg-opacity-50 p-4 rounded-lg">
                <span className="text-red-400 text-3xl font-black flex-shrink-0">④</span>
                <p><span className="font-bold text-red-200">The Silent Bleed:</span> While you're sleeping tonight, $2,847 walks out the door. Not once. Every single night. That's <span className="font-black text-red-300">$1.04M/year</span> in deals you'll never close because of poor systems.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button onClick={scrollToRegister} className={`${GLOW_BUTTON} text-xl px-10 py-5`}>
                🛑 STOP THE BLEEDING — REGISTER NOW <ArrowRight size={28} />
              </button>
            </div>
          </div>

          {/* Solution - THE FIX */}
          <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-xl p-12 mb-12 border-2 border-yellow-400">
            <h2 className="text-4xl font-black mb-2">🎯 The GetGoodTwin System</h2>
            <p className="text-green-200 text-lg mb-8">See it LIVE in this week's webinar—the exact system that recovered $156K+ for our brokers</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-800 bg-opacity-60 p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">📊</span>
                  <span className="text-xl font-black text-yellow-300">One Master Dashboard</span>
                </div>
                <p className="text-green-100 mb-2">All leads from ALL sources in ONE place:</p>
                <ul className="text-sm text-green-200 space-y-1">
                  <li>✓ Website leads</li>
                  <li>✓ Facebook leads</li>
                  <li>✓ Referrals & walk-ins</li>
                  <li>✓ Phone inquiries</li>
                </ul>
                <p className="text-green-300 font-bold mt-3">No more spreadsheets. No more chaos.</p>
              </div>
              <div className="bg-green-800 bg-opacity-60 p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🤖</span>
                  <span className="text-xl font-black text-yellow-300">Automated Follow-Up</span>
                </div>
                <p className="text-green-100 mb-2">The system works 24/7 so you don't have to:</p>
                <ul className="text-sm text-green-200 space-y-1">
                  <li>✓ Auto-emails every lead</li>
                  <li>✓ SMS reminders</li>
                  <li>✓ Smart re-engagement</li>
                  <li>✓ Zero manual work</li>
                </ul>
                <p className="text-green-300 font-bold mt-3">Your team closes deals. System handles the rest.</p>
              </div>
              <div className="bg-green-800 bg-opacity-60 p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">📈</span>
                  <span className="text-xl font-black text-yellow-300">Real-Time Pipeline Visibility</span>
                </div>
                <p className="text-green-100 mb-2">Know EXACTLY where every deal is RIGHT NOW:</p>
                <ul className="text-sm text-green-200 space-y-1">
                  <li>✓ New leads</li>
                  <li>✓ Hot prospects (ready to close)</li>
                  <li>✓ Deals in progress</li>
                  <li>✓ Dead/unqualified</li>
                </ul>
                <p className="text-green-300 font-bold mt-3">Never lose another deal.</p>
              </div>
              <div className="bg-green-800 bg-opacity-60 p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">💎</span>
                  <span className="text-xl font-black text-yellow-300">ROI Guarantee</span>
                </div>
                <p className="text-green-100 mb-2">One extra deal pays for everything:</p>
                <ul className="text-sm text-green-200 space-y-1">
                  <li>✓ $6K setup</li>
                  <li>✓ 3 months service ($6K)</li>
                  <li>✓ One $15K deal = breakeven</li>
                  <li>✓ Everything else = pure profit</li>
                </ul>
                <p className="text-green-300 font-bold mt-3">30-day money-back if you don't see results.</p>
              </div>
            </div>
          </div>

          {/* Webinar Details - WHAT YOU'LL GET */}
          <div className="bg-blue-900 border-2 border-yellow-400 rounded-xl p-12 mb-12">
            <h2 className="text-4xl font-black mb-2 text-yellow-300">📍 What You'll Discover (LIVE Demo)</h2>
            <p className="text-blue-200 mb-8 text-lg">Sunday, August 30, 2026 @ 2:00 PM EST — 30 minutes that could change your business</p>
            <div className="space-y-5 text-lg">
              <div className="flex items-start gap-4 bg-blue-800 bg-opacity-50 p-5 rounded-lg">
                <div className="text-3xl flex-shrink-0">🎬</div>
                <div>
                  <div className="font-black text-yellow-300">FRAMEWORK #1: The Three Types of Lost Deals</div>
                  <div className="text-blue-100 text-base">Why $3M in deals are hemorrhaging from your pipeline RIGHT NOW—and where exactly they're slipping away. (Most brokers have NO IDEA.)</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-blue-800 bg-opacity-50 p-5 rounded-lg">
                <div className="text-3xl flex-shrink-0">💰</div>
                <div>
                  <div className="font-black text-yellow-300">FRAMEWORK #2: The Lead Stewardship Model</div>
                  <div className="text-blue-100 text-base">How $1M brokers think COMPLETELY DIFFERENTLY about leads than everyone else. The exact system that separates top 1% from the rest.</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-blue-800 bg-opacity-50 p-5 rounded-lg">
                <div className="text-3xl flex-shrink-0">⚙️</div>
                <div>
                  <div className="font-black text-yellow-300">FRAMEWORK #3: The Friction Matrix</div>
                  <div className="text-blue-100 text-base">Where deals ACTUALLY die (hint: it's not where you think). The 7 pressure points killing your close rate—and how to fix them in 48 hours.</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-blue-800 bg-opacity-50 p-5 rounded-lg">
                <div className="text-3xl flex-shrink-0">📊</div>
                <div>
                  <div className="font-black text-yellow-300">LIVE CASE STUDY: Marcus's $500K → $1M Transformation</div>
                  <div className="text-blue-100 text-base">Same broker. Same market. Same leads. Different SYSTEM = 100% more deals closed. You'll see the EXACT numbers and how he did it.</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-blue-800 bg-opacity-50 p-5 rounded-lg border-l-4 border-yellow-400">
                <div className="text-3xl flex-shrink-0">🎁</div>
                <div>
                  <div className="font-black text-yellow-300 text-lg">BONUS: Limited Offer (First 10 Brokers Only)</div>
                  <div className="text-yellow-200 text-base font-bold">Setup fee cut in HALF: $3K instead of $6K. Value: $3,000.</div>
                  <div className="text-blue-100 text-base">This offer expires when the webinar ends. Non-negotiable.</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA - BIG BUTTON */}
          <div className="text-center mb-12">
            <button onClick={scrollToRegister} className={`${GLOW_BUTTON} text-3xl px-16 py-8 mb-6`}>
              🚀 SECURE MY SPOT NOW <ArrowRight size={40} />
            </button>
            <div
              onClick={scrollToRegister}
              className="bg-red-600 text-white px-8 py-4 rounded-lg inline-block font-black text-lg cursor-pointer hover:bg-red-700 transition"
            >
              ⚡ ONLY 7 SPOTS LEFT — FILLS UP TODAY
            </div>
            <p className="text-yellow-300 font-bold text-xl mt-6">Next session: Sept 15 (2+ week wait)</p>
          </div>

          {/* Registration widget - centered on the page */}
          <div className="mb-12">
            <h2 className="text-center text-3xl font-black text-yellow-300 mb-6">👇 Register In 10 Seconds Below</h2>
            <div
              id="register-widget"
              className="max-w-md mx-auto rounded-2xl p-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 shadow-[0_0_50px_15px_rgba(251,191,36,0.4)]"
            >
              <div id="register-widget-slot" className="bg-blue-950 rounded-2xl overflow-hidden min-h-[400px]">
                <Script
                  src="https://widgets.leadconnectorhq.com/loader.js"
                  data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
                  data-widget-id="6a85f8b01013cf7dd53bff8a"
                  data-source="WEB_USER"
                  strategy="lazyOnload"
                />
              </div>
            </div>
          </div>

          {/* Trust Badges - PROOF */}
          <div className="border-t-2 border-yellow-400 pt-12 text-center">
            <p className="text-yellow-300 font-black text-lg mb-6">✓ VERIFIED BY 537 ACTIVE BROKERS</p>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-blue-900 bg-opacity-60 rounded-lg p-4">
                <div className="text-3xl font-black text-yellow-300">$50M+</div>
                <div className="text-blue-200 font-bold">In deals recovered</div>
              </div>
              <div className="bg-blue-900 bg-opacity-60 rounded-lg p-4">
                <div className="text-3xl font-black text-yellow-300">4.9 ⭐</div>
                <div className="text-blue-200 font-bold">Rating (247 reviews)</div>
              </div>
              <div className="bg-blue-900 bg-opacity-60 rounded-lg p-4">
                <div className="text-3xl font-black text-yellow-300">30 Days</div>
                <div className="text-blue-200 font-bold">Money-back guarantee</div>
              </div>
              <div className="bg-blue-900 bg-opacity-60 rounded-lg p-4">
                <div className="text-3xl font-black text-yellow-300">0% Risk</div>
                <div className="text-blue-200 font-bold">No credit card needed</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm italic">Used by top 1% of brokers. Industry-leading results. Zero BS.</p>
          </div>
        </div>

        <footer className="border-t border-blue-800 mt-12 px-8 py-10 text-blue-300 text-sm">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="font-bold text-white mb-1">GetGoodTwin</div>
              <div>12555 Orange Dr, Davie, FL 33330</div>
              <div>+1 (305) 697-9093</div>
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white underline">Privacy Policy</a>
              <a href="/terms" className="hover:text-white underline">Terms of Service</a>
            </div>
          </div>
          <div className="max-w-5xl mx-auto text-center md:text-left mt-4 text-blue-400 text-xs">
            © {new Date().getFullYear()} GetGoodTwin. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }

  if (page === 'thankyou') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white flex items-center justify-center px-8">
        <div className="max-w-2xl w-full text-center">
          <div className="text-7xl mb-6">✓</div>
          <h1 className="text-5xl font-black mb-4">You're Registered!</h1>
          <p className="text-2xl text-green-200 mb-8">
            Webinar: Sunday, August 30, 2026 @ 2:00 PM EST
          </p>

          <a
            href="https://us06web.zoom.us/j/88244823179?pwd=UVdk4ZoBSLdoM43a0lefcTZ1WJl6y1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold px-12 py-4 rounded-lg mb-12 hover:shadow-2xl transform hover:scale-105 transition text-xl"
          >
            🎯 JOIN ZOOM MEETING
          </a>

          <p className="text-lg text-green-200 mb-12">
            (Meeting ID: 882 4482 3179)
          </p>

          <div className="bg-green-900 border border-green-700 rounded-xl p-12 mb-8">
            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
            <div className="space-y-4 text-left text-lg text-green-100">
              <div>
                <div className="font-bold text-green-300">5 mins - Live System Demo</div>
                <div className="text-sm">See exactly how 500+ brokers are capturing & closing more deals</div>
              </div>
              <div>
                <div className="font-bold text-green-300">10 mins - Real Case Study</div>
                <div className="text-sm">Austin broker went from 5 deals/month to 8 deals/month (live numbers)</div>
              </div>
              <div>
                <div className="font-bold text-green-300">10 mins - Your Questions</div>
                <div className="text-sm">Ask anything - pricing, implementation, guarantees, everything</div>
              </div>
              <div>
                <div className="font-bold text-green-300">5 mins - Limited Offer</div>
                <div className="text-sm">First 10 brokers get setup fee cut in half ($3K instead of $6K)</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 border border-blue-700 rounded-xl p-8">
            <p className="text-lg mb-4">Not seeing the Zoom link?</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded bg-blue-800 border border-blue-600 text-white placeholder-blue-400 mb-4"
            />
            <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded">
              RESEND LINK
            </button>
          </div>

          <p className="text-blue-300 text-sm mt-8">
            P.S. - We'll also send you the recording if you need to reschedule
          </p>
        </div>
      </div>
    );
  }
}
