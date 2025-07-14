import React from 'react';

export default function ScheduleDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/5 p-8 rounded-xl max-w-md w-full mx-auto text-center animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Schedule a Demo</h1>
        <p className="text-gray-300 mb-6">Book a personalized walkthrough with our team. We'll show you how ProjectAccel fits your workflow.</p>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            required
          />
          <input
            type="text"
            placeholder="Company (optional)"
            className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
          <input
            type="text"
            placeholder="Preferred Date & Time"
            className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-3 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-lg text-base mt-4"
          >
            Book Demo
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-6">We'll reach out to confirm your demo and answer any questions you have.</p>
      </div>
    </div>
  );
} 