
import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, Wind, Heart } from 'lucide-react';
import { Session } from '../types';

interface MeditationSessionProps {
  session: Session;
  onClose: () => void;
}

export const MeditationSession: React.FC<MeditationSessionProps> = ({ session, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(session.duration * 60);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  // Using any to avoid NodeJS namespace issues in browser environment
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          const nextValue = prev - 1;
          setProgress(((session.duration * 60 - nextValue) / (session.duration * 60)) * 100);
          return nextValue;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, timeLeft, session.duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-[110] bg-stone-900 text-white flex flex-col items-center animate-in fade-in duration-500">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className={`absolute inset-0 bg-gradient-to-br from-teal-900 to-indigo-900 transition-opacity duration-1000 ${isPlaying ? 'animate-pulse' : ''}`} />
        <img 
          src={session.thumbnail} 
          alt="bg" 
          className="w-full h-full object-cover scale-110 blur-xl opacity-30"
        />
      </div>

      <header className="relative w-full px-6 py-6 flex justify-between items-center z-10">
        <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">
          <X size={24} />
        </button>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`p-2 rounded-full transition-all ${isLiked ? 'text-rose-500 bg-rose-500/10' : 'bg-white/10 text-white'}`}
        >
          <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
        </button>
      </header>

      <main className="relative flex-1 flex flex-col items-center justify-center px-8 text-center z-10 w-full max-w-lg">
        <div className="mb-12">
          <span className="text-teal-400 font-bold uppercase tracking-widest text-xs mb-2 block">{session.category}</span>
          <h2 className="text-4xl font-bold mb-4">{session.title}</h2>
          <p className="text-stone-400">By {session.instructor}</p>
        </div>

        {/* Breath Indicator / Visualizer */}
        <div className="relative w-64 h-64 mb-16 flex items-center justify-center">
          <div 
            className={`absolute inset-0 border-2 border-teal-500/30 rounded-full transition-all duration-4000 ease-in-out ${
              isPlaying ? 'scale-[1.3] opacity-0' : 'scale-100 opacity-100'
            }`} 
            style={{ transitionProperty: 'transform, opacity', transitionDuration: '4s' }}
          />
          <div 
            className={`absolute inset-0 border-2 border-teal-500/50 rounded-full transition-all duration-3000 ease-in-out delay-1000 ${
              isPlaying ? 'scale-[1.2] opacity-0' : 'scale-100 opacity-100'
            }`} 
            style={{ transitionProperty: 'transform, opacity', transitionDuration: '3s' }}
          />
          <div className="w-48 h-48 bg-teal-600/20 backdrop-blur-xl rounded-full border border-teal-500/40 flex flex-col items-center justify-center">
             <Wind className={`text-teal-400 mb-2 ${isPlaying ? 'animate-bounce' : ''}`} size={32} />
             <div className="text-4xl font-mono font-bold">{formatTime(timeLeft)}</div>
          </div>
        </div>

        {/* Controls */}
        <div className="w-full space-y-8">
          <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-teal-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-around">
            <button className="p-4 text-white/60 hover:text-white transition-colors">
              <RotateCcw size={28} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 bg-white text-stone-900 rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-all"
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
            <button className="p-4 text-white/60 hover:text-white transition-colors">
              <Volume2 size={28} />
            </button>
          </div>
        </div>
      </main>

      <footer className="relative w-full py-12 flex justify-center z-10">
        <p className="text-stone-500 text-sm italic">"Peace comes from within. Do not seek it without."</p>
      </footer>
    </div>
  );
};
