
import { Category, Session } from './types';

export const MOCK_SESSIONS: Session[] = [
  {
    id: '1',
    title: 'Mindful Morning',
    duration: 10,
    category: Category.MINDFULNESS,
    description: 'Start your day with clarity and intention.',
    thumbnail: 'https://picsum.photos/seed/med1/400/250',
    isPremium: false,
    instructor: 'Aria'
  },
  {
    id: '2',
    title: 'Deep Sleep Journey',
    duration: 25,
    category: Category.SLEEP,
    description: 'Drift into a restorative slumber with soothing guidance.',
    thumbnail: 'https://picsum.photos/seed/med2/400/250',
    isPremium: true,
    instructor: 'Julian'
  },
  {
    id: '3',
    title: 'Focus & Flow',
    duration: 15,
    category: Category.FOCUS,
    description: 'Sharpen your concentration for the tasks ahead.',
    thumbnail: 'https://picsum.photos/seed/med3/400/250',
    isPremium: false,
    instructor: 'Kai'
  },
  {
    id: '4',
    title: 'Anxiety Release',
    duration: 12,
    category: Category.STRESS,
    description: 'Release tension and calm a busy mind.',
    thumbnail: 'https://picsum.photos/seed/med4/400/250',
    isPremium: true,
    instructor: 'Sarah'
  },
  {
    id: '5',
    title: 'Breathing Basics',
    duration: 5,
    category: Category.BEGINNER,
    description: 'Learn the fundamental techniques of conscious breathing.',
    thumbnail: 'https://picsum.photos/seed/med5/400/250',
    isPremium: false,
    instructor: 'Aria'
  },
  {
    id: '6',
    title: 'Gratitude Walk',
    duration: 20,
    category: Category.MINDFULNESS,
    description: 'A walking meditation to foster appreciation.',
    thumbnail: 'https://picsum.photos/seed/med6/400/250',
    isPremium: true,
    instructor: 'Elena'
  }
];
