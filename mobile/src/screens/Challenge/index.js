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
import { Toast } from 'toastify-react-native';

import * as C from './styles';
import { useSharedValue } from 'react-native-reanimated';
import { useChallenge } from '../../hooks/useChallenge';

const earningsByDifficulty = {
  easy: {
    coins: 20,
    xp: 125,
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
  const challengeId = '0a088952-b63e-4053-9f41-e748e51fd156';
  const { challenge } = useChallenge(challengeId);
  const { id, title, texts, code, function_name, test_cases, difficulty, star_id } = challenge;

  const [slides, setSlides] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [userOutputs, setUserOutputs] = useState([]);

  const [isEnd, setIsEnd] = useState(false);
  const [isEndTrasition, setIsEndTransition] = useState(false);

  const sliderRef = useRef(null);
  const seconds = useRef({ value: 0 });
  const userCode = useRef({ value: '' });

  const CurrentIndicatorPositionX = useSharedValue(0);

  function handleSliderScroll({ nativeEvent: { contentOffset } }) {
    CurrentIndicatorPositionX.value = contentOffset.x / 3;
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

  function formatCode(code, inputValues) {
    if (function_name) {
      const paramsValues = inputValues.map(value =>
        Array.isArray(value) ? `[${value.join(',')}]` : value
      );
      const params = '(' + paramsValues.join(',') + ')';
      return code.concat(';' + function_name + params + ';');
    }

    if (!inputValues) return code;

    const regex = /(leia\(\))/g;
    const matches = code.match(regex);
    if (matches.length !== inputValues.length) {
      return;
    }

    inputValues.forEach(value => (code = code.replace(regex, value)));
    return code;
  }

  function handleResult(result) {
    if (!result) return;
    setUserOutputs(currentUserOutputs => {
      return [...currentUserOutputs, JSON.parse(result).valor];
    });
  }

  async function verifyCase({ input }) {
    let code = userCode.current.value;
    code = formatCode(code, input);
    try {
      const { erros, resultado } = await execute(code, addUserOutput);
      if (erros.length) {
        if (erros[0] instanceof Error) throw erros[0];
        throw erros[0].erroInterno;
      }
      handleResult(resultado.splice(-1)[0]) // {"valor":1,"tipo":"número"};
    } catch (error) {
      handleError(error.message);
    }
  }

  function handleUserCode() {
    setUserOutputs([]);
    test_cases.forEach(verifyCase);
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
            testCases={test_cases}
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
      setCurrentSlideIndex(2);
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
          {!isEnd ? (
            <>
              <ChallengeHeader
                title={title}
                sliderRef={sliderRef}
                setCurrentSlideIndex={setCurrentSlideIndex}
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
              starId={star_id}
              challengeId={id}
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
