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
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export function Home() {
  const { planets, lastUnlockedStarId } = usePlanet();
  const { lastUnlockedStarYPosition } = useScroll();
  const [isEndTrasition, setIsEndTransition] = useState(false);
  const [currentYOffset, setCurrentYOffset] = useState(0);
  const visibleContentHeight = useRef(0);
  const scrollRef = useRef(null);
  const dimensions = useWindowDimensions();
  const isFabButtonVisible = useSharedValue(false);
  const isFabIconRotation = useSharedValue(false);

  const fabButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(isFabButtonVisible.value, [false, true], [0, 40]),
      height: interpolate(isFabButtonVisible.value, [false, true], [0, 40]),
    };
  });

  const fabIconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(isFabIconRotation.value, [true, false], [1, 180])}deg`,
        },
      ],
      opacity: interpolate(isFabButtonVisible.value, [true, false], [1, 0]),
    };
  });

  function scrollToLastUnlockedStar(animated = true) {
    scrollRef.current.scrollTo({
      animated,
      x: 0,
      y: lastUnlockedStarYPosition.current - dimensions.height / 2,
    });
  }

  function showFabButton({ contentOffset, layoutMeasurement }) {
    visibleContentHeight.current = layoutMeasurement.height;
    setCurrentYOffset(contentOffset.y);

    const isLastUnlockedStarAboveLayout =
      (lastUnlockedStarYPosition.current - contentOffset.y).toFixed(0) > layoutMeasurement.height;
    const isLastUnlockedStarBellowLayout =
      (lastUnlockedStarYPosition.current + starHeight - contentOffset.y).toFixed(0) < 0;

    isFabIconRotation.value = isLastUnlockedStarAboveLayout;
    isFabButtonVisible.value = withTiming(
      isLastUnlockedStarAboveLayout || isLastUnlockedStarBellowLayout,
      { duration: 300 }
    );
  }

  useEffect(() => {
    if (planets.length) {
      setTimeout(() => setIsEndTransition(true), 3000);
    }
  }, [planets]);

  useEffect(() => {
    if (planets.length && lastUnlockedStarYPosition.current) {
      setTimeout(scrollToLastUnlockedStar, 15);
    }
  }, [lastUnlockedStarYPosition.current, planets]);

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
        <C.Background source={BackgroundSpace} resizeMode="repeat">
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

      <FabButton
        animatedStyle={fabButtonAnimatedStyle}
        onPress={scrollToLastUnlockedStar}
        icon={
          <Animated.View style={fabIconAnimatedStyle}>
            <Icon.ArrowDown color={theme.colors.green_300} fontSize={20} />
          </Animated.View>
        }
      />
    </>
  );
}
