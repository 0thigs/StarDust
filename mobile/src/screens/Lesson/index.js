import { useEffect, useRef, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { usePlanet } from '../../hooks/usePlanet';
import { Theory } from '../../components/Theory';
import { Quiz } from '../../components/Quiz';
import { End } from '../../components/End';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import * as C from './styles';
import api from '../../services/api';

export function Lesson({ route }) {
  const starId = route?.params.id;
  //   const starId = '05a206ae-69f0-4263-87a5-1dd0018d15d8';
  const { planets, getCurrentStar, getNextStar } = usePlanet();
  const [star, setStar] = useState(null);
  const [questions, setQuestions] = useState([]);
  const nextStar = useRef(null);
  const [state, dispatch] = useLesson();
  const [isEndTrasition, setIsEndTransition] = useState(false);

  async function fetchQuestions(StarId) {
    const starQuestions = await api.getQuestions(StarId)
    dispatch({ type: 'setQuestions', payload: starQuestions });
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsEndTransition(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!planets.length) return;

    const star = getCurrentStar(starId);
    setStar(star);
    nextStar.current = getNextStar(starId);

    fetchQuestions(star.id)
  }, [planets]);

  return (
    <C.Container>
      {!isEndTrasition ? (
        <TransitionScreenAnimation />
      ) : (
        <>
          {state.currentStage === 'theory' && <Theory title={star.name} allTexts={star.texts.filter(text => text.type !== 'image')} />}
          {state.currentStage === 'quiz' && <Quiz />}
          {state.currentStage === 'end' && (
            <End
              starId={star.id}
              isChallenge={false}
              isCompleted={nextStar.current.isUnlocked}
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
