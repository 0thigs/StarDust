import { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ChallengeHeader } from '../../components/ChallengeHeader';
import { Code } from '../../components/Code';
import { Problem } from '../../components/Problem';
import { Result } from '../../components/Result';
import { Slider } from '../../components/Slider';
import { End } from '../../components/End';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';

import { execute } from '../../libs/delegua.mjs';
import { Toast } from 'toastify-react-native';

import { useSharedValue } from 'react-native-reanimated';
import { useChallenge } from '../../hooks/useChallenge';
import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';

const earningsByDifficulty = {
  easy: {
    coins: 20,
    xp: 10,
  },
  medium: {
    coins: 30,
    xp: 20,
  },
  hard: {
    coins: 40,
    xp: 30, 
  },
};

export function Challenge({ route }) {
    // const challengeId = route.params.id;
  const challengeId = '56373af2-ac24-4bcd-a312-7d01bd7b5f53';
  const { loggedUser } = useAuth();
  const { challenge, addUserCompletedChallenges } = useChallenge(challengeId, loggedUser.id);
  const {
    id,
    title,
    texts,
    code,
    function_name,
    test_cases,
    difficulty,
    star_id,
    topic_id,
    isCompleted,
  } = challenge;
  const [slides, setSlides] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [userOutputs, setUserOutputs] = useState([]);

  const [isEnd, setIsEnd] = useState(false);
  const [isEndTrasition, setIsEndTransition] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const sliderRef = useRef(null);
  const seconds = useRef(0);
  const userCode = useRef('');
  const userOutputArray = useRef([]);
  const isOutputArray = useRef([]);

  const CurrentIndicatorPositionX = useSharedValue(0);

  function handleSliderScroll({ nativeEvent: { contentOffset } }) {
    CurrentIndicatorPositionX.value = contentOffset.x / 3;
  }

  function goToCode() {
    sliderRef.current.scrollToIndex({
      index: 1,
      animated: true,
    });
  }

  function handleError(error) {
    if (error) {
      console.error(error);
      Toast.error(error.includes('null') ? 'código inválido' : error);
    }
  }

  function addUserOutput(userOutput) {
    userOutputArray.current.push(userOutput.trim());
  }

  function formatCode(code, inputValues) {
    if (function_name) {
      const paramsValues = inputValues.map(value =>
        Array.isArray(value) ? `[${value.join(',')}]` : value
      );
      const params = '(' + paramsValues.join(',') + ')';
      return code.concat('\n' + function_name + params + ';');
    }

    if (!inputValues) return code;
    const regex = /(leia\(\))/g;
    const matches = code.match(regex);
    if (!matches) {
      Toast.error('Não remova o comando Leia()!');
      throw new Error('Não remova o comando Leia()!');
    }

    inputValues.forEach(value => (code = code.replace(/(leia\(\))/, value)));
    return code;
  }

  function handleResult(result) {
    if (!result) return;
    const userResult = result.includes('{') ? JSON.parse(result) : result;
    setUserOutputs(currentUserOutputs => {
      return [...currentUserOutputs, userResult.valor ? userResult.valor : userResult];
    });
    isOutputArray.current.push(!!userResult.valor);
  }

  async function verifyCase({ input }) {
    userOutputArray.current = [];
    const code = formatCode(userCode.current, input);

    try {
      const { erros, resultado } = await execute(code, addUserOutput);
      if (erros.length) {
        const error = erros[0];
        if (error instanceof Error) throw error;
        throw error.erroInterno;
      }

      if (erros.length) return;

      if (userOutputArray.current && !function_name) {
        setUserOutputs(currentUserOutputs => {
          return [...currentUserOutputs, userOutputArray.current];
        });
        return;
      }

      handleResult(resultado.slice(-1)[0]); // {"valor":1,"tipo":"número"};
    } catch (error) {
      handleError(error.message);
    }
  }

  async function handleUserCode() {
    setUserOutputs([]);

    for (const testCase of test_cases) {
      await verifyCase(testCase);
    }
    setIsRunning(false);
  }

  useFocusEffect(
    useCallback(() => {
      setIsEnd(false);
    }, [])
  );

  useEffect(() => {
    if (!Object.entries(challenge).length) return;
    const slides = [
      {
        id: 1,
        component: <Problem title={title} texts={texts} goToCode={goToCode} />,
      },
      {
        id: 2,
        component: (
          <Code
            code={code}
            handleUserCode={handleUserCode}
            userCode={userCode}
            isRunning={isRunning}
          />
        ),
      },
      {
        id: 3,
        component: (
          <Result
            challengeId={id}
            setIsEnd={setIsEnd}
            testCases={test_cases}
            userOutputs={userOutputs}
            isOutputArray={isOutputArray}
            goToCode={goToCode}
          />
        ),
      },
    ];
    setSlides(slides);
  }, [challenge, userOutputs]);

  useEffect(() => {
    if (userOutputs.length) {
      sliderRef.current.scrollToEnd();
      setCurrentSlideIndex(2);
    }
  }, [userOutputs]);

  useEffect(() => {
    let timer = null;
    if (!isEnd) {
      timer = setTimeout(() => seconds.current++, 1000);
    }
    return () => clearTimeout(timer);
  }, [seconds.current]);

  useEffect(() => {
    let timer = setTimeout(() => setIsEndTransition(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <C.Container>
      {!isEndTrasition ? (
        <TransitionScreenAnimation />
      ) : (
        <>
          {!isEnd ? (
            <>
              <ChallengeHeader
                title={title}
                sliderRef={sliderRef}
                CurrentIndicatorPositionX={CurrentIndicatorPositionX}
                currentSlideIndex={currentSlideIndex}
                topicId={topic_id}
                userCode={userCode}
              />

              <Slider
                sliderRef={sliderRef}
                slides={slides}
                onScroll={handleSliderScroll}
                setCurrentSlideIndex={setCurrentSlideIndex}
              />
            </>
          ) : (
            <End
              starId={star_id}
              challengeId={id}
              challengeCoins={earningsByDifficulty[difficulty].coins / (isCompleted ? 2 : 1)}
              challengeXp={earningsByDifficulty[difficulty].xp / (isCompleted ? 2 : 1)}
              challengeSeconds={seconds.current}
              isCompleted={isCompleted}
              addUserCompletedChallenges={addUserCompletedChallenges}
            />
          )}
        </>
      )}
    </C.Container>
  );
}
