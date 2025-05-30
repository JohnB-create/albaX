import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    services: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, services: [...formData.services, value] });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(service => service !== value)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Replace this with actual email sending (e.g., via backend API or service like EmailJS)
    // For example:
    // fetch('/api/sendEmail', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...formData, to: 'hello@albax.me' })
    // });
    alert('Thanks for your message! We\'ll be in touch soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      services: []
    });
  };

  const services = {
    'AI Integration & Innovation': [
      'AI Strategy & Assessment',
      'AI Use Case Development',
      'AI-Driven Automation'
    ],
    'Agentic Systems & Orchestration': [
      'Agentic System Design & Architecture',
      'Orchestration & Interoperability',
      'Trust & Identity Solutions'
    ],
    'Blockchain Solutions': [
      'Smart Contract Development',
      'Tokenization & Digital Assets',
      'Security, Auditing & Compliance'
    ]
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#5EF1A6] text-black text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#000000]">
            Start Your AI, Agentic & Blockchain Transformation
          </h2>
          <p className="text-lg text-slate-600">
            Ready to harness the power of AI, agentic systems, and blockchain to transform your business? Contact us for a free consultation to discuss your unique needs and discover how we can build a tailored solution that unlocks your potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#000000]">Tell us about your project</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#000000] mb-2">
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#000000] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#000000] mb-2">
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#000000] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#000000] mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#000000] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#000000] mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#000000] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#000000] mb-2">
                  Services you’re exploring
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category}>
                      <p className="font-semibold text-slate-800 mb-2">{category}</p>
                      {items.map((service, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <input
                            id={`service-${category}-${index}`}
                            name="services"
                            type="checkbox"
                            value={service}
                            onChange={handleCheckboxChange}
                            checked={formData.services.includes(service)}
                            className="h-4 w-4 text-[#3A86FF] focus:ring-[#3A86FF] border-slate-300 rounded"
                          />
                          <label htmlFor={`service-${category}-${index}`} className="ml-2 text-sm text-slate-700">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#000000] mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#3A86FF] focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your project, your goals, or any specific questions."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full md:w-auto bg-[#5EF1A6] text-black hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-black text-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6 text-[#5EF1A6]">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="bg-[#5EF1A6] rounded-full p-3 mr-4">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Email</p>
                  <p className="font-medium">hello@albax.me</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-[#5EF1A6] rounded-full p-3 mr-4">
                  <PhoneCall className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Phone</p>
                  <p className="font-medium">+971 4319 9200</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-[#5EF1A6] rounded-full p-3 mr-4">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Location</p>
                  <p className="font-medium">Level 41, Emirates Towers, Sheikh Zayed Road</p>
                  <p className="font-medium">Dubai</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-[#5EF1A6] rounded-full p-3 mr-4">
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Working Hours</p>
                  <p className="font-medium">Sunday - Thursday: 8am - 6pm</p>
                  <p className="font-medium">Friday: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};