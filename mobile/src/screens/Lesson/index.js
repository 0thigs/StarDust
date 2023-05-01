import { useEffect, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { usePlanet } from '../../hooks/usePlanet';

import { Theory } from '../../components/Theory';
import { Quiz } from '../../components/Quiz';
import { End } from '../../components/End';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import * as C from './styles';

export function Lesson({ route }) {
  //   const starId = route?.params?.id;
  const starId = '5b9810e0-b0a8-4ae6-a956-ee0bfd016b15';
  const { planets, getCurrentStar } = usePlanet();
  const [star, setStar] = useState(null);
  const [state, dispatch] = useLesson();
  const [isEndTrasition, setIsEndTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsEndTransition(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!planets.length) return;
    const star = getCurrentStar(starId);
    setStar(star);
    dispatch({ type: 'setQuestions', payload: star.questions });
  }, [planets]);

  return (
    <C.Container>
      {!isEndTrasition ? (
        <TransitionScreenAnimation />
      ) : (
        <>
          {state.currentStage === 'theory' && <Theory title={star.name} allTexts={star.texts} />}
          {state.currentStage === 'quiz' && <Quiz />}
          {state.currentStage === 'end' && (
            <End
              starId={star.id}
              isChallenge={false}
              isCompleted={star.isUnlocked}
              challengeId={null}
              challengeSeconds={null}
              challengeCoins={null}
              challengeXp={null}
              addUserCompletedChallenges={null}
            />
          )}
        </>
      )}
    </C.Container>
  );
}
