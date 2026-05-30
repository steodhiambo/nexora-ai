"use client";

import {
  GraduationCap,
  Building2,
  HeartPulse,
  Briefcase,
  Plane,
  Handshake,
  Banknote,
  ShoppingBag,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";

const industries = [
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Automate student inquiries, enrollment workflows, and course recommendation systems.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "AI-powered property matching, automated follow-ups, and virtual tour scheduling.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Patient intake automation, appointment reminders, and HIPAA-compliant communication.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Briefcase,
    title: "Recruitment",
    description: "Automated candidate screening, interview scheduling, and placement tracking.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Booking automation, customer inquiry handling, and personalized travel recommendations.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Handshake,
    title: "Professional Services",
    description: "Client intake automation, billing workflows, and consultation scheduling.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Banknote,
    title: "Financial Services",
    description: "Compliant client onboarding, automated reporting, and secure document collection.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Order processing automation, abandoned cart recovery, and customer support AI.",
    gradient: "from-sky-500 to-blue-500",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32 bg-surface">
      <Container>
        <SectionHeader
          badge="Industries We Serve"
          title="Tailored Solutions For Every Sector"
          description="We adapt our automation systems to the unique workflows and compliance needs of your industry."
        />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <div className="group relative bg-white rounded-2xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`w-12 h-12 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">
                  {industry.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {industry.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
