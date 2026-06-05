"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Briefcase,
  HeartPulse,
  ArrowRight,
  MessageCircle,
  Bot,
  Target,
  CalendarCheck,
  Handshake,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

type WorkflowStep = {
  icon: React.ElementType;
  label: string;
};

type Workflow = {
  icon: React.ElementType;
  title: string;
  color: string;
  steps: WorkflowStep[];
};

const workflows: Workflow[] = [
  {
    icon: GraduationCap,
    title: "Education",
    color: "from-blue-500 to-cyan-500",
    steps: [
      { icon: Users, label: "Lead" },
      { icon: MessageCircle, label: "WhatsApp AI" },
      { icon: Bot, label: "Qualification" },
      { icon: Target, label: "CRM" },
      { icon: CalendarCheck, label: "Booking" },
      { icon: GraduationCap, label: "Enrollment" },
    ],
  },
  {
    icon: Building2,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-500",
    steps: [
      { icon: Users, label: "Lead" },
      { icon: Bot, label: "AI Assistant" },
      { icon: Building2, label: "Property Match" },
      { icon: Target, label: "CRM" },
      { icon: Handshake, label: "Viewing" },
      { icon: Building2, label: "Deal" },
    ],
  },
  {
    icon: Briefcase,
    title: "Recruitment",
    color: "from-violet-500 to-purple-500",
    steps: [
      { icon: Users, label: "Candidate" },
      { icon: Bot, label: "Qualification" },
      { icon: Target, label: "CRM" },
      { icon: CalendarCheck, label: "Interview" },
      { icon: Briefcase, label: "Placement" },
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    color: "from-rose-500 to-pink-500",
    steps: [
      { icon: Users, label: "Patient" },
      { icon: Bot, label: "AI Assistant" },
      { icon: CalendarCheck, label: "Appointment" },
      { icon: HeartPulse, label: "Follow-Up" },
    ],
  },
];

function WorkflowDiagram({ workflow }: { workflow: Workflow }) {
  return (
    <motion.div
      initial={{ y: 30 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:border-primary-100 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 bg-gradient-to-br ${workflow.color} rounded-xl flex items-center justify-center`}>
          <workflow.icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-secondary">{workflow.title}</h3>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {workflow.steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100 group hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200">
              <step.icon className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary-600 whitespace-nowrap">
                {step.label}
              </span>
            </div>
            {i < workflow.steps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function AutomationSystems() {
  return (
    <section id="automation" className="py-24 sm:py-32 bg-surface">
      <Container>
        <SectionHeader
          badge="Featured Automation Systems"
          title="See How Automation Works In Your Industry"
          description="End-to-end automation flows designed for real business scenarios."
        />
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {workflows.map((workflow) => (
            <WorkflowDiagram key={workflow.title} workflow={workflow} />
          ))}
        </div>
      </Container>
    </section>
  );
}
