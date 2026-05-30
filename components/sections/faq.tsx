"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Most implementations are live within 2-4 weeks. Simple chatbot or WhatsApp automation can be deployed in under a week. Complex multi-system integrations typically take 4-6 weeks. We provide a detailed timeline during our discovery phase.",
  },
  {
    question: "Which industries do you support?",
    answer:
      "We work with education, real estate, healthcare, recruitment, travel & hospitality, professional services, financial services, and e-commerce. Our systems are adaptable to virtually any industry that relies on customer communication and lead management.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Not at all. We handle all the technical implementation, integration, and configuration. We provide training and ongoing support to ensure your team can manage and optimize the systems. Think of us as your automation department.",
  },
  {
    question: "Can you integrate with my CRM?",
    answer:
      "Yes. We integrate with all major CRMs including Salesforce, HubSpot, Zoho, Pipedrive, Monday.com, and many others. We also work with custom or proprietary systems through our flexible API integration layer.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Our clients typically see 3-4x more qualified leads, 70%+ reduction in response times, 20+ hours saved per week, and conversion rate improvements of 30-70%. Results vary by industry and implementation scope.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-surface">
      <Container>
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Got Questions? We've Got Answers."
          description="Everything you need to know about working with Nexora AI."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
              >
                <span className="text-base font-semibold text-secondary pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
