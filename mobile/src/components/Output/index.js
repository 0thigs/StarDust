import { useRef, useEffect, useState } from 'react';
import theme from '../../global/styles/theme';
import BottomSheet from '@gorhom/bottom-sheet';
import * as C from './styles';

export function Output({ bottomSheetRef, result }) {
  const [outputs, setOutputs] = useState([]);
  const types = useRef([]);

  function formatOutput(output, index) {
    switch (types.current[index].trim()) {
      case 'texto':
        return "'" + output + "'";
      case 'vetor':
        return '[ ' + output.split(',').join(', ') + ' ]';
      default:
        return output;
    }
  }

  useEffect(() => {
    setOutputs([])
    if (!result || !result.length) return;

    types.current = result.filter((_, index) => index % 2 === 0);
    const outputs = result.filter((_, index) => index % 2 !== 0);
    console.log(outputs);

    setOutputs(outputs.map((output, index) => formatOutput(output.trim(), index)));
  }, [result]);

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
            {outputs.map((output, index) => (
              <C.Result key={`result-${index}`}>{output}</C.Result>
            ))}
          </C.Content>
        </>
      }
    />
  );
}
