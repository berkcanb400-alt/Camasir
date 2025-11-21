
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-lexend">
      {/* Top Bar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark">
        <Link to="/login" className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-[#333] dark:text-white">arrow_back</span>
        </Link>
        <h1 className="text-[#333] dark:text-white text-xl font-bold flex-1 text-center">Hesap Oluştur</h1>
        <div className="size-12 shrink-0"></div>
      </div>

      <main className="flex flex-1 flex-col px-6 pt-4">
        <form onSubmit={handleSignup} className="flex flex-col gap-4 flex-1">
          
          <div className="flex flex-col">
            <label className="flex flex-col">
              <span className="text-[#333] dark:text-gray-200 text-base font-medium pb-2">Ad Soyad</span>
              <input 
                className="h-14 w-full rounded-lg border border-[#dedce5] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 text-base text-[#333] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Adınızı ve soyadınızı girin"
              />
            </label>
          </div>

          <div className="flex flex-col">
            <label className="flex flex-col">
              <span className="text-[#333] dark:text-gray-200 text-base font-medium pb-2">E-posta</span>
              <input 
                type="email"
                className="h-14 w-full rounded-lg border border-[#dedce5] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 text-base text-[#333] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="E-posta adresinizi girin"
              />
            </label>
          </div>

          <div className="flex flex-col">
            <label className="flex flex-col">
              <span className="text-[#333] dark:text-gray-200 text-base font-medium pb-2">Öğrenci Numarası</span>
              <input 
                className="h-14 w-full rounded-lg border border-[#dedce5] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 text-base text-[#333] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Öğrenci numaranızı girin"
              />
            </label>
          </div>

          <div className="flex flex-col">
            <label className="flex flex-col">
              <span className="text-[#333] dark:text-gray-200 text-base font-medium pb-2">Yurt Bloğu & Oda Numarası</span>
              <input 
                className="h-14 w-full rounded-lg border border-[#dedce5] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 text-base text-[#333] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="örn. C Blok, Oda 101"
              />
            </label>
          </div>

          <div className="flex flex-col">
            <label className="flex flex-col">
              <span className="text-[#333] dark:text-gray-200 text-base font-medium pb-2">Şifre</span>
              <div className="relative">
                <input 
                  type="password"
                  className="h-14 w-full rounded-lg border border-[#dedce5] dark:border-gray-700 bg-white dark:bg-gray-800 px-4 pr-12 text-base text-[#333] dark:text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="Şifrenizi girin"
                />
                <button type="button" className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </label>
          </div>

          <div className="flex-grow"></div>

          <div className="flex flex-col items-center gap-4 py-6 mt-auto">
            <button type="submit" className="flex h-14 w-full items-center justify-center rounded-lg bg-primary px-5 text-base font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-500/20">
              Hesap Oluştur
            </button>
            <div className="text-sm font-medium text-gray-500">
              Zaten hesabınız var mı? <Link to="/login" className="font-semibold text-primary hover:underline">Giriş Yap</Link>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
