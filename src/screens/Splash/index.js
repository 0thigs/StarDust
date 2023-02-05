import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

import { Animation } from '../../components/Animation';

import PlayButton from '../../assets/SplashAssets/play-button.json';
import Rocket from '../../assets/SplashAssets/rocket.json';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function Splash() {
  const { getUserInSession } = useAuth();
  const [isRocketLauched, setIsRocketLauched] = useState(false);
  const navigation = useNavigation();

  function handlePlayButton() {
    setIsRocketLauched(true);

    setTimeout(
      () =>
        navigation.reset({
          routes: [{ name: 'SignIn' }],
        }),
      3000
    );
  }

  useEffect(() => {
    const user = getUserInSession();
    console.log(user);
  }, []);

  return (
    <C.Container>
      {isRocketLauched ? (
        <Animation source={Rocket} autoPlay={true} loop={true} size={350} />
      ) : (
        <>
          <C.Title animation={'fadeInDown'}>
            <C.TitleSpan>Star</C.TitleSpan>Dust
          </C.Title>
          <C.Subtitle animation={'fadeInUp'}>Aprenda Enquanto Se Diverte!</C.Subtitle>

          <C.ButtonContainer animation={'pulse'} duration={500} iterationCount={'infinite'}>
            <C.PlayButton onPress={handlePlayButton}>
              <Animation
                source={PlayButton}
                autoPlay={true}
                loop={false}
                duration={2500}
                progress={0.8}
                size={150}
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
