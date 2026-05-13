'use client';

import { motion } from 'framer-motion';
import { Lock, Check } from 'lucide-react';

const achievements = [
  { icon: '🔥', name: 'On Fire', description: '7 day streak', unlocked: true },
  { icon: '🚀', name: 'First Steps', description: 'Complete first lesson', unlocked: true },
  { icon: '💯', name: 'Perfect Score', description: 'Score 100% on a quiz', unlocked: false },
  { icon: '🏆', name: 'Champion', description: 'Reach top 10 leaderboard', unlocked: false },
  { icon: '⭐', name: 'Rising Star', description: 'Earn 10K XP', unlocked: true },
  { icon: '🎓', name: 'Scholar', description: 'Complete course', unlocked: false },
  { icon: '🌟', name: 'Legendary', description: 'Earn 100K XP', unlocked: false },
  { icon: '👑', name: 'Master', description: 'Complete all courses', unlocked: false },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export function AchievementsSection() {
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
            Unlock Achievements
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Earn badges and unlock exclusive achievements as you progress
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`glass rounded-2xl p-4 text-center transition-all duration-300 ${
                achievement.unlocked
                  ? 'hover:glow-purple'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <h3 className="font-bold text-sm mb-1">{achievement.name}</h3>
              <p className="text-xs text-white/60 mb-3">{achievement.description}</p>
              {achievement.unlocked ? (
                <div className="flex items-center justify-center space-x-1 text-neon-purple">
                  <Check size={14} />
                  <span className="text-xs font-semibold">Unlocked</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-1 text-white/40">
                  <Lock size={14} />
                  <span className="text-xs">Locked</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
