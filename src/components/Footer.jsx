// import React from "react";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const footerSections = [
//     {
//       title: "Product",
//       links: [
//         { name: "Features", href: "/features" },
//         { name: "Pricing", href: "/pricing" },
//         { name: "Use Cases", href: "/use-cases" },
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
//         { name: "Privacy Policy", href: "/privacy" },
//         { name: "Terms of Service", href: "/terms" },
//         { name: "Security", href: "/security" },
//       ]
//     }
//   ];

//   const socialLinks = [
//     {
//       name: "LinkedIn",
//       icon: <FaLinkedin size={20} />,
//       href: "https://www.linkedin.com",
//     },
//     {
//       name: "Twitter",
//       icon: <FaTwitter  size={20} />,
//       href: "https://www.twitter.com",
//     },
//     {
//       name: "YouTube",
//       icon: <FaYoutube size={20} />,
//       href: "https://www.youtube.com",
//     },
//   ];

//   return (
//     <footer className="bg-[#0c0c0c] text-white px-6 lg:px-20 py-16">
//       {/* Top section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
//         {/* Newsletter */}
//         <div>
//           <h2 className="text-xl md:text-2xl font-semibold mb-4">
//             Stay in the Loop
//           </h2>
//           <p>
//             Get the latest updates, tips, and insights delivered to your inbox.
//           </p>

//           <div className="flex items-center bg-[#1a1a1a] rounded-full overflow-hidden max-w-md mt-4">
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               className="flex-1 px-4 py-3 text-sm bg-transparent text-white outline-none"
//             />
//             <button className="bg-gradient-to-r from-white to-gray-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Product and Company Links */}
//         <div className="flex justify-between">
//           {footerSections.slice(0, 2).map((section, index) => (
//             <div key={index}>
//               <h3 className="font-semibold mb-4">{section.title}</h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <Link
//                       to={link.href}
//                       className="hover:text-white transition-colors"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Company Info */}
//         <div>
//           <div className="flex items-center space-x-3 mb-6">
//             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-300 text-gray-800 flex items-center justify-center">
//               <span className="text-white font-bold text-lg">P</span>
//             </div>
//             <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               ProjectAccel
//             </div>
//           </div>

//           <p className="text-gray-400 mb-6 leading-relaxed">
//            Empowering teams to build better projects with AI, collaboration, and security.
//           </p>

//           <div className="flex gap-4">
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition hover:scale-110"
//                 title={social.name}
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//         <p className="mb-4 md:mb-0">© ProjectAccel 2025 All Right Reserved</p>
//         <div className="flex gap-6">
//           {footerSections[2].links.map((link, index) => (
//             <Link
//               key={index}
//               to={link.href}
//               className="hover:text-white transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from "react";
// import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const footerSections = [
//     {
//       title: "Product",
//       links: [
//         { name: "Features", href: "/features" },
//         { name: "Pricing", href: "/pricing" },
//         { name: "Use Cases", href: "/use-cases" },
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
//         { name: "Privacy Policy", href: "/privacy" },
//         { name: "Terms of Service", href: "/terms" },
//         { name: "Security", href: "/security" },
//       ]
//     }
//   ];

//   const socialLinks = [
//     {
//       name: "LinkedIn",
//       icon: <FaLinkedin size={20} />,
//       href: "https://www.linkedin.com",
//     },
//     {
//       name: "Twitter",
//       icon: <FaTwitter size={20} />,
//       href: "https://www.twitter.com",
//     },
//     {
//       name: "YouTube",
//       icon: <FaYoutube size={20} />,
//       href: "https://www.youtube.com",
//     },
//   ];

//   return (
//     <footer className="bg-[#0c0c0c] text-white px-6 lg:px-20 py-16">
//       {/* Top section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
//         {/* Newsletter */}
//         <div>
//           <h2 className="text-xl md:text-2xl font-semibold mb-4">
//             Stay in the Loop
//           </h2>
//           <p>
//             Get the latest updates, tips, and insights delivered to your inbox.
//           </p>

//           <div className="flex items-center bg-[#1a1a1a] rounded-full overflow-hidden max-w-md mt-4">
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               className="flex-1 px-4 py-3 text-sm bg-transparent text-white outline-none"
//             />
//             <button className="bg-gradient-to-r from-white to-gray-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Product and Company Links */}
//         <div className="flex justify-between gap-4">
//           {footerSections.slice(0, 2).map((section, index) => (
//             <div key={index}>
//               <h3 className="font-semibold mb-4">{section.title}</h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <Link 
//                       to={link.href}
//                       className="hover:text-white transition-colors"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Company Info */}
//         <div>
//           <div className="flex items-center space-x-3 mb-6">
//             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-300 text-gray-800 flex items-center justify-center">
//               <span className="text-white font-bold text-lg">P</span>
//             </div>
//             <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               ProjectAccel
//             </div>
//           </div>

//           <p className="text-gray-400 mb-6 leading-relaxed">
//            Empowering teams to build better projects <br />with AI, collaboration, and security.
//           </p>

//           <div className="flex gap-4">
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//                 title={social.name}
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//         <p className="mb-4 md:mb-0">© ProjectAccel 2025 All Right Reserved</p>
//         <div className="flex gap-6">
//           {footerSections[2].links.map((link, index) => (
//             <Link
//               key={index}
//               to={link.href}
//               className="hover:text-white transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Use Cases", href: "/use-cases" },
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
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
      ]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={20} />,
      href: "https://www.twitter.com",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={20} />,
      href: "https://www.youtube.com",
    },
  ];

  return (
    <footer className="bg-[#0c0c0c] text-white px-6 lg:px-20 py-16">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
        {/* Newsletter */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-400 text-sm">
            Get the latest updates, tips, and insights delivered to your inbox.
          </p>

          <div className="flex items-center bg-[#1a1a1a] rounded-full overflow-hidden max-w-md mt-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 text-sm bg-transparent text-white placeholder-gray-500 outline-none"
            />
            <button className="bg-gradient-to-r from-white to-gray-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Product and Company Links */}
        <div className="flex flex-wrap gap-8 md:gap-15 mt-2 ml-10">
          {footerSections.slice(0, 2).map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-m text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-300 text-gray-800 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ProjectAccel
            </div>
          </div>

          <p className="text-gray-400 mb-6 leading-relaxed text-sm">
            Empowering teams to build better projects <br />
            with AI, collaboration, and security.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© ProjectAccel 2025 All Right Reserved</p>
        <div className="flex gap-6">
          {footerSections[2].links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
