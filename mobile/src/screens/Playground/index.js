import { useEffect, useRef, useState } from 'react';
import { useCode } from '../../hooks/useCode';
import { Code } from '../../components/Code';
import { Output } from '../../components/Output';
import { PlaygroundHeader } from '../../components/PlaygroundHeader';
import { execute } from '../../libs/delegua.mjs';
import { Toast } from 'toastify-react-native';
import * as C from './styles';

export function Playground({ route }) {
  const codeId = useRef(route.params?.id ?? null);
  const {
    code: { code, title },
  } = useCode(codeId.current);
  const [codeTitle, setCodeTitle] = useState('');
  const [output, setOutput] = useState('');
  const userCode = useRef('');
  const bottomSheetRef = useRef(null);

  function handleError(error) {
    if (error) {
      console.log(error);
      Toast.error(error.includes('null') ? 'código inválido' : error);
    }
  }

  function handleOutput(output) {
    setOutput(output);
    if (!output) setOutput('Sem resultado');
    bottomSheetRef.current.collapse();
  }

  async function handleUserCode() {
    try {
      const { erros, resultado } = await execute(userCode.current, handleOutput);
      if (erros.length) {
        if (erros[0] instanceof Error) throw erros[0];
        bottomSheetRef.current.close();
        throw erros[0].erroInterno;
      }
    } catch (error) {
      handleError(error.message);
    }
  }

  useEffect(() => {
    setCodeTitle(codeId.current ? title : 'Playground');
  }, [code]);

  return (
    <C.Container>
      <PlaygroundHeader
        title={codeTitle}
        code={userCode}
        codeId={codeId}
        setCodeTitle={setCodeTitle}
      />
      {codeTitle && <Code code={code} handleUserCode={handleUserCode} userCode={userCode} />}
      <Output bottomSheetRef={bottomSheetRef} result={output} />
    </C.Container>
  );
}
