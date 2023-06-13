import { useAvatar } from '../../hooks/useAvatar';
import { useImageUri } from '../../hooks/useImageUri';
import { useNavigation } from '@react-navigation/core';

import FirstPlaceIcon from '../../assets/RankingAssets/first-place.svg';
import SecondPlaceIcon from '../../assets/RankingAssets/second-place.svg';
import ThirdPlaceIcon from '../../assets/RankingAssets/third-place.svg';
import * as C from './styles';
import { UserAvatar } from '../UserAvatar';

const podium = [
  {
    position: 1,
    icon: FirstPlaceIcon,
  },
  {
    position: 2,
    icon: SecondPlaceIcon,
  },
  {
    position: 3,
    icon: ThirdPlaceIcon,
  },
];

export function User({ position, id, name, avatar_id, xp, isLoggedUser, lastPositions }) {
  const navigation = useNavigation();
  const isInPodium = position <= 3;
  const isInSafeArea = position <= 5;
  const isInDangerArea = position > lastPositions;

  const Icon = isInPodium && podium.find(place => place.position === position).icon;

  function handleUserPress() {
    if (!id) return;
    navigation.navigate('Profile', { userId: id });
  }

  return (
    <C.Container activeOpacity={0.7} onPress={handleUserPress} isLoggedUser={isLoggedUser}>
      <C.Position color={isInSafeArea ? 'green_700' : isInDangerArea ? 'red_700' : 'gray_700'}>
        {isInPodium ? <Icon /> : position}
      </C.Position>
      <UserAvatar avatarId={avatar_id} size={50} />
      <C.Name isLoggedUser={isLoggedUser}>{name}</C.Name>
      <C.Xp>{xp} XP</C.Xp>
    </C.Container>
  );
}
