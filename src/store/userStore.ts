import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  avatar: string;
  level: number;
  xp: number;
  totalXp: number;
  streak: number;
  longestStreak: number;
  achievements: string[];
  completedLessons: string[];
  completedCourses: string[];
}

interface UserState {
  user: User | null;
  initializeUser: () => void;
  addXP: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  completeCourse: (courseId: string) => void;
  addAchievement: (achievementId: string) => void;
  updateStreak: (days: number) => void;
}

export const UserStore = create<UserState>((set) => ({
  user: null,
  initializeUser: () => {
    set({
      user: {
        id: 'user-1',
        name: 'Alex',
        avatar: '👨‍💻',
        level: 28,
        xp: 7850,
        totalXp: 125000,
        streak: 42,
        longestStreak: 87,
        achievements: ['first-steps', 'on-fire', 'rising-star'],
        completedLessons: ['lesson-1', 'lesson-2', 'lesson-3'],
        completedCourses: ['javascript-basics', 'python-basics'],
      },
    });
  },
  addXP: (amount) => {
    set((state) => {
      if (!state.user) return state;
      const newXP = state.user.xp + amount;
      const nextLevelXp = 10000;
      const newLevel = state.user.level + Math.floor(newXP / nextLevelXp);
      return {
        user: {
          ...state.user,
          xp: newXP % nextLevelXp,
          totalXp: state.user.totalXp + amount,
          level: newLevel,
        },
      };
    });
  },
  completeLesson: (lessonId) => {
    set((state) => {
      if (!state.user) return state;
      if (!state.user.completedLessons.includes(lessonId)) {
        return {
          user: {
            ...state.user,
            completedLessons: [...state.user.completedLessons, lessonId],
          },
        };
      }
      return state;
    });
  },
  completeCourse: (courseId) => {
    set((state) => {
      if (!state.user) return state;
      if (!state.user.completedCourses.includes(courseId)) {
        return {
          user: {
            ...state.user,
            completedCourses: [...state.user.completedCourses, courseId],
          },
        };
      }
      return state;
    });
  },
  addAchievement: (achievementId) => {
    set((state) => {
      if (!state.user) return state;
      if (!state.user.achievements.includes(achievementId)) {
        return {
          user: {
            ...state.user,
            achievements: [...state.user.achievements, achievementId],
          },
        };
      }
      return state;
    });
  },
  updateStreak: (days) => {
    set((state) => {
      if (!state.user) return state;
      const newLongest = Math.max(state.user.longestStreak, days);
      return {
        user: {
          ...state.user,
          streak: days,
          longestStreak: newLongest,
        },
      };
    });
  },
}));
