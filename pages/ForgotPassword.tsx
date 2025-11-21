import React from 'react';
import { Link } from 'react-router-dom';

export const ForgotPassword: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
       <div className="flex w-full flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-sm flex-col items-center">
          
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 mb-8">
            <span className="material-symbols-outlined text-primary text-5xl">lock_reset</span>
          </div>

          <h1 className="text-[#1E1E1E] dark:text-white text-[32px] font-bold leading-tight text-center pb-3 pt-6">
            Şifremi Unuttum?
          </h1>
          
          <p className="text-[#8A8A8E] dark:text-gray-400 text-base font-normal text-center max-w-xs pb-8">
            Şifrenizi sıfırlamak için e-posta veya öğrenci numaranızı girin
          </p>

          <div className="w-full space-y-6">
            <input 
              className="flex w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-14 px-4 text-base text-[#1E1E1E] dark:text-white placeholder-[#8A8A8E] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              placeholder="E-posta veya Öğrenci Numarası"
            />

            <button className="flex w-full items-center justify-center rounded-xl bg-primary h-12 px-5 text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors">
              Sıfırlama Bağlantısı Gönder
            </button>
          </div>

          <div className="mt-8">
            <Link to="/login" className="text-primary text-sm font-medium hover:underline">Girişe Dön</Link>
          </div>
        </div>
      </div>
    </div>
  );
};