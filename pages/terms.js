import Link from 'next/link';
import Script from 'next/script';

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a85f8b01013cf7dd53bff8a"
        data-source="WEB_USER"
        strategy="lazyOnload"
      />
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-300 hover:text-white text-sm">← Back to home</Link>
        <h1 className="text-4xl font-black mt-6 mb-8">Terms of Service</h1>

        <div className="space-y-6 text-blue-100 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Agreement</h2>
            <p>By registering for our webinar or using getgoodtwin.com, you agree to these Terms of Service. If you do not agree, please do not use this site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Who We Are</h2>
            <p>GetGoodTwin, located at 12555 Orange Dr, Davie, FL 33330, provides lead management systems and consulting for real estate brokers. We can be reached at +1 (305) 697-9093.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Webinar Registration</h2>
            <p>Registering for a webinar is free and does not obligate you to purchase any product or service. Webinar dates, times, and content are subject to change.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Communications</h2>
            <p>By submitting your contact information, you agree that GetGoodTwin may contact you by email and, if you separately opt in, by SMS, regarding your registration and related services. Message and data rates may apply. Reply STOP to unsubscribe from texts at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>Statistics and results referenced on this site (recovered revenue, deal counts, broker outcomes) reflect examples and are not guarantees of individual results. Your results will vary based on your business, market, and effort.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Refund Policy</h2>
            <p>Where a money-back guarantee is offered for a paid service, its specific terms will be provided at the time of purchase.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
            <p>GetGoodTwin<br/>12555 Orange Dr, Davie, FL 33330<br/>+1 (305) 697-9093</p>
          </section>
        </div>
      </div>
    </div>
  );
}
