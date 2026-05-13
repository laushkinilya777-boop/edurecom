'use client';

import { motion } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';

const recentActivity = [
  { time: '2 hours ago', action: 'Completed lesson', course: 'C Programming', xp: 150, type: 'lesson' },
  { time: '1 day ago', action: 'Achieved badge', title: 'Rising Star', xp: 500, type: 'achievement' },
  { time: '2 days ago', action: 'Reached level 28', level: 28, xp: 0, type: 'level' },
  { time: '3 days ago', action: 'Completed course', course: 'JavaScript Basics', xp: 1000, type: 'course' },
];

export function RecentActivityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="font-bold text-lg mb-6 flex items-center space-x-2">
        <TrendingUp className="text-neon-blue" size={20} />
        <span>Recent Activity</span>
      </h3>

      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4 p-3 bg-white/5 rounded-lg">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
              activity.type === 'achievement' ? 'bg-neon-purple/20' :
              activity.type === 'level' ? 'bg-neon-cyan/20' :
              activity.type === 'course' ? 'bg-neon-pink/20' :
              'bg-neon-blue/20'
            }`}>
              {activity.type === 'achievement' ? '🏆' : activity.type === 'level' ? '⭐' : activity.type === 'course' ? '🎓' : '📚'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm">{activity.action}</p>
              <p className="text-xs text-white/60 mt-1">
                {activity.course || activity.title || `Level ${activity.level}`}
              </p>
              <p className="text-xs text-white/40 mt-2">{activity.time}</p>
            </div>
            {activity.xp > 0 && (
              <div className="flex-shrink-0 text-right">
                <p className="text-neon-purple font-bold text-sm">+{activity.xp} XP</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
