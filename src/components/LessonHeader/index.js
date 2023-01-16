import { useEffect } from 'react';
import * as C from './styles';

import CloseButtonIcon from '../../assets/GlobalAssets/close-button-icon.svg';
import LifeIcon from '../../assets/GlobalAssets/life-icon.svg';
import Rocket from '../../assets/GlobalAssets/rocket.png';

import api from '../../services/api';

import { useLesson } from '../../hooks/useLesson';
import { useAuth } from '../../hooks/useAuth';

import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export function LessonHeader() {
  const { user, setUser } = useAuth();
  const [state] = useLesson();
  const navigation = useNavigation();

  const currentWidth = (state.currentQuestion / state.questions.length) * 100;
  const barWidth = useSharedValue(currentWidth);

  const barAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: `${barWidth.value}%`,
    };
  });

  async function handleCloseButton() {
    if (state.livesCount < user.lives) {
      await api.updateLives(state.livesCount, user.id);
      setUser({ ...user, lives: state.livesCount });
    }
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
          <LifeIcon width={30} height={30} />
          <C.LivesCount>{state.livesCount}</C.LivesCount>
        </C.Lives>
      </C.Main>
      <C.ProgressBar>
        <C.Bar style={barAnimatedStyle}></C.Bar>
        <C.Rocket source={Rocket} />
      </C.ProgressBar>
    </C.Container>
  );
}
