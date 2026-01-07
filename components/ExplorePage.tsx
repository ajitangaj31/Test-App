
import React, { useState } from 'react';
import { MOCK_SESSIONS } from '../constants';
import { Category, Session } from '../types';
import { Search, Filter, PlayCircle } from 'lucide-react';

interface ExplorePageProps {
  onStartSession: (session: Session) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({ onStartSession }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSessions = MOCK_SESSIONS.filter(session => {
    const matchesCategory = selectedCategory === 'All' || session.category === selectedCategory;
    const matchesSearch = session.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          session.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
        <input 
          type="text" 
          placeholder="Search for meditation, focus, sleep..."
          className="w-full bg-white border border-stone-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {['All', ...Object.values(Category)].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat as any)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === cat 
                ? 'bg-teal-600 text-white shadow-md shadow-teal-900/20' 
                : 'bg-white text-stone-500 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredSessions.map(session => (
          <div 
            key={session.id}
            onClick={() => onStartSession(session)}
            className="flex gap-4 p-3 bg-white rounded-2xl border border-stone-100 cursor-pointer hover:border-teal-200 transition-all group"
          >
            <div className="relative w-24 h-24 flex-shrink-0">
              <img 
                src={session.thumbnail} 
                alt={session.title} 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/20 transition-all flex items-center justify-center">
                <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transition-all" size={32} />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{session.category}</span>
                {session.isPremium && <span className="text-amber-600"><Filter size={14} fill="currentColor" /></span>}
              </div>
              <h4 className="font-bold text-stone-800 group-hover:text-teal-600 transition-colors">{session.title}</h4>
              <p className="text-stone-500 text-xs mt-1 line-clamp-2">{session.description}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-[10px] bg-stone-100 px-2 py-0.5 rounded-full font-medium text-stone-500">{session.duration} mins</span>
                <span className="text-[10px] text-stone-400 font-medium">By {session.instructor}</span>
              </div>
            </div>
          </div>
        ))}
        {filteredSessions.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-400">No sessions found for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};
