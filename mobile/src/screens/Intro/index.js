import { useRef, useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { Slider } from '../../components/Slider';
import { IntroSlide } from '../../components/IntroSlide';
import { slides } from '../../utils/introSlides';
import { ArrowRight, Check } from 'react-native-feather';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import * as C from './styles';
import theme from '../../global/styles/theme';

export function Intro() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const { width } = useWindowDimensions();
  const sliderRef = useRef(null);

  function scrollTo(index) {
    sliderRef.current.scrollToIndex({
      index,
      animated: true,
    });
  }

  function setSlideComponent({ image, title, description }, index) {
    return {
      id: `slide-${index}`,
      component: <IntroSlide image={image} title={title} description={description} />,
    };
  }

  function handleSliderButtonPress() {
    if (isLastSlide) return;

    scrollTo(currentSlideIndex + 1);
  }

  useEffect(() => {
    if (currentSlideIndex === slides.length - 1) {
      setIsLastSlide(true);
      return;
    }
    setIsLastSlide(false);
  }, [currentSlideIndex]);

  return (
    <C.Container>
      <Slider
        sliderRef={sliderRef}
        slides={slides.map(setSlideComponent)}
        onScroll={null}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
      <C.Footer>
        <C.PaginationDots>
          {slides.map((_, index) => {
            const dotWidth = useSharedValue(0);
            const isActive = index === currentSlideIndex;
            const dotAnimatedStyle = useAnimatedStyle(() => {
              return {
                width: interpolate(dotWidth.value, [false, true], [16, 24]),
              };
            });
            dotWidth.value = withTiming(isActive, 300);
            return (
              <C.Dot
                key={`dot-${index}`}
                isActive={isActive}
                isFirst={index === 0}
                style={dotAnimatedStyle}
                activeOpacity={0.7}
                onPress={() => scrollTo(index)}
              />
            );
          })}
        </C.PaginationDots>
        <C.ButtonContainer>
          <CircularProgressBase
            value={(100 / slides.length) * (currentSlideIndex + 1)}
            radius={56}
            inActiveStrokeOpacity={1}
            activeStrokeWidth={4}
            inActiveStrokeWidth={4}
          />
          <C.SliderButton onPress={handleSliderButtonPress} activeOpacity={0.7}>
            {isLastSlide ? (
              <Check fontSize={40} color={theme.colors.white} />
            ) : (
              <ArrowRight fontSize={40} color={theme.colors.white} />
            )}
          </C.SliderButton>
        </C.ButtonContainer>
      </C.Footer>
    </C.Container>
  );
}
