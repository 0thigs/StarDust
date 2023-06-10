import * as C from './styles';
import theme from '../../global/styles/theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { useEffect } from 'react';

export function Output({ bottomSheetRef, result }) {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['25%', '90%']}
      index={-1}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: theme.colors.black }}
      children={
        <>
          <C.Header>
            <C.Heading>Resultado</C.Heading>
          </C.Header>
          <C.Content>
            {result?.map((result, index) => (
              <C.Result key={`result-${index}`}>
                {result.includes(',') ? result.trim().split(',').join(', ') : result.trim()}
              </C.Result>
            ))}
          </C.Content>
        </>
      }
    />
  );
}
