import { useRef, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Slider } from '../../components/Slider';
import { IntroSlide } from '../../components/IntroSlide';
import { Button } from '../../components/Button';
import { TimePicker } from '../../components/TimePicker';
import { Animation } from '../../components/Animation';

import { slides } from '../../utils/introSlides';
import { ArrowRight, Check } from 'react-native-feather';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import * as C from './styles';
import Welcome from '../../assets/animations/asking-animation.json';
import theme from '../../global/styles/theme';

export function Intro() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const sliderRef = useRef(null);
  const navigation = useNavigation();

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
    if (isLastSlide) {
      setIsTimePickerVisible(true);
      setIsEnd(true);
      return;
    }
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
      {isEnd ? (
        <>
          <Animation source={Welcome} autoPlay={true} loop={true} size={220} />
          <C.Title>Bem-vindo 👋</C.Title>
          <C.Message>Seu perfil foi criado com sucesso!</C.Message>
          <C.Footer>
            <Button
              title={'Ir para tela Home'}
              color={theme.colors.black}
              background={theme.colors.green_500}
              onPress={() =>
                navigation.reset({
                  routes: [{ name: 'DrawerRoutes' }],
                })
              }
            />
          </C.Footer>
        </>
      ) : (
        <>
          <Slider
            sliderRef={sliderRef}
            slides={slides.map(setSlideComponent)}
            onScroll={null}
            setCurrentSlideIndex={setCurrentSlideIndex}
          />
          <C.Footer>
            <C.PaginationDots>
              {slides.map((_, index) => {
                // const dotWidth = useSharedValue(0);
                const isActive = index === currentSlideIndex;
                // const dotAnimatedStyle = useAnimatedStyle(() => {
                //   return {
                //     width: interpolate(dotWidth.value, [false, true], [16, 24]),
                //   };
                // });
                // dotWidth.value = withTiming(isActive, 300);
                return (
                  <C.Dot
                    key={`dot-${index}`}
                    isActive={isActive}
                    isFirst={index === 0}
                    // style={dotAnimatedStyle}
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
        </>
      )}
      <TimePicker isVisible={isTimePickerVisible} setIsVisible={setIsTimePickerVisible} />
    </C.Container>
  );
}
