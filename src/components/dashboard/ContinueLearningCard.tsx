'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const continueLearning = [
  {
    courseId: 'c-programming',
    courseName: 'C Programming Basics',
    currentLesson: 'Understanding C Fundamentals',
    lessonId: 'lesson-3',
    progress: 35,
  },
  {
    courseId: 'javascript-async',
    courseName: 'JavaScript Advanced',
    currentLesson: 'Async/Await Patterns',
    lessonId: 'lesson-8',
    progress: 62,
  },
];

export function ContinueLearningCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="font-bold text-lg mb-6">Continue Learning</h3>

      <div className="space-y-4">
        {continueLearning.map((course, index) => (
          <Link
            key={index}
            href={`/course/${course.courseId}/lesson/${course.lessonId}`}
            className="group block p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="text-xs text-white/60 mb-1">{course.courseName}</p>
                <p className="font-semibold group-hover:text-neon-blue transition-colors">
                  {course.currentLesson}
                </p>
              </div>
              <Play size={18} className="text-neon-blue group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-3">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-blue-cyan"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
              <span className="text-xs text-white/60 font-semibold">{course.progress}%</span>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
