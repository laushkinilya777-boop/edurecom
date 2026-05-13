'use client';

import { motion } from 'framer-motion';
import { Flame, Calendar } from 'lucide-react';

export function StreakCard() {
  const currentStreak = 42;
  const longestStreak = 87;
  const daysThisMonth = 18;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg flex items-center space-x-2">
          <Flame className="text-neon-pink" size={24} />
          <span>Streak</span>
        </h3>
        <div className="text-3xl font-bold gradient-text">42</div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-white/60 text-xs mb-2">Current Streak</p>
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-neon-pink" />
            </div>
            <span className="text-sm font-semibold text-neon-pink">{currentStreak} days</span>
          </div>
        </div>
        <div>
          <p className="text-white/60 text-xs mb-2">Longest Streak</p>
          <p className="text-sm font-semibold text-neon-blue">{longestStreak} days</p>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <p className="text-white/60 text-xs mb-1 flex items-center space-x-1">
            <Calendar size={12} />
            <span>This Month</span>
          </p>
          <p className="text-lg font-bold">{daysThisMonth} days learned</p>
        </div>
      </div>
    </motion.div>
  );
}
