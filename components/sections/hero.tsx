"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-4 text-white">
              <p className="text-xs font-medium opacity-80">Total Leads</p>
              <p className="text-2xl font-bold mt-1">
                2,847
              </p>
              <div className="flex items-center gap-1 mt-2 text-xs">
                <span className="text-green-300">↑ 24%</span>
                <span className="opacity-70">vs last month</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs font-medium text-slate-500">Conversion</p>
              <p className="text-xl font-bold text-secondary mt-1">
                18.4%
              </p>
              <div className="mt-3 bg-green-100 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="bg-green-500 h-2 rounded-full"
                />
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs font-medium text-slate-500">Response</p>
              <p className="text-xl font-bold text-secondary mt-1">
                2.4s
              </p>
              <p className="text-xs text-slate-400 mt-1">Avg. response</p>
            </div>

            <div className="col-span-2 bg-slate-50 rounded-xl p-4">
              <p className="text-xs font-medium text-slate-500 mb-3">Lead Flow</p>
              <div className="flex items-center gap-3">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: h }}
                    transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                    className="flex-1 bg-primary-500/20 rounded-t"
                    style={{ height: h }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-3 w-16 h-16 bg-accent/10 rounded-2xl border border-accent/20 flex items-center justify-center"
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-3 -left-3 w-20 h-20 bg-primary-500/5 rounded-2xl border border-primary-500/10 flex items-center justify-center"
        >
          <svg className="w-10 h-10 text-primary-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-600 mb-6">
              AI-Powered Growth Platform
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-secondary leading-[1.1]">
              Transform Leads Into Revenue{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent">
                With AI-Powered Growth Systems
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              We help businesses automate lead generation, customer engagement, sales workflows, and operations using intelligent AI systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="mr-2 w-5 h-5" />
                Explore Solutions
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-xs text-white font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>Trusted by <strong className="text-secondary">200+</strong> businesses</span>
            </div>
          </div>

          <div>
            <DashboardIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}
