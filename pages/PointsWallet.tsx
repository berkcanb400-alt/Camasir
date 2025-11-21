
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export const PointsWallet: React.FC = () => {
  const navigate = useNavigate();
  const { profile } = useUser();

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-[#333] dark:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-[#333] dark:text-white pr-10">Puanlarım & Cüzdan</h2>
        <div className="w-0"></div>
      </div>

      <main className="flex-1 p-4 pb-8 flex flex-col items-center">
        
        {/* Points Card */}
        <div className="w-full max-w-sm bg-primary rounded-2xl p-6 text-white shadow-lg mb-8 mt-4 relative overflow-hidden transition-transform hover:scale-[1.02]">
             {/* Decorative circles */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>

             <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">Toplam Puan</span>
                 <h1 className="text-5xl font-bold mb-2">{profile.stats.points}</h1>
                 <p className="text-white/90 text-sm">Mevcut Bakiye</p>
             </div>
        </div>

        {/* Empty State / Coming Soon */}
        <div className="flex flex-col items-center justify-center flex-1 text-center max-w-xs">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-gray-400 dark:text-gray-500 animate-pulse">
                <span className="material-symbols-outlined text-5xl">card_giftcard</span>
            </div>
            <h3 className="text-xl font-bold text-[#333] dark:text-white mb-2">Yakında Geliyor</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Puanlarınızı harcayabileceğiniz ödüller ve kampanyalar çok yakında buraya eklenecektir.
            </p>
        </div>

      </main>
    </div>
  );
};
