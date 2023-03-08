import { useRef, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

import * as C from './styles';
import theme from '../../styles/theme';

export function Input({ type, label, Icon, value, onChange, placeholder, error }) {
  const [isTextHidden, setisTextHidden] = useState(true);
  const inputRef = useRef();
  const inputType =
    type === 'password' && isTextHidden ? 'password' : type !== 'password' ? type : 'text';

  const borderColor = error ? theme.colors.red_700 : theme.colors.gray_700;

  const iconSize = 24;
  const iconColor = theme.colors[error ? 'red_700' : 'green_300'];
  const labelColor = theme.colors[error ? 'red_700' : 'green_300'];

  function handleEyeClick() {
    setisTextHidden(!isTextHidden);
  }

  function HandleInputClick() {
    inputRef.current.focus();
  }

  return (
    <C.Container onClick={HandleInputClick} className="fadeInLeft">
      <C.Label htmlFor={label} color={labelColor}>
        {label}
      </C.Label>

      <C.FormControl borderColor={borderColor}>
        <Icon size={iconSize} color={iconColor} />
        <C.Input
          id={label}
          ref={inputRef}
          type={inputType}
          placeholder={placeholder}
          value={value ?? ''}
          onChange={onChange}
        />

        {type === 'password' && (
          <button type={'button'} onClick={handleEyeClick}>
            {isTextHidden ? (
              <Eye size={iconSize - 2} color={iconColor} />
            ) : (
              <EyeOff size={iconSize - 2} color={iconColor} />
            )}
          </button>
        )}
      </C.FormControl>
    </C.Container>
  );
}
