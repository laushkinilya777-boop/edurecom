'use client';

import { motion } from 'framer-motion';
import { Zap, Award, Target, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Gamified Learning',
    description: 'Earn XP, unlock achievements, and compete with friends on the leaderboard',
  },
  {
    icon: Award,
    title: 'Badges & Streaks',
    description: 'Collect badges and maintain your daily learning streak to stay motivated',
  },
  {
    icon: Target,
    title: 'Structured Paths',
    description: 'Follow curated learning paths designed by experts in the industry',
  },
  {
    icon: Sparkles,
    title: 'Interactive Content',
    description: 'Learn through interactive lessons, quizzes, and real-world projects',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FeaturesSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 gradient-text">
            Why Choose EduRecom
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to become an expert programmer
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group glass rounded-2xl p-6 hover:glow-purple transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-purple-blue rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-purple transition-all">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
