import { ReactComponent as Users } from '../assets/icons/user.svg';
import { ReactComponent as Stars } from '../assets/icons/star.svg';
import { ReactComponent as Planet } from '../assets/icons/planet.svg';
import { ReactComponent as Rocket } from '../assets/icons/rocket.svg';
import { ReactComponent as Ranking } from '../assets/icons/ranking.svg';
import { ReactComponent as Challenge } from '../assets/icons/challenge.svg';

export const navButtons = [
  {
    title: 'Usuários',
    Icon: Users,
    page: 'Users',
  },
  {
    title: 'Estrelas',
    Icon: Stars,
    page: 'Stars',
  },
  {
    title: 'Planeta',
    Icon: Planet,
    page: 'Planets',
  },
  {
    title: 'Foguetes',
    Icon: Rocket,
    page: 'Rockets',
  },
  {
    title: 'Desafios',
    Icon: Challenge,
    page: 'Challenges',
  },
  {
    title: 'Rankings',
    Icon: Ranking,
    page: 'Rankings',
  },
];
