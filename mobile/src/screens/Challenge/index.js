import { useEffect, useRef, useState } from 'react';
import { ChallengeHeader } from '../../components/ChallengeHeader';
import { Code } from '../../components/Code';
import { Problem } from '../../components/Problem';
import { Result } from '../../components/Result';
import { Slider } from '../../components/Slider';
import { End } from '../../components/End';
import { execute } from '../../libs/delegua.mjs';
import { challenges } from '../../utils/challenges';
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

  // TODO: Tratar erros
  function showError(error) {
    console.log(error);
  }

  function handleUserOutput(userOutput) {
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
    const formatedUserCode = formatCode(userCode, input);
    const { erros, resultado } = await execute(formatedUserCode, handleUserOutput);
    if (erros.length > 0) {
      showError(erros[0].message);
      return;
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
      component: <Code code={code} setUserCode={setUserCode} handleUserCode={handleUserCode} />,
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
      setTimeout(() => setSeconds(currentSeconds => currentSeconds + 1), 1000);
    }
  }, [seconds]);

  return (
    <C.Container>
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
