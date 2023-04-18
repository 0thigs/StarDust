import { useState, useEffect } from 'react';
import { useEditor } from '../../hooks/useEditor';
import { Slider as Ranger } from '@miblanchard/react-native-slider';
import theme from '../../global/styles/theme';
import Modal from 'react-native-modal';
import * as C from './styles';

const sizes = [
  {
    title: 'Minúsculo',
    value: 10,
  },
  {
    title: 'Padrão',
    value: 12,
  },
  {
    title: 'Grande',
    value: 14,
  },
  {
    title: 'Enorme',
    value: 16,
  },
];

export function RangeInput({ isVisible, setIsVisible }) {
  const { fontSize, setFontSize } = useEditor();
  const [rangeValue, setRangeValue] = useState(fontSize);
  const [sizeTitle, setSizeTitle] = useState('Padrão');

  function handleRangeButtonPress(isSum) {
    const newRangeValue = isSum ? fontSize + 2 : fontSize - 2;
    console.log(newRangeValue);
    if (newRangeValue > 16 || newRangeValue < 10) return;

    setFontSize(newRangeValue);
    setRangeValue(newRangeValue);
  }

  useEffect(() => {
    const title = sizes.find(size => size.value === fontSize).title;
    setSizeTitle(title);
  }, [fontSize]);

  return (
    <Modal isVisible={isVisible} animationIn={'slideInUp'} animationOut={'bounceOut'}>
      <C.Content>
        <C.Heading>Font Size</C.Heading>
        <C.Controls>
          <C.Button onPress={() => handleRangeButtonPress(false)}>
            <C.Title>A</C.Title>
          </C.Button>

          <C.Range>
            <C.Label fontSize={fontSize}>{sizeTitle}</C.Label>
            <Ranger
              value={rangeValue}
              onValueChange={value => setFontSize(value[0])}
              minimumValue={10}
              maximumValue={16}
              trackClickable={true}
              step={2}
              containerStyle={{ width: 200 }}
              minimumTrackStyle={{ backgroundColor: theme.colors.green_700 }}
              maximumTrackStyle={{ backgroundColor: theme.colors.gray_700 }}
              thumbTintColor={theme.colors.green_300}
            />
          </C.Range>

          <C.Button onPress={() => handleRangeButtonPress(true)}>
            <C.Title>A</C.Title>
          </C.Button>
        </C.Controls>

        <C.Button onPress={() => setIsVisible(false)}>
          <C.Title>ok</C.Title>
        </C.Button>
      </C.Content>
    </Modal>
  );
}
