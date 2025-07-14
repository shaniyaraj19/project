import React from 'react';

export default function Security() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
            Security & Data Trust
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your Data Security is Our Top Priority
          </p>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">How We Keep Your Data Safe</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><span className="font-semibold">Encryption:</span> All data in transit is encrypted using TLS 1.2+ (HTTPS). Sensitive data is encrypted at rest.</li>
            <li><span className="font-semibold">Backups:</span> We perform secure, automated backups daily to ensure your data is never lost.</li>
            <li><span className="font-semibold">Access Controls:</span> Only authorized personnel can access our infrastructure, under strict audit controls.</li>
            <li><span className="font-semibold">Infrastructure:</span> We host on secure, industry-leading cloud providers with 24/7 monitoring.</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Your Responsibility</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Use strong, unique passwords.</li>
            <li>Don’t share your login credentials.</li>
            <li>Notify us immediately at <a href="mailto:security@projectaccel.io" className="underline">security@projectaccel.io</a> if you suspect any unauthorized access.</li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Reporting Vulnerabilities</h2>
          <p className="text-gray-300">If you believe you’ve found a security issue, we want to hear from you! <br /> Please email <a href="mailto:security@projectaccel.io" className="underline">security@projectaccel.io</a> and we’ll investigate immediately.</p>
        </section>
      </div>
    </div>
  );
} 