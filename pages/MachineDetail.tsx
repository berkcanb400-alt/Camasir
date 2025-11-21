import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const MachineDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [duration, setDuration] = useState('45dk');
  const [customDuration, setCustomDuration] = useState('');

  // Queue Modal State
  const [showQueueModal, setShowQueueModal] = useState(false);
  const [queueDuration, setQueueDuration] = useState('');

  // Logic to switch between Available and Busy states
  // For demo purposes, let's say IDs '05', '02' are busy
  const isBusy = id === '05' || id === '02';

  const handleStart = () => {
      navigate('/progress');
  };

  const handleConfirmQueue = () => {
      // Mock logic for joining queue
      setShowQueueModal(false);
      // Simulating success
      alert(`Sıraya ${queueDuration} dakika tahmini süre ile girdiniz.`);
  };

  // --- BUSY / QUEUE UI ---
  if (isBusy) {
      return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
          {/* Top App Bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between bg-background-light dark:bg-background-dark p-4 pb-2">
            <button onClick={() => navigate(-1)} className="text-slate-800 dark:text-slate-200 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>
            <h2 className="flex-1 text-lg font-bold leading-tight tracking-[-0.015em] text-[#111317] dark:text-slate-100 text-center">
              Makine Detayları
            </h2>
            <div className="size-10 shrink-0"></div>
          </div>

          <main className="flex-grow pb-28">
            {/* Status Card */}
            <div className="p-4">
              <div className="flex flex-col items-center justify-start rounded-2xl shadow-sm bg-white dark:bg-slate-800 p-6">
                <p className="text-[#111317] dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">
                  Çamaşır Makinesi #{id?.padStart(2, '0')}
                </p>
                <div className="relative my-6 flex items-center justify-center size-40">
                  <svg className="size-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" fill="transparent" r="54" strokeWidth="8" className="stroke-gray-200 dark:stroke-gray-700"></circle>
                    {/* Progress arc */}
                    <circle 
                        cx="60" cy="60" fill="transparent" r="54" 
                        strokeDasharray="339.292" 
                        strokeDashoffset="254.469" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        className="stroke-[#E57373] transition-all duration-500"
                    ></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center text-center">
                    <span className="text-3xl font-bold text-[#E57373]">12</span>
                    <span className="text-sm font-medium text-[#E57373]">dk kaldı</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                  <div className="size-6 rounded-full bg-gray-300 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOsTaCOgGA3JQjBDJykfqoPb4541xIe-d3g27sIBN7VirMfL0qViYrn2xn6OCsPvdL2yNGec_1TYbqUoMfai_jyBjftI-H8-ioVwCHa4EIr1fGCbb_pZNgCc58XRhxiDfs5--NXGvuCLCmopbKDX285IzBimToZWTzzaUJemTsJgdVz5xi6lJsxTx_-LCS3jHTnJRfyAG5KfuDDF8Tm62LvakgbIkCKhx0iBfRSDt8KfznSxZWWzQkTSxgncpD2lN9upPsivCMgcBl")' }}></div>
                  <p className="text-[#646d87] dark:text-slate-300 text-sm font-medium">Mevcut: Ali Y.</p>
                </div>
              </div>
            </div>

            {/* Queue List */}
            <h3 className="text-[#111317] dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-2">
              Bekleme Sırası (3 Kişi)
            </h3>
            
            <div className="flex flex-col gap-3 px-4">
              {[
                  { rank: '1.', name: 'Ben Carter', time: '+45 dk', active: true },
                  { rank: '2.', name: 'Maria Garcia', time: '+90 dk', active: false },
                  { rank: '3.', name: 'Chen Wei', time: '+135 dk', active: false },
              ].map((person, idx) => (
                <div key={idx} className={`flex items-center gap-4 bg-white dark:bg-slate-800 min-h-[72px] py-2 justify-between rounded-xl px-4 shadow-sm ${person.active ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-background-dark' : ''}`}>
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center size-10 rounded-full font-bold ${person.active ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                            {person.rank}
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#111317] dark:text-slate-100 text-base font-semibold leading-normal line-clamp-1">{person.name}</p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">{person.time}</p>
                    </div>
                </div>
              ))}
            </div>
          </main>

          {/* Bottom Action */}
          <div className="fixed bottom-0 left-0 right-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 pt-3 border-t border-gray-200 dark:border-gray-800 pb-8">
            <button 
                onClick={() => setShowQueueModal(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg hover:bg-primary/90 transition-transform active:scale-[0.98]"
            >
              <span className="material-symbols-outlined font-semibold">add</span>
              Sıraya Gir
            </button>
          </div>

          {/* Duration Input Modal */}
          {showQueueModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowQueueModal(false)}></div>
              <div className="relative w-full max-w-sm bg-white dark:bg-[#1E2330] rounded-2xl shadow-2xl p-6 animate-[float_0.3s_ease-out]">
                <h3 className="text-xl font-bold text-[#111317] dark:text-white mb-2 text-center">Tahmini Yıkama Süresi</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 text-center">
                  Lütfen kullanmayı planladığınız tahmini süreyi giriniz.
                </p>
                
                <div className="relative flex items-center mb-8">
                    <input 
                      type="number" 
                      className="w-full h-16 pl-4 pr-12 text-2xl font-bold text-[#111317] dark:text-white bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-primary rounded-xl outline-none transition-colors text-center"
                      placeholder="45"
                      value={queueDuration}
                      onChange={(e) => setQueueDuration(e.target.value)}
                      autoFocus
                    />
                    <span className="absolute right-6 text-gray-500 font-medium text-lg">dk</span>
                </div>

                <div className="flex gap-3">
                    <button 
                        onClick={() => setShowQueueModal(false)}
                        className="flex-1 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        İptal
                    </button>
                    <button 
                        onClick={handleConfirmQueue}
                        disabled={!queueDuration}
                        className="flex-[2] h-12 rounded-xl bg-primary text-white font-bold shadow-lg hover:bg-primary/90 transition-transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Sıraya Gir
                    </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
  }

  // --- AVAILABLE UI (Select Duration) ---
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark">
        <button onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-center text-[#333] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold text-[#333] dark:text-white">Çamaşır Makinesi #{id?.padStart(2, '0')}</h2>
        <div className="size-12 shrink-0"></div>
      </div>

      <div className="flex-1 flex flex-col items-center overflow-y-auto pb-24">
        {/* Machine Image */}
        <div className="w-full px-8 py-6 flex justify-center">
            <div className="relative w-64 h-64 bg-gray-100 rounded-2xl overflow-hidden">
                <div 
                    className="w-full h-full bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAK-AqKi9WxZQgLk_LgXCDKQCyoL3iq-1Rd-CT0UXmakPvNxn8UEe9VBcSzh3O9cfyu7S4oGHPJYYM_ncc_X6DkAz-exr1zwMsn7AHgevtp7O8w42DWZZV9O6mBqFh_7qyI9uoI5PxNoA9V1ajzELXnhxll3oUtKfVlZJFAT1iXPXrUrzoBo3ar-2ZqOtjwAhI_FSLVHKH0LGI9kkDa2ftz6xGSXqQwI9hA-n-z90H0PLGDSDEp431JgZ_hxRBBzcis2WwhcagjSkN7")' }}
                ></div>
            </div>
        </div>

        <h1 className="text-[#333] dark:text-white text-[22px] font-bold text-center pb-3 pt-2">Süre Seçin</h1>

        <div className="flex w-full max-w-md px-4 py-3 gap-3">
            {['30dk', '45dk', '60dk'].map((opt) => (
                <button 
                    key={opt}
                    onClick={() => { setDuration(opt); setCustomDuration(''); }}
                    className={`flex-1 h-12 rounded-lg border-2 font-medium transition-all ${
                        duration === opt 
                        ? 'bg-primary text-white border-primary' 
                        : 'border-primary text-primary hover:bg-primary/5'
                    }`}
                >
                    {opt}
                </button>
            ))}
        </div>

        <div className="w-full max-w-md px-4 py-3 mt-2">
          <h2 className="text-[#333] dark:text-white text-lg font-semibold mb-3">Özel Süre</h2>
          <div className="relative flex items-center">
            <input 
              type="number"
              min="1"
              max="180"
              placeholder="örn. 72"
              value={customDuration}
              onChange={(e) => { setCustomDuration(e.target.value); setDuration(''); }}
              className="w-full h-14 pl-5 pr-16 text-center text-lg font-medium text-[#333] dark:text-white bg-gray-100 dark:bg-gray-800 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-colors outline-none"
            />
            <span className="absolute right-5 text-gray-500 font-medium">dk</span>
          </div>
        </div>

        <div className="mt-auto w-full max-w-md px-4 py-6">
            <button 
                onClick={handleStart}
                className="w-full h-14 bg-primary text-white text-lg font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-transform active:scale-[0.98]"
            >
                Makineyi Başlat
            </button>
        </div>
      </div>
    </div>
  );
};