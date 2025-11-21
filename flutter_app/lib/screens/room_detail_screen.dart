import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class RoomDetailScreen extends StatelessWidget {
  final String roomId;

  const RoomDetailScreen({super.key, required this.roomId});

  String _getRoomName(String id) {
    const names = {
      'block-a-ground': 'A Blok - Zemin Kat',
      'block-a-1st': 'A Blok - 1. Kat',
      'block-b-ground': 'B Blok - Zemin Kat',
      'block-b-1st': 'B Blok - 1. Kat',
      'block-c-ground': 'C Blok - Zemin Kat',
      'commons': 'Ortak Bina'
    };
    return names[id] ?? 'Oda Detayları';
  }

  @override
  Widget build(BuildContext context) {
    final machines = [
      {'id': 1, 'type': 'Washer', 'number': '01', 'status': 'available'},
      {'id': 2, 'type': 'Washer', 'number': '02', 'status': 'in-use', 'time': '24 dk'},
      {'id': 3, 'type': 'Washer', 'number': '03', 'status': 'available'},
      {'id': 4, 'type': 'Dryer', 'number': '04', 'status': 'maintenance'},
      {'id': 5, 'type': 'Dryer', 'number': '05', 'status': 'in-use', 'time': '12 dk'},
      {'id': 6, 'type': 'Dryer', 'number': '06', 'status': 'available'},
      {'id': 7, 'type': 'Washer', 'number': '07', 'status': 'available'},
      {'id': 8, 'type': 'Dryer', 'number': '08', 'status': 'maintenance'},
    ];

    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.white),
          onPressed: () => context.pop(),
        ),
        title: Text(
          _getRoomName(roomId),
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
        ),
        backgroundColor: Theme.of(context).primaryColor,
        centerTitle: true,
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
          childAspectRatio: 1.1,
        ),
        itemCount: machines.length,
        itemBuilder: (context, index) {
          final machine = machines[index];
          return _MachineCard(machine: machine);
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.push('/qr-scanner'),
        backgroundColor: Theme.of(context).primaryColor,
        child: const Icon(Icons.qr_code_scanner, color: Colors.white),
      ),
    );
  }
}

class _MachineCard extends StatelessWidget {
  final Map<String, dynamic> machine;

  const _MachineCard({required this.machine});

  Color _getBackgroundColor(String status) {
    switch (status) {
      case 'available':
        return const Color(0xFFA7F3D0); // Green-200
      case 'in-use':
        return const Color(0xFFFECACA); // Red-200
      case 'maintenance':
        return const Color(0xFFFDE68A); // Amber-200
      default:
        return Colors.grey.shade200;
    }
  }

  Color _getTextColor(String status) {
    switch (status) {
      case 'available':
        return const Color(0xFF065F46); // Green-800
      case 'in-use':
        return const Color(0xFFB91C1C); // Red-800
      case 'maintenance':
        return const Color(0xFFA16207); // Amber-800
      default:
        return Colors.grey.shade700;
    }
  }

  @override
  Widget build(BuildContext context) {
    final status = machine['status'];
    final isClickable = status == 'in-use';
    final bgColor = _getBackgroundColor(status);
    final textColor = _getTextColor(status);
    final typeName = machine['type'] == 'Washer' ? 'Çamaşır' : 'Kurutma';
    final icon = machine['type'] == 'Dryer' ? Icons.dry_cleaning : Icons.local_laundry_service;

    return GestureDetector(
      onTap: isClickable
          ? () => context.push('/machine-detail/${machine['number']}')
          : null,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: bgColor,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 5,
              offset: const Offset(0, 2),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Icon(icon, size: 32, color: textColor),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '$typeName ${machine['number']}',
                  style: TextStyle(
                    color: textColor,
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  status == 'in-use'
                      ? 'Kullanımda: ${machine['time']}'
                      : status == 'available'
                          ? 'Uygun'
                          : 'Bakımda',
                  style: TextStyle(
                    color: textColor,
                    fontWeight: FontWeight.w500,
                    fontSize: 12,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
