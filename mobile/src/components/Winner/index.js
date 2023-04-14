
import { Animation } from '../Animation';
import { useAvatar } from '../../hooks/useAvatar';
import { UserAvatar } from '../UserAvatar';

import RewardLight from '../../assets/animations/reward-light-animation.json';
import FirstPlaceIcon from '../../assets/RankingAssets/first-place.svg';
import SecondPlaceIcon from '../../assets/RankingAssets/second-place.svg';
import ThirdPlaceIcon from '../../assets/RankingAssets/third-place.svg';

import theme from '../../global/styles/theme';
import * as C from './styles';

const podium = [
  {
    position: 1,
    color: theme.colors.yellow_300,
    order: '1st',
    Icon: FirstPlaceIcon,
  },
  {
    position: 2,
    color: theme.colors.gray_500,
    order: '2nd',
    Icon: SecondPlaceIcon,
  },
  {
    position: 3,
    color: theme.colors.yellow_700,
    order: '3rd',
    Icon: ThirdPlaceIcon,
  },
];

export function Winner({ name, avatarId, xp, position }) {
  const { color, order, Icon } = podium.find(color => color.position === position);

  return (
    <C.Container color={color} order={order}>
      {position === 1 && (
        <Animation
          source={RewardLight}
          autoPlay={true}
          loop={true}
          size={220}
          isAbsolute={true}
          top={-15}
          left={-14}
        />
      )}
      <UserAvatar avatarId={avatarId} size={70} />
      <C.Name>{name}</C.Name>
      <Icon />
      <C.Position color={color} _position={position} animation={'fadeInUp'} delay={250 * position}>
        <C.Number>{order}</C.Number>
        <C.Xp color={color}>{xp}XP</C.Xp>
      </C.Position>
    </C.Container>
  );
}
