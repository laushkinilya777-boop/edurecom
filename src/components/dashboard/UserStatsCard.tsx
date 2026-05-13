'use client';

import { motion } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';

export function UserStatsCard() {
  const level = 28;
  const xp = 7850;
  const nextLevelXp = 10000;
  const progress = (xp / nextLevelXp) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-3xl p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Level Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute inset-0 bg-gradient-purple-blue rounded-full opacity-20 blur-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-gradient-purple-blue flex items-center justify-center flex-col">
                <span className="text-4xl font-bold">28</span>
                <span className="text-xs text-white/60 mt-1">Level</span>
              </div>
            </div>
          </div>
          <p className="text-white/60 text-center text-sm">Next: Level 29</p>
        </div>

        {/* Progress Section */}
        <div className="md:col-span-2">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold flex items-center space-x-2">
                <Zap className="text-neon-purple" size={20} />
                <span>Experience Points</span>
              </h3>
              <span className="text-neon-purple font-bold text-lg">{xp.toLocaleString()}/{nextLevelXp.toLocaleString()}</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-purple-blue"
              />
            </div>
            <p className="text-xs text-white/60 mt-2">{Math.round(progress)}% to next level</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/60 text-xs mb-1">Courses Completed</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/60 text-xs mb-1">Lessons Done</p>
              <p className="text-2xl font-bold">342</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/60 text-xs mb-1">Achievements</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/60 text-xs mb-1">Study Streak</p>
              <p className="text-2xl font-bold">42 days</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
