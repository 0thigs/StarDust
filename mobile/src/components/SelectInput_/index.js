import { useState } from 'react';
import { View } from 'react-native';
import { ChevronDown, ChevronUp, Search } from 'react-native-feather';
import Popover from 'react-native-popover-view';
import theme from '../../global/styles/theme';
import * as C from './styles';
const iconSize = 12;
const iconColor = theme.colors.gray_500;

export function SelectInput({ type, options, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSearch = type === 'tags';

  return (
    <C.Container>
      <Popover
        onOpenStart={() => setIsOpen(true)}
        onCloseStart={() => setIsOpen(false)}
        popoverStyle={{ borderRadius: 8 }}
        from={
          <C.Select>
            <C.Label>{label}</C.Label>
            {isOpen ? (
              <ChevronUp fontSize={iconSize} color={iconColor} />
            ) : (
              <ChevronDown fontSize={iconSize} color={iconColor} />
            )}
          </C.Select>
        }
      >
        {options.map(({ title, icon }, index) => (
          <C.Option key={title} isLast={index === options.length - 1}>
            {icon && icon}
            <C.Title>{title}</C.Title>
          </C.Option>
        ))}
      </Popover>
    </C.Container>
  );
}
