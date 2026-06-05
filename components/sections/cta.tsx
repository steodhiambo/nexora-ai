"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Mail, ArrowRight, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready To Automate <br />
              <span className="text-accent">Growth?</span>
            </h2>
            <p className="mt-6 text-lg text-primary-100 leading-relaxed max-w-md">
              Book a free strategy session and discover how AI automation can transform your business operations.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full sm:w-auto bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                <Calendar className="w-5 h-5" />
                Book Your Free Strategy Session
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-all text-sm font-medium border border-green-400/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="mailto:hello@nexora.ai"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all text-sm font-medium border border-white/20"
                >
                  <Mail className="w-4 h-4" />
                  hello@nexora.ai
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready To Automate <br />
              <span className="text-accent">Growth?</span>
            </h2>
            <p className="mt-6 text-lg text-primary-100 leading-relaxed max-w-md">
              Book a free strategy session and discover how AI automation can transform your business operations.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full sm:w-auto bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                <Calendar className="w-5 h-5" />
                Book Your Free Strategy Session
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-all text-sm font-medium border border-green-400/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="mailto:hello@nexora.ai"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all text-sm font-medium border border-white/20"
                >
                  <Mail className="w-4 h-4" />
                  hello@nexora.ai
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Thank You!
                </h3>
                <p className="text-primary-100">
                  We&apos;ll be in touch within 24 hours to schedule your strategy session.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="How can we help?"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-white text-primary-600 hover:bg-primary-50"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
