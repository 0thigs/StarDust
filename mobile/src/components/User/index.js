import { useNavigation } from '@react-navigation/core';
import * as C from './styles';
import FirstPlaceIcon from '../../assets/RankingAssets/first-place.svg';
import SecondPlaceIcon from '../../assets/RankingAssets/second-place.svg';
import ThirdPlaceIcon from '../../assets/RankingAssets/third-place.svg';

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

export function User({ position, id, name, avatar, xp, isLoggedUser }) {
  const navigation = useNavigation();
  const isInPodium = position <= 3;
  const Icon = isInPodium && podium.find(place => place.position === position).icon;

  function handleUserCLick() {

    navigation.navigate('Profile', { userId: id });
  }

  return (
    <C.Container activeOpacity={0.7} onClick={handleUserCLick} isLoggedUser={isLoggedUser}>
      <C.Position>{isInPodium ? <Icon /> : position}</C.Position>
      <C.Avatar
        source={{
          uri: `http://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 50)}.jpg`,
        }}
      />
      <C.Name isLoggedUser={isLoggedUser}>{name}</C.Name>
      <C.Xp>{xp} XP</C.Xp>
    </C.Container>
  );
}
