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
import { challenges } from '../../utils/challenges';
import ToastMenager, { Toast } from 'toastify-react-native';

import * as C from './styles';

const earningsByDifficulty = {
  easy: {
    coins: 50,
    xp: 100,
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

export function Challenge() {
  const { loggedUser } = useAuth();
  const { title, texts, code, testCases, difficulty } = challenges.find(
    challenge => challenge.starId === loggedUser.starId
  );
  const [userOutputs, setUserOutputs] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [indicatorPositionX, setIndicatorPositionX] = useState(0);
  const [isEndTrasition, setIsEndTransition] = useState(false);

  const sliderRef = useRef(null);
  const slideWidth = useRef({ value: 0 });
  const seconds = useRef({ value: 0 });
  const userCode = useRef({ value: '' });

  function handleSliderScroll({ nativeEvent: { contentOffset, layoutMeasurement } }) {
    setIndicatorPositionX(contentOffset.x);
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
      Toast.error(error);
    }
  }

  function addUserOutput(userOutput) {
    if (userOutput) {
      setUserOutputs(currentUserOutputs => {
        return [...currentUserOutputs, userOutput];
      });
    }
  }

  function formatCode(code, input) {
    const matches = code.match(/(leia\(\))/g);
    if (matches.length !== input.length) {
      return;
    }

    input.forEach(input => (code = code.replace(matches[0], input)));
    return code;
  }

  async function verifyCase({ input }) {
    let code = userCode.current.value;
    if (input) {
      code = formatCode(code, input);
    }

    try {
      const { erros, resultado } = await execute(code, addUserOutput);

      if (erros.length > 0) {
        if (erros[0] instanceof Error) {
          throw erros[0];
        }
        throw erros[0].erroInterno;
      }
    } catch (error) {
      handleError(error.message);
    }
  }

  function handleUserCode() {
    setUserOutputs([]);
    testCases.forEach(verifyCase);
  }

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

  useEffect(() => {
    if (userOutputs.length > 0) {
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
            position="top"
          />

          {!isEnd ? (
            <>
              <ChallengeHeader
                indicatorPositionX={indicatorPositionX}
                slideWidth={slideWidth.current.value}
                sliderRef={sliderRef}
              />

              <Slider sliderRef={sliderRef} slides={slides} onScroll={handleSliderScroll} />
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
