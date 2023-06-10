import { useEffect, useRef, useState } from 'react';
import { useLesson } from '../../hooks/useLesson';
import { useAuth } from '../../hooks/useAuth';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

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
import { Loading } from '../Loading';

export function LessonHeader() {
  const { loggedUser } = useAuth();
  const { rocket } = useRocket(loggedUser.rocket_id);
  const [state, dispatch] = useLesson();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const navigationAction = useRef(null);
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

    dispatch({ type: 'resetState' });
    navigation.dispatch(navigationAction.current)
  }

   function handleHardwareBackPress(event) {
    event.preventDefault();
    setIsModalVisible(true);
    navigationAction.current = event.data.action;
  }

  useEffect(() => {
    barWidth.value = withTiming(currentWidth, { duration: 500 });
  }, [currentWidth]);

  useEffect(() => {
    navigation.addListener('beforeRemove', handleHardwareBackPress);
    return () => navigation.removeListener('beforeRemove', handleHardwareBackPress);
  }, []);

  return (
    <C.Container>
      {/* {isLoading && <Loading isAnimation={true} />} */}
      <C.Main>
        <C.CloseButton onPress={navigation.goBack}>
          <Icon.X color={theme.colors.red_700} width={28} height={28} />
        </C.CloseButton>
        <C.Lives>
          <LifeIcon width={28} height={28} />
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
            onLoad={() => setIsLoading(false)}
          />
        )}
      </C.ProgressBar>

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
              background={theme.colors.green_300}
              onPress={() => setIsModalVisible(false)}
            />
          </>
        }
      />
    </C.Container>
  );
}
