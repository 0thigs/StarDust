import { BarChart, CheckCircle, Circle, Target, User } from 'react-native-feather';
import { Button } from '../Button';
import theme from '../../global/styles/theme';
import * as C from './styles';
const iconColor = theme.colors.gray_500;
const iconSize = 12;

export function Challenge({
  title,
  difficulty,
  likes,
  votes,
  totalCompletions,
  author,
  categories,
  isCompleted,
}) {
  function getAcceptanceRate() {
    return (likes / votes) * 100;
  }

  return (
    <C.Container>
      <C.Header>
        <C.Difficulty difficulty={difficulty}>
          <C.DifficultyName difficulty={difficulty}>{difficulty}</C.DifficultyName>
        </C.Difficulty>
        <C.Title>{title}</C.Title>
      </C.Header>
      <C.Info>
        <C.Status>
          {isCompleted ? (
            <CheckCircle color={theme.colors.green_500} fontSize={iconSize} />
          ) : (
            <Circle color={iconColor} fontSize={iconSize} />
          )}

          <C.StatusText isCompleted={isCompleted}>
            {isCompleted ? 'Resolvido' : 'Não resolvido'}
          </C.StatusText>
        </C.Status>
        <C.Status>
          <BarChart color={iconColor} fontSize={iconSize} />
          <C.StatusText>{getAcceptanceRate()}%</C.StatusText>
        </C.Status>
        <C.Status>
          <Target color={iconColor} fontSize={iconSize} />
          <C.StatusText>{totalCompletions}</C.StatusText>
        </C.Status>
        <C.Status>
          <User color={iconColor} fontSize={iconSize} />
          <C.StatusText>{author}</C.StatusText>
        </C.Status>
      </C.Info>
      <C.CategoriesList>
        {categories.map(category => (
          <C.Category key={category}>{category}</C.Category>
        ))}
      </C.CategoriesList>
      <Button
        title={isCompleted ? 'Praticar' : 'Resolver'}
        color={theme.colors.black}
        background={theme.colors.green_500}
        isSmall
      />
    </C.Container>
  );
}
