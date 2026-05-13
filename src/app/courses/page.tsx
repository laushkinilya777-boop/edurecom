'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Users, Clock, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const allCourses = [
  {
    id: 'c-programming',
    title: 'C Programming Basics',
    description: 'Learn programming fundamentals with C language',
    level: 'Beginner',
    students: 2543,
    rating: 4.8,
    duration: '6 weeks',
    lessons: 24,
    progress: 35,
    category: 'Programming',
    image: 'bg-gradient-purple-blue',
  },
  {
    id: 'javascript-advanced',
    title: 'Advanced JavaScript',
    description: 'Master async programming and modern JS patterns',
    level: 'Advanced',
    students: 1823,
    rating: 4.9,
    duration: '8 weeks',
    lessons: 32,
    progress: 0,
    category: 'Programming',
    image: 'bg-gradient-blue-cyan',
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    description: 'Data analysis and machine learning with Python',
    level: 'Intermediate',
    students: 3421,
    rating: 4.7,
    duration: '10 weeks',
    lessons: 40,
    progress: 0,
    category: 'Data Science',
    image: 'bg-gradient-to-br from-neon-pink to-neon-purple',
  },
  {
    id: 'react-web-dev',
    title: 'React Web Development',
    description: 'Build modern web applications with React',
    level: 'Intermediate',
    students: 4120,
    rating: 4.8,
    duration: '7 weeks',
    lessons: 28,
    progress: 0,
    category: 'Web Development',
    image: 'bg-gradient-to-br from-neon-cyan to-neon-blue',
  },
  {
    id: 'typescript-pro',
    title: 'TypeScript Professional',
    description: 'Master TypeScript for large scale applications',
    level: 'Advanced',
    students: 892,
    rating: 4.9,
    duration: '5 weeks',
    lessons: 20,
    progress: 0,
    category: 'Programming',
    image: 'bg-gradient-to-br from-neon-blue to-neon-cyan',
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Essentials',
    description: 'Learn ML algorithms and implementations',
    level: 'Advanced',
    students: 1234,
    rating: 4.8,
    duration: '12 weeks',
    lessons: 50,
    progress: 0,
    category: 'Data Science',
    image: 'bg-gradient-to-br from-neon-purple to-neon-pink',
  },
];

const categories = ['All', 'Programming', 'Web Development', 'Data Science'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

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

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = allCourses.filter((course) => {
    const matchCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchLevel && matchSearch;
  });

  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 via-dark-950 to-dark-950 pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                Explore Courses
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Choose from 200+ courses designed to help you master programming
              </p>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-neon-purple transition-all"
              />
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {/* Category Filter */}
              <div>
                <p className="text-white font-semibold mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === cat
                          ? 'btn-primary'
                          : 'btn-ghost'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <p className="text-white font-semibold mb-3">Level</p>
                <div className="flex flex-wrap gap-2">
                  {levels.map((lv) => (
                    <button
                      key={lv}
                      onClick={() => setSelectedLevel(lv)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedLevel === lv
                          ? 'btn-primary'
                          : 'btn-ghost'
                      }`}
                    >
                      {lv}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Courses Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={item}
                  className="group glass rounded-2xl overflow-hidden hover:glow-blue transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Course Image */}
                  <div className={`h-40 ${course.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                  </div>

                  {/* Course Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-neon-blue transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-3">{course.description}</p>
                    </div>

                    {/* Course Meta */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <span className="badge text-xs">{course.level}</span>
                        <div className="flex items-center space-x-1">
                          <Star size={14} className="fill-neon-purple" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center space-x-2">
                          <Clock size={14} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BarChart3 size={14} />
                          <span>{course.lessons} lessons</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-xs text-white/50">
                        <Users size={12} />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>

                    {/* Progress or Button */}
                    {course.progress > 0 ? (
                      <>
                        <div className="mb-4">
                          <div className="flex justify-between text-xs mb-2">
                            <span className="text-white/60">Progress</span>
                            <span className="text-neon-purple">{course.progress}%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-purple-blue"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                        <Link
                          href={`/course/${course.id}`}
                          className="flex items-center justify-between btn-secondary w-full mt-auto"
                        >
                          Continue
                          <ArrowRight size={16} />
                        </Link>
                      </>
                    ) : (
                      <Link
                        href={`/course/${course.id}`}
                        className="flex items-center justify-between btn-primary w-full mt-auto"
                      >
                        Start Course
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-white/60 text-lg">No courses found. Try adjusting your filters.</p>
              </motion.div>
            )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
