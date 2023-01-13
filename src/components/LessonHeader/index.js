import * as C from './styles';

import CloseButtonIcon from '../../assets/GlobalAssets/close-button-icon.svg';
import LiveIcon from '../../assets/GlobalAssets/heart.svg';
import Rocket from '../../assets/GlobalAssets/rocket.png';

import { useNavigation } from '@react-navigation/native';

export function LessonHeader() {
  const navigation = useNavigation();

  function handleCloseButton() {
    navigation.reset({
      routes: [{ name: 'DrawerRoutes' }],
    });
  }

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
        <C.Bar>
          <C.Rocket source={Rocket} />
        </C.Bar>
      </C.ProgressBar>
    </C.Container>
  );
}
