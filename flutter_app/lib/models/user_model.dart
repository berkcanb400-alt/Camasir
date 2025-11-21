class UserProfile {
  final String name;
  final String phone;
  final String block;
  final String room;
  final String avatarUrl;
  final UserStats stats;

  UserProfile({
    required this.name,
    required this.phone,
    required this.block,
    required this.room,
    required this.avatarUrl,
    required this.stats,
  });

  UserProfile copyWith({
    String? name,
    String? phone,
    String? block,
    String? room,
    String? avatarUrl,
    UserStats? stats,
  }) {
    return UserProfile(
      name: name ?? this.name,
      phone: phone ?? this.phone,
      block: block ?? this.block,
      room: room ?? this.room,
      avatarUrl: avatarUrl ?? this.avatarUrl,
      stats: stats ?? this.stats,
    );
  }
}

class UserStats {
  final int totalWashes;
  final String trustScore;
  final int points;

  UserStats({
    required this.totalWashes,
    required this.trustScore,
    required this.points,
  });
}

class AppSettings {
  final bool reminder;
  final bool washFinished;
  final bool darkMode;

  AppSettings({
    required this.reminder,
    required this.washFinished,
    required this.darkMode,
  });

  AppSettings copyWith({
    bool? reminder,
    bool? washFinished,
    bool? darkMode,
  }) {
    return AppSettings(
      reminder: reminder ?? this.reminder,
      washFinished: washFinished ?? this.washFinished,
      darkMode: darkMode ?? this.darkMode,
    );
  }
}
