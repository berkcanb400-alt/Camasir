import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const QRScanner: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate scanning delay then redirect
    const timer = setTimeout(() => {
      navigate('/machine-detail/05'); // Redirect to the busy machine example
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark font-display">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          className="h-full w-full object-cover blur-sm brightness-75 scale-110" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuArpulFG8RehjuYtdCorL3gL7d-0rkA4OosHtxuVahXMZtEbx8bxa3Ap7D-mE5-AOuWGh7v0eOqX4SAYGtllBPkRs4WL78exBNZ2omPlhPBpGBtJNLC1gt4A1Ay11gdKZOCRCt1s075cg2L3ftzOi7nyLCf1BWhZ9g4fxvDcjpwg37ohvt6bg7ST32LKfBd9X7n-YCHnOmJF23ElrkxYYTAIn5mq5rinbsu_lkz4qNSurg-zhA_bqwAyuWRH1SZAAW6mEZJ6Z8DQY0m"
          alt="Laundry background"
        />
      </div>
      <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(circle at center, transparent 0%, transparent 20%, rgba(18, 21, 32, 0.7) 40%, rgb(18, 21, 32) 70%)' }}></div>
      
      <div className="relative z-20 flex h-full flex-col">
        {/* Top Controls */}
        <div className="flex items-center p-4 pb-2 justify-between">
          <button 
            onClick={() => navigate('/home')} 
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50 cursor-pointer z-50"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <button className="flex size-12 shrink-0 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50">
            <span className="material-symbols-outlined text-3xl">flashlight_on</span>
          </button>
        </div>

        <div className="flex-grow"></div>

        {/* Scanner Frame */}
        <div className="flex flex-col items-center justify-center px-4">
          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#4169e1] rounded-tl-2xl shadow-[0_0_15px_#4169e1]"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#4169e1] rounded-tr-2xl shadow-[0_0_15px_#4169e1]"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#4169e1] rounded-bl-2xl shadow-[0_0_15px_#4169e1]"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#4169e1] rounded-br-2xl shadow-[0_0_15px_#4169e1]"></div>
            
            {/* Laser Animation */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#4169e1] shadow-[0_0_10px_2px_#4169e1] animate-[scan_3s_infinite_linear]">
              <style>{`
                @keyframes scan {
                  0% { transform: translateY(0); }
                  50% { transform: translateY(320px); }
                  100% { transform: translateY(0); }
                }
              `}</style>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-white text-base font-bold leading-normal pb-3 pt-1 px-4 text-center">
            Makine üzerindeki QR kodu okutun
          </p>
        </div>

        <div className="flex-grow"></div>

        {/* Bottom Button */}
        <div className="flex px-4 py-8 justify-center">
          <button 
            onClick={() => navigate('/enter-machine-id')}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white/10 text-white backdrop-blur-sm text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-white/20"
          >
            <span className="truncate">Makine ID'sini Elle Girin</span>
          </button>
        </div>
      </div>
    </div>
  );
};