import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  industry: string;
  summary: string;
  challenges: string[];
  solution: string;
  results: string[];
  image: string;
}

export const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "A leading regulated exchange & crypto-native investment firm",
      industry: "Financial Services",
      summary: "We designed and delivered secure threshold cryptography and Ripple native infrastructure for two institutional clients, enabling independent custody, full node operations, and advanced development on the XRP Ledger.",
      challenges: [
        "Enterprise grade key custody without compromising control",
        "Full node infrastructure for development, monitoring, and custom applications",
        "A sandbox to experiment with emerging Ripple features, such as on chain governance and interoperability"
      ],
      solution: "We developed custom threshold cryptography libraries tailored specifically for Ripple. These libraries enable clients to:",
      results: [
        "Distribute private key authority across multiple parties or systems",
        "Sign XRP transactions securely without ever fully reconstructing the key",
        "Achieve custody and compliance standards required by exchanges and institutional players"
      ],
image: "https://i.imgur.com/N5A6DpV.jpg"
},
{
      id: 2,
      title: "Trustless Interoperability Layer for Cross-Chain Finance",
      industry: "Financial Services",
      summary: "We developed a scalable, trustless interoperability layer enabling secure asset movement between Bitcoin, Ethereum, and other leading chains, using advanced threshold cryptography to eliminate reliance on centralised custodians or multisig solutions.",
      challenges: [
        "A secure bridging mechanism without compromising private key custody",
        "Support for Bitcoin Ethereum transfers, with extensibility to additional chains",
        "Enterprise grade resilience with cryptographic guarantees"
      ],
      solution: "We built a custom interoperability protocol featuring:",
      results: [
        "Threshold signing across multiple chains, ensuring no single point of compromise",
        "Atomic movement of assets using smart contract based coordination",
        "Integration with internal custody workflows and compliance tools"
      ],
      image: "https://images.pexels.com/photos/7876439/pexels-photo-7876439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Custom Agent Based Systems for Trade Automation",
      industry: "Crypto native R&D firm",
      summary: "We engineered a custom multi agent system using LangGraph and Model Context Protocol (MCP) to simulate mempool behaviour, automate trade logic, and enable intelligent agent orchestration in dynamic blockchain environments.",
      challenges: [
        "Automate trade strategies across volatile market conditions",
        "Simulate mempool level behaviour for stress testing and latency modelling",
        "Develop a framework for collaborating AI agents in a blockchain integrated environment",
      ],
      solution: "We delivered a tailored system featuring:",
      results: [
        "LangGraph powered agent architecture for modular trade behaviours",
        "Real time mempool simulation tools with configurable latency and ordering models",
        "Integration with MCP to coordinate context aware decision making across agents",
        "As a result of the engagement, we deployed a fully operational agent based trade automation layer, empowering the client to execute and iterate complex strategies with precision. The system enabled mempool level testing for edge cases, offering granular visibility into transaction dynamics and latency effects. Beyond immediate functionality, the solution laid the groundwork for AI enhanced, multi agent blockchain tooling, combining AI-native frameworks with on chain execution logic."
      ],
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [activeCase, setActiveCase] = useState<CaseStudy>(caseStudies[0]);

  return (
    <section id="case-studies" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Real-World Blockchain Impact</h2>
          <p className="text-lg text-slate-600">
            Explore how our blockchain solutions have transformed businesses across industries, delivering measurable results and competitive advantages.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              className={`p-6 text-left rounded-lg transition-all duration-300 ${
                activeCase.id === study.id
                  ? 'bg-slate-800 text-white'
                  : 'bg-white hover:bg-slate-50'
              }`}
              onClick={() => setActiveCase(study)}
            >
              <h3 className={`text-xl font-semibold mb-2 ${
                activeCase.id === study.id ? 'text-white' : 'text-slate-800'
              }`}>
                {study.title}
              </h3>
              <p className={`${
                activeCase.id === study.id ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {study.industry}
              </p>
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-4">
                {activeCase.industry}
              </div>
              <h3 className="text-2xl font-bold mb-4">{activeCase.title}</h3>
              <p className="text-slate-600 mb-6">{activeCase.summary}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                <ul className="space-y-2">
                  {activeCase.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-red-100 rounded-full p-1 mt-1 mr-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
                <p className="text-slate-700">{activeCase.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Results Delivered</h4>
                <ul className="space-y-2">
                  {activeCase.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mt-1 mr-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <button className="flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors">
                  Read full case study <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="h-full">
              <img 
                src={activeCase.image} 
                alt={activeCase.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};