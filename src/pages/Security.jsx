import React from 'react';

export default function Security() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 font-light">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl leading-snug mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-light">
            Security & Data Trust
          </h1>
          <p className="text-xl text-gray-400 font-light">
            Your Data Security is Our Top Priority
          </p>
        </section>

        {/* Security Measures */}
        <section className="space-y-4 ml-10">
          <h2 className="text-2xl ml-10 font-light mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How We Keep Your Data Safe
          </h2>
          <ul className="list-disc ml-10 list-inside text-gray-300 leading-relaxed text-base">
            <li>
              <span className="text-white font-normal">Encryption:</span> All data in transit is encrypted using TLS 1.2+ (HTTPS). Sensitive data is encrypted at rest.
            </li>
            <li>
              <span className="text-white font-normal">Backups:</span> We perform secure, automated backups daily to ensure your data is never lost.
            </li>
            <li>
              <span className="text-white font-normal">Access Controls:</span> Only authorized personnel can access our infrastructure, under strict audit controls.
            </li>
            <li>
              <span className="text-white font-normal">Infrastructure:</span> We host on secure, industry-leading cloud providers with 24/7 monitoring.
            </li>
          </ul>
        </section>

        {/* User Responsibility */}
        <section className="space-y-4 ml-10">
          <h2 className="text-2xl ml-10 font-light mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Your Responsibility
          </h2>
          <ul className="list-disc list-inside ml-10  text-gray-300 leading-relaxed text-base">
            <li>Use strong, unique passwords.</li>
            <li>Don’t share your login credentials.</li>
            <li>
              Notify us immediately at{' '}
              <a href="mailto:security@projectaccel.io" className="underline">
                security@projectaccel.io
              </a>{' '}
              if you suspect any unauthorized access.
            </li>
          </ul>
        </section>

        {/* Reporting */}
        <section className="space-y-4 ml-10">
          <h2 className="text-2xl font-light ml-10 mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Reporting Vulnerabilities
          </h2>
          <p className="text-gray-300 ml-10 text-base leading-relaxed">
            If you believe you’ve found a security issue, we want to hear from you! <br />
            Please email{' '}
            <a href="mailto:security@projectaccel.io" className="underline">
              security@projectaccel.io
            </a>{' '}
            and we’ll investigate immediately.
          </p>
        </section>
      </div>
    </div>
  );
}
