
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export const Profile: React.FC = () => {
  const { profile } = useUser();

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header with Curve */}
      <div className="relative w-full h-[30vh] bg-primary rounded-b-[3rem] flex justify-center">
        <div className="absolute -bottom-16 flex flex-col items-center gap-3">
             <div className="relative">
                <div 
                    className="w-32 h-32 rounded-full border-4 border-white dark:border-background-dark bg-cover bg-center shadow-lg"
                    style={{ backgroundImage: `url("${profile.avatarUrl}")` }}
                ></div>
             </div>
             <div className="text-center">
                 <h1 className="text-[#333] dark:text-white text-2xl font-bold">{profile.name}</h1>
                 <p className="text-gray-500 dark:text-gray-400">Oda: {profile.block} {profile.room}</p>
             </div>
        </div>
      </div>

      <div className="flex-1 pt-20 px-4 pb-24">
          {/* Stats Grid */}
          <div className="flex gap-4 mb-8 justify-between">
              {[
                  { label: 'Toplam Yıkama', value: profile.stats.totalWashes },
                  { label: 'Güven Puanı', value: profile.stats.trustScore },
                  { label: 'Puanlar', value: profile.stats.points }
              ].map((stat, idx) => (
                  <div key={idx} className="flex-1 bg-white dark:bg-[#1E2330] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">{stat.label}</span>
                      <span className="text-2xl font-bold text-[#333] dark:text-white mt-1">{stat.value}</span>
                  </div>
              ))}
          </div>

          {/* Menu Options */}
          <div className="space-y-3">
              {[
                  { icon: 'account_balance_wallet', label: 'Puanlarım/Cüzdan', to: '/points-wallet' },
                  { icon: 'settings', label: 'Ayarlar', to: '/settings' },
              ].map((item) => (
                  <Link 
                    key={item.label} 
                    to={item.to}
                    className="flex items-center justify-between bg-white dark:bg-[#1E2330] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 active:scale-[0.98] transition-transform"
                  >
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined">{item.icon}</span>
                          </div>
                          <span className="text-[#333] dark:text-white font-medium">{item.label}</span>
                      </div>
                      <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                  </Link>
              ))}
          </div>
      </div>
    </div>
  );
};
