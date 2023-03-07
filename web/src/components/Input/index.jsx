import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

import * as C from './styles';
import theme from '../../styles/theme';

export function Input({ type, label, Icon, value, onChange, placeholder, error }) {
  const [isTextHidden, setisTextHidden] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputType =
    type === 'password' && isTextHidden ? 'password' : type !== 'password' ? type : 'text';

  const borderColor = error
    ? theme.colors.red_700
    : isFocus || isFilled
    ? theme.colors.green_300
    : theme.colors.gray_700;

  const iconSize = 24;
  const iconColor =  theme.colors[error ? 'red_700' : 'green_300'];

  function handleEyeClick() {
    setisTextHidden(!isTextHidden);
  }

  function handleInputFocus() {
    setIsFocus(true);
  }

  function handleInputBlur() {
    setIsFocus(false);
    setIsFilled(!!value);
  }

  return (
    <C.Container>
      <C.Label>{label}</C.Label>

      <C.FormControl borderColor={borderColor}>
        <Icon size={iconSize} color={iconColor} />
        <C.Input
          type={inputType}
          placeholder={placeholder}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={value ?? ''}
          onChange={onChange}
          isFocusOrIsFilled={isFocus || isFilled}
        />

        {type === 'password' && (
          <button type={'button'} onClick={handleEyeClick}>
            {isTextHidden ? (
              <Eye size={iconSize} color={iconColor} />
            ) : (
              <EyeOff size={iconSize} color={iconColor} />
            )}
          </button>
        )}
      </C.FormControl>
    </C.Container>
  );
}
