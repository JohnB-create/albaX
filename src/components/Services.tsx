import React from 'react';
import { Layers, Code, FileText, Coins, Shield, LineChart } from 'lucide-react';
import { Button } from './ui/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="bg-slate-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 mb-5">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-teal-100 rounded-full p-1 mt-0.5 mr-2">
              <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
            </div>
            <span className="text-sm text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Layers className="w-8 h-8 text-teal-600" />,
      title: "Strategy & Assessment",
      description: "Map high impact use cases and evaluate ROI potential.",
      features: [
        "Blockchain opportunity evaluation",
        "ROI & feasibility analysis",
        "Technology selection guidance (incl. XRP Ledger, RippleNet)",
        "Roadmap development for RippleNet integration, and ODL adoption, and CBDC use cases"
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-teal-600" />,
      title: "Architecture & Design",
      description: "Build scalable, secure blockchain systems.",
      features: [
        "System architecture design",
        "Scalability planning",
        "Integration strategy (e.g. RippleNet, XRPL)",
        "Technical specifications for on-chain/off-chain components"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-teal-600" />,
      title: "Smart Contracts",
      description: "Develop across Ethereum, Hyperledger, and XRP Ledger, and more.",
      features: [
        "Smart contract development",
        "Multi chain compatibility",
        "XRPL Hooks & smart contract advisory",
        "Security audits",
        "Gas/cost optimisation strategies"
      ]
    },
    {
      icon: <Coins className="w-8 h-8 text-teal-600" />,
      title: "Tokenization",
      description: "Manage stablecoins and digital assets with support for XRPL token standards",
      features: [
        "Token design & economics",
        "XRPL native token implementation",
        "Marketplace and asset issuance frameworks",
        "Custody solutions & compliance infrastructure"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Security & Risk",
      description: "Ensure compliance and security for blockchain native environments.",
      features: [
        "Vulnerability assessment",
        "Regulatory compliance (FATF, FCA, MiCA, etc.)",
        "Penetration testing",
        "Incident response planning"
      ]
    },
    {
      icon: <LineChart className="w-8 h-8 text-teal-600" />,
      title: "Cross Border Payments & Ripple Integration",
      description: "Leverage Ripple's technologies for real world impact.",
      features: [
        "RippleNet integration & API enablement",
        "On Demand Liquidity (ODL) deployment strategy",
        "CBDC solution design and Ripple CBDC platform advisory",
        "Regulatory and compliance strategy for Ripple implementations"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Comprehensive Blockchain Solutions</h2>
          <p className="text-lg text-slate-600">
           We work with leading financial and public sector organisations to engineer trusted infrastructure, redesign operating models, and build strategies that anticipate and lead the next wave of disruption.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};