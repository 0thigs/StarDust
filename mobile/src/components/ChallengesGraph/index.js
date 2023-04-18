import { useEffect, useState } from 'react';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { useChallenge } from '../../hooks/useChallenge';
import theme from '../../global/styles/theme';
import * as C from './styles';

const props = {
  activeStrokeWidth: 16,
  inActiveStrokeWidth: 24,
  inActiveStrokeOpacity: 0.2,
};

export function ChallengesGraph() {
  const { challenges } = useChallenge();
  const [totalChallengesByDifficulty, setTotalChallengesByDifficulty] = useState([]);

  function getCompletedChallengesCount() {
    return challenges.filter(challenge => challenge.isCompleted).length;
  }

  function getCompletedChallengesCountByDifficulty(difficulty) {
    return challenges.filter(
      challenge => challenge.difficulty === difficulty && challenge.isCompleted
    ).length;
  }

  function getCompletedChallengesPercentageByDifficulty(difficulty) {
    const totalChallenges = totalChallengesByDifficulty[difficulty];
    if (totalChallenges === 0) return 0;
    return (getCompletedChallengesCountByDifficulty() / challenges.length) * 100;
  }

  function countChallengesByDifficulty() {
    let totalChallengesByDifficulty = {
      easy: 0,
      medium: 0,
      hard: 0,
    };

    for (const difficulty in totalChallengesByDifficulty) {
      totalChallengesByDifficulty[difficulty] = challenges.filter(
        challenge => challenge.difficulty === difficulty
      ).length;
    }

    setTotalChallengesByDifficulty(totalChallengesByDifficulty);
  }

  useEffect(() => {
    if (!challenges.length) return;
    // console.log(getCompletedChallengesPercentageByDifficulty('hard'));

    countChallengesByDifficulty();
  }, [challenges]);

  return (
    <C.Container>
      <C.Graph>
        <CircularProgressBase
          {...props}
          value={60}
          radius={80}
          activeStrokeColor={theme.colors.green_500}
          inActiveStrokeColor={theme.colors.green_500}
        >
          <CircularProgressBase
            {...props}
            value={getCompletedChallengesPercentageByDifficulty('medium')}
            radius={60}
            activeStrokeColor={theme.colors.yellow_300}
            inActiveStrokeColor={theme.colors.yellow_300}
          >
            <CircularProgressBase
              {...props}
              value={getCompletedChallengesPercentageByDifficulty('hard')}
              radius={40}
              activeStrokeColor={theme.colors.red_300}
              inActiveStrokeColor={theme.colors.red_300}
            />
          </CircularProgressBase>
        </CircularProgressBase>
        <C.Count>{getCompletedChallengesCount()}</C.Count>
      </C.Graph>
      <C.Legends>
        <C.Legend>
          <C.Dash color={theme.colors.green_500} />
          <C.Label>Fácil</C.Label>
          <C.Fraction>
            <C.Numerator color={theme.colors.green_500}>
              {getCompletedChallengesCountByDifficulty('easy')}
            </C.Numerator>
            <C.Denominator>/{totalChallengesByDifficulty.easy}</C.Denominator>
          </C.Fraction>
        </C.Legend>
        <C.Legend>
          <C.Dash color={theme.colors.yellow_300} />
          <C.Label>Médio</C.Label>
          <C.Fraction>
            <C.Numerator color={theme.colors.yellow_300}>
              {getCompletedChallengesCountByDifficulty('medium')}
            </C.Numerator>
            <C.Denominator>/{totalChallengesByDifficulty.medium}</C.Denominator>
          </C.Fraction>
        </C.Legend>
        <C.Legend>
          <C.Dash color={theme.colors.red_300} />
          <C.Label>Difícil</C.Label>
          <C.Fraction>
            <C.Numerator color={theme.colors.red_300}>
              {getCompletedChallengesCountByDifficulty('hard')}
            </C.Numerator>
            <C.Denominator>/{totalChallengesByDifficulty.hard}</C.Denominator>
          </C.Fraction>
        </C.Legend>
      </C.Legends>
    </C.Container>
  );
}
