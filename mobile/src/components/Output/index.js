import * as C from './styles';
import theme from '../../global/styles/theme';
import BottomSheet from '@gorhom/bottom-sheet';

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
            {result.map(result => (
              <C.Result key={result}>{result}</C.Result>
            ))}
          </C.Content>
        </>
      }
    />
  );
}
