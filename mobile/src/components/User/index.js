import { useNavigation } from '@react-navigation/core';
import * as C from './styles';

const podium = {
  firstPlace: {
    position: 1,
    icon: '',
  },
  secondPlace: {
    position: 2,
    icon: '',
  },
  thirdPlace: {
    position: 3,
    icon: '',
  },
};

export function User({ position, id, name, avatar, xp }) {
  const navigation = useNavigation();
  console.log(name);

  function handleUserCLick() {
    navigation.navigate('Profile', { id, isExternalUser: true });
  }

  return (
    <C.Container activeOpacity={0.7} onClick={handleUserCLick}>
      <C.Position>1</C.Position>
      <C.Avatar source={avatar} />
      <C.Name>Rafael Silva</C.Name>
      <C.Xp>512 XP</C.Xp>
    </C.Container>
  );
}
