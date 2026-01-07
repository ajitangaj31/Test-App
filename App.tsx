
import React, { useState, useEffect } from 'react';
import { Home, Compass, User, Crown } from 'lucide-react';
import { HomePage } from './components/HomePage';
import { ExplorePage } from './components/ExplorePage';
import { ProfilePage } from './components/ProfilePage';
import { SubscriptionModal } from './components/SubscriptionModal';
import { MeditationSession } from './components/MeditationSession';
import { Session } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'explore' | 'profile'>('home');
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [showSubscription, setShowSubscription] = useState(false);
  const [isPro, setIsPro] = useState(false);

  // Example of native-like behavior: handling back button could be added here via Capacitor plugins
  
  const handleStartSession = (session: Session) => {
    if (session.isPremium && !isPro) {
      setShowSubscription(true);
      return;
    }
    setActiveSession(session);
  };

  const closeSession = () => setActiveSession(null);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header - Adjusted for Android Status Bar */}
      <header className="px-6 pt-12 pb-4 flex justify-between items-center sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-teal-900/10">
            <div className="w-4 h-4 bg-white rounded-full opacity-80" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-stone-800">ZenMind</h1>
        </div>
        <button 
          onClick={() => setShowSubscription(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
            isPro ? 'bg-amber-100 text-amber-700' : 'bg-teal-600 text-white shadow-md'
          }`}
        >
          <Crown size={14} />
          {isPro ? 'Pro Member' : 'Upgrade'}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-6 pb-24">
        {activeTab === 'home' && <HomePage onStartSession={handleStartSession} />}
        {activeTab === 'explore' && <ExplorePage onStartSession={handleStartSession} />}
        {activeTab === 'profile' && <ProfilePage isPro={isPro} />}
      </main>

      {/* Native-style Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-stone-100 px-6 pt-3 pb-8 flex justify-around items-center z-50">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 transition-all active:scale-90 ${activeTab === 'home' ? 'text-teal-600' : 'text-stone-400'}`}
        >
          <Home size={24} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('explore')}
          className={`flex flex-col items-center gap-1 transition-all active:scale-90 ${activeTab === 'explore' ? 'text-teal-600' : 'text-stone-400'}`}
        >
          <Compass size={24} strokeWidth={activeTab === 'explore' ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Explore</span>
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center gap-1 transition-all active:scale-90 ${activeTab === 'profile' ? 'text-teal-600' : 'text-stone-400'}`}
        >
          <User size={24} strokeWidth={activeTab === 'profile' ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
        </button>
      </nav>

      {/* Overlays */}
      {showSubscription && (
        <SubscriptionModal 
          onClose={() => setShowSubscription(false)} 
          onUpgrade={() => {
            setIsPro(true);
            setShowSubscription(false);
          }}
        />
      )}
      
      {activeSession && (
        <MeditationSession 
          session={activeSession} 
          onClose={closeSession} 
        />
      )}
    </div>
  );
};

export default App;
