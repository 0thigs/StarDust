import React, { useState } from 'react';
import * as C from './styles';
import { useNavigation } from '@react-navigation/native';

import PlayButton from '../../assets/SplashAssets/play-button.json';
import Rocket from '../../assets/SplashAssets/rocket.json';

import theme from '../../global/styles/theme';
import LottieView from 'lottie-react-native';


export function Splash() {
  const [rocket, setRocket] = useState(false);
  const navigation = useNavigation();

  function handlePlayButton() {
    setRocket(true);

    setTimeout(
      () =>
        navigation.reset({
          routes: [{ name: 'SignIn' }],
        }),
      3000
    );
  }

  return (
    <C.Container>
      {rocket ? (
        <LottieView
          source={Rocket}
          autoPlay={true}
          loop={true}
          style={{ width: 350, height: 350 }}
        />
      ) : (
        <>
          <C.Title animation={'fadeInDown'}>
            <C.TitleSpan>Star</C.TitleSpan>Dust
          </C.Title>
          <C.Subtitle animation={'fadeInUp'}>Aprenda Enquanto Se Diverte!</C.Subtitle>

          <C.ButtonContainer animation={'pulse'} iterationCount={'infinite'}>
            <C.PlayButton onPress={handlePlayButton}>
              <LottieView
                source={PlayButton}
                autoPlay={true}
                loop={false}
                duration={2500}
                progress={0.8}
                style={{ width: 150, height: 150 }}
                colorFilters={[
                  { keypath: 'Shape Layer 1', color: theme.colors.green_500 },
                  { keypath: 'Shape Layer 2', color: theme.colors.green_900 },
                ]}
              />
            </C.PlayButton>
          </C.ButtonContainer>
        </>
      )}
    </C.Container>
  );
}
