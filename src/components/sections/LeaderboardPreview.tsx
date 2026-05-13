'use client';

import { motion } from 'framer-motion';
import { Trophy, Flame, Target, Crown } from 'lucide-react';

const topPlayers = [
  { rank: 1, name: 'Alex Chen', xp: 125000, level: 42, avatar: '👨‍💻', streak: 87 },
  { rank: 2, name: 'Sarah Johnson', xp: 118500, level: 40, avatar: '👩‍🎓', streak: 65 },
  { rank: 3, name: 'Mike Rodriguez', xp: 112300, level: 39, avatar: '🧑‍💼', streak: 52 },
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

export function LeaderboardPreview() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 gradient-text">
            Top Learners
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Compete with the best and see where you stand
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4 max-w-2xl mx-auto"
        >
          {topPlayers.map((player, index) => (
            <motion.div
              key={player.rank}
              variants={item}
              className={`glass rounded-2xl p-6 flex items-center justify-between hover:glow-cyan transition-all duration-300 ${
                index === 0 ? 'ring-2 ring-neon-purple' : ''
              }`}
            >
              {/* Rank & Info */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-purple-blue font-bold text-lg">
                  {player.rank === 1 ? '👑' : `#${player.rank}`}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-2xl">{player.avatar}</span>
                    <h3 className="font-bold text-lg">{player.name}</h3>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-white/60">
                    <div className="flex items-center space-x-1">
                      <Trophy size={14} />
                      <span>Level {player.level}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Flame size={14} className="text-neon-pink" />
                      <span>{player.streak} day streak</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* XP */}
              <div className="text-right">
                <p className="text-2xl font-bold gradient-text">{player.xp.toLocaleString()}</p>
                <p className="text-xs text-white/60">Total XP</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
