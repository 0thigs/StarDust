import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Animation } from '../../components/Animation';

import PlayButton from '../../assets/animations/play-button-animation.json';
import Rocket from '../../assets/animations/rocket-animation.json';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function Splash() {
  const [isRocketLauched, setIsRocketLauched] = useState(false);
  const navigation = useNavigation();

  function goTo(routeName) {
    navigation.reset({
      routes: [{ name: routeName }],
    });
  }

  function handlePlayButton() {
    setIsRocketLauched(true);
    setTimeout(() => goTo('SignIn'), 3000);
  }

  return (
    <C.Container>
      {isRocketLauched ? (
        <>
          <Animation
            source={Rocket}
            autoPlay={true}
            loop={true}
            duration={3300}
            size={400}
            renderMode={'cover'}
          />
        </>
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
