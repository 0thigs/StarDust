import React, { useState } from 'react';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';

export function Input({ label, placeholder, icon = null, type, value, onChangeText, error }) {
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
    <C.Container animation={'fadeInLeft'} duration={1000}>
      <C.Label>{label}</C.Label>
      <C.FormControl
        style={{
          borderColor: error
            ? theme.colors.red_700
            : isFocus
            ? theme.colors.green_300
            : theme.colors.gray_700,
        }}
        error={error}
      >
        {icon}
        <C.Input
          placeholder={placeholder}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={value}
          onChangeText={onChangeText}
          keyboardType={type}
          autoCapitalize={(type === 'email-address' || type === 'password') && 'none'}
          secureTextEntry={secureTextEntry}
          error={error}
        />
        {type === 'password' ? (
          secureTextEntry ? (
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
          )
        ) : (
          <C.Right />
        )}
      </C.FormControl>
    </C.Container>
  );
}
