
import React from 'react';
import { X, Check, Crown, Zap, Moon, Music } from 'lucide-react';

interface SubscriptionModalProps {
  onClose: () => void;
  onUpgrade: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ onClose, onUpgrade }) => {
  const perks = [
    { icon: Crown, label: 'Access to 1000+ Premium Sessions' },
    { icon: Moon, label: 'Special Sleep Stories & Soundscapes' },
    { icon: Music, label: 'Personalized AI Guided Journeys' },
    { icon: Zap, label: 'Offline Mode for On-the-go' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-all"
        >
          <X size={20} className="text-stone-600" />
        </button>

        <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-8 text-white pt-12">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
            <Crown size={32} className="text-amber-300" />
          </div>
          <h2 className="text-3xl font-bold">ZenMind Pro</h2>
          <p className="text-teal-100 mt-2">Unlock your full potential and achieve deeper states of mindfulness.</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <perk.icon size={16} className="text-teal-600" />
                </div>
                <span className="text-sm text-stone-700 font-medium">{perk.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <button 
              onClick={onUpgrade}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-teal-900/20 active:scale-[0.98]"
            >
              Start 7-Day Free Trial
            </button>
            <p className="text-center text-xs text-stone-400 font-medium">
              Then $9.99/month. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
