import React from 'react';
import { ArrowRight, Shield, Database, Lock } from 'lucide-react';
import { Button } from './ui/Button';
import logo from '/Alba_Partners_logo.png';

export const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-100/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
            <span className="mr-1">Autonomous by design. Institutional-grade. Embedded from day one.</span>
           
          </div>   
<h1 className="mb-6">
  <img src={logo} alt="albaX logo" className="mx-auto h-16 md:h-20" />
</h1>     
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            We are your Institutional Innovation Partner that applies AI and Blockchain technologies to drive enterprise transformation. 
            We operate at the intersection of technology, regulation, and market evolution, helping clients unlock competitive advantage through AI innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" size="lg">
              Book a Discovery Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <Shield className="w-10 h-10 text-teal-600" />,
              title: "Artifical Intelligence",
              description: "We design and deploy AI systems that are explainable, auditable, and built for institutional environments. Whether powering autonomous finance, compliance automation, or data-driven insight, we create AI infrastructure that’s explainable, controlled, and ready for mission-critical use."
            },
            {
              icon: <Database className="w-10 h-10 text-blue-600" />,
              title: "Agentic Systems",
              description: "We build autonomous systems where intelligent agents act independently on behalf of institutions, executing governance, managing risk, and driving coordination in real time. These agentic protocols replace manual workflows with programmable logic that adapts to live data and policy thresholds.."
            },
            {
              icon: <Lock className="w-10 h-10 text-amber-600" />,
              title: "Blockchain",
              description: "We engineer foundational blockchain systems that enable secure custody, cross-chain interoperability, and programmable trust. Leveraging threshold cryptography, decentralised identity, and protocol-native orchestration, we build infrastructure that eliminates single points of failure and scales across networks."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-slate-50 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};