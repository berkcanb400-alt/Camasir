import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Progress: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Animated Bubbles */}
      <div className="absolute bubble w-[60px] h-[60px] top-[10%] left-[15%] rounded-full bg-primary/5 animate-float" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bubble w-[40px] h-[40px] top-[20%] right-[10%] rounded-full bg-primary/5 animate-float" style={{ animationDuration: '30s' }}></div>
      <div className="absolute bubble w-[80px] h-[80px] top-[50%] left-[5%] rounded-full bg-primary/5 animate-float" style={{ animationDuration: '22s' }}></div>
      
      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Bar */}
        <div className="flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-4 justify-between">
            <button onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-[#333] dark:text-white">
                <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>
            <h2 className="text-[#333] dark:text-white text-lg font-bold text-center">Yıkama Devam Ediyor</h2>
            <div className="size-12"></div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 px-4 py-4">
            {/* Circular Progress */}
            <div className="relative flex items-center justify-center size-72 mb-8">
                <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#e0e0e0" strokeWidth="12" className="dark:stroke-gray-700"></circle>
                    <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#4169E1', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#E0FFFF', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <circle 
                        cx="60" cy="60" r="54" fill="none" 
                        stroke="url(#progressGradient)" strokeWidth="12" 
                        strokeLinecap="round"
                        strokeDasharray="339.292" 
                        strokeDashoffset="135.717"
                        className="transition-all duration-1000 ease-linear"
                    ></circle>
                </svg>
                <div className="flex flex-col items-center z-10">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Kalan Süre</p>
                    <p className="text-[3.5rem] font-bold leading-none tracking-tighter text-[#00008B] dark:text-blue-300">25:14</p>
                </div>
            </div>

            <p className="text-[#333] dark:text-gray-300 text-lg font-medium text-center mb-6">Çamaşırlarınız yakında hazır olacak.</p>

            {/* Machine Info Card */}
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 flex items-center gap-4 border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-gray-50 rounded-xl bg-center bg-contain bg-no-repeat flex-shrink-0"
                     style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSDCUgMSmjwd703gCOGb5RqOzLvKlmiqwND1_LmvKbbLR6R0OEoTmmfXutLbUpwSG8vVPmBW1z8VZv6bjWwVCcu4ZlUiRtq498KflIa_soQVcTAdW-RbyYF6tA-iLu-s93lT9Xo1np--KSW09gnFRkr_cgkyKPmmMPHrqS8NA2D0XOF4GdedpUCnGOnxibemldhDHmUTTjgdzbVtX7p80anHKKBQcCHDQ_SBFB78rs4kg_guLGTWqSfCFvlrOrxn20tguAHFp6kOva")' }}>
                </div>
                <div>
                    <p className="text-[#111317] dark:text-white text-lg font-bold">Çamaşır Makinesi 04</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Normal Yıkama</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">A Blok, 3. Kat</p>
                </div>
            </div>
        </div>

        {/* Bottom Actions */}
        <div className="px-4 pb-8 pt-4 space-y-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary rounded-lg p-2">
                        <span className="material-symbols-outlined">notifications</span>
                    </div>
                    <span className="font-medium text-[#333] dark:text-white">Bitince haber ver</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
            </div>
        </div>
      </div>
    </div>
  );
};