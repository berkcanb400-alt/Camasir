
import React from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { SelectRoom } from './pages/SelectRoom';
import { RoomDetail } from './pages/RoomDetail';
import { MachineDetail } from './pages/MachineDetail';
import { Progress } from './pages/Progress';
import { Profile } from './pages/Profile';
import { EditProfile } from './pages/EditProfile';
import { Settings } from './pages/Settings';
import { ChangePassword } from './pages/ChangePassword';
import { QRScanner } from './pages/QRScanner';
import { EnterMachineId } from './pages/EnterMachineId';
import { PointsWallet } from './pages/PointsWallet';
import { BottomNav } from './components/BottomNav';
import { UserProvider } from './context/UserContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideNavRoutes = [
    '/login', 
    '/signup', 
    '/forgot-password', 
    '/machine-detail', 
    '/qr-scanner', 
    '/enter-machine-id',
    '/settings/change-password',
    '/points-wallet'
  ];
  const shouldShowNav = !hideNavRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111317] dark:text-white font-display">
      <div className={`flex-1 ${shouldShowNav ? 'pb-20' : ''}`}>
        {children}
      </div>
      {shouldShowNav && <BottomNav />}
    </div>
  );
};

export default function App() {
  return (
    <UserProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Home Tab Flow */}
            <Route path="/home" element={<SelectRoom />} />
            <Route path="/room/:roomId" element={<RoomDetail />} />
            <Route path="/qr-scanner" element={<QRScanner />} />
            <Route path="/enter-machine-id" element={<EnterMachineId />} />
            <Route path="/machine-detail/:id" element={<MachineDetail />} />
            
            {/* My Wash Tab */}
            <Route path="/progress" element={<Progress />} />
            
            {/* Profile Tab Flow */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/points-wallet" element={<PointsWallet />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/change-password" element={<ChangePassword />} />
          </Routes>
        </Layout>
      </HashRouter>
    </UserProvider>
  );
}
