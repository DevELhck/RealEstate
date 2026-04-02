import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-14 px-6 md:px-20 lg:px-32">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* BRAND */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            RealEstate<span className="text-blue-500">.</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            We help you find the perfect home that fits your lifestyle and dreams.
            Trusted by clients for delivering excellence in real estate solutions.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#Header" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Lagos, Nigeria</li>
            <li>📞 +234 123 456 7890</li>
            <li>📧 contact@realestate.com</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RealEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;