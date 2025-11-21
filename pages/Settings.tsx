
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { settings, toggleSetting } = useUser();
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportType, setReportType] = useState('fault');
  const [description, setDescription] = useState('');

  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
    </label>
  );

  const handleReportSubmit = () => {
    // Mock submission logic
    console.log('Report submitted:', { type: reportType, description });
    setShowReportModal(false);
    setDescription('');
    alert('Bildiriminiz başarıyla gönderildi.');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
        <div className="flex items-center p-4 bg-white dark:bg-[#1E2330] border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
            <button onClick={() => navigate(-1)} className="mr-4 text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-lg font-bold text-[#111617] dark:text-white">Ayarlar</h2>
        </div>

        <main className="flex-1 p-4 space-y-6 pb-24">
            {/* Account */}
            <section>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-2 mb-2">HESAP</h3>
                <div className="bg-white dark:bg-[#1E2330] rounded-xl shadow-sm overflow-hidden">
                    <button onClick={() => navigate('/profile/edit')} className="w-full flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-xl">person</span>
                            </div>
                            <span className="text-[#111617] dark:text-white">Profili Düzenle</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>
                    <button onClick={() => navigate('/settings/change-password')} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-xl">lock</span>
                            </div>
                            <span className="text-[#111617] dark:text-white">Şifreyi Değiştir</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>
                </div>
            </section>

            {/* Notifications */}
            <section>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-2 mb-2">BİLDİRİMLER</h3>
                <div className="bg-white dark:bg-[#1E2330] rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-xl">notifications</span>
                            </div>
                            <span className="text-[#111617] dark:text-white">Hatırlatma (5 dk kaldı)</span>
                        </div>
                        <Toggle 
                            checked={settings.reminder} 
                            onChange={() => toggleSetting('reminder')} 
                        />
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-xl">check_circle</span>
                            </div>
                            <span className="text-[#111617] dark:text-white">Yıkama Bitti</span>
                        </div>
                        <Toggle 
                            checked={settings.washFinished} 
                            onChange={() => toggleSetting('washFinished')} 
                        />
                    </div>
                </div>
            </section>

            {/* App */}
            <section>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-2 mb-2">UYGULAMA</h3>
                <div className="bg-white dark:bg-[#1E2330] rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-xl">dark_mode</span>
                            </div>
                            <span className="text-[#111617] dark:text-white">Karanlık Mod</span>
                        </div>
                        <Toggle 
                            checked={settings.darkMode} 
                            onChange={() => toggleSetting('darkMode')} 
                        />
                    </div>
                </div>
            </section>

             {/* Support */}
            <section>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-2 mb-2">DESTEK</h3>
                <div className="bg-white dark:bg-[#1E2330] rounded-xl shadow-sm overflow-hidden">
                    <button onClick={() => setShowReportModal(true)} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-xl">report_problem</span>
                            </div>
                            <span className="text-[#111617] dark:text-white">Sorun Bildir</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>
                </div>
            </section>

            <button 
                onClick={() => navigate('/login')}
                className="w-full bg-white dark:bg-[#1E2330] text-red-500 font-medium p-4 rounded-xl shadow-sm hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
            >
                Çıkış Yap
            </button>
        </main>

        {/* Report Issue Modal */}
        {showReportModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowReportModal(false)}></div>
                <div className="relative w-full max-w-sm bg-white dark:bg-[#1E2330] rounded-2xl shadow-2xl p-6 animate-[float_0.3s_ease-out]">
                    <h3 className="text-xl font-bold text-[#111317] dark:text-white mb-4 text-center">Sorun Bildir</h3>
                    
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sorun Türü</label>
                            <select 
                                value={reportType}
                                onChange={(e) => setReportType(e.target.value)}
                                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-[#333] dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="misuse">Yanlış Kullanım</option>
                                <option value="fault">Makine Arızası Bildir</option>
                                <option value="other">Diğer</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Açıklama</label>
                            <textarea 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-[#333] dark:text-white p-4 outline-none focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Sorunu detaylıca açıklayınız..."
                            ></textarea>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button 
                                onClick={() => setShowReportModal(false)}
                                className="flex-1 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                İptal
                            </button>
                            <button 
                                onClick={handleReportSubmit}
                                className="flex-[2] h-12 rounded-xl bg-primary text-white font-bold shadow-lg hover:bg-primary/90 transition-transform active:scale-[0.98]"
                            >
                                Gönder
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};
