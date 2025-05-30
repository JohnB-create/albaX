import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Carol Jacobs",
      position: "Growth Architect",
      bio: "Experienced management consultant, and entrepreneur, and investor with over a decade of leadership across global consulting and financial services. Carol is Co-Founder and CEO of Alba Partners, a boutique consultancy delivering transformation across the UK and GCC. Her career spans senior roles at Accenture in the UK and Middle East, with a focus on change management, human capital, and digital transformation. She began her career at Goldman Sachs and has since founded multiple ventures, combining strategic insight with a passion for building impactful, talent-led organisations.",
      image: "https://i.imgur.com/Rq36e0a.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/carol-jacobs88/",
      }
    },
    {
      name: "Prashanth Irudayaraj",
      position: "Visionary Lead",
      bio: "Seasoned AI and Web3 leader with 20+ years of experience driving 0-1 innovation across R&D, and academia (Georgia Tech), and industry (Tesla). Proven track record in scaling ventures globally, with deep expertise in North America, and APAC, and MENA. Known for building diverse, high performing teams and forging strategic partnerships to deliver impactful, open-source-driven solutions in dynamic markets.",
      image: "https://i.imgur.com/3s2dQQ8.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/pirudayaraj/",
      }
    },
    {
      name: "John Hall",
      position: "Growth Architect",
      bio: "Board advisor, investor, and senior executive with over 25 years' experience across banking, consulting, and AI-led innovation. John has held leadership roles at Citi, ABN AMRO, Arthur Andersen, Deloitte, and KPMG, where he served as Global Head of Banking Analytics. He has since co-founded and scaled ventures including Core Consultants and Xander Talent, delivering digital and data transformation across financial services, and the public sector, and high-growth tech. Known for building high-performing teams, and driving strategic change, and advising boards on data, AI, and growth agendas.",
      image: "https://i.imgur.com/wzrLSEb.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/johnhall01/",
      }
    }
  ];

  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4">
            Our Experts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Meet Our Leadership Team</h2>
          <p className="text-lg text-slate-600">
            Our leadership team brings decades of experience applying cutting-edge technologies to complex transformations. With deep expertise in AI, agentic systems, and blockchain, they combine technical acumen with strategic insight to solve your most pressing challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group"
            >
            <div className="relative h-64 overflow-hidden">
  <img 
    src={member.image} 
    alt={member.name}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-teal-600 mb-4">{member.position}</p>
                <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-2">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                      <Linkedin className="w-4 h-4 text-slate-700" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                      <Twitter className="w-4 h-4 text-slate-700" />
                    </a>
                  )}
                  {member.social.website && (
                    <a href={member.social.website} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                      <Globe className="w-4 h-4 text-slate-700" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};