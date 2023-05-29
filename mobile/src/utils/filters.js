import { Minus, CheckCircle, Circle, Target, User } from 'react-native-feather';
import theme from '../global/styles/theme';
const iconSize = 12;

export const filters = [
  {
    type: 'isCompleted',
    label: 'status',
    options: [
      {
        title: 'Resolvido',
        icon: <CheckCircle fontSize={iconSize} color={theme.colors.green_300} />,
        color: null,
      },
      {
        title: 'Não resolvido',
        icon: <Circle fontSize={iconSize} color={theme.colors.gray_500} />,
        color: null,
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
    type: 'categories',
    label: 'categorias',
    options: [
      {
        title: 'Fundamentos',
        icon: null,
        color: null,
      },
      {
        title: 'Textos',
        icon: null,
        color: null,
      },
      {
        title: 'Funções',
        icon: null,
        color: null,
      },
    ],
  },
];
