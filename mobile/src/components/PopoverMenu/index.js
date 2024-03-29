import { useImperativeHandle, forwardRef } from 'react';
import { Check } from 'react-native-feather';
import { Popover, usePopover } from 'react-native-modal-popover';
import theme from '../../global/styles/theme';
import * as C from './styles';

export const PopoverMenu = forwardRef(({ buttons, icon }, ref) => {
  const { openPopover, closePopover, popoverVisible, touchableRef, popoverAnchorRect } =
    usePopover();

  useImperativeHandle(ref, () => {
    return {
      closePopover,
    };
  });

  function handlePopoverMenuButtonPress(action) {
    closePopover();
    action();
  }

  return (
    <>
      <C.Trigger ref={touchableRef} onPress={openPopover}>
        {icon}
      </C.Trigger>
      <Popover
        contentStyle={{ backgroundColor: theme.colors.blue_700 }}
        arrowStyle={{ borderTopColor: theme.colors.blue_700 }}
        visible={popoverVisible}
        fromRect={popoverAnchorRect}
        onClose={closePopover}
      >
        <C.Menu>
          {buttons.map(({ title, isToggle, action, value }, index) => (
            <C.Button
              key={title}
              isLastButton={index === buttons.length - 1}
              activeOpacity={0.7}
              onPress={() => handlePopoverMenuButtonPress(action)}
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
        </C.Menu>
      </Popover>
    </>
  );
});
