import * as C from './styles';
import theme from '../../global/styles/theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { ChevronDown } from 'react-native-feather';

export function Output({ bottomSheetRef, result }) {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['25%', '50%']}
      index={-1}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: theme.colors.black }}
      children={
        <>
          <C.Header>
            <C.Heading>Resultado</C.Heading>
          </C.Header>
          <C.Content>
            <C.Result>{result}</C.Result>
          </C.Content>
        </>
      }
    />
  );
}
