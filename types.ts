
export enum Category {
  MINDFULNESS = 'Mindfulness',
  SLEEP = 'Sleep',
  FOCUS = 'Focus',
  STRESS = 'De-stress',
  BEGINNER = 'Beginner'
}

export interface Session {
  id: string;
  title: string;
  duration: number; // in minutes
  category: Category;
  description: string;
  thumbnail: string;
  isPremium: boolean;
  instructor: string;
}

export interface UserStats {
  sessionsCompleted: number;
  totalMinutes: number;
  streak: number;
}
