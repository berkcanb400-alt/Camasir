import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class SelectRoomScreen extends StatelessWidget {
  const SelectRoomScreen({super.key});

  final List<Map<String, dynamic>> rooms = const [
    {'id': 'block-a-ground', 'name': 'A Blok - Zemin Kat', 'available': 3, 'total': 8, 'status': 'available'},
    {'id': 'block-a-1st', 'name': 'A Blok - 1. Kat', 'available': 1, 'total': 6, 'status': 'busy'},
    {'id': 'block-b-ground', 'name': 'B Blok - Zemin Kat', 'available': 0, 'total': 8, 'status': 'full'},
    {'id': 'block-b-1st', 'name': 'B Blok - 1. Kat', 'available': 4, 'total': 8, 'status': 'available'},
    {'id': 'block-c-ground', 'name': 'C Blok - Zemin Kat', 'available': 2, 'total': 6, 'status': 'available'},
    {'id': 'commons', 'name': 'Ortak Bina', 'available': 6, 'total': 12, 'status': 'available'},
  ];

  Color _getStatusColor(String status) {
    switch (status) {
      case 'available':
        return const Color(0xFF28A745); // Green
      case 'busy':
        return const Color(0xFFFFA500); // Orange
      case 'full':
        return const Color(0xFFDC3545); // Red
      default:
        return Colors.grey;
    }
  }

  String _getStatusText(Map<String, dynamic> room) {
    if (room['status'] == 'full') return 'Tamamen Dolu';
    return '${room['available']} Makine Uygun';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Çamaşırhane Seçin', style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold)),
        backgroundColor: Theme.of(context).scaffoldBackgroundColor,
        elevation: 0,
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications_outlined),
            color: Colors.grey,
            onPressed: () {},
          ),
        ],
        bottom: PreferredSize(
            preferredSize: const Size.fromHeight(1.0),
            child: Container(color: Colors.grey.shade200, height: 1.0),
        ),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: rooms.length,
        itemBuilder: (context, index) {
          final room = rooms[index];
          return Padding(
            padding: const EdgeInsets.only(bottom: 16.0),
            child: InkWell(
              onTap: () => context.push('/room/${room['id']}'),
              borderRadius: BorderRadius.circular(12),
              child: Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Theme.of(context).cardColor,
                  borderRadius: BorderRadius.circular(12),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.05),
                      blurRadius: 5,
                      offset: const Offset(0, 2),
                    ),
                  ],
                ),
                child: Row(
                  children: [
                    Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        color: Theme.of(context).primaryColor.withOpacity(0.1),
                        shape: BoxShape.circle,
                      ),
                      child: Icon(
                        Icons.local_laundry_service,
                        color: Theme.of(context).primaryColor,
                      ),
                    ),
                    const SizedBox(width: 16),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            room['name'],
                            style: const TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            _getStatusText(room),
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w500,
                              color: _getStatusColor(room['status']),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const Icon(Icons.chevron_right, color: Colors.grey),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
