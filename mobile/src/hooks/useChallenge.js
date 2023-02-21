import { useState, useRef } from 'react';
import { Problem } from '../components/Problem';
import { Code } from '../components/Code';
import { Result } from '../components/Result';
import { Slider } from '../components/Slider';
import { challenges } from '../utils/challenges';
import { execute } from '../libs/delegua.mjs';

export function useChallenge(id) {
  const { title, texts, code, testCases } = challenges.find(challenge => challenge.id === id);
  const [userCode, setUserCode] = useState('');
  const [userOutputs, setUserOutputs] = useState([]);
  const [IsEnd, setIsEnd] = useState(false);
  const [indicatorPositionX, setIndicatorPositionX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef();

  function handleSliderScroll({ nativeEvent: { contentOffset, layoutMeasurement } }) {
    setIndicatorPositionX(contentOffset.x);
    setSlideWidth(layoutMeasurement.width);
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
          sliderRef={sliderRef}
          userOutputs={userOutputs}
        />
      ),
    },
  ];

  return {
    slider: <Slider sliderRef={sliderRef} slides={slides} onScroll={handleSliderScroll} />,
    sliderRef,
    indicatorPositionX,
    slideWidth,
    userOutputs,
    IsEnd,
  };
}
