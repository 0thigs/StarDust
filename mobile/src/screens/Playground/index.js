import { useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCode } from '../../hooks/useCode';
import { Code } from '../../components/Code';
import { PlaygroundHeader } from '../../components/PlaygroundHeader';
import { execute } from '../../libs/delegua.mjs';
import { Toast } from 'toastify-react-native';
import * as C from './styles';

export function Playground({ route }) {
  const codeId = route.params?.id ?? null;
  const { loggedUser } = useAuth();
  const { code, updateCode, deleteCode, fetchCodes } = useCode(codeId);
  const userCode = useRef('');

  function handleError(error) {
    if (error) {
      Toast.error(error.includes('null') ? 'código inválido' : error);
    }
  }

  function handleOutput(output) {
    console.log(output);
  }

  async function handleUserCode() {
    const code = userCode.current;
    try {
      const { erros, resultado } = await execute(code, handleOutput);
      if (erros.length) {
        if (erros[0] instanceof Error) throw erros[0];
        throw erros[0].erroInterno;
      }
      // handleResult(resultado.splice(-1)[0]) // {"valor":1,"tipo":"número"};
    } catch (error) {
      handleError(error.message);
    }
  }

  return (
    <C.Container>
      <PlaygroundHeader updateCode={updateCode} />
      <Code code={code} handleUserCode={handleUserCode} userCode={userCode} />
    </C.Container>
  );
}
