import { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

import * as C from './styles';
import theme from '../../styles/theme';
const iconSize = 24;
const iconColor = theme.colors.green_500;

export function Input({ type, label, Icon, value, placeholder }) {
  const [isTextHidden, setisTextHidden] = useState(true);
  const inputType =
    type === 'password' && isTextHidden ? 'password' : type !== 'password' ? type : 'text';

  function handleEyeClick() {
    setisTextHidden(!isTextHidden);
  }

  return (
    <C.Container>
      <C.Label>{label}</C.Label>

      <C.FormControl>
        <Icon size={iconSize} color={iconColor} />
        <C.Input type={inputType} placeholder={placeholder}  />
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
