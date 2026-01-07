
import React from 'react';
import { MOCK_SESSIONS } from '../constants';
import { Session } from '../types';
import { Play, Sparkles, Flame, Calendar, Clock } from 'lucide-react';

interface HomePageProps {
  onStartSession: (session: Session) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStartSession }) => {
  const dailyPick = MOCK_SESSIONS[0];
  const recommendations = MOCK_SESSIONS.slice(1, 4);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Header */}
      <section>
        <h2 className="text-3xl font-bold text-stone-800">Good morning, Alex</h2>
        <p className="text-stone-500 mt-1">Ready for today's mindfulness journey?</p>
      </section>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-stone-100 flex flex-col items-center">
          <Flame className="text-orange-500 mb-2" size={20} />
          <span className="text-xl font-bold">12</span>
          <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Streak</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-stone-100 flex flex-col items-center">
          <Clock className="text-teal-500 mb-2" size={20} />
          <span className="text-xl font-bold">420</span>
          <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Mins</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-stone-100 flex flex-col items-center">
          <Calendar className="text-purple-500 mb-2" size={20} />
          <span className="text-xl font-bold">28</span>
          <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Days</span>
        </div>
      </div>

      {/* Daily Recommendation */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
            <Sparkles size={18} className="text-amber-500" />
            Today's Meditation
          </h3>
        </div>
        <div 
          onClick={() => onStartSession(dailyPick)}
          className="relative h-64 rounded-3xl overflow-hidden cursor-pointer group shadow-xl shadow-teal-900/10"
        >
          <img 
            src={dailyPick.thumbnail} 
            alt={dailyPick.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-2 py-1 rounded-md mb-2 inline-block">
              {dailyPick.category} • {dailyPick.duration} mins
            </span>
            <h4 className="text-2xl font-bold">{dailyPick.title}</h4>
            <p className="text-white/80 text-sm mt-1 line-clamp-2">{dailyPick.description}</p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100">
            <Play fill="white" className="text-white ml-1" />
          </div>
        </div>
      </section>

      {/* Recommended for you */}
      <section className="pb-4">
        <h3 className="text-xl font-bold text-stone-800 mb-4">Recommended for you</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {recommendations.map(session => (
            <div 
              key={session.id}
              onClick={() => onStartSession(session)}
              className="min-w-[280px] bg-white rounded-2xl overflow-hidden border border-stone-100 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <img src={session.thumbnail} alt={session.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">{session.category}</span>
                  {session.isPremium && <span className="bg-amber-100 text-amber-700 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">Pro</span>}
                </div>
                <h5 className="font-bold text-stone-800">{session.title}</h5>
                <p className="text-stone-400 text-xs mt-1">{session.duration} mins • {session.instructor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
