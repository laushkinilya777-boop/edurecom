'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const floatingElements = [
  { delay: 0, x: '10%', y: '20%', size: 'w-64 h-64', color: 'from-neon-purple/20 to-transparent' },
  { delay: 0.2, x: '80%', y: '60%', size: 'w-96 h-96', color: 'from-neon-blue/20 to-transparent' },
  { delay: 0.4, x: '70%', y: '10%', size: 'w-80 h-80', color: 'from-neon-cyan/20 to-transparent' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: element.delay }}
          className={`absolute ${element.size} rounded-full bg-gradient-to-br ${element.color} blur-3xl pointer-events-none`}
          style={{
            left: element.x,
            top: element.y,
          }}
        />
      ))}

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-[0.02]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="badge badge-blue text-center">
              ✨ Welcome to the Future of Learning
            </div>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Learn to Code</span>
            <br />
            <span className="text-white">with Gamification</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join thousands of learners earning XP, unlocking achievements, and climbing the leaderboard. 
            Modern education designed for the modern learner.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/dashboard" className="btn-primary text-lg flex items-center space-x-2">
              <span>Start Learning</span>
              <ArrowRight size={20} />
            </Link>
            <button className="btn-secondary text-lg flex items-center space-x-2">
              <Play size={20} />
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: 'Active Students', value: '50K+' },
              { label: 'Courses', value: '200+' },
              { label: 'Lessons', value: '5K+' },
              { label: 'Achievement Rate', value: '94%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
