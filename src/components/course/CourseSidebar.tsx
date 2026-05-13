'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Lock, Check } from 'lucide-react';

const lessons = [
  { id: 'lesson-1', title: 'What is C?', duration: '15 min', completed: true },
  { id: 'lesson-2', title: 'Setting up Your Environment', duration: '20 min', completed: true },
  { id: 'lesson-3', title: 'Understanding C Fundamentals', duration: '25 min', completed: true, current: true },
  { id: 'lesson-4', title: 'Variables and Data Types', duration: '30 min', completed: false },
  { id: 'lesson-5', title: 'Operators', duration: '25 min', completed: false },
  { id: 'lesson-6', title: 'Control Flow: If Statements', duration: '28 min', completed: false },
];

interface CourseSidebarProps {
  courseId: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function CourseSidebar({ courseId, isOpen, onToggle }: CourseSidebarProps) {
  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onToggle}
        className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-purple-blue flex items-center justify-center text-white shadow-lg glow-purple"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: isOpen ? 0 : -400, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:relative fixed inset-y-0 left-0 z-30 w-80 glass-dark border-r border-white/10 p-6 pt-24 lg:pt-8 overflow-y-auto"
      >
        <h3 className="text-lg font-bold mb-6">Course Content</h3>

        <div className="space-y-2">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/course/${courseId}/lesson/${lesson.id}`}
              className={`block p-4 rounded-lg transition-all duration-300 ${
                lesson.current
                  ? 'glass glow-purple ring-2 ring-neon-purple bg-neon-purple/10'
                  : 'hover:bg-white/10'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                  lesson.completed
                    ? 'bg-neon-cyan text-dark-950'
                    : lesson.current
                    ? 'bg-neon-purple text-white'
                    : 'border-2 border-white/20 text-white/40'
                }`}>
                  {lesson.completed ? <Check size={14} /> : index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm leading-tight ${
                    lesson.completed ? 'text-white/70 line-through' : 'text-white'
                  }`}>
                    {lesson.title}
                  </p>
                  <p className="text-xs text-white/50 mt-1">{lesson.duration}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onToggle}
          className="lg:hidden fixed inset-0 z-20 bg-black/40 pt-20"
        />
      )}
    </>
  );
}
