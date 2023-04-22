import { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Eye, EyeOff } from 'react-native-feather';
import Modal from 'react-native-modal';
import theme from '../../global/styles/theme';
import * as C from './styles';
const iconColor = theme.colors.green_300;

export function Prompt({
  isVisible,
  title,
  value,
  onConfirm,
  onCancel,
  promptRef,
  isPassword = false,
}) {
  const [text, setText] = useState('');
  const [isFocus, setIsFocus] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
    <Modal isVisible={isVisible} animationIn={'slideInUp'} animationOut={'bounceOut'}>
      <C.Content>
        <C.Title>{title}</C.Title>
        <C.EyeButton onPress={() => setIsPasswordVisible(!isPasswordVisible)} acitveOpacity={0.7}>
          {isPassword && (
            <>{!isPasswordVisible ? <Eye color={iconColor} /> : <EyeOff color={iconColor} />}</>
          )}
        </C.EyeButton>
        <C.Input
          ref={promptRef}
          onChangeText={handleChangeText}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          isFocus={isFocus}
          underlineColorAndroid={theme.colors.purple_700}
          secureTextEntry={isPassword && !isPasswordVisible}
          autoCapitalize={'none'}
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
