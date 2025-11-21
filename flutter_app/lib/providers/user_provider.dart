import 'package:flutter/material.dart';
import '../models/user_model.dart';

class UserProvider with ChangeNotifier {
  UserProfile _profile = UserProfile(
    name: 'Ali Yılmaz',
    phone: '+90 555 123 4567',
    block: 'B Blok',
    room: '305',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDem61dTq12tGSzYskshHdcm8QEpVdPzgNXif7eYQGNs9F4ZqjSx51kSJ5eLbD8YLQkmsXoBAl8wnv-jFCFtzU_w5VgkfTV-IvXsGLPY2BlTVwDSl3pYSM_DI6g524Fn-6nkzSbfwdBOD3kSmGBHpFNFOFBNByOUdCGn42pe8VZvz9eoORj6UwrvJNmiF7l7mlSCs76LtayoRsNTX3RFMC7d4J7-rZNmjuyr5wcRHKsLYLHd2Hlk2d4Kl0PrGoqI4La_1yQ5XJPQ4y8',
    stats: UserStats(
      totalWashes: 12,
      trustScore: '4.9 ★',
      points: 150,
    ),
  );

  AppSettings _settings = AppSettings(
    reminder: true,
    washFinished: false,
    darkMode: false,
  );

  UserProfile get profile => _profile;
  AppSettings get settings => _settings;

  void updateProfile({String? name, String? phone, String? block, String? room, String? avatarUrl}) {
    _profile = _profile.copyWith(
      name: name,
      phone: phone,
      block: block,
      room: room,
      avatarUrl: avatarUrl,
    );
    notifyListeners();
  }

  void toggleSetting(String key) {
    switch (key) {
      case 'reminder':
        _settings = _settings.copyWith(reminder: !_settings.reminder);
        break;
      case 'washFinished':
        _settings = _settings.copyWith(washFinished: !_settings.washFinished);
        break;
      case 'darkMode':
        _settings = _settings.copyWith(darkMode: !_settings.darkMode);
        break;
    }
    notifyListeners();
  }
}
