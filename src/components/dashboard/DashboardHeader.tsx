'use client';

import { motion } from 'framer-motion';
import { Award, Flame, Zap, Target } from 'lucide-react';

export function DashboardHeader() {
  return (
    <div className="pt-24 pb-8 lg:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-2">
          Welcome back, <span className="gradient-text">Alex</span>
        </h1>
        <p className="text-white/60 text-lg">Keep pushing your limits. Your learning journey continues! 🚀</p>
      </motion.div>
    </div>
  );
}
