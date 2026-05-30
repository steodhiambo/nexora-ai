"use client";

import {
  Mic,
  Headphones,
  LineChart,
  Workflow,
  Building2,
  HeadphonesIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";

const capabilities = [
  {
    icon: Mic,
    title: "AI Voice Agents",
    description: "Natural-sounding voice agents that handle inbound and outbound calls with human-like conversation.",
    gradient: "from-blue-600 to-blue-400",
    glow: "bg-blue-500/10",
  },
  {
    icon: Headphones,
    title: "AI Sales Assistants",
    description: "Intelligent sales copilots that guide reps through objections, pricing, and closing in real-time.",
    gradient: "from-purple-600 to-purple-400",
    glow: "bg-purple-500/10",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Data-driven forecasting that identifies trends, predicts lead scores, and optimizes campaign spend.",
    gradient: "from-emerald-600 to-emerald-400",
    glow: "bg-emerald-500/10",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Visual builders and custom triggers that connect every tool in your stack without code.",
    gradient: "from-amber-600 to-amber-400",
    glow: "bg-amber-500/10",
  },
  {
    icon: Building2,
    title: "Internal Operations AI",
    description: "Automate HR, IT, finance, and compliance workflows to run your business more efficiently.",
    gradient: "from-rose-600 to-rose-400",
    glow: "bg-rose-500/10",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support AI",
    description: "Multi-channel support automation that resolves 80% of inquiries without human intervention.",
    gradient: "from-cyan-600 to-cyan-400",
    glow: "bg-cyan-500/10",
  },
];

export function FutureCapabilities() {
  return (
    <section id="future" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary-900" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeader
          badge="The Future of Business Automation"
          title="Beyond Today's Automation"
          description="Next-generation AI capabilities that will define how businesses operate in the coming years."
          className="text-white"
          badge={
            <span className="inline-flex items-center rounded-full border border-primary-300/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-200 mb-6">
              The Future of Business Automation
            </span>
          }
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`absolute -inset-2 ${cap.glow} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`w-12 h-12 bg-gradient-to-br ${cap.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                    <cap.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {cap.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
