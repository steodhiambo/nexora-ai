"use client";

import { motion } from "framer-motion";
import { Search, PenLine, Cog, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Audit",
    description: "We analyze your current sales process, identify bottlenecks, and map out automation opportunities.",
  },
  {
    icon: PenLine,
    number: "02",
    title: "Strategy & Design",
    description: "We design a custom automation blueprint tailored to your business goals and existing tools.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Build & Automation",
    description: "Our team builds and deploys your AI systems, integrating seamlessly with your workflows.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale & Optimize",
    description: "We monitor, refine, and scale your systems to ensure maximum performance and ROI.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white">
      <Container>
        <SectionHeader
          badge="How It Works"
          title="From Discovery to Growth in 4 Steps"
          description="A proven methodology that delivers predictable, measurable results."
        />
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center lg:text-left lg:items-start"
              >
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center border border-primary-100">
                    <step.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
