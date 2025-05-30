import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What industries benefit most from blockchain consulting?",
      answer: "While blockchain can benefit many industries, we see the highest impact in financial services, supply chain, healthcare, real estate, and government services. These sectors particularly benefit from blockchain's ability to provide transparency, traceability, and security in multi-party transactions."
    },
    {
      question: "How long does a typical blockchain implementation take?",
      answer: "Implementation timelines vary based on complexity, but typically: Proof of concept (4-8 weeks), Minimum viable product (2-4 months), Enterprise-ready solution (6-12 months). Our phased approach ensures you see results quickly while building toward a robust solution."
    },
    {
      question: "Do you work with specific blockchain platforms?",
      answer: "We're platform-agnostic and work across all major blockchain technologies including Ethereum, Hyperledger Fabric, Corda, Solana, Polygon, and others. Our recommendations are based on your specific requirements, not vendor relationships. We'll help you select the optimal technology for your use case."
    },
    {
      question: "How do you address regulatory compliance concerns?",
      answer: "We take a compliance-first approach, incorporating regulatory considerations from day one. Our team includes regulatory specialists who work alongside our technical experts to ensure solutions meet requirements across jurisdictions. We provide comprehensive documentation and audit trails designed specifically for regulatory review."
    },
    {
      question: "What's your approach to blockchain security?",
      answer: "Security is foundational to our methodology. We implement multiple security layers including formal verification of smart contracts, comprehensive penetration testing, cryptographic reviews, and governance controls. All our solutions undergo rigorous third-party security audits before production deployment."
    },
    {
      question: "How do you measure ROI for blockchain projects?",
      answer: "We establish clear metrics at project inception, typically focusing on: Process efficiency improvements, Cost reduction, Revenue opportunities, Risk mitigation value, and Customer/partner experience enhancement. Our analytics framework provides ongoing measurement against these KPIs throughout implementation and beyond."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-sm font-medium mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Common Questions About Blockchain Consulting</h2>
          <p className="text-lg text-slate-600">
            Get answers to the most common questions about blockchain implementation and our consulting process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-teal-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-600" />
                )}
              </button>
              <div 
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'max-h-96 pb-6 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};