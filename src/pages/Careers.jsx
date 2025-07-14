import React from 'react';

const openRoles = [
  {
    title: 'Sales Development Representative',
    location: 'Remote / Chennai',
    type: 'Full-time',
    description: "Drive new business by qualifying leads and setting up demos for our sales team. Great for energetic communicators who love helping businesses grow."
  },
  {
    title: 'Frontend React Developer',
    location: 'Remote / Chennai',
    type: 'Full-time',
    description: 'Build beautiful, high-performance UIs for our project management platform. Experience with React and Tailwind CSS required.'
  },
  {
    title: 'Business Development',
    location: 'Remote / Chennai',
    type: 'Full-time',
    description: 'Help our customers get the most out of ProjectAccel. You\'ll onboard new users, answer questions, and turn feedback into product improvements.'
  },
  {
    title: 'FullStack Developer',
    location: 'Remote / Chennai',
    type: 'Full-time',
    description: 'Build and maintain our project management platform. Experience with Node.js, React, and modern web technologies required.'
  }
];

const benefits = [
  'Flexible remote work options',
  'Competitive salary & performance bonuses',
  'Learning budget for courses & certifications',
  'Collaborative, growth-focused team culture',
  'Opportunity to make a real impact for thousands of businesses',
  'Modern tech stack & tools',
  'Health insurance (India-based employees)'
];

export default function Careers() {
  return (
    <div className="space-y-16">
      {/* Headline */}
      <section className="text-center animate-fade-in-up pt-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
          Join the ProjectAccel Team
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          At ProjectAccel, we are on a mission to help ambitious teams deliver projects on time, every time. We believe in simplicity, transparency, and constant improvement. Want to be part of our story?
        </p>
      </section>

      {/* Open Roles */}
      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-2">
        <div className="bg-white/5 p-8 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-center">
            Open Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openRoles.map((role, idx) => (
              <div key={role.title} className="bg-white/10 p-6 rounded-xl hover:scale-105 transition duration-300 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                <div className="flex items-center text-sm text-gray-400 mb-2 gap-4">
                  <span>{role.location}</span>
                  <span className="px-2 py-1 bg-purple-900/30 rounded-full text-purple-300 font-semibold">{role.type}</span>
                </div>
                <p className="text-gray-300 mb-4 flex-1">{role.description}</p>
                <a
                  href={`mailto:careers@projectaccel.io?subject=Application for ${encodeURIComponent(role.title)}`}
                  className="mt-auto inline-block bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-2 px-6 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-lg text-base"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-3">
        <div className="bg-white/5 p-8 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Benefits & Perks
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 text-gray-300 text-base mb-8">
            {benefits.map((benefit, idx) => (
              <li
                key={benefit}
                className={`bg-white/10 rounded-lg py-4 px-6 ${
                  idx === benefits.length - 1 && benefits.length % 2 !== 0 ? 'md:col-span-2' : ''
                }`}
              >
                {benefit}
              </li>
            ))}
          </ul>
          <a
            href="mailto:careers@projectaccel.io?subject=General%20Application"
            className="inline-block bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-3 px-8 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-lg text-base"
          >
            Don't see your role? Send us your profile
          </a>
        </div>
      </section>
    </div>
  );
} 