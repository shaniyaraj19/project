import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 font-light">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl leading-snug mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-light">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-400 font-light">
            Our Commitment to Your Privacy
          </p>
        </section>

        {/* Sections */}
        {[
          {
            title: 'What We Collect',
            items: [
              'Your name, email, phone number, company name.',
              'Payment details (handled securely by our payment gateway).',
              'Usage data (pages visited, features used) to improve our services.'
            ]
          },
          {
            title: 'How We Use Your Data',
            items: [
              'Provide and improve our services.',
              'Send important account notifications.',
              'Offer support and respond to inquiries.',
              'Occasionally send you updates, tips, or offers (you can opt out anytime).'
            ]
          },
          {
            title: 'Who We Share It With',
            items: [
              'We never sell your data.',
              'We may share it with trusted partners who help us run ProjectAccel (like our payment processors, analytics tools), under strict confidentiality.'
            ]
          },
          {
            title: 'Your Rights',
            items: [
              'Access: See what data we have on you.',
              'Correction: Update or fix your information.',
              'Deletion: Delete your account and data anytime.'
            ]
          },
          {
            title: 'Cookies',
            items: [
              'We use cookies to keep you logged in and understand how you use our site to improve it.',
              'You can control cookies through your browser settings.'
            ]
          }
        ].map((section, i) => (
          <section key={i} className="space-y-4 ml-10">
            <h2 className="text-2xl ml-10 font-light bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {section.title}
            </h2>
            <ul className="list-disc ml-10 list-inside text-gray-300 text-base leading-relaxed">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        {/* Contact */}
        <section className="space-y-4 ml-10">
          <h2 className="text-2xl ml-10 font-light bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Questions?
          </h2>
          <p className="text-gray-300 ml-10 text-base">
            Email us at <a href="mailto:privacy@projectaccel.io" className="underline">privacy@projectaccel.io</a>. We’re always here to help.
          </p>
        </section>
      </div>
    </div>
  );
}
