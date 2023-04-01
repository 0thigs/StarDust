import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCode } from '../../hooks/useCode';
import { Code } from '../../components/Code';
import { PlaygroundHeader } from '../../components/PlaygroundHeader';
import { execute } from '../../libs/delegua.mjs';
import { Toast } from 'toastify-react-native';
import * as C from './styles';
import { Output } from '../../components/Output';

export function Playground({ route }) {
  const codeId = route.params?.id ?? null;
  const {
    code: { code, title },
    updateCode,
    deleteCode,
    fetchCodes,
  } = useCode(codeId);
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
    console.log(output);
    setOutput(output);
  }

  async function handleUserCode() {
    const code = userCode.current;
    console.log(code);
    try {
      const { erros, resultado } = await execute(code, handleOutput);
      if (erros.length) {
        if (erros[0] instanceof Error) throw erros[0];
        throw erros[0].erroInterno;
      }
      bottomSheetRef.current.collapse();
    } catch (error) {
      handleError(error.message);
    }
  }

  useEffect(() => {
    setCodeTitle(codeId ? title : 'Playground');
  }, [code]);

  return (
    <C.Container>
      <PlaygroundHeader title={codeTitle} updateCode={updateCode} />
      {codeTitle && <Code code={code} handleUserCode={handleUserCode} userCode={userCode} />}
      <Output bottomSheetRef={bottomSheetRef} result={output} />
    </C.Container>
  );
}
