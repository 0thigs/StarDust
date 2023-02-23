export const achievements = [
  {
    id: 1,
    title: 'Começando a viagem',
    description: 'Termine a primeira fase do StarDust',
    requiredCount: 1,
    icon: require('../assets/AchievementAssets/achievement-1.svg').default,
    metric: 'unlocked_stars_ids',
  },
  {
    id: 2,
    title: 'Início da exploração',
    description: 'Complete o primeiro planeta do StarDust',
    requiredCount: 1,
    icon: require('../assets/AchievementAssets/achievement-2.svg').default,
    metric: 'completed_planets',
  },
  {
    id: 3,
    title: 'Novato',
    description: 'Ganhe 100 XP',
    requiredCount: 100,
    icon: require('../assets/AchievementAssets/achievement-3.svg').default,
    metric: 'xp',
  },
  {
    id: 4,
    title: 'Principiante',
    description: 'Ganhe 500 XP',
    requiredCount: 500,
    icon: require('../assets/AchievementAssets/achievement-5.svg').default,
    metric: 'xp',
  },
  {
    id: 5,
    title: 'Júnior',
    description: 'Ganhe 1000 XP',
    requiredCount: 1000,
    icon: require('../assets/AchievementAssets/achievement-7.svg').default,
    metric: 'xp',
  },
  {
    id: 6,
    title: 'Pleno',
    description: 'Ganhe 2500 XP',
    requiredCount: 2500,
    icon: require('../assets/AchievementAssets/achievement-8.svg').default,
    metric: 'xp',
  },
  {
    id: 7,
    title: 'Senior',
    description: 'Ganhe 5000 XP',
    requiredCount: 5000,
    icon: require('../assets/AchievementAssets/achievement-9.svg').default,
    metric: 'xp',
  },
  {
    id: 8,
    title: 'Coletor de estrelas',
    description: 'Complete 5 estrelas',
    requiredCount: 5,
    icon: require('../assets/AchievementAssets/achievement-4.svg').default,
    metric: 'unlocked_stars_ids',
  },
  {
    id: 9,
    title: 'Colecionador de estrelas',
    description: 'Complete 10 estrelas',
    requiredCount: 10,
    icon: require('../assets/AchievementAssets/achievement-10.svg').default,
    metric: 'unlocked_stars_ids',
  },
  {
    id: 10,
    title: 'Caçador de estrelas',
    description: 'Complete 20 estrelas',
    requiredCount: 20,
    icon: require('../assets/AchievementAssets/achievement-11.svg').default,
    metric: 'unlocked_stars_ids',
  },
  {
    id: 11,
    title: 'Comprador de primeira viagem',
    description: 'Compre um fogute',
    requiredCount: 1,
    icon: require('../assets/AchievementAssets/achievement-6.svg').default,
    metric: 'acquired_rockets_ids',
  },
  {
    id: 12,
    title: 'Comprador moderado',
    description: 'Compre 5 fogutes',
    requiredCount: 5,
    icon: require('../assets/AchievementAssets/achievement-14.svg').default,
    metric: 'acquired_rockets_ids',
  },
  {
    id: 13,
    title: 'Comprador compulsivo',
    description: 'Compre 10 fogutes',
    requiredCount: 10,
    icon: require('../assets/AchievementAssets/achievement-15.svg').default,
    metric: 'acquired_rockets_ids',
  },
  {
    id: 14,
    title: 'Explorando terras distantes',
    description: 'complete 5 planetas',
    requiredCount: 5,
    icon: require('../assets/AchievementAssets/achievement-12.svg').default,
    metric: 'completed_planets',
  },
  {
    id: 15,
    title: 'Ao infinito e além',
    description: 'complete 9 planetas',
    requiredCount: 9,
    icon: require('../assets/AchievementAssets/achievement-13.svg').default,
    metric: 'completed_planets',
  },
  {
    id: 16,
    title: 'A constância é a base de tudo',
    description: 'Mantenha uma sequência de 5 dias estudados',
    requiredCount: 5,
    icon: require('../assets/AchievementAssets/achievement-16.svg').default,
    metric: 'streak',
  },
  {
    id: 17,
    title: 'A constância é a mãe da excelência',
    description: 'Mantenha uma sequência de 10 dias estudados',
    requiredCount: 10,
    icon: require('../assets/AchievementAssets/achievement-17.svg').default,
    metric: 'streak',
  },
  {
    id: 18,
    title: 'A constância é a força que move universos',
    description: 'Mantenha uma sequência de 20 dias estudados',
    requiredCount: 20,
    icon: require('../assets/AchievementAssets/achievement-18.svg').default,
    metric: 'streak',
  },
];

function checkAchievement(achievement, user) {
  if (user.unlocked_achievements_ids.includes(achievement.id)) {
    return;
  }

  const userCurrentCount = Array.isArray(user[achievement.metric])
    ? user[achievement.metric].length - 1
    : user[achievement.metric];

  const isAchievementUnlocked = userCurrentCount >= achievement.requiredCount;
  if (isAchievementUnlocked) {
    return { ...achievement, isUnlocked: true };
  }
}

export function getUnlockedAchievements(user) {
  return achievements
    .map(achievement => checkAchievement(achievement, user))
    .filter(achievement => achievement !== undefined) // bug fix;
}