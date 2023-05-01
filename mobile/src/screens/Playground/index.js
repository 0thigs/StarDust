import { useEffect, useRef, useState } from 'react';
import { useCode } from '../../hooks/useCode';
import { Code } from '../../components/Code';
import { Output } from '../../components/Output';
import { Prompt } from '../../components/Prompt';
import { PlaygroundHeader } from '../../components/PlaygroundHeader';
import { execute } from '../../libs/delegua.mjs';
import ToastMenager, { Toast } from 'toastify-react-native';
import * as C from './styles';

export function Playground({ route }) {
  const [codeId, setCodeId] = useState(route.params?.id ?? null);
  const {
    code: { code, title },
  } = useCode(codeId);
  const [codeTitle, setCodeTitle] = useState('');
  const [initialCode, setInitialCodeCode] = useState('');
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
        const error = erros[0];
        if (error instanceof Error) throw error;
        bottomSheetRef.current.close();
        throw error.erroInterno;
      }
    } catch (error) {
      handleError(error.message);
    }
  }

  useEffect(() => {
    setCodeTitle(codeId ? title : 'Playground');
    setInitialCodeCode(codeId ? code : route.params?.code);
  }, [code]);

  return (
    <C.Container>
      <ToastMenager
        animationInTiming={700}
        animationOutTiming={1000}
        animationStyle={'rightInOut'}
        width={320}
        position={'top'}
      />

      <PlaygroundHeader
        title={codeTitle}
        code={userCode}
        codeId={codeId}
        setCodeId={setCodeId}
        setCodeTitle={setCodeTitle}
      />

      {codeTitle && <Code code={initialCode} handleUserCode={handleUserCode} userCode={userCode} />}

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
