// import React, { useState } from 'react';

// export default function StartFreeTrial() {
//   const [agreed, setAgreed] = useState(false);
//   const [updates, setUpdates] = useState(true);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white px-2 py-12">
//       <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/5 rounded-2xl p-6 md:p-12 shadow-xl">
//         {/* Left: Signup Form */}
//         <div className="flex flex-col justify-center">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Start Your Free Trial</h1>
//           <p className="text-gray-300 mb-6">Join teams delivering projects on time with ProjectAccel.</p>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm mb-1 text-left">Name *</label>
//               <input type="text" className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white" placeholder="Your Name" required />
//             </div>
//             <div>
//               <label className="block text-sm mb-1 text-left">Email *</label>
//               <input type="email" className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white" placeholder="you@email.com" required />
//             </div>
//             <div>
//               <label className="block text-sm mb-1 text-left">Phone Number</label>
//               <input type="text" className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white" placeholder="+91 XXXXXXXXXX" />
//             </div>
//             <div>
//               <label className="block text-sm mb-1 text-left">Description</label>
//               <textarea className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white resize-none" placeholder="Tell us about your project or needs" rows={3}></textarea>
//             </div>
//             <div className="flex items-center gap-2 mt-2">
//               <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="accent-gray-400" required />
//               <span className="text-xs text-gray-400">I agree to the <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a>*</span>
//             </div>
//             <button type="submit" className="w-full bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-3 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-lg text-base mt-2">
//               Start Free Trial
//             </button>
//           </form>
//         </div>
//         {/* Right: Image */}
//         <div className="flex items-center justify-center">
//           <img src="https://dummyimage.com/400x400/222/fff&text=ProjectAccel+Trial" alt="ProjectAccel Free Trial" className="rounded-xl shadow-lg max-w-full max-h-96 object-contain" />
//         </div>
//       </div>
//     </div>
//   );
// } 

import React, { useState } from 'react';

export default function StartFreeTrial() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-2 py-12">
      <div className="w-full max-w-2xl mx-auto bg-white/5 rounded-2xl p-6 md:p-12 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Start Your Free Trial
        </h1>
        <p className="text-gray-300 mb-6">
          Join teams delivering projects on time with ProjectAccel.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-left">Name *</label>
            <input
              type="text"
              className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-left">Email *</label>
            <input
              type="email"
              className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-left">Phone Number</label>
            <input
              type="text"
              className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-left">Description</label>
            <textarea
              className="w-full border-b border-gray-700 bg-transparent py-2 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white resize-none"
              placeholder="Tell us about your project or needs"
              rows={3}
            ></textarea>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="accent-gray-400"
              required
            />
            <span className="text-xs text-gray-400">
              I agree to the <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a>*
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-3 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-lg text-base mt-2"
          >
            Start Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}
