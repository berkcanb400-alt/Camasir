
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock validation and submit
    if (newPassword !== confirmPassword) {
      alert('Yeni şifreler eşleşmiyor!');
      return;
    }
    alert('Şifreniz başarıyla güncellendi.');
    navigate(-1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-[#333] dark:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-[#333] dark:text-white pr-10">Şifreyi Değiştir</h2>
        <div className="w-0"></div>
      </div>

      <main className="flex-1 p-4 pb-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto mt-4">
          
          {/* Current Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mevcut Şifre</label>
            <div className="relative">
              <input 
                type={showCurrent ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#333] dark:text-white px-4 pr-12 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                placeholder="Mevcut şifrenizi girin"
              />
              <button 
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">{showCurrent ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Yeni Şifre</label>
            <div className="relative">
              <input 
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#333] dark:text-white px-4 pr-12 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                placeholder="Yeni şifrenizi girin"
              />
              <button 
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">{showNew ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Yeni Şifreyi Onayla</label>
            <div className="relative">
              <input 
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#333] dark:text-white px-4 pr-12 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                placeholder="Yeni şifrenizi tekrar girin"
              />
              <button 
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">{showConfirm ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>

          <div className="flex-grow"></div>

          <div className="mt-8">
            <button 
              type="submit"
              className="w-full h-14 bg-primary text-white text-base font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-transform active:scale-[0.98]"
            >
              Şifreyi Güncelle
            </button>
          </div>

        </form>
      </main>
    </div>
  );
};
