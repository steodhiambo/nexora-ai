"use client";

import { Zap, Filter, TrendingUp, Clock, Smile, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";

const benefits = [
  {
    icon: Zap,
    title: "Faster Response Times",
    description: "AI-powered instant responses ensure no lead waits more than seconds.",
    stat: "< 3s",
    statLabel: "Avg. response",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Filter,
    title: "More Qualified Leads",
    description: "Smart qualification filters ensure your sales team talks to the right prospects.",
    stat: "4x",
    statLabel: "More qualified",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Increased Conversions",
    description: "Automated follow-ups and timely engagement dramatically improve close rates.",
    stat: "73%",
    statLabel: "Higher conversion",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: Clock,
    title: "Reduced Manual Work",
    description: "Eliminate repetitive tasks and free your team to focus on revenue-generating activities.",
    stat: "20+",
    statLabel: "Hours saved/week",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Smile,
    title: "Better Customer Experience",
    description: "Consistent, personalized communication at every touchpoint builds trust and loyalty.",
    stat: "92%",
    statLabel: "Satisfaction rate",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Layers,
    title: "Scalable Systems",
    description: "Our automation grows with your business, handling increased volume without extra headcount.",
    stat: "10x",
    statLabel: "Capacity scaling",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
];

export function WhyNexora() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-white">
      <Container>
        <SectionHeader
          badge="Why Nexora AI"
          title="Results That Speak For Themselves"
          description="We don't just build automation — we build growth engines that deliver measurable outcomes."
        />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="group relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 ${benefit.bgColor} rounded-xl flex items-center justify-center`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <span className="text-3xl font-bold text-primary-500">{benefit.stat}</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {benefit.description}
                </p>
                <span className="text-xs font-medium text-slate-400">
                  {benefit.statLabel}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
