'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Trophy, Flame, TrendingUp } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  streak: number;
  progress: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: 'Alex Chen', avatar: '👨‍����', xp: 125000, level: 42, streak: 87, progress: 95 },
  { rank: 2, name: 'Sarah Johnson', avatar: '👩‍🎓', xp: 118500, level: 40, streak: 65, progress: 88 },
  { rank: 3, name: 'Mike Rodriguez', avatar: '🧑‍💼', xp: 112300, level: 39, streak: 52, progress: 82 },
  { rank: 4, name: 'Emily Watson', avatar: '👩‍💻', xp: 105200, level: 37, streak: 45, progress: 76 },
  { rank: 5, name: 'David Kim', avatar: '👨‍🔬', xp: 98700, level: 35, streak: 38, progress: 70 },
  { rank: 6, name: 'Lisa Anderson', avatar: '👩‍🏫', xp: 92100, level: 34, streak: 28, progress: 64 },
  { rank: 7, name: 'James Lee', avatar: '🧑‍💼', xp: 85400, level: 32, streak: 21, progress: 58 },
  { rank: 8, name: 'Nina Patel', avatar: '👩‍💼', xp: 78900, level: 30, streak: 15, progress: 52 },
  { rank: 9, name: 'Oscar Martinez', avatar: '🧑‍🎓', xp: 72300, level: 28, streak: 10, progress: 45 },
  { rank: 10, name: 'Sophie Turner', avatar: '👩‍💻', xp: 65800, level: 26, streak: 5, progress: 38 },
];

interface LeaderboardSectionProps {
  filter: 'week' | 'month' | 'all';
  onFilterChange: (filter: 'week' | 'month' | 'all') => void;
}

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function LeaderboardSection({ filter, onFilterChange }: LeaderboardSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Filter Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {(['week', 'month', 'all'] as const).map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === f
                ? 'btn-primary'
                : 'btn-ghost'
            }`}
          >
            {f === 'week' ? 'This Week' : f === 'month' ? 'This Month' : 'All Time'}
          </button>
        ))}
      </div>

      {/* Top 3 Special Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
      >
        {/* 2nd Place */}
        {leaderboardData[1] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 flex flex-col items-center text-center order-2 md:order-1"
          >
            <div className="text-5xl mb-3">🥈</div>
            <p className="text-2xl font-bold mb-2">{leaderboardData[1].name}</p>
            <div className="flex items-center justify-center space-x-2 mb-4 text-white/60">
              <Trophy size={16} />
              <span>Level {leaderboardData[1].level}</span>
            </div>
            <p className="text-3xl font-bold gradient-text mb-3">{leaderboardData[1].xp.toLocaleString()}</p>
            <p className="text-sm text-white/60">XP</p>
          </motion.div>
        )}

        {/* 1st Place - Larger */}
        {leaderboardData[0] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-8 flex flex-col items-center text-center order-1 md:order-2 ring-2 ring-neon-purple glow-purple"
          >
            <div className="text-6xl mb-4">👑</div>
            <p className="text-3xl font-bold mb-2">{leaderboardData[0].name}</p>
            <div className="flex items-center justify-center space-x-2 mb-4 text-neon-purple">
              <Flame size={18} />
              <span className="font-semibold">{leaderboardData[0].streak} day streak</span>
            </div>
            <p className="text-4xl font-bold gradient-text mb-3">{leaderboardData[0].xp.toLocaleString()}</p>
            <p className="text-sm text-white/60 mb-4">Total XP</p>
            <div className="w-full text-left text-xs text-white/60">
              <p>Level {leaderboardData[0].level}</p>
            </div>
          </motion.div>
        )}

        {/* 3rd Place */}
        {leaderboardData[2] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6 flex flex-col items-center text-center order-3"
          >
            <div className="text-5xl mb-3">🥉</div>
            <p className="text-2xl font-bold mb-2">{leaderboardData[2].name}</p>
            <div className="flex items-center justify-center space-x-2 mb-4 text-white/60">
              <Trophy size={16} />
              <span>Level {leaderboardData[2].level}</span>
            </div>
            <p className="text-3xl font-bold gradient-text mb-3">{leaderboardData[2].xp.toLocaleString()}</p>
            <p className="text-sm text-white/60">XP</p>
          </motion.div>
        )}
      </motion.div>

      {/* Full Leaderboard Table */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="glass rounded-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white/5 border-b border-white/10 font-semibold text-sm text-white/70">
          <div className="col-span-1">Rank</div>
          <div className="col-span-4">Player</div>
          <div className="col-span-2">Level</div>
          <div className="col-span-3">Total XP</div>
          <div className="col-span-2">Streak</div>
        </div>

        {/* Rows */}
        {leaderboardData.slice(3).map((entry, index) => (
          <motion.div
            key={entry.rank}
            variants={item}
            className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/5 transition-all duration-300 items-center"
          >
            <div className="col-span-1">
              <span className="text-lg font-bold gradient-text">#{entry.rank}</span>
            </div>
            <div className="col-span-4 flex items-center space-x-3">
              <div className="text-2xl">{entry.avatar}</div>
              <span className="font-semibold">{entry.name}</span>
            </div>
            <div className="col-span-2">
              <span className="text-neon-purple font-bold">{entry.level}</span>
            </div>
            <div className="col-span-3">
              <span className="text-neon-blue font-bold">{entry.xp.toLocaleString()}</span>
            </div>
            <div className="col-span-2">
              <div className="flex items-center space-x-1 text-neon-pink">
                <Flame size={14} />
                <span className="text-sm font-semibold">{entry.streak}d</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
