import * as C from './styles';

import CloseButtonIcon from '../../assets/GlobalAssets/close-button-icon.svg';
import LiveIcon from '../../assets/GlobalAssets/heart.svg';
import Rocket from '../../assets/GlobalAssets/rocket.png';

import { useLesson } from '../../hooks/useLesson';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export function LessonHeader() {
  const [state] = useLesson();
  const navigation = useNavigation();

  const currentWidth = (state.currentQuestion / state.questions.length) * 100;
  const barWidth = useSharedValue(currentWidth);

  const barAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: `${barWidth.value}%`,
    };
  });

  function handleCloseButton() {
    navigation.reset({
      routes: [{ name: 'DrawerRoutes' }],
    });
  }

  useEffect(() => {
    barWidth.value = withTiming(currentWidth, { duration: 400 });
  }, [currentWidth]);

  return (
    <C.Container>
      <C.Main>
        <C.CloseButton onPress={handleCloseButton}>
          <CloseButtonIcon width={35} height={35} />
        </C.CloseButton>
        <C.Lives>
          <LiveIcon width={30} height={30} />
          <C.LivesCount>5</C.LivesCount>
        </C.Lives>
      </C.Main>
      <C.ProgressBar>
        <C.Bar style={barAnimatedStyle}></C.Bar>
        <C.Rocket source={Rocket} />
      </C.ProgressBar>
    </C.Container>
  );
}
