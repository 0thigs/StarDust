import React, { useState } from 'react';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';

export function Input({ label, placeholder, icon = null, type }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleInputFocus = () => {
    setIsFocus(true);
  };

  const handleInputBlur = () => {
    setIsFocus(false);
  };

  return (
    <C.Container>
      <C.Label>{label}</C.Label>
      {type === 'password' ? (
        <C.FormControl
          style={{ borderColor: isFocus ? theme.colors.green_300 : theme.colors.gray_700 }}
        >
          {icon}
          <C.Input
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {secureTextEntry ? (
            <Icon.Eye
              color={theme.colors.green_300}
              style={{ marginHorizontal: 10 }}
              onPress={toggleSecureTextEntry}
            />
          ) : (
            <Icon.EyeOff
              color={theme.colors.green_300}
              style={{ marginHorizontal: 10 }}
              onPress={toggleSecureTextEntry}
            />
          )}
        </C.FormControl>
      ) : (
        <C.FormControl
          style={{ borderColor: isFocus ? theme.colors.green_300 : theme.colors.gray_700 }}
        >
          {icon}
          <C.Input placeholder={placeholder} onFocus={handleInputFocus} onBlur={handleInputBlur} />
          <C.Right />
        </C.FormControl>
      )}
    </C.Container>
  );
}
