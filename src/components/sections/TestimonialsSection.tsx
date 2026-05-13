'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Software Engineer',
    avatar: '👨‍💻',
    text: 'EduRecom completely changed how I learn. The gamification keeps me motivated every single day!',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    role: 'Data Scientist',
    avatar: '👩‍🔬',
    text: 'The streak system and achievements made learning Python so much more fun than traditional courses.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Full Stack Developer',
    avatar: '👨‍💼',
    text: 'Best platform I\'ve used. The leaderboard pushes me to keep improving. Highly recommended!',
    rating: 5,
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

export function TestimonialsSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 gradient-text">
            Loved by Learners
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Join thousands of successful students who transformed their careers
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass rounded-2xl p-8 relative hover:glow-purple transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-neon-purple/20" size={32} />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} className="fill-neon-purple text-neon-purple" />
                  ))}
              </div>

              {/* Text */}
              <p className="text-white mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-purple-blue flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
