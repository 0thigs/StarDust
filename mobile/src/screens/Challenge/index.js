import { useEffect, useRef, useState } from 'react';
import { ChallengeHeader } from '../../components/ChallengeHeader';
import { Code } from '../../components/Code';
import { Problem } from '../../components/Problem';
import { Result } from '../../components/Result';
import { Slider } from '../../components/Slider';
import { End } from '../../components/End';
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

export function Challenge({ id = 1 }) {
  const { title, texts, code, testCases, difficulty, starId } = challenges.find(
    challenge => challenge.id === id
  );
  const [userCode, setUserCode] = useState('');
  const [userOutputs, setUserOutputs] = useState([]);
  const [isExecuted, setIsExecuted] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [indicatorPositionX, setIndicatorPositionX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef();

  function handleSliderScroll({ nativeEvent: { contentOffset, layoutMeasurement } }) {
    setIndicatorPositionX(contentOffset.x);
    setSlideWidth(layoutMeasurement.width);
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
    let code = userCode;
    if (input) {
      code = formatCode(userCode, input);
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
      component: (
        <Code
          code={code}
          setUserCode={setUserCode}
          handleUserCode={handleUserCode}
          isExecuted={isExecuted}
        />
      ),
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
    if (!isEnd) {
      //   setTimeout(() => setSeconds(currentSeconds => currentSeconds + 1), 1000);
    }
  }, [seconds]);

  return (
    <C.Container>
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
            slideWidth={slideWidth}
            sliderRef={sliderRef}
          />

          <Slider sliderRef={sliderRef} slides={slides} onScroll={handleSliderScroll} />
        </>
      ) : (
        <End
          starId={starId}
          isChallenge={true}
          coins_={earningsByDifficulty[difficulty].coins}
          xp_={earningsByDifficulty[difficulty].xp}
          seconds_={seconds}
        />
      )}
    </C.Container>
  );
}
