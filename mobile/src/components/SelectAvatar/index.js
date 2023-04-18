import { useAvatar } from '../../hooks/useAvatar';
import { AvatarsList } from '../AvatarsList';
import { Button } from '../Button';
import Modal from 'react-native-modal';
import * as C from './styles';
import theme from '../../global/styles/theme';

export function SelectAvatar({ isVisible, setIsVisible }) {
  const { avatars } = useAvatar();

  return (
    <Modal isVisible={isVisible} animationIn={'slideInUp'} animationOut={'bounceOut'}>
      <C.Content>
        <AvatarsList avatars={avatars} />
        <Button
          title={'Ok'}
          color={theme.colors.black}
          background={theme.colors.blue_300}
          onPress={() => setIsVisible(false)}
        />
      </C.Content>
    </Modal>
  );
}
