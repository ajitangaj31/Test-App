
import React from 'react';
import { Settings, Shield, Bell, Heart, LogOut, ChevronRight, Award } from 'lucide-react';

interface ProfilePageProps {
  isPro: boolean;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ isPro }) => {
  const menuItems = [
    { icon: Heart, label: 'Favorites', color: 'text-red-500' },
    { icon: Bell, label: 'Notifications', color: 'text-blue-500' },
    { icon: Shield, label: 'Privacy & Security', color: 'text-green-500' },
    { icon: Award, label: 'Badges & Milestone', color: 'text-amber-500' },
    { icon: Settings, label: 'Settings', color: 'text-stone-500' },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/user1/150/150" 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
          />
          {isPro && (
            <div className="absolute -bottom-1 -right-1 bg-amber-400 text-white p-1 rounded-full border-2 border-white">
              <Award size={16} />
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold mt-4 text-stone-800">Alex Thompson</h3>
        <p className="text-stone-500">Mindfulness Practitioner</p>
      </div>

      <div className="bg-teal-600 rounded-3xl p-6 text-white shadow-xl shadow-teal-900/10">
        <h4 className="font-bold mb-1">Your Growth Journal</h4>
        <p className="text-teal-100 text-sm mb-4">You're more mindful than 85% of members this week!</p>
        <button className="bg-white/20 hover:bg-white/30 transition-all text-white px-4 py-2 rounded-xl text-sm font-semibold">
          View Detailed Analytics
        </button>
      </div>

      <div className="space-y-2">
        {menuItems.map((item, i) => (
          <button 
            key={i}
            className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-stone-50 hover:bg-stone-50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-xl bg-stone-50 group-hover:bg-white transition-all`}>
                <item.icon className={item.color} size={20} />
              </div>
              <span className="font-semibold text-stone-700">{item.label}</span>
            </div>
            <ChevronRight className="text-stone-300" size={18} />
          </button>
        ))}
        <button className="w-full flex items-center gap-4 p-4 text-red-500 font-semibold mt-4">
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
