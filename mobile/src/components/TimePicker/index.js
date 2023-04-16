import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { times } from '../../utils/times';
import Modal from 'react-native-modal';
import WheelPicker from 'react-native-wheely';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function TimePicker({ isVisible, setIsVisible }) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [selectedTime, setSelectedTime] = useState('10:00');

  function handleOkPress() {
    updateLoggedUser('study_time', selectedTime);
    setIsVisible(false);
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
          <C.Button onPress={handleOkPress}>
            <C.Text>Ok</C.Text>
          </C.Button>
          <C.Button onPress={handleCancelPress}>
            <C.Text>Cancelar</C.Text>
          </C.Button>
        </C.Footer>
      </C.Content>
    </Modal>
  );
}
