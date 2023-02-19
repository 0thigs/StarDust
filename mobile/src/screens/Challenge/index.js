import { useCallback, useRef, useState } from 'react';
import { useChallenge } from '../../hooks/useChallenge';
import { ChallengeHeader } from '../../components/ChallengeHeader';
import { Onboarding } from '../../components/Onboarding';
import * as C from './styles';

export function Challenge() {
  const [state] = useChallenge();
  const [indicatorPositionX, setIndicatorPositionX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef(null);

  const handleSliderSwipe = useCallback(({ viewableItems }) => {
    console.log({ viewableItems });
  }, []);

  function handleSliderScroll({ contentOffset, layoutMeasurement }) {
    setIndicatorPositionX(contentOffset.x);
    setSlideWidth(layoutMeasurement.width);
  }

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
    minimumViewTime: 5,
  });

  return (
    <C.Container>
      <ChallengeHeader indicatorPositionX={indicatorPositionX} slideWidth={slideWidth} sliderRef={sliderRef} />

      <C.Slider
        ref={sliderRef}
        data={state.slides}
        keyExtractor={slide => slide.id}
        renderItem={({ item: { component } }) => <Onboarding component={component} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        scrollEventThrottle={32}
        onScroll={event => handleSliderScroll(event.nativeEvent)}
      />
    </C.Container>
  );
}
