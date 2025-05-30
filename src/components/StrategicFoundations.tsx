import React from 'react';
import { Network, Building2, Grid, Cpu } from 'lucide-react';

export const StrategicFoundations: React.FC = () => {
  const foundations = [
    {
      icon: <Network className="w-12 h-12 text-teal-600" />,
      title: "Institutional Innovation Partner",
      description: "We embed alongside industry leaders to translate breakthrough technologies into enduring competitive advantage."
    },
    {
      icon: <Building2 className="w-12 h-12 text-teal-600" />,
      title: "Shape Regulatory Landscape",
      description: "We work with regulators to shape frameworks that enable safe innovation. We help institutions de-risk emerging technologies while setting new standards for governance and transparency."
    },
    {
      icon: <Grid className="w-12 h-12 text-teal-600" />,
      title: "Build Core Infrastructure",
      description: "We design and integrate identity, trust, orchestration, and interoperability layers, enabling secure, scalable deployment of agentic, AI, and blockchain systems."
    },
    {
      icon: <Cpu className="w-12 h-12 text-teal-600" />,
      title: "Reframe AI as Strategic Enabler",
      description: "We don't just implement AI we redesign how institutions operate. Our agentic platforms automate trust, unlock new value chains, and drive scalable change."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4">
            Strategic Foundations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Strategic Foundations of albaX</h2>
          <p className="text-lg text-slate-600">
            Our approach combines deep technical expertise with strategic insight to drive institutional transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {foundations.map((foundation, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-slate-50 rounded-lg w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors duration-300">
                {foundation.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{foundation.title}</h3>
              <p className="text-slate-600">{foundation.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-teal-50 rounded-xl p-8 border border-teal-100">
          <p className="text-xl md:text-2xl text-slate-900 font-bold text-center max-w-4xl mx-auto">
            albaX enables institutions to stay ahead of disruption, integrating emerging technologies, shaping regulation, and building the infrastructure required to scale intelligently and compete sustainably.
          </p>
        </div>
      </div>
    </section>
  );
};