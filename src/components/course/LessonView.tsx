'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';
import { useState } from 'react';

const lessonContent = {
  'lesson-3': {
    title: 'Understanding C Fundamentals',
    duration: '25 min',
    videoUrl: 'https://example.com/video',
    sections: [
      {
        id: 'intro',
        title: 'Introduction to C',
        content: `C is a general-purpose, procedural programming language created in 1972 by Dennis Ritchie. It's one of the most influential programming languages and serves as the foundation for many modern languages. In this lesson, we'll explore the fundamental concepts that make C powerful and versatile.`,
      },
      {
        id: 'hello-world',
        title: 'Your First C Program',
        content: `Let's start with the classic "Hello, World!" program. This simple program will help you understand the basic structure of a C program and how to compile and run it.`,
        code: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,
      },
      {
        id: 'breakdown',
        title: 'Breaking Down the Code',
        content: `Let's understand what each line does:

1. #include <stdio.h> - This includes the standard input/output library
2. int main() - This is the main function where your program starts
3. printf() - This function prints text to the console
4. return 0 - This tells the operating system that the program ran successfully`,
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What does #include <stdio.h> do?',
        options: [
          'Starts the program',
          'Includes the standard input/output library',
          'Declares a variable',
          'Creates a function',
        ],
        correct: 1,
      },
      {
        id: 'q2',
        question: 'What is the purpose of the main() function?',
        options: [
          'It prints text',
          'It includes libraries',
          'It is the entry point of the program',
          'It declares variables',
        ],
        correct: 2,
      },
    ],
    practice: {
      title: 'Write Your First Program',
      description: 'Modify the Hello World program to print your name instead',
      example: `#include <stdio.h>

int main() {
    printf("My name is [Your Name]");
    return 0;
}`,
    },
  },
};

export function LessonView({ courseId, lessonId }: { courseId: string; lessonId: string }) {
  const lesson = lessonContent['lesson-3' as keyof typeof lessonContent];
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showPractice, setShowPractice] = useState(false);

  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSectionComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
  };

  const isQuizComplete = lesson.quiz.every(q => quizAnswers[q.id] !== undefined);
  const correctAnswers = lesson.quiz.filter(q => quizAnswers[q.id] === q.correct).length;
  const quizScore = (correctAnswers / lesson.quiz.length) * 100;

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href={`/course/${courseId}`} className="text-neon-blue hover:text-neon-cyan transition-colors mb-4 inline-block">
            ← Back to Course
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-white/60">{lesson.duration} lesson</p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="glass rounded-2xl aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center mb-4 overflow-hidden">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neon-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-white/60">Video Lesson</p>
            </div>
          </div>
        </motion.div>

        {/* Lesson Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {lesson.sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-purple-blue flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span>{section.title}</span>
                </h2>
                <button
                  onClick={() => handleSectionComplete(section.id)}
                  className={`transition-all ${
                    completedSections.includes(section.id)
                      ? 'text-neon-cyan'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <CheckCircle size={24} fill={completedSections.includes(section.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              <p className="text-white/80 leading-relaxed mb-6 whitespace-pre-wrap">{section.content}</p>

              {section.code && (
                <div className="mb-6">
                  <p className="text-sm text-white/60 mb-2">Code Example:</p>
                  <pre className="rounded-lg overflow-x-auto">
                    <code>{section.code}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Quiz Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 glass rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Test Your Knowledge</h2>

          <div className="space-y-6">
            {lesson.quiz.map((question) => (
              <div key={question.id} className="bg-white/5 rounded-lg p-6">
                <p className="font-semibold mb-4">{question.question}</p>
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(question.id, index)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                        quizAnswers[question.id] === index
                          ? 'border-neon-purple bg-neon-purple/10'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {isQuizComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg border border-neon-purple/30"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Award className="text-neon-purple" size={32} />
                <div>
                  <p className="font-bold text-lg">Quiz Complete!</p>
                  <p className="text-neon-purple text-2xl font-bold">{Math.round(quizScore)}%</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Great job! You answered {correctAnswers} out of {lesson.quiz.length} questions correctly.
              </p>
              {quizScore >= 80 && (
                <p className="text-neon-cyan font-semibold">✨ You've earned 100 XP!</p>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Practice Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 glass rounded-2xl p-8"
        >
          <button
            onClick={() => setShowPractice(!showPractice)}
            className="w-full text-left font-bold text-lg mb-4 flex items-center justify-between hover:text-neon-blue transition-colors"
          >
            <span>Practical Assignment</span>
            <ArrowRight size={24} className={`transition-transform ${showPractice ? 'rotate-90' : ''}`} />
          </button>

          {showPractice && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-white/80 mb-4">{lesson.practice.description}</p>
              <pre className="rounded-lg overflow-x-auto mb-6">
                <code>{lesson.practice.example}</code>
              </pre>
              <button className="btn-primary">
                Submit Solution
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex items-center justify-between"
        >
          <button className="btn-ghost">
            ← Previous Lesson
          </button>
          <Link href={`/course/${courseId}/lesson/lesson-4`} className="btn-primary flex items-center space-x-2">
            <span>Next Lesson</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
