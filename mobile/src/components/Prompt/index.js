import { useState } from 'react';
import { Button } from '../Button';
import Modal from 'react-native-modal';
import theme from '../../global/styles/theme';
import * as C from './styles';
import { useEffect } from 'react';

export function Prompt({ isVisible, title, value, onConfirm, onCancel, promptRef }) {
  const [text, setText] = useState('');

  function handleChangeText(text) {
    value.current = text;
    setText(text);
  }

  useEffect(() => {
    if (!text) {
      setText(value.current);
    }
  }, [isVisible]);

  return (
    <Modal isVisible={isVisible}>
      <C.Content>
        <C.Title>{title}</C.Title>
        <C.Input
          ref={promptRef}
          onChangeText={handleChangeText}
          underlineColorAndroid={theme.colors.purple_700}
          value={value.current}
          autoFocus
        />
        <C.Buttons>
          <C.ButtonWrapper>
            <Button
              title={'Confirmar'}
              color={theme.colors.black}
              background={theme.colors.green_500}
              onPress={onConfirm}
              isDisabled={!value.current}
            />
          </C.ButtonWrapper>

          <C.ButtonWrapper isRight={true}>
            <Button
              title={'Cancelar'}
              color={theme.colors.white}
              background={theme.colors.red_700}
              onPress={onCancel}
            />
          </C.ButtonWrapper>
        </C.Buttons>
      </C.Content>
    </Modal>
  );
}
