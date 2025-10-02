import React, { useState } from "react";
import { sections } from "../functions/sections";

function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-10">
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-3 text-white">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="hover:text-green-400 cursor-pointer"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden border-b border-gray-700 pb-6">
        {sections.map((section, idx) => (
          <div key={idx} className="border-t border-gray-700">
            <button
              onClick={() => toggleSection(idx)}
              className="w-full flex justify-between items-center py-4 text-white"
            >
              <span>{section.title}</span>
              <span className="text-lg">{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <ul className="space-y-2 pl-2 pb-4 text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="hover:text-green-400 cursor-pointer"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-400 mt-6 space-y-3 md:space-y-0">
        <p>Copyright © 2025 Razer Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://gold.razer.com/legal/"
            className="hover:text-green-400"
          >
            Terms of Service
          </a>
          <a
            href="https://www.razer.com/legal/"
            className="hover:text-green-400"
          >
            Legal Terms
          </a>
          <a
            href="https://www.razer.com/legal/customer-privacy-policy"
            className="hover:text-green-400"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
