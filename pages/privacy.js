import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-300 hover:text-white text-sm">← Back to home</Link>
        <h1 className="text-4xl font-black mt-6 mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-blue-100 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Who We Are</h2>
            <p>GetGoodTwin ("we", "us", "our") provides lead management systems for real estate brokers. We are located at 12555 Orange Dr, Davie, FL 33330. You can reach us at +1 (305) 697-9093.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Information We Collect</h2>
            <p>When you register for our webinar or otherwise contact us, we collect your name, email address, and phone number. We use this information solely to communicate with you about the webinar and related services you've requested.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To send you webinar registration confirmations and reminders</li>
              <li>To send you transactional emails and SMS related to your registration</li>
              <li>To send you marketing messages, but only if you have separately and explicitly opted in via a marketing consent checkbox</li>
              <li>To respond to inquiries you send us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">SMS Communications</h2>
            <p>If you opt in to receive text messages from us, message and data rates may apply and message frequency may vary. You can reply STOP at any time to unsubscribe, or HELP for assistance. We do not sell or share your mobile number with third parties for their own marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information. We do not buy or sell leads. We may share your information with service providers (such as our CRM and email/SMS providers) solely to deliver the services described above.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-2">Your Choices</h2>
            <p>You may unsubscribe from marketing communications at any time. To request deletion of your personal information, contact us at the phone number above.</p>
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
