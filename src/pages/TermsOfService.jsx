import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Welcome to ProjectAccel. These Terms govern your use of our website and platform.
          </p>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Using ProjectAccel</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>You must be at least 18 years old to use our platform.</li>
            <li>Keep your login credentials secure. You’re responsible for all activity under your account.</li>
            <li>Don’t use ProjectAccel for illegal or harmful activities.</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Payments</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Paid plans are billed monthly or annually as selected.</li>
            <li>Fees are non-refundable except as required by law.</li>
            <li>You can cancel anytime — your subscription will end at the next billing cycle.</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Intellectual Property</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>You own your data.</li>
            <li>We own ProjectAccel, its code, branding, and all platform content.</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Limitation of Liability</h2>
          <p className="text-gray-300">We do our best to keep ProjectAccel reliable and secure, but we can’t promise it will be error-free. Our liability is limited to the amount you’ve paid us in the last 12 months.</p>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Changes</h2>
          <p className="text-gray-300">We may update these terms. We’ll notify you of major changes.</p>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Questions?</h2>
          <p className="text-gray-300">Reach out to <a href="mailto:support@projectaccel.io" className="underline">support@projectaccel.io</a></p>
        </section>
      </div>
    </div>
  );
} 