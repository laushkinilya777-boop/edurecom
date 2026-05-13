'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const courses = [
  {
    id: 'c-programming',
    title: 'C Programming Basics',
    description: 'Learn programming fundamentals with C language',
    level: 'Beginner',
    students: 2543,
    rating: 4.8,
    progress: 35,
    image: 'bg-gradient-purple-blue',
  },
  {
    id: 'javascript-advanced',
    title: 'Advanced JavaScript',
    description: 'Master async programming and modern JS patterns',
    level: 'Advanced',
    students: 1823,
    rating: 4.9,
    progress: 0,
    image: 'bg-gradient-blue-cyan',
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    description: 'Data analysis and machine learning with Python',
    level: 'Intermediate',
    students: 3421,
    rating: 4.7,
    progress: 0,
    image: 'bg-gradient-to-br from-neon-pink to-neon-purple',
  },
  {
    id: 'react-web-dev',
    title: 'React Web Development',
    description: 'Build modern web applications with React',
    level: 'Intermediate',
    students: 4120,
    rating: 4.8,
    progress: 0,
    image: 'bg-gradient-to-br from-neon-cyan to-neon-blue',
  },
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

export function PopularCoursesSection() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 gradient-text">
            Popular Courses
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Start your learning journey with our most popular courses
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={item}
              className="group glass rounded-2xl overflow-hidden hover:glow-blue transition-all duration-300 hover:-translate-y-1"
            >
              {/* Course Header */}
              <div className={`h-32 ${course.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                    <p className="text-white/60 text-sm mb-3">{course.description}</p>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between mb-4 text-sm text-white/60">
                  <span className="badge text-xs">{course.level}</span>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="fill-neon-purple" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Students */}
                <p className="text-xs text-white/50 mb-4">
                  {course.students.toLocaleString()} students
                </p>

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
                      className="flex items-center justify-between btn-secondary w-full"
                    >
                      Continue Learning
                      <ArrowRight size={16} />
                    </Link>
                  </>
                ) : (
                  <Link
                    href={`/course/${course.id}`}
                    className="flex items-center justify-between btn-primary w-full"
                  >
                    Start Course
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/courses"
            className="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-cyan transition-colors"
          >
            <span className="text-lg font-semibold">View All Courses</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
