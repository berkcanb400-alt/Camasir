import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const { profile, updateProfile } = useUser();
  
  // Local state for inputs
  const [name, setName] = useState(profile.name);
  const [phone, setPhone] = useState(profile.phone);
  const [block, setBlock] = useState(profile.block);
  const [room, setRoom] = useState(profile.room);

  const handleSave = () => {
    updateProfile({
      name,
      phone,
      block,
      room
    });
    navigate(-1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-[#333] dark:text-white">
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-[#333] dark:text-white pr-10">Profili Düzenle</h2>
        <div className="w-0"></div>
      </div>

      <div className="flex-1 p-4 pb-24">
          <div className="flex justify-center mb-8 mt-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-300 border-4 border-white dark:border-gray-700 bg-cover bg-center"
                     style={{ backgroundImage: `url("${profile.avatarUrl}")`}}>
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary text-white rounded-full border-4 border-background-light dark:border-background-dark flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">photo_camera</span>
                </button>
              </div>
          </div>

          <div className="space-y-4 max-w-md mx-auto">
              <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ad Soyad</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark text-[#333] dark:text-white px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
              </div>

              <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefon Numarası</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark text-[#333] dark:text-white px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
              </div>

              <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Yurt Bloğu</label>
                  <select 
                    value={block}
                    onChange={(e) => setBlock(e.target.value)}
                    className="w-full h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark text-[#333] dark:text-white px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none"
                  >
                      <option value="A Blok">A Blok</option>
                      <option value="B Blok">B Blok</option>
                      <option value="C Blok">C Blok</option>
                  </select>
              </div>

              <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Oda Numarası</label>
                  <input 
                    type="number" 
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    className="w-full h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark text-[#333] dark:text-white px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
              </div>
          </div>

          <div className="mt-10 max-w-md mx-auto">
              <button 
                onClick={handleSave}
                className="w-full h-14 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                  Değişiklikleri Kaydet
              </button>
          </div>
      </div>
    </div>
  );
};