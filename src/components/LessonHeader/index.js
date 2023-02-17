import { useEffect } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { useAuth } from '../../hooks/useAuth';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import { rockets } from '../../utils/rockets';

import LifeIcon from '../../assets/GlobalAssets/life-icon.svg';

import * as Icon from 'react-native-feather';
import * as C from './styles';
import * as Speech from 'expo-speech';
import theme from '../../global/styles/theme';
import api from '../../services/api';

export function LessonHeader() {
  const { user, setUser } = useAuth();
  const [state, dispatch] = useLesson();
  const navigation = useNavigation();
  const Rocket = rockets.find(rocket => rocket.id === user.selected_rocket_id).image;

  const currentWidth = (state.currentQuestion / state.questions.length) * 100;
  const barWidth = useSharedValue(currentWidth);

  const barAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: `${barWidth.value}%`,
    };
  });

  async function handleCloseButton() {
    if (state.livesCount < user.lives) {
      await api.updateUser('lives', state.livesCount, user.id);
      setUser({ ...user, lives: state.livesCount });
    }

    dispatch({ type: 'resetState' });

    if (await Speech.isSpeakingAsync()) {
      Speech.stop();
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
          <Icon.X color={theme.colors.red_700} width={35} height={35} />
        </C.CloseButton>
        <C.Lives>
          <LifeIcon width={30} height={30} />
          <C.LivesCount>{state.livesCount}</C.LivesCount>
        </C.Lives>
      </C.Main>
      <C.ProgressBar>
        <C.Bar style={barAnimatedStyle}></C.Bar>
        <Rocket
          width={50}
          height={50}
          style={{
            transform: [{ rotate: '90deg' }, { translateX: -15 }, { translateY: 15 }],
          }}
        />
      </C.ProgressBar>
    </C.Container>
  );
}
