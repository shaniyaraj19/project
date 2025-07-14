import React from 'react';

export default function About() {
  return (
    <div className="space-y-16">
      {/* Headline */}
      <section className="text-center animate-fade-in-up pt-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-float">
          About ProjectAccel
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          At ProjectAccel, our mission is to help teams plan smarter, collaborate better, and deliver projects on time, every time. We believe managing projects should be easier — not overwhelming.
        </p>
      </section>

      {/* The Story Behind ProjectAccel */}
      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-2">
        <div className="bg-white/5 p-8 rounded-xl hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            The Story Behind ProjectAccel
          </h2>
          <p className="mb-4 text-gray-300 text-lg">
            We started ProjectAccel because we faced the same challenges you do — missed deadlines, unclear responsibilities, surprise costs.
          </p>
          <p className="text-gray-300 text-lg">
            As a team of tech builders, project managers, and process geeks, we wanted a tool that was powerful yet easy to use, flexible but structured. When we couldn’t find it, we built it.
          </p>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="max-w-6xl mx-auto text-center animate-fade-in-up stagger-3">
        <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition duration-300 animate-fade-in-up stagger-1">
            <div className="text-4xl mb-4 animate-float">💡</div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Clarity
            </h3>
            <p className="text-gray-300">We simplify work so teams always know what's next.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition duration-300 animate-fade-in-up stagger-2">
            <div className="text-4xl mb-4 animate-float">🤝</div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Accountability
            </h3>
            <p className="text-gray-300">We make ownership visible so nothing falls through the cracks.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition duration-300 animate-fade-in-up stagger-3">
            <div className="text-4xl mb-4 animate-float">🚀</div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Results
            </h3>
            <p className="text-gray-300">We help businesses hit deadlines and control budgets.</p>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="max-w-4xl mx-auto animate-fade-in-up stagger-4">
        <div className="bg-white/5 p-8 rounded-xl hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Today
          </h2>
          <p className="text-gray-300 text-lg">
            Today, hundreds of teams — from startups to large agencies to construction firms — trust ProjectAccel to manage their day-to-day work. Whether launching a new product, building a home, or running a marketing campaign, they rely on us to keep projects moving.
          </p>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="text-center animate-fade-in-up stagger-5">
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Join Us
        </h2>
        <p className="mb-6 text-gray-300 text-lg">We're growing and always looking for great people to join our team.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a href="/careers" className="bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-3 px-8 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-lg text-base">Explore Careers</a>
          <a href="/start-free-trial" className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-base">Start Free Trial</a>
          <a href="/contact" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-base">Talk to Sales</a>
        </div>
      </section>

      {/* Culture/Team Section */}
      {/* <section className="max-w-4xl mx-auto animate-fade-in-up stagger-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Culture</h3>
        <p className="text-lg text-gray-300 mb-8">We believe in human connections first. Whether it’s inside our office or on a customer support call, we aim to make every interaction thoughtful, helpful, and real.</p>
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=600&h=300&fit=crop"
            alt="ProjectAccel Team"
            className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
            style={{ maxHeight: 300 }}
          />
        </div>
      </section> */}
    </div>
  );
}
