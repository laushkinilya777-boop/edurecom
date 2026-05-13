'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-cyan/20 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Ready to Transform Your Learning?</span>
          </h2>

          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already earning XP, unlocking achievements, and climbing the leaderboard.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/dashboard" className="btn-primary text-lg flex items-center space-x-2">
              <span>Start Free Today</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/courses" className="btn-secondary text-lg">
              Explore Courses
            </Link>
          </motion.div>

          <p className="text-sm text-white/50 mt-6">
            No credit card required • Immediate access • 200+ courses
          </p>
        </motion.div>
      </div>
    </section>
  );
}
