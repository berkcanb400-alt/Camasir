import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserProfile {
  name: string;
  phone: string;
  block: string;
  room: string;
  avatarUrl: string;
  stats: {
    totalWashes: number;
    trustScore: string;
    points: number;
  };
}

interface AppSettings {
  reminder: boolean;
  washFinished: boolean;
  darkMode: boolean;
}

interface UserContextType {
  profile: UserProfile;
  settings: AppSettings;
  updateProfile: (data: Partial<UserProfile>) => void;
  toggleSetting: (key: keyof AppSettings) => void;
}

const defaultProfile: UserProfile = {
  name: 'Ali Yılmaz',
  phone: '+90 555 123 4567',
  block: 'B Blok',
  room: '305',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDem61dTq12tGSzYskshHdcm8QEpVdPzgNXif7eYQGNs9F4ZqjSx51kSJ5eLbD8YLQkmsXoBAl8wnv-jFCFtzU_w5VgkfTV-IvXsGLPY2BlTVwDSl3pYSM_DI6g524Fn-6nkzSbfwdBOD3kSmGBHpFNFOFBNByOUdCGn42pe8VZvz9eoORj6UwrvJNmiF7l7mlSCs76LtayoRsNTX3RFMC7d4J7-rZNmjuyr5wcRHKsLYLHd2Hlk2d4Kl0PrGoqI4La_1yQ5XJPQ4y8',
  stats: {
    totalWashes: 12,
    trustScore: '4.9 ★',
    points: 150
  }
};

const defaultSettings: AppSettings = {
  reminder: true,
  washFinished: false,
  darkMode: false,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [settings, setSettings] = useState<AppSettings>(() => {
      // Check if user has previously set dark mode in html class or prefers color scheme
      const isDark = document.documentElement.classList.contains('dark');
      return { ...defaultSettings, darkMode: isDark };
  });

  // Apply Dark Mode class to html element
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  const updateProfile = (data: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...data }));
  };

  const toggleSetting = (key: keyof AppSettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <UserContext.Provider value={{ profile, settings, updateProfile, toggleSetting }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
