import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import 'providers/user_provider.dart';
import 'screens/login_screen.dart';
import 'screens/signup_screen.dart';
import 'screens/forgot_password_screen.dart';
import 'screens/select_room_screen.dart';
import 'screens/room_detail_screen.dart';
import 'screens/machine_detail_screen.dart';
import 'screens/progress_screen.dart';
import 'screens/profile_screen.dart';
import 'screens/edit_profile_screen.dart';
import 'screens/settings_screen.dart';
import 'screens/change_password_screen.dart';
import 'screens/qr_scanner_screen.dart';
import 'screens/enter_machine_id_screen.dart';
import 'screens/points_wallet_screen.dart';
import 'widgets/bottom_nav.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => UserProvider(),
      child: Consumer<UserProvider>(
        builder: (context, userProvider, child) {
          return MaterialApp.router(
            title: 'Yurt Çamaşırhane',
            debugShowCheckedModeBanner: false,
            theme: ThemeData(
              primaryColor: const Color(0xFF4F46E5),
              colorScheme: ColorScheme.fromSeed(
                seedColor: const Color(0xFF4F46E5),
                primary: const Color(0xFF4F46E5),
              ),
              useMaterial3: true,
              scaffoldBackgroundColor: const Color(0xFFF9FAFB),
              cardColor: Colors.white,
              appBarTheme: const AppBarTheme(
                backgroundColor: Colors.transparent,
                elevation: 0,
                iconTheme: IconThemeData(color: Colors.black),
                titleTextStyle: TextStyle(color: Colors.black, fontSize: 20, fontWeight: FontWeight.bold),
              ),
            ),
            darkTheme: ThemeData(
              brightness: Brightness.dark,
              primaryColor: const Color(0xFF4F46E5),
              colorScheme: ColorScheme.fromSeed(
                seedColor: const Color(0xFF4F46E5),
                brightness: Brightness.dark,
                primary: const Color(0xFF4F46E5),
              ),
              scaffoldBackgroundColor: const Color(0xFF111827),
              cardColor: const Color(0xFF1F2937),
              useMaterial3: true,
              appBarTheme: const AppBarTheme(
                backgroundColor: Colors.transparent,
                elevation: 0,
                iconTheme: IconThemeData(color: Colors.white),
                titleTextStyle: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
              ),
            ),
            themeMode: userProvider.settings.darkMode ? ThemeMode.dark : ThemeMode.light,
            routerConfig: _router,
          );
        },
      ),
    );
  }
}

final _router = GoRouter(
  initialLocation: '/login',
  routes: [
    GoRoute(
      path: '/login',
      builder: (context, state) => const LoginScreen(),
    ),
    GoRoute(
      path: '/signup',
      builder: (context, state) => const SignupScreen(),
    ),
    GoRoute(
      path: '/forgot-password',
      builder: (context, state) => const ForgotPasswordScreen(),
    ),
    GoRoute(
      path: '/qr-scanner',
      builder: (context, state) => const QRScannerScreen(),
    ),
    GoRoute(
      path: '/enter-machine-id',
      builder: (context, state) => const EnterMachineIdScreen(),
    ),
    GoRoute(
      path: '/machine-detail/:id',
      builder: (context, state) => MachineDetailScreen(id: state.pathParameters['id']!),
    ),
    GoRoute(
      path: '/settings/change-password',
      builder: (context, state) => const ChangePasswordScreen(),
    ),
    GoRoute(
      path: '/profile/edit',
      builder: (context, state) => const EditProfileScreen(),
    ),
    GoRoute(
      path: '/points-wallet',
      builder: (context, state) => const PointsWalletScreen(),
    ),
    GoRoute(
      path: '/settings',
      builder: (context, state) => const SettingsScreen(),
    ),
    ShellRoute(
      builder: (context, state, child) => BottomNav(child: child),
      routes: [
        GoRoute(
          path: '/home',
          builder: (context, state) => const SelectRoomScreen(),
        ),
        GoRoute(
          path: '/room/:roomId',
          builder: (context, state) => RoomDetailScreen(roomId: state.pathParameters['roomId']!),
        ),
        GoRoute(
          path: '/progress',
          builder: (context, state) => const ProgressScreen(),
        ),
        GoRoute(
          path: '/profile',
          builder: (context, state) => const ProfileScreen(),
        ),
      ],
    ),
  ],
);
