'use client';

import { motion } from 'framer-motion';
import { Award, Lock } from 'lucide-react';

const achievements = [
  { icon: '🔥', name: 'On Fire', description: '7 day streak', unlocked: true },
  { icon: '🚀', name: 'First Steps', description: 'Complete first lesson', unlocked: true },
  { icon: '💯', name: 'Perfect Score', description: 'Score 100% on a quiz', unlocked: false },
  { icon: '🏆', name: 'Champion', description: 'Reach top 10 leaderboard', unlocked: false },
  { icon: '⭐', name: 'Rising Star', description: 'Earn 10K XP', unlocked: true },
  { icon: '🎓', name: 'Scholar', description: 'Complete a course', unlocked: true },
  { icon: '🌟', name: 'Legendary', description: 'Earn 100K XP', unlocked: false },
  { icon: '👑', name: 'Master', description: 'Complete all courses', unlocked: false },
];

const unlockedCount = achievements.filter(a => a.unlocked).length;

export function AchievementsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass rounded-2xl p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-lg lg:text-xl flex items-center space-x-2">
          <Award className="text-neon-purple" size={24} />
          <span>Achievements</span>
        </h3>
        <span className="text-neon-purple font-bold">{unlockedCount}/{achievements.length}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
              achievement.unlocked
                ? 'bg-white/5 hover:bg-white/10 hover:glow-purple'
                : 'bg-white/5 opacity-50 hover:opacity-60'
            }`}
          >
            <div className="text-3xl mb-2">{achievement.icon}</div>
            <p className="text-xs font-bold text-center leading-tight mb-1">{achievement.name}</p>
            <p className="text-xs text-white/60 text-center leading-tight">{achievement.description}</p>
            {!achievement.unlocked && (
              <Lock size={12} className="text-white/40 mt-2" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
