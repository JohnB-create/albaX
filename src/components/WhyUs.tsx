import React from 'react';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
      title: "Independent & Unbiased",
      description: "We choose what's best for you, not what's trending in the market or aligned with vendor partnerships."
    },
    {
      icon: <Award className="w-6 h-6 text-teal-600" />,
      title: "Enterprise-Grade Thinking",
      description: "From proof-of-concept to production, we build for scale, and security, and organisational resilience."
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      title: "Cross-Disciplinary Expertise",
      description: "Our team blends AI, agentic systems, cryptography, and industry knowledge to deliver end-to-end solutions."
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-600" />,
      title: "Global Experience",
      description: "Trusted by financial institutions, corporates, and governments worldwide to deliver mission-critical infrastructure."
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-teal-900 text-teal-400 text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Built on Trust, Engineered for the Future.</h2>
            <p className="text-lg text-slate-300 mb-8">
              We blend enterprise-grade engineering with deep industry expertise to build secure, scalable, and production-ready digital asset platforms. We partner with industries worldwide to transform operations, automate trust, and deliver systems that think, adapt, and scale seamlessly, meeting today’s demands and tomorrow’s evolution.

            </p>
          
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-slate-300">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="mb-8">
                <span className="text-5xl text-teal-400 font-bold"> Agentic Systems at Scale</span>
                <h3 className="text-xl font-semibold mt-2">Autonomous systems</h3>
                <p className="text-slate-400 mt-1">Pioneering autonomous systems that execute governance, compliance, and control without manual bottlenecks.</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl text-teal-400 font-bold">Delivered the First Threshold Cryptography on Ripple</span>
                <h3 className="text-xl font-semibold mt-2">Pioneering Ripple Innovation</h3>
                <p className="text-slate-400 mt-1">First known implementation of threshold cryptography for secure, institutional grade XRP Ledger applications.</p>
              </div>
              
              <div>
                <span className="text-5xl text-teal-400 font-bold"> AI-Native Architecture</span>
                <h3 className="text-xl font-semibold mt-2">Adaptive AI Integration</h3>
                <p className="text-slate-400 mt-1">Built for seamless system integration, enabling adaptive, trustless workflows with compliance and automation at the core—ready to scale AI-driven intelligence across your operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};