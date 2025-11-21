import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../providers/user_provider.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _showReportModal = false;
  String _reportType = 'fault';
  final _descriptionController = TextEditingController();

  void _handleReportSubmit() {
    // Mock submission
    setState(() {
      _showReportModal = false;
    });
    _descriptionController.clear();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Bildiriminiz başarıyla gönderildi.')),
    );
  }

  @override
  void dispose() {
    _descriptionController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final userProvider = Provider.of<UserProvider>(context);
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Ayarlar'),
        centerTitle: true,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: isDark ? Colors.white : Colors.black),
          onPressed: () => context.pop(),
        ),
      ),
      body: Stack(
        children: [
          ListView(
            padding: const EdgeInsets.all(16),
            children: [
              _buildSectionHeader(context, 'HESAP'),
              _buildSectionContainer(
                context,
                children: [
                  _buildListTile(
                    context,
                    icon: Icons.person,
                    title: 'Profili Düzenle',
                    onTap: () => context.push('/profile/edit'),
                  ),
                  _buildDivider(context),
                  _buildListTile(
                    context,
                    icon: Icons.lock,
                    title: 'Şifreyi Değiştir',
                    onTap: () => context.push('/settings/change-password'),
                  ),
                ],
              ),
              const SizedBox(height: 24),
              _buildSectionHeader(context, 'BİLDİRİMLER'),
              _buildSectionContainer(
                context,
                children: [
                  _buildSwitchTile(
                    context,
                    icon: Icons.notifications,
                    title: 'Hatırlatma (5 dk kaldı)',
                    value: userProvider.settings.reminder,
                    onChanged: (_) => userProvider.toggleSetting('reminder'),
                  ),
                  _buildDivider(context),
                  _buildSwitchTile(
                    context,
                    icon: Icons.check_circle,
                    title: 'Yıkama Bitti',
                    value: userProvider.settings.washFinished,
                    onChanged: (_) => userProvider.toggleSetting('washFinished'),
                  ),
                ],
              ),
              const SizedBox(height: 24),
              _buildSectionHeader(context, 'UYGULAMA'),
              _buildSectionContainer(
                context,
                children: [
                  _buildSwitchTile(
                    context,
                    icon: Icons.dark_mode,
                    title: 'Karanlık Mod',
                    value: userProvider.settings.darkMode,
                    onChanged: (_) => userProvider.toggleSetting('darkMode'),
                  ),
                ],
              ),
              const SizedBox(height: 24),
              _buildSectionHeader(context, 'DESTEK'),
              _buildSectionContainer(
                context,
                children: [
                  _buildListTile(
                    context,
                    icon: Icons.report_problem,
                    title: 'Sorun Bildir',
                    onTap: () => setState(() => _showReportModal = true),
                  ),
                ],
              ),
              const SizedBox(height: 32),
              SizedBox(
                width: double.infinity,
                child: TextButton(
                  onPressed: () => context.go('/login'),
                  style: TextButton.styleFrom(
                    backgroundColor: Theme.of(context).cardColor,
                    foregroundColor: Colors.red,
                    padding: const EdgeInsets.all(16),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: const Text('Çıkış Yap', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                ),
              ),
              const SizedBox(height: 24),
            ],
          ),
          if (_showReportModal) _buildReportModal(context),
        ],
      ),
    );
  }

  Widget _buildSectionHeader(BuildContext context, String title) {
    return Padding(
      padding: const EdgeInsets.only(left: 8, bottom: 8),
      child: Text(
        title,
        style: TextStyle(
          fontSize: 12,
          fontWeight: FontWeight.bold,
          color: Colors.grey[600],
        ),
      ),
    );
  }

  Widget _buildSectionContainer(BuildContext context, {required List<Widget> children}) {
    return Container(
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
      child: Column(children: children),
    );
  }

  Widget _buildListTile(BuildContext context, {required IconData icon, required String title, required VoidCallback onTap}) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(12),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: isDark ? Colors.grey[700] : Colors.grey[100],
                borderRadius: BorderRadius.circular(8),
              ),
              child: Icon(icon, size: 20, color: Colors.grey[600]),
            ),
            const SizedBox(width: 16),
            Expanded(child: Text(title, style: const TextStyle(fontWeight: FontWeight.w500))),
            const Icon(Icons.chevron_right, color: Colors.grey),
          ],
        ),
      ),
    );
  }

  Widget _buildSwitchTile(BuildContext context, {required IconData icon, required String title, required bool value, required ValueChanged<bool> onChanged}) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: isDark ? Colors.grey[700] : Colors.grey[100],
              borderRadius: BorderRadius.circular(8),
            ),
            child: Icon(icon, size: 20, color: Colors.grey[600]),
          ),
          const SizedBox(width: 16),
          Expanded(child: Text(title, style: const TextStyle(fontWeight: FontWeight.w500))),
          Switch(
            value: value,
            onChanged: onChanged,
            activeColor: Theme.of(context).primaryColor,
          ),
        ],
      ),
    );
  }

  Widget _buildDivider(BuildContext context) {
    return Divider(height: 1, indent: 60, color: Colors.grey.withOpacity(0.2));
  }

  Widget _buildReportModal(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Container(
      color: Colors.black54,
      child: Center(
        child: Container(
          margin: const EdgeInsets.all(24),
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            color: Theme.of(context).cardColor,
            borderRadius: BorderRadius.circular(16),
          ),
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Center(child: Text('Sorun Bildir', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold))),
                const SizedBox(height: 24),
                const Text('Sorun Türü', style: TextStyle(fontWeight: FontWeight.w500)),
                const SizedBox(height: 8),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  decoration: BoxDecoration(
                    color: isDark ? Colors.grey[800] : Colors.grey[50],
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: Colors.grey.withOpacity(0.3)),
                  ),
                  child: DropdownButtonHideUnderline(
                    child: DropdownButton<String>(
                      value: _reportType,
                      isExpanded: true,
                      onChanged: (String? newValue) {
                        setState(() {
                          _reportType = newValue!;
                        });
                      },
                      items: const [
                        DropdownMenuItem(value: 'misuse', child: Text('Yanlış Kullanım')),
                        DropdownMenuItem(value: 'fault', child: Text('Makine Arızası Bildir')),
                        DropdownMenuItem(value: 'other', child: Text('Diğer')),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 16),
                const Text('Açıklama', style: TextStyle(fontWeight: FontWeight.w500)),
                const SizedBox(height: 8),
                TextField(
                  controller: _descriptionController,
                  maxLines: 4,
                  decoration: InputDecoration(
                    hintText: 'Sorunu detaylıca açıklayınız...',
                    filled: true,
                    fillColor: isDark ? Colors.grey[800] : Colors.grey[50],
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide(color: Colors.grey.withOpacity(0.3)),
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                Row(
                  children: [
                    Expanded(
                      child: TextButton(
                        onPressed: () => setState(() => _showReportModal = false),
                        style: TextButton.styleFrom(
                          backgroundColor: isDark ? Colors.grey[800] : Colors.grey[100],
                          foregroundColor: Theme.of(context).textTheme.bodyLarge?.color,
                          padding: const EdgeInsets.symmetric(vertical: 12),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                        child: const Text('İptal', style: TextStyle(fontWeight: FontWeight.bold)),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      flex: 2,
                      child: ElevatedButton(
                        onPressed: _handleReportSubmit,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Theme.of(context).primaryColor,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(vertical: 12),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                        child: const Text('Gönder', style: TextStyle(fontWeight: FontWeight.bold)),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
