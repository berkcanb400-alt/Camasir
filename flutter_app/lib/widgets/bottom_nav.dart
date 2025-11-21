import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class BottomNav extends StatelessWidget {
  const BottomNav({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    // We need to determine the current index based on the route location
    // But since we are wrapping the child, we can just display the child and the bottom nav.
    // However, with GoRouter's ShellRoute, we usually access navigation via context.go

    // For simplicity in this mock conversion, let's assume we can determine index from route
    final String location = GoRouterState.of(context).uri.toString();

    int currentIndex = 0;
    if (location.startsWith('/home') || location.startsWith('/room') || location.startsWith('/machine-detail')) {
      currentIndex = 0;
    } else if (location.startsWith('/progress')) {
      currentIndex = 1;
    } else if (location.startsWith('/profile') || location.startsWith('/settings')) {
      currentIndex = 2;
    }

    return Scaffold(
      body: child,
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: currentIndex,
        onTap: (index) {
          switch (index) {
            case 0:
              context.go('/home');
              break;
            case 1:
              context.go('/progress');
              break;
            case 2:
              context.go('/profile');
              break;
          }
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home_outlined),
            activeIcon: Icon(Icons.home),
            label: 'Ana Sayfa',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.local_laundry_service_outlined),
            activeIcon: Icon(Icons.local_laundry_service),
            label: 'Yıkamalarım',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person_outline),
            activeIcon: Icon(Icons.person),
            label: 'Profil',
          ),
        ],
        selectedItemColor: Theme.of(context).primaryColor,
        unselectedItemColor: Colors.grey,
        showUnselectedLabels: true,
        type: BottomNavigationBarType.fixed,
      ),
    );
  }
}
