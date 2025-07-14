// import React from 'react';

// function Footer() {
//   const footerSections = [
//     {
//       title: "Product",
//       links: [
//         { name: "Features", href: "/features" },
//         { name: "Pricing", href: "/pricing" },
//         { name: "Use Cases", href: "/use-cases" },
//         { name: "Integrations", href: "/integrations" },
//       ]
//     },
//     {
//       title: "Company",
//       links: [
//         { name: "About", href: "/about" },
//         { name: "Blog", href: "/blog" },
//         { name: "Careers", href: "/careers" },
//       ]
//     },
//     {
//       title: "Support",
//       links: [
//          { name: "Contact Us", href: "/contact" },
//         { name: "Privacy Policy", href: "/privacy" },
//         { name: "Terms of Service", href: "/terms" },
//         { name: "Security", href: "/security" },
//       ]
//     }
//   ];

//   const socialLinks = [
//     { name: "Twitter", icon: "🐦", href: "#" },
//     { name: "LinkedIn", icon: "💼", href: "#" },
//     { name: "Facebook", icon: "📘", href: "#" },
//     { name: "YouTube", icon: "📺", href: "#" },
//     { name: "GitHub", icon: "🐙", href: "#" }
//   ];

//   return (
//     <footer className="bg-black border-t border-white/10 mt-20 text-white">
//       <div className="container mx-auto px-4 py-16">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">P</span>
//               </div>
//               <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 ProjectAccel
//               </div>
//             </div>

//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Empowering teams worldwide to deliver exceptional projects with AI-powered insights, 
//               seamless collaboration, and enterprise-grade security.
//             </p>

//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-transform transform hover:scale-110"
//                   title={social.name}
//                 >
//                   <span className="text-lg">{social.icon}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Footer Links */}
//           {footerSections.map((section, index) => (
//             <div key={index}>
//               <h3 className="text-white font-semibold mb-4">{section.title}</h3>
//               <ul className="space-y-3">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <a
//                       href={link.href}
//                       className="text-gray-400 hover:text-white transition-colors duration-300"
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Newsletter Signup */}
//         <div className="bg-white/5 p-8 rounded-xl mb-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
//                 Stay in the Loop
//               </h3>
//               <p className="text-gray-400">
//                 Get the latest updates, tips, and insights delivered to your inbox.
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white"
//               />
//               <button className="bg-gradient-to-r from-white to-gray-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="text-gray-500 text-sm">
//               &copy; {new Date().getFullYear()} ProjectAccel. All rights reserved.
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Use Cases", href: "/use-cases" },
        // { name: "Integrations", href: "/integrations" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
      ]
    },
    {
      title: "Support",
      links: [
        // { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
      ]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />,
      href: "https://www.linkedin.com",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />,
      href: "https://www.twitter.com",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />,
      href: "https://www.youtube.com",
    },
  ];

  return (
    <footer className="bg-black border-t border-white/10 mt-20 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ProjectAccel
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering teams worldwide to deliver exceptional projects with AI-powered insights, 
              seamless collaboration, and enterprise-grade security.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 p-8 rounded-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                Stay in the Loop
              </h3>
              <p className="text-gray-400">
                Get the latest updates, tips, and insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white"
              />
              <button className="bg-gradient-to-r from-white to-gray-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ProjectAccel. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
