import { useRef, useState } from 'react';
import { Slider } from '../../components/Slider';
import { slides } from '../../utils/introSlides';
import { IntroSlide } from '../../components/IntroSlide';
import { ArrowRight, Check } from 'react-native-feather';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import * as C from './styles';
import theme from '../../global/styles/theme';
import { useEffect } from 'react';

export function Intro() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const sliderRef = useRef(null);
  console.log(currentSlideIndex);

  function handleSliderScroll() {}

  function setSlideComponent({ image, title, description }, index) {
    return {
      id: `slide-${index}`,
      component: <IntroSlide image={image} title={title} description={description} />,
    };
  }

  function handleSliderButtonPress() {
    if (isLastSlide) return;

    sliderRef.current.scrollToIndex({
      index: currentSlideIndex + 1,
      animated: true,
    });
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
        onScroll={handleSliderScroll}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
      <C.Footer>
        <C.PaginationDots>
          {slides.map(slide => (
            <C.Dot key={slide.id} />
          ))}
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
