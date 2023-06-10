import { useEffect, useRef, useState } from 'react';
import { useCode } from '../../hooks/useCode';
import { Code } from '../../components/Code';
import { Output } from '../../components/Output';
import { Prompt } from '../../components/Prompt';
import { PlaygroundHeader } from '../../components/PlaygroundHeader';
import { execute } from '../../libs/delegua.mjs';
import { Toast } from 'toastify-react-native';
import * as C from './styles';

export function Playground({ route }) {
  const [codeId, setCodeId] = useState(route.params?.id ?? null);
  const {
    code: { code, title },
  } = useCode(codeId);
  const [codeTitle, setCodeTitle] = useState('');
  const [initialCode, setInitialCode] = useState('');
  const [output, setOutput] = useState([]);
  const [isPromptVisible, setisPromptVisible] = useState(false);
  const [promptTitle, setPromptTitle] = useState('');
  const [codeWithInput, setCodeWithInput] = useState('');
  const input = useRef('');
  const userCode = useRef('');
  const promptRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const errorLine = useRef(0);

  function handleError(error) {
    if (error) {
      Toast.error(
        error.includes('null') ? 'código inválido' : error + `\nLinha: ${errorLine.current}`
      );
    }
  }

  function handleOutput(output) {
    setOutput(currentOutput => [...currentOutput, output]);
    if (!output) setOutput('Sem resultado');
  }

  async function formatCode(code, input) {
    const regex = /(leia\(.*\))/;
    const match = code.match(regex);
    userCode.current = code.replace(match[0], isNaN(input) ? "'" + input + "'" : input);
    input = '';
    promptRef.current.clear();
    setisPromptVisible(false);
    handleUserCode(userCode.current);
  }

  function onPromptConfirm() {
    formatCode(codeWithInput, input.current);
  }

  function onPromptCancel() {
    setisPromptVisible(false);
  }

  function getPromptTitle(inputParam) {
    if (!inputParam) return;
    const regex = /["'].*["']/;
    const match = inputParam.match(regex);

    if (!match) return '';
    const promptTitle = match[0].slice(1).slice(0, -1);
    return promptTitle;
  }

  function getPrintContent(print) {
    return print.replace(/escreva\((.*?)\)/, 'escreva(tipo de $1)');
  }

  function addPrintType(code) {
    const regex = /(escreva\(.+\))/g;
    if (!regex.test(code)) return code;

    const newCode = code.replace(regex, print => {
      return getPrintContent(print) + print;
    });

    return newCode;
  }

  function hasInput(code) {
    const regex = /(leia\(.*\))/;
    const inputParam = code.match(regex);
    if (!inputParam) return false;
    setPromptTitle(getPromptTitle(inputParam[0]));
    return inputParam.length;
  }

  async function handleUserCode() {
    const code = addPrintType(userCode.current);

    if (hasInput(code)) {
      setCodeWithInput(code);
      setisPromptVisible(true);
      return;
    }

    try {
      setOutput([]);
      const { erros } = await execute(code, handleOutput);
      if (erros.length) {
        const error = erros[0];
        errorLine.current = error.linha;
        if (error instanceof Error) throw error;
        bottomSheetRef.current.close();
        throw error.erroInterno;
      }

      bottomSheetRef.current.collapse();
    } catch (error) {
      handleError(error.message);
    } finally {
    }
  }

  useEffect(() => {
    setCodeTitle(codeId ? title : 'Playground');
    setInitialCode(codeId ? code : route.params?.code);
  }, [code]);

  return (
    <C.Container>
      <PlaygroundHeader
        title={codeTitle}
        code={userCode}
        codeId={codeId}
        initialCode={initialCode}
        setInitialCode={setInitialCode}
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
