import { useEffect, useState } from 'react';
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
import { SvgUri } from 'react-native-svg';
import { getImage } from '../../utils/getImage';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { useRocket } from '../../hooks/useRocket';

export function LessonHeader() {
  const { loggedUser } = useAuth();
  const { rocket } = useRocket(loggedUser.rocket_id);
  const [state, dispatch] = useLesson();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const currentWidth = (state.currentQuestion / state.questions.length) * 100;
  const barWidth = useSharedValue(currentWidth);

  const barAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: `${barWidth.value}%`,
    };
  });

  async function handleCloseButton() {
    if (await Speech.isSpeakingAsync()) {
      Speech.stop();
    }

    navigation.reset({
      routes: [{ name: 'DrawerRoutes' }],
    });
    dispatch({ type: 'resetState' });
  }

  useEffect(() => {
    barWidth.value = withTiming(currentWidth, { duration: 500 });
  }, [currentWidth]);

  return (
    <C.Container>
      <C.Main>
        <C.CloseButton onPress={() => setIsModalVisible(true)}>
          <Icon.X color={theme.colors.red_700} width={35} height={35} />
        </C.CloseButton>
        <C.Lives>
          <LifeIcon width={30} height={30} />
          <C.LivesCount>{state.livesCount}</C.LivesCount>
        </C.Lives>
      </C.Main>
      <C.ProgressBar>
        <C.Bar style={barAnimatedStyle} />
        {rocket && (
          <SvgUri
            uri={getImage('rockets', rocket.image)}
            width={50}
            height={50}
            style={{
              transform: [{ rotate: '90deg' }, { translateX: -15 }, { translateY: 15 }],
            }}
          />
        )}
      </C.ProgressBar>

      {isModalVisible && (
        <Modal
          isVisible={isModalVisible}
          type={'crying'}
          playSong={false}
          title={'Deseja mesmo sair?'}
          body={null}
          footer={
            <>
              <Button
                title={'Sair'}
                color={theme.colors.white}
                background={theme.colors.red_700}
                onPress={handleCloseButton}
              />
              <Button
                title={'Voltar'}
                color={theme.colors.black}
                background={theme.colors.blue_300}
                onPress={() => setIsModalVisible(false)}
              />
            </>
          }
        />
      )}
    </C.Container>
  );
}
