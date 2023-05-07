import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { times } from '../../utils/times';
import { Toast } from 'toastify-react-native';
import Modal from 'react-native-modal';
import WheelPicker from 'react-native-wheely';
import theme from '../../global/styles/theme';
import * as C from './styles';
import { useNotification } from '../../hooks/useNotification';
import { Loading } from '../Loading';

export function TimePicker({ isVisible, setIsVisible }) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const { setNotification } = useNotification();
  const [selectedTime, setSelectedTime] = useState(loggedUser.study_time);
  const [isLoading, setIsLoading] = useState(false);

  async function handleOkPress() {
    setIsLoading(true);
    try {
      await Promise.all([
        updateLoggedUser({ study_time: selectedTime }),
        setNotification('studyTime', selectedTime),
      ]);
      setIsVisible(false);
    } catch (error) {
      console.error(error);
      Toast.error('Falha ao tentar salvar horário');
    } finally {
      setIsLoading(false);
    }
  }

  function handleCancelPress() {
    setIsVisible(false);
  }

  return (
    <Modal isVisible={isVisible} animationIn={'slideInUp'} animationOut={'bounceOut'}>
      <C.Content>
        <C.Header>Escolha um horário para estudar todos os dias!</C.Header>
        <WheelPicker
          selectedIndex={times.findIndex(time => time === loggedUser.study_time)}
          options={times}
          onChange={index => setSelectedTime(times[index])}
          containerStyle={{ backgroundColor: theme.colors.gray_900 }}
          itemTextStyle={{ color: theme.colors.white }}
          selectedIndicatorStyle={{
            backgroundColor: theme.colors.gray_900,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderTopColor: theme.colors.gray_500,
            borderBottomColor: theme.colors.gray_500,
          }}
        />
        <C.Footer>
          <C.Button onPress={handleOkPress} disabled={isLoading}>
            {isLoading ? <Loading /> : <C.Text>Ok</C.Text>}
          </C.Button>
          <C.Button onPress={handleCancelPress}>
            <C.Text>Cancelar</C.Text>
          </C.Button>
        </C.Footer>
      </C.Content>
    </Modal>
  );
}
