'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Users } from 'lucide-react';
import { CourseSidebar } from './CourseSidebar';
import { useState } from 'react';

const courseData = {
  'c-programming': {
    id: 'c-programming',
    title: 'C Programming Basics',
    description: 'Learn programming fundamentals with C language',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 24,
    students: 2543,
    progress: 35,
    image: 'bg-gradient-purple-blue',
  },
};

export function CourseView({ courseId }: { courseId: string }) {
  const course = courseData[courseId as keyof typeof courseData];
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Course not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen pt-20">
      {/* Sidebar */}
      <CourseSidebar courseId={courseId} isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Course Header */}
          <div className={`h-40 rounded-2xl mb-8 ${course.image} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-end p-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{course.title}</h1>
                <p className="text-white/80">{course.description}</p>
              </div>
            </div>
          </div>

          {/* Course Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="glass rounded-xl p-4">
              <p className="text-white/60 text-sm mb-1">Level</p>
              <p className="text-2xl font-bold">{course.level}</p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-white/60 text-sm mb-1">Duration</p>
              <p className="text-2xl font-bold">{course.duration}</p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-white/60 text-sm mb-1">Lessons</p>
              <p className="text-2xl font-bold">{course.lessons}</p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-neon-purple" />
                <div>
                  <p className="text-white/60 text-sm mb-1">Students</p>
                  <p className="text-2xl font-bold">{course.students.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">Your Progress</h3>
              <span className="text-neon-purple font-bold">{course.progress}%</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-purple-blue"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">About This Course</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Master the fundamentals of C programming language. This beginner-friendly course covers everything you need to know about C, from basic syntax to more advanced concepts. Learn by doing with interactive exercises and real-world projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2">What You'll Learn</h3>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• C Syntax & Variables</li>
                  <li>• Control Flow</li>
                  <li>• Functions & Arrays</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Requirements</h3>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• No prior experience</li>
                  <li>• A computer</li>
                  <li>• Internet connection</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Certificate</h3>
                <p className="text-sm text-white/70">Get a verified certificate upon completion</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
