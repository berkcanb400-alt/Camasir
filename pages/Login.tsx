import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate('/home');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Background SVG */}
      <div className="absolute bottom-0 left-0 w-full h-48 sm:h-64 z-0">
        <svg className="w-full h-full text-[#e0e8ff] dark:text-primary/20" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor" fillOpacity="0.4"></path>
          <path d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,208C672,224,768,256,864,245.3C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor" fillOpacity="1"></path>
        </svg>
      </div>

      <main className="relative z-10 flex w-full max-w-md flex-col items-center justify-center p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-primary rounded-full p-3 text-white shadow-lg">
            <span className="material-symbols-outlined !text-4xl">local_laundry_service</span>
          </div>
        </div>

        <h1 className="text-[#111317] dark:text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-2 pt-4">
          Tekrar Hoş Geldiniz!
        </h1>
        <p className="text-[#646d87] dark:text-gray-400 text-base font-normal leading-normal pb-8 px-4 text-center">
          Hesabınıza giriş yapın
        </p>

        <form className="w-full space-y-4" onSubmit={handleLogin}>
          <label className="flex flex-col w-full">
            <p className="text-[#111317] dark:text-gray-300 text-base font-medium leading-normal pb-2">E-posta veya Öğrenci Numarası</p>
            <input 
              type="text"
              className="flex w-full rounded-lg border border-[#dcdee5] dark:border-gray-600 bg-white dark:bg-[#121520]/50 px-4 h-14 text-base text-[#111317] dark:text-white placeholder-[#646d87] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              placeholder="E-posta veya numaranızı girin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="flex flex-col w-full">
            <div className="flex justify-between items-center">
              <p className="text-[#111317] dark:text-gray-300 text-base font-medium leading-normal pb-2">Şifre</p>
            </div>
            <div className="relative flex w-full items-center">
              <input 
                type="password"
                className="flex w-full rounded-lg border border-[#dcdee5] dark:border-gray-600 bg-white dark:bg-[#121520]/50 px-4 h-14 text-base text-[#111317] dark:text-white placeholder-[#646d87] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="Şifrenizi girin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="absolute right-4 text-[#646d87] dark:text-gray-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </label>

          <div className="w-full text-right mt-2">
            <Link to="/forgot-password" className="text-primary text-sm font-medium hover:underline">Şifremi Unuttum?</Link>
          </div>

          <button 
            type="submit"
            className="flex w-full items-center justify-center rounded-full bg-primary h-14 px-6 text-base font-medium text-white mt-8 hover:bg-primary/90 transition-colors shadow-md"
          >
            Giriş Yap
          </button>
        </form>

        <p className="text-[#646d87] dark:text-gray-400 text-sm font-normal mt-10 text-center">
          Hesabınız yok mu? <Link to="/signup" className="font-bold text-primary hover:underline">Kayıt Ol</Link>
        </p>
      </main>
    </div>
  );
};