import { useEffect, useState, useRef } from 'react';
import { usePlanet } from '../../hooks/usePlanet';
import { useScroll } from '../../hooks/useScroll';
import { useWindowDimensions } from 'react-native';

import { Planet } from '../../components/Planet';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';
import { starHeight } from '../../components/Star';
import { FabButton } from '../../components/FabButton';
import { Meteor } from '../../components/Meteor';

import BackgroundSpace from '../../assets/HomeAssets/background.png';

import theme from '../../global/styles/theme';
import * as Icon from 'react-native-feather';
import * as C from './styles';

export function Home() {
  const { planets, lastUnlockedStarId } = usePlanet();
  const { lastUnlockedStarYPosition } = useScroll();
  const [isFabButtonVisible, setIsFabButtonVisible] = useState(false);
  const [isEndTrasition, setIsEndTransition] = useState(false);
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [direction, setDirection] = useState('');
  const [currentYOffset, setCurrentYOffset] = useState(0);
  const visibleContentHeight = useRef(0);
  const canCalculateOffset = useRef(true);
  const scrollRef = useRef(null);
  const dimensions = useWindowDimensions();

  function scrollToLastUnlockedStar(animated = true) {
    scrollRef.current.scrollTo({
      x: 0,
      y: lastUnlockedStarYPosition - dimensions.height / 2,
      animated,
    });
  }

  function showFabButton({ contentOffset, layoutMeasurement }) {
    visibleContentHeight.current = layoutMeasurement.height;
    setCurrentYOffset(contentOffset.y);

    const isLastUnlockedStarAboveLayout =
      (lastUnlockedStarYPosition - contentOffset.y).toFixed(0) > layoutMeasurement.height;
    const isLastUnlockedStarBellowLayout =
      (lastUnlockedStarYPosition + starHeight - contentOffset.y).toFixed(0) < 0;

    setDirection(isLastUnlockedStarAboveLayout ? 'down' : 'up');
    setIsFabButtonVisible(isLastUnlockedStarAboveLayout || isLastUnlockedStarBellowLayout);
  }

  function hanldeFabButtonClick() {
    setIsFabButtonVisible(false);
    scrollToLastUnlockedStar();
  }

  useEffect(() => {
    if (planets.length && isBackgroundLoaded) {
      setTimeout(() => setIsEndTransition(true), 1500);
    }
  }, [planets, isBackgroundLoaded]);

  useEffect(() => {
    if (lastUnlockedStarYPosition) {
      scrollToLastUnlockedStar(false);
    }
  }, [lastUnlockedStarYPosition]);

  return (
    <>
      <C.Container
        ref={scrollRef}
        onScroll={event => showFabButton(event.nativeEvent)}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        isEndTrasition={isEndTrasition}
        contentContainerStyle={{
          flex: isEndTrasition ? 0 : 1,
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }}
      >
        {!isEndTrasition && <TransitionScreenAnimation />}
        <C.Background
          source={BackgroundSpace}
          resizeMode="repeat"
          onLoad={() => (planets.length ? setIsBackgroundLoaded(true) : null)}
        >
          {planets.map(({ id, name, icon, image, stars }) => (
            <Planet
              key={id}
              name={name}
              icon={icon}
              image={image}
              stars={stars}
              lastUnlockedStarId={lastUnlockedStarId}
            />
          ))}
        </C.Background>

        <Meteor
          currentYOffset={currentYOffset}
          visibleContentHeight={visibleContentHeight.current}
          screenWidth={dimensions.width}
        />
      </C.Container>

      {isFabButtonVisible && (
        <FabButton
          onPress={hanldeFabButtonClick}
          icon={
            direction === 'up' ? (
              <Icon.ArrowUp color={theme.colors.green_300} fontSize={20} />
            ) : (
              <Icon.ArrowDown color={theme.colors.green_300} fontSize={20} />
            )
          }
        />
      )}
    </>
  );
}
