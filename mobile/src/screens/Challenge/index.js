import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { ChallengeHeader } from '../../components/ChallengeHeader';
import { Code } from '../../components/Code';
import { Problem } from '../../components/Problem';
import { Result } from '../../components/Result';
import { Slider } from '../../components/Slider';
import { End } from '../../components/End';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';

import { execute } from '../../libs/delegua.mjs';
import ToastMenager, { Toast } from 'toastify-react-native';

import * as C from './styles';
import { useSharedValue } from 'react-native-reanimated';
import { useChallenge } from '../../hooks/useChallenge';

const earningsByDifficulty = {
  easy: {
    coins: 50,
    xp: 3000,
  },
  medium: {
    coins: 100,
    xp: 150,
  },
  hard: {
    coins: 150,
    xp: 200,
  },
};

export function Challenge({ route }) {
  const challengeId = route.params.id;
  const { loggedUser } = useAuth();
  const { challenge } = useChallenge(challengeId);
  const { title, texts, code, function_name, test_cases, difficulty } = challenge;
  const testCases = Array.isArray(test_cases) ? test_cases : [test_cases];

  const [slides, setSlides] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  //   const { title, texts, code, testCases, difficulty } = challenges.find(
  //     challenge => challenge.starId === loggedUser.starId
  //   );
  const [userOutputs, setUserOutputs] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [isEndTrasition, setIsEndTransition] = useState(false);

  const sliderRef = useRef(null);
  const slideWidth = useRef({ value: 0 });
  const seconds = useRef({ value: 0 });
  const userCode = useRef({ value: '' });

  const CurrentIndicatorPositionX = useSharedValue(0);

  function handleSliderScroll({ nativeEvent: { contentOffset, layoutMeasurement } }) {
    CurrentIndicatorPositionX.value = contentOffset.x / 3;
    slideWidth.current.value = layoutMeasurement.width;
  }

  function backToCode() {
    sliderRef.current.scrollToIndex({
      index: 1,
      animated: true,
    });
  }

  function handleError(error) {
    if (error) {
      Toast.error(error.includes('null') ? 'código inválido' : error);
    }
  }

  function addUserOutput(userOutput) {
    if (userOutput && !function_name) {
      setUserOutputs(currentUserOutputs => {
        return [...currentUserOutputs, userOutput];
      });
    }
  }

  function formatCode(code, input) {
    if (function_name) {
      return code.concat(';' + function_name + ';');
    }

    if (!input) return code;

    const regex = /(leia\(\))/g;
    const matches = code.match(regex);
    if (matches.length !== input.length) {
      return;
    }

    input.forEach(input => (code = code.replace(regex, input)));
    return code;
  }

  function handleResult(result) {
    if (!result.length) return;

    setUserOutputs(currentUserOutputs => {
      return [...currentUserOutputs, result];
    });
  }

  async function verifyCase({ input }, index) {
    let code = userCode.current.value;
    code = formatCode(code, input);

    try {
      const { erros, resultado } = await execute(code, addUserOutput);

      if (erros.length) {
        if (erros[0] instanceof Error) {
          throw erros[0];
        }
        throw erros[0].erroInterno;
      }

      handleResult(resultado[1]);
    } catch (error) {
      handleError(error.message);
    }
  }

  function handleUserCode() {
    setUserOutputs([]);
    testCases.forEach(verifyCase);
  }

  useEffect(() => {
    if (!Object.entries(challenge).length) return;
    const slides = [
      {
        id: 1,
        component: <Problem title={title} texts={texts} />,
      },
      {
        id: 2,
        component: <Code code={code} handleUserCode={handleUserCode} userCode={userCode} />,
      },
      {
        id: 3,
        component: (
          <Result
            setIsEnd={setIsEnd}
            testCases={testCases}
            userOutputs={userOutputs}
            backToCode={backToCode}
          />
        ),
      },
    ];
    setSlides(slides);
  }, [challenge, userOutputs]);

  useEffect(() => {
    if (userOutputs.length) {
      sliderRef.current.scrollToEnd();
    }
  }, [userOutputs]);

  useEffect(() => {
    let timer = null;
    if (!isEnd) {
      timer = setTimeout(() => seconds.current.value++, 1000);
    }
    return () => clearTimeout(timer);
  }, [seconds.current.value]);

  useEffect(() => {
    const timer = setTimeout(() => setIsEndTransition(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <C.Container>
      {!isEndTrasition ? (
        <TransitionScreenAnimation />
      ) : (
        <>
          <ToastMenager
            animationInTiming={700}
            animationOutTiming={1000}
            animationStyle={'rightInOut'}
            width={320}
            position={'top'}
          />

          {!isEnd ? (
            <>
              <ChallengeHeader
                title={title}
                sliderRef={sliderRef}
                CurrentIndicatorPositionX={CurrentIndicatorPositionX}
                currentSlideIndex={currentSlideIndex}
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
              starId={loggedUser.starId}
              isChallenge={true}
              _coins={earningsByDifficulty[difficulty].coins}
              _xp={earningsByDifficulty[difficulty].xp}
              _seconds={seconds.current.value}
            />
          )}
        </>
      )}
    </C.Container>
  );
}
