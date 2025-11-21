import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'dart:async';
// import 'package:qr_code_scanner/qr_code_scanner.dart'; // In a real app, we would use this.

class QRScannerScreen extends StatefulWidget {
  const QRScannerScreen({super.key});

  @override
  State<QRScannerScreen> createState() => _QRScannerScreenState();
}

class _QRScannerScreenState extends State<QRScannerScreen> with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<double> _animation;
  // QRViewController? controller; // For real scanning
  // final GlobalKey qrKey = GlobalKey(debugLabel: 'QR');

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      duration: const Duration(seconds: 3),
      vsync: this,
    )..repeat(reverse: true);
    _animation = Tween<double>(begin: 0, end: 1).animate(_animationController);

    // Mock scanning delay
    Timer(const Duration(seconds: 3), () {
      if (mounted) {
        context.pushReplacement('/machine-detail/05');
      }
    });
  }

  @override
  void dispose() {
    _animationController.dispose();
    // controller?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          // Background Image (Mock)
          Positioned.fill(
            child: Opacity(
              opacity: 0.4,
              child: Container(
                decoration: const BoxDecoration(
                  image: DecorationImage(
                    image: NetworkImage("https://lh3.googleusercontent.com/aida-public/AB6AXuArpulFG8RehjuYtdCorL3gL7d-0rkA4OosHtxuVahXMZtEbx8bxa3Ap7D-mE5-AOuWGh7v0eOqX4SAYGtllBPkRs4WL78exBNZ2omPlhPBpGBtJNLC1gt4A1Ay11gdKZOCRCt1s075cg2L3ftzOi7nyLCf1BWhZ9g4fxvDcjpwg37ohvt6bg7ST32LKfBd9X7n-YCHnOmJF23ElrkxYYTAIn5mq5rinbsu_lkz4qNSurg-zhA_bqwAyuWRH1SZAAW6mEZJ6Z8DQY0m"),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
          ),
          // Dark Gradient Overlay
          Positioned.fill(
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: RadialGradient(
                  colors: [Colors.transparent, Colors.black.withOpacity(0.8), Colors.black],
                  stops: const [0.2, 0.6, 1.0],
                  center: Alignment.center,
                  radius: 1.0,
                ),
              ),
            ),
          ),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      IconButton(
                        onPressed: () => context.go('/home'),
                        icon: const Icon(Icons.close, color: Colors.white, size: 32),
                        style: IconButton.styleFrom(backgroundColor: Colors.black38),
                      ),
                      IconButton(
                        onPressed: () {},
                        icon: const Icon(Icons.flashlight_on, color: Colors.white, size: 32),
                        style: IconButton.styleFrom(backgroundColor: Colors.black38),
                      ),
                    ],
                  ),
                ),
                const Spacer(),
                // Scanner Frame
                Center(
                  child: Stack(
                    children: [
                      Container(
                        width: 280,
                        height: 280,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(24),
                        ),
                      ),
                      // Corners
                      Positioned(top: 0, left: 0, child: _buildCorner()),
                      Positioned(top: 0, right: 0, child: Transform.rotate(angle: 1.57, child: _buildCorner())),
                      Positioned(bottom: 0, right: 0, child: Transform.rotate(angle: 3.14, child: _buildCorner())),
                      Positioned(bottom: 0, left: 0, child: Transform.rotate(angle: 4.71, child: _buildCorner())),
                      // Laser
                      AnimatedBuilder(
                        animation: _animation,
                        builder: (context, child) {
                          return Positioned(
                            top: _animation.value * 280,
                            left: 0,
                            right: 0,
                            child: Container(
                              height: 2,
                              color: const Color(0xFF4169E1),
                              boxShadow: const [
                                BoxShadow(color: Color(0xFF4169E1), blurRadius: 10, spreadRadius: 2),
                              ],
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 32),
                const Text(
                  'Makine üzerindeki QR kodu okutun',
                  style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold),
                  textAlign: TextAlign.center,
                ),
                const Spacer(),
                Padding(
                  padding: const EdgeInsets.only(bottom: 32.0),
                  child: TextButton(
                    onPressed: () => context.push('/enter-machine-id'),
                    style: TextButton.styleFrom(
                      backgroundColor: Colors.white.withOpacity(0.1),
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                    ),
                    child: const Text('Makine ID\'sini Elle Girin', style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCorner() {
    return Container(
      width: 40,
      height: 40,
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(color: Color(0xFF4169E1), width: 4),
          left: BorderSide(color: Color(0xFF4169E1), width: 4),
        ),
        borderRadius: BorderRadius.only(topLeft: Radius.circular(24)),
      ),
    );
  }
}
