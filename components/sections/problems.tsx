"use client";

import {
  Users,
  Clock,
  RefreshCcw,
  TrendingDown,
  Cog,
  Frown,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";

const problems = [
  {
    icon: Users,
    title: "Lost Leads",
    description: "Potential customers fall through the cracks due to slow or no response.",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Clock,
    title: "Slow Follow-Up",
    description: "Hours or days pass before prospects get a response, killing conversion chances.",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: RefreshCcw,
    title: "Manual Processes",
    description: "Repetitive tasks consume your team's time instead of high-value work.",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: TrendingDown,
    title: "Low Conversion Rates",
    description: "Without automation, most leads never make it through your funnel.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Cog,
    title: "Inefficient Operations",
    description: "Disconnected tools and workflows create bottlenecks and data silos.",
    color: "text-sky-500",
    bgColor: "bg-sky-50",
  },
  {
    icon: Frown,
    title: "Poor Customer Experience",
    description: "Slow, inconsistent service damages your brand and drives customers away.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

export function Problems() {
  return (
    <section id="problems" className="py-24 sm:py-32 bg-surface">
      <Container>
        <SectionHeader
          badge="Problems We Solve"
          title="Growing Pains Holding Your Business Back"
          description="You're not alone. These are the most common challenges we help businesses overcome every day."
        />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="group relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`w-12 h-12 ${problem.bgColor} rounded-xl flex items-center justify-center mb-5`}>
                  <problem.icon className={`w-6 h-6 ${problem.color}`} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
