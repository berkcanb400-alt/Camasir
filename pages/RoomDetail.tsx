import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const RoomDetail: React.FC = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const getRoomName = (id: string) => {
    const names: Record<string, string> = {
      'block-a-ground': 'A Blok - Zemin Kat',
      'block-a-1st': 'A Blok - 1. Kat',
      'block-b-ground': 'B Blok - Zemin Kat',
      'block-b-1st': 'B Blok - 1. Kat',
      'block-c-ground': 'C Blok - Zemin Kat',
      'commons': 'Ortak Bina'
    };
    return names[id] || 'Oda Detayları';
  }

  // Mock data
  const machines = [
    { id: 1, type: 'Washer', number: '01', status: 'available' },
    { id: 2, type: 'Washer', number: '02', status: 'in-use', time: '24 dk' },
    { id: 3, type: 'Washer', number: '03', status: 'available' },
    { id: 4, type: 'Dryer', number: '04', status: 'maintenance' },
    { id: 5, type: 'Dryer', number: '05', status: 'in-use', time: '12 dk' },
    { id: 6, type: 'Dryer', number: '06', status: 'available' },
    { id: 7, type: 'Washer', number: '07', status: 'available' },
    { id: 8, type: 'Dryer', number: '08', status: 'maintenance' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'available':
        return {
          bg: 'bg-[#A7F3D0]',
          text: 'text-[#065F46]',
          icon: 'local_laundry_service'
        };
      case 'in-use':
        return {
          bg: 'bg-[#FECACA]',
          text: 'text-[#B91C1C]',
          icon: 'local_laundry_service'
        };
      case 'maintenance':
        return {
          bg: 'bg-[#FDE68A]',
          text: 'text-[#A16207]',
          icon: 'dry_cleaning' // Using dryer icon for maintenance just for variety or general alert icon
        };
      default:
        return { bg: 'bg-gray-200', text: 'text-gray-600', icon: 'help' };
    }
  };

  const handleMachineClick = (machine: any) => {
    // Sadece kullanımda olan makinelere tıklanabilir (Sıraya girmek için)
    if (machine.status === 'in-use') {
      navigate(`/machine-detail/${machine.number}`);
    }
    // Müsait makineler tıklanamaz, QR kod ile başlatılır.
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="flex items-center bg-primary p-4 pb-3 justify-between shadow-md sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-white flex items-center justify-center rounded-full w-10 h-10 hover:bg-white/10">
             <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
             {roomId ? getRoomName(roomId) : 'Oda Detayları'}
        </h1>
      </header>

      <main className="flex-1 p-4 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {machines.map((machine) => {
            const style = getStatusStyle(machine.status);
            const typeName = machine.type === 'Washer' ? 'Çamaşır' : 'Kurutma';
            const isClickable = machine.status === 'in-use';

            return (
              <div 
                key={machine.id}
                onClick={() => handleMachineClick(machine)}
                className={`flex flex-col gap-3 rounded-xl p-4 shadow-sm ${style.bg} transition-transform ${isClickable ? 'cursor-pointer active:scale-95 hover:opacity-90' : 'cursor-default'}`}
              >
                <span className={`material-symbols-outlined !text-3xl ${style.text}`}>
                    {machine.type === 'Dryer' ? 'dry_cleaning' : 'local_laundry_service'}
                </span>
                <div className="flex flex-col gap-1">
                  <h2 className={`${style.text} text-base font-bold leading-tight`}>
                    {typeName} {machine.number}
                  </h2>
                  <p className={`${style.text} text-sm font-medium leading-normal`}>
                    {machine.status === 'in-use' ? `Kullanımda: ${machine.time}` : 
                     machine.status === 'available' ? 'Uygun' : 'Bakımda'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      
      <div className="fixed bottom-20 right-6 z-40">
        <button 
            onClick={() => navigate('/qr-scanner')}
            className="flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-blue-600"
        >
          <span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
        </button>
      </div>
    </div>
  );
};