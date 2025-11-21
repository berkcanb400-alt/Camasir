import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EnterMachineId: React.FC = () => {
  const navigate = useNavigate();
  const [machineId, setMachineId] = useState('');

  const handleStart = () => {
    if (machineId) {
        // If ID is 05, go to the busy page example, else standard detail
        navigate(`/machine-detail/${machineId}`);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display overflow-x-hidden">
      <div className="flex h-full flex-grow flex-col">
        {/* Top App Bar */}
        <div className="flex items-center justify-between p-4 pb-2 bg-background-light dark:bg-background-dark">
          <button onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-center text-slate-800 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-3xl">arrow_back</span>
          </button>
          <div className="flex-1"></div>
        </div>

        {/* Main Content */}
        <main className="flex flex-1 flex-col justify-between px-4 pb-6 pt-6 text-center">
          <div className="flex flex-col max-w-md mx-auto w-full">
            {/* Headline */}
            <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight pb-3">
              Makine ID Girin
            </h1>
            {/* Body */}
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-8">
              Makinenin önündeki etikette yazan ID'yi bulun.
            </p>
            {/* Text Field */}
            <div className="flex w-full items-end gap-4 py-3">
              <label className="flex w-full flex-col">
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-20 placeholder:text-slate-300 dark:placeholder:text-slate-600 p-4 text-4xl font-bold tracking-widest text-center uppercase"
                  placeholder="A-05"
                  value={machineId}
                  onChange={(e) => setMachineId(e.target.value)}
                  maxLength={4}
                />
              </label>
            </div>
          </div>

          {/* Button */}
          <div className="w-full pt-3 max-w-md mx-auto">
            <button 
                onClick={handleStart}
                disabled={!machineId}
                className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary text-white text-lg font-bold leading-normal tracking-wide disabled:bg-primary/50 disabled:cursor-not-allowed transition-colors hover:bg-primary/90"
            >
              <span className="truncate">Makineyi Başlat</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};