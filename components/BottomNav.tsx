import React from 'react';
import { NavLink } from 'react-router-dom';

export const BottomNav: React.FC = () => {
  const navItems = [
    { path: '/home', icon: 'home', label: 'Ana Sayfa' }, // Maps to Home/Select Room
    { path: '/progress', icon: 'local_laundry_service', label: 'Yıkamam' }, // Maps to Progress
    { path: '/profile', icon: 'person', label: 'Profil' }, // Maps to Profile
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111721] shadow-[0_-4px_12px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="flex h-16 w-full max-w-md mx-auto px-4 pb-1 pt-1 items-center justify-between">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center justify-center gap-1.5 transition-colors duration-200 ${
                isActive ? 'text-[#4169E1]' : 'text-[#8E8E93]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`material-symbols-outlined text-2xl ${isActive ? 'filled' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-xs font-medium leading-normal tracking-wide">
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-white dark:bg-[#111721]"></div>
    </div>
  );
};