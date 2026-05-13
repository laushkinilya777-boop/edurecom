import { create } from 'zustand';

interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  progress: number;
  image: string;
  category: string;
}

interface CourseState {
  courses: Course[];
  initializeCourses: () => void;
  getCourse: (id: string) => Course | undefined;
  updateProgress: (courseId: string, progress: number) => void;
}

export const CourseStore = create<CourseState>((set, get) => ({
  courses: [],
  initializeCourses: () => {
    set({
      courses: [
        {
          id: 'c-programming',
          title: 'C Programming Basics',
          description: 'Learn programming fundamentals with C language',
          level: 'Beginner',
          duration: '6 weeks',
          lessons: 24,
          students: 2543,
          rating: 4.8,
          progress: 35,
          image: 'bg-gradient-purple-blue',
          category: 'Programming',
        },
        {
          id: 'javascript-advanced',
          title: 'Advanced JavaScript',
          description: 'Master async programming and modern JS patterns',
          level: 'Advanced',
          duration: '8 weeks',
          lessons: 32,
          students: 1823,
          rating: 4.9,
          progress: 0,
          image: 'bg-gradient-blue-cyan',
          category: 'Programming',
        },
        {
          id: 'python-data-science',
          title: 'Python for Data Science',
          description: 'Data analysis and machine learning with Python',
          level: 'Intermediate',
          duration: '10 weeks',
          lessons: 40,
          students: 3421,
          rating: 4.7,
          progress: 0,
          image: 'bg-gradient-to-br from-neon-pink to-neon-purple',
          category: 'Data Science',
        },
        {
          id: 'react-web-dev',
          title: 'React Web Development',
          description: 'Build modern web applications with React',
          level: 'Intermediate',
          duration: '7 weeks',
          lessons: 28,
          students: 4120,
          rating: 4.8,
          progress: 0,
          image: 'bg-gradient-to-br from-neon-cyan to-neon-blue',
          category: 'Web Development',
        },
      ],
    });
  },
  getCourse: (id) => {
    const { courses } = get();
    return courses.find(course => course.id === id);
  },
  updateProgress: (courseId, progress) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId ? { ...course, progress } : course
      ),
    }));
  },
}));
