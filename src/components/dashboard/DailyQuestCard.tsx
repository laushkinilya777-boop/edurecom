'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Gift } from 'lucide-react';

export function DailyQuestCard() {
  const quests = [
    { id: 1, title: 'Complete 1 Lesson', completed: true, reward: 50 },
    { id: 2, title: 'Score 80%+ on Quiz', completed: true, reward: 100 },
    { id: 3, title: 'Complete Daily Challenge', completed: false, reward: 150 },
  ];

  const completedCount = quests.filter(q => q.completed).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg flex items-center space-x-2">
          <Gift className="text-neon-cyan" size={24} />
          <span>Daily Quest</span>
        </h3>
        <span className="text-sm font-semibold text-neon-cyan badge badge-cyan">
          {completedCount}/{quests.length}
        </span>
      </div>

      <div className="space-y-3">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
              quest.completed ? 'bg-neon-cyan/10' : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              quest.completed
                ? 'bg-neon-cyan text-dark-950'
                : 'border-2 border-white/20'
            }`}>
              {quest.completed && <CheckCircle size={16} />}
            </div>
            <div className="flex-1">
              <p className={quest.completed ? 'text-white/70 line-through' : 'text-white'}>
                {quest.title}
              </p>
            </div>
            <span className="text-neon-cyan font-semibold text-sm">+{quest.reward} XP</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
