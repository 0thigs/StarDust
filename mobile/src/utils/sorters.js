import { Minus, CheckCircle, Circle, Target, User } from 'react-native-feather';
import theme from '../global/styles/theme';
const iconSize = 12;

export const sorters = [
  {
    type: 'status',
    label: 'status',
    options: [
      {
        title: 'Todos',
        icon: <Minus fontSize={iconSize} color={theme.colors.white} />,
        color: theme.colors.green_300,
      },
      {
        title: 'Resolvido',
        icon: <CheckCircle fontSize={iconSize} color={theme.colors.green_300} />,
        color: theme.colors.yellow_300,
      },
      {
        title: 'Não resolvido',
        icon: <Circle fontSize={iconSize} color={theme.colors.gray_500} />,
        color: theme.colors.red_300,
      },
    ],
  },
  {
    type: 'difficulty',
    label: 'dificuldade',
    options: [
      {
        title: 'Fácil',
        icon: null,
        color: theme.colors.green_300,
      },
      {
        title: 'Médio',
        icon: null,
        color: theme.colors.yellow_300,
      },
      {
        title: 'Difícil',
        icon: null,
        color: theme.colors.red_300,
      },
    ],
  },
  {
    type: 'tags',
    label: 'tags',
    options: [
      {
        title: 'Fundamentos',
        icon: null,
        color: theme.colors.gray_500,
      },
      {
        title: 'Textos',
        icon: null,
        color: theme.colors.gray_500,
      },
      {
        title: 'Funções',
        icon: null,
        color: theme.colors.gray_500,
      },
    ],
  },
];
