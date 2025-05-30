import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    {
      title: "Company",
      links: ["About Us", "Team", "Careers", "Press", "Contact Us"]
    },
    {
      title: "Services",
      links: ["Blockchain Strategy", "Smart Contracts", "Tokenization", "Security Audits", "Enterprise Integration"]
    },
    {
      title: "Resources",
      links: ["Blog", "Whitepapers", "Case Studies", "Industry Reports", "Blockchain 101"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Disclaimer", "Cookies Policy"]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
  <img
    src="https://i.imgur.com/iAalTAa.png" // make sure this is the direct image URL
    alt="Company Logo"
    className="h-10 w-auto mr-2"
  />
  <span className="ml-2 text-xl font-bold"></span>
</div>
            <p className="text-slate-300 mb-6 max-w-md">
              Industry-leading blockchain consulting services for enterprises and startups. We guide your blockchain journey from strategy to implementation.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'GitHub', 'Medium'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label={platform}
                >
                  <span className="text-xs">{platform.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
          
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-slate-300 hover:text-teal-400 transition-colors flex items-center"
                    >
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Alba Partners. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-teal-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};