import { useState } from 'react';
import { Check, MoreVertical } from 'react-native-feather';
import { ZoomIn, ZoomOut } from 'react-native-reanimated';
import Popover, { PopoverPlacement } from 'react-native-popover-view';
import theme from '../../global/styles/theme';
import * as C from './styles';
import { Text } from 'react-native';

export function PopupMenu({ buttons }) {
  return (
    <Popover
      debug
      placement={PopoverPlacement.RIGHT}
      from={
        <C.Trigger>
          <MoreVertical width={25} height={25} color={theme.colors.green_500} />
        </C.Trigger>
      }
    >
      <C.Content>
        <Text>Oláaaaaaaaaaaaaa</Text>
        {/* <C.Menu>
          {buttons.map(({ title, isToggle, action, value }, index) => (
            <C.Button
              key={title}
              isLastButton={index === buttons.length - 1}
              activeOpacity={0.7}
              onPress={action}
            >
              <C.Title>{title}</C.Title>
              {isToggle ? (
                <C.Checkbox isChecked={value}>
                  <Check width={14} height={14} color={theme.colors.black} />
                </C.Checkbox>
              ) : (
                <C.Empty />
              )}
            </C.Button>
          ))}
        </C.Menu> */}
      </C.Content>
    </Popover>
  );
}
