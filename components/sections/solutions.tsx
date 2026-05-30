"use client";

import {
  Target,
  Bot,
  MessageCircle,
  GitBranch,
  CalendarCheck,
  Workflow,
  Cpu,
  Pipelines,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";

const solutions = [
  {
    icon: Target,
    title: "Lead Generation Systems",
    description: "AI-powered systems that identify, qualify, and capture high-intent leads on autopilot.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that engage visitors 24/7 and convert them into leads.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "Automated WhatsApp campaigns, responses, and follow-ups at scale.",
  },
  {
    icon: GitBranch,
    title: "CRM Automation",
    description: "End-to-end CRM workflows that eliminate manual data entry and follow-up tasks.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking Systems",
    description: "Smart scheduling that syncs with your calendar and books meetings automatically.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Custom automation workflows that streamline your entire operation.",
  },
  {
    icon: Cpu,
    title: "AI Agents",
    description: "Autonomous AI agents that handle complex tasks and decision-making processes.",
  },
  {
    icon: Pipelines,
    title: "Sales Pipeline Automation",
    description: "Automated pipeline management from lead capture to closed deal.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-white">
      <Container>
        <SectionHeader
          badge="Our Solutions"
          title="Enterprise-Grade Automation Systems"
          description="Compatible with every major CRM and business tool. Deploy in days, not months."
        />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <div className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                    <solution.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {solution.description}
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
