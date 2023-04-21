import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';

import HomeIcon from '../../assets/TabAssets/home-tab-icon.svg';
import ShopIcon from '../../assets/TabAssets/shop-tab-icon.svg';
import ChallengesIcon from '../../assets/TabAssets/challenges-tab-icon.svg';
import ProfileIcon from '../../assets/TabAssets/profile-tab-icon.svg';
import RankingIcon from '../../assets/TabAssets/ranking-tab-icon.svg';

const screens = [
  {
    name: 'Home',
    label: 'Aprender',
    Icon: HomeIcon,
  },
  {
    name: 'Challenges',
    label: 'Desafios',
    Icon: ChallengesIcon,
  },
  {
    name: 'Shop',
    label: 'Loja',
    Icon: ShopIcon,
  },
  {
    name: 'Profile',
    label: 'Perfil',
    Icon: ProfileIcon,
  },
  {
    name: 'Ranking',
    label: 'Ranking',
    Icon: RankingIcon,
  },
];
const iconSize = 50;

export function CustomTabBar({ state, navigation }) {
  const { loggedUser } = useAuth();

  function goTo(screenName) {
    navigation.navigate(screenName, {
      userId: screenName === 'Profile' ? loggedUser.id : undefined,
    });
  }

  return (
    <C.Container>
      {screens.map(({ name, label, Icon }, index) => (
        <C.TabButton key={name} onPress={() => goTo(name)}>
          <Icon
            style={{ opacity: state.index === index ? 1 : 0.8 }}
            width={iconSize}
            height={iconSize}
          />
          <C.TabLabel isActive={state.index === index}>{label}</C.TabLabel>
        </C.TabButton>
      ))}
    </C.Container>
  );
}
