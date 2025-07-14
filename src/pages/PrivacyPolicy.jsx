import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our Commitment to Your Privacy
          </p>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">What We Collect</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Your name, email, phone number, company name.</li>
            <li>Payment details (handled securely by our payment gateway).</li>
            <li>Usage data (pages visited, features used) to improve our services.</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">How We Use Your Data</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Provide and improve our services.</li>
            <li>Send important account notifications.</li>
            <li>Offer support and respond to inquiries.</li>
            <li>Occasionally send you updates, tips, or offers (you can opt out anytime).</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Who We Share It With</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>We never sell your data.</li>
            <li>We may share it with trusted partners who help us run ProjectAccel (like our payment processors, analytics tools), under strict confidentiality.</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Your Rights</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Access: See what data we have on you.</li>
            <li>Correction: Update or fix your information.</li>
            <li>Deletion: Delete your account and data anytime.</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Cookies</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>We use cookies to keep you logged in and understand how you use our site to improve it.</li>
            <li>You can control cookies through your browser settings.</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Questions?</h2>
          <p className="text-gray-300">Email us at <a href="mailto:privacy@projectaccel.io" className="underline">privacy@projectaccel.io</a>. We’re always here to help.</p>
        </section>
      </div>
    </div>
  );
} 