import { useEffect, useRef, useState } from 'react';
import { useCode } from '../../hooks/useCode';
import { Code } from '../../components/Code';
import { Output } from '../../components/Output';
import { PlaygroundHeader } from '../../components/PlaygroundHeader';
import { execute } from '../../libs/delegua.mjs';
import { Toast } from 'toastify-react-native';
import * as C from './styles';
import { Prompt } from '../../components/Prompt';

export function Playground({ route }) {
  const codeId = useRef(route.params?.id ?? null);
  const {
    code: { code, title },
  } = useCode(codeId.current);
  const [codeTitle, setCodeTitle] = useState('');
  const [output, setOutput] = useState([]);
  const [isPromptVisible, setisPromptVisible] = useState(false);
  const [promptTitle, setPromptTitle] = useState('');
  const input = useRef('');
  const userCode = useRef('');
  const promptRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const leiaRegex = /(leia\(.*\))/;

  function handleError(error) {
    if (error) {
      Toast.error(error.includes('null') ? 'código inválido' : error);
    }
  }

  function handleOutput(output) {
    setOutput(currentOutput => [...currentOutput, output]);
    if (!output) setOutput('Sem resultado');
    bottomSheetRef.current.collapse();
  }

  function formatCode(code, inputValue) {
    const match = code.match(leiaRegex);
    userCode.current = code.replace(
      match[0],
      isNaN(inputValue) ? "'" + inputValue + "'" : inputValue
    );
    input.current = '';
    promptRef.current.clear();
    setisPromptVisible(false);
    handleUserCode();
  }

  function onPromptConfirm() {
    formatCode(userCode.current, input.current);
  }

  function onPromptCancel() {
    setisPromptVisible(false);
  }

  function getPromptTitle(inputParam) {
    if (!inputParam) return;
    const inputParamRegex = /\".*\"/;
    const match = inputParam.match(inputParamRegex);

    if (!match) return '';
    const promptTitle = match[0].slice(1).slice(0, -1);
    return promptTitle;
  }

  function hasInput(code) {
    const regex = /(leia\(.*\))/;
    const inputParam = code.match(regex);
    if (!inputParam) return false;
    setPromptTitle(getPromptTitle(inputParam[0]));
    return inputParam.length;
  }

  async function handleUserCode() {
    const code = userCode.current;

    if (hasInput(code)) {
      setisPromptVisible(true);
      return;
    }

    try {
      setOutput([]);
      const { erros, resultado } = await execute(code, handleOutput);
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

      <Prompt
        isVisible={isPromptVisible}
        title={promptTitle}
        onConfirm={onPromptConfirm}
        onCancel={onPromptCancel}
        value={input}
        promptRef={promptRef}
      />

      <Output bottomSheetRef={bottomSheetRef} result={output} input={input} />
    </C.Container>
  );
}
