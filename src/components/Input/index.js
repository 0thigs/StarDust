import React, { useState } from 'react';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';

export function Input({ label, placeholder, icon = null, type, value, onChangeText, error }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleInputFocus = () => {
    setIsFocus(true);
  };

  const handleInputBlur = () => {
    setIsFocus(false);
    setIsFilled(!!value);
  };

  return (
    <C.Container animation={'fadeInLeft'} duration={1000}>
      <C.Label style={{ color: error ? theme.colors.red_700 : theme.colors.green_300 }}>
        {label}
      </C.Label>
      <C.FormControl
        style={{
          borderColor: error
            ? theme.colors.red_700
            : isFocus || isFilled
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
          secureTextEntry={type === 'password' && secureTextEntry}
          error={error}
        />
        {type === 'password' ? (
          secureTextEntry ? (
            <Icon.Eye
              color={error ? theme.colors.red_700 : theme.colors.green_300}
              style={{ marginHorizontal: 10 }}
              onPress={toggleSecureTextEntry}
            />
          ) : (
            <Icon.EyeOff
              color={error ? theme.colors.red_700 : theme.colors.green_300}
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
