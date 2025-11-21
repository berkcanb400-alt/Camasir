import React from 'react';
import { Link } from 'react-router-dom';

interface Room {
  id: string;
  name: string;
  available: number;
  total: number;
  status: 'available' | 'busy' | 'full';
}

export const SelectRoom: React.FC = () => {
  const rooms: Room[] = [
    { id: 'block-a-ground', name: 'A Blok - Zemin Kat', available: 3, total: 8, status: 'available' },
    { id: 'block-a-1st', name: 'A Blok - 1. Kat', available: 1, total: 6, status: 'busy' },
    { id: 'block-b-ground', name: 'B Blok - Zemin Kat', available: 0, total: 8, status: 'full' },
    { id: 'block-b-1st', name: 'B Blok - 1. Kat', available: 4, total: 8, status: 'available' },
    { id: 'block-c-ground', name: 'C Blok - Zemin Kat', available: 2, total: 6, status: 'available' },
    { id: 'commons', name: 'Ortak Bina', available: 6, total: 12, status: 'available' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-[#28A745] dark:text-green-400';
      case 'busy': return 'text-[#FFA500] dark:text-orange-400';
      case 'full': return 'text-[#DC3545] dark:text-red-400';
      default: return 'text-gray-500';
    }
  };

  const getStatusText = (room: Room) => {
     if (room.status === 'full') return 'Tamamen Dolu';
     return `${room.available} Makine Uygun`;
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-gray-200/80 bg-background-light/80 px-4 backdrop-blur-sm dark:border-gray-800/80 dark:bg-background-dark/80">
        <h1 className="text-lg font-bold text-primary">Çamaşırhane Seçin</h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
            <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main className="flex-1 space-y-4 p-4 pb-24 overflow-y-auto">
        {rooms.map((room) => (
          <Link 
            key={room.id} 
            to={`/room/${room.id}`}
            className="flex cursor-pointer items-center gap-4 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm transition-all active:scale-[0.98] hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
              <span className="material-symbols-outlined text-2xl">local_laundry_service</span>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-[#333333] dark:text-gray-100">{room.name}</p>
              <p className={`text-sm font-medium ${getStatusColor(room.status)}`}>
                {getStatusText(room)}
              </p>
            </div>
            <div className="shrink-0 text-gray-400 dark:text-gray-500">
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};