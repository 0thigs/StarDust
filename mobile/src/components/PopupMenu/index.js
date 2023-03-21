import { useEffect } from 'react';
import { useState } from 'react';
import { Check, MoreVertical } from 'react-native-feather';
import { ZoomIn, ZoomOut } from 'react-native-reanimated';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function PopupMenu({ buttons }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <>
      <C.Trigger>
        <MoreVertical
          width={25}
          height={25}
          color={theme.colors.green_500}
          onPress={() => setIsVisible(true)}
        />
      </C.Trigger>
      <C.Content transparent visible={isVisible}>
        <C.Outside onTouchStart={() => setIsVisible(false)}></C.Outside>

        <C.Menu entering={ZoomIn.duration(250)} exiting={ZoomOut.duration(250)}>
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
        </C.Menu>
      </C.Content>
    </>
  );
}
