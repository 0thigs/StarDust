import { useEffect, useRef } from 'react';
import { keys } from '../../utils/keys';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import * as C from './styles';

export function Code({ code, setUserCode, verifyUserCode }) {
  const codeEditorRef = useRef(null);

  function handleCodeChange(userCode) {
    setUserCode(userCode);
  }

  function handleRunPress() {
    console.log('Press');
    verifyUserCode();
  }

  return (
    <C.Container>
      <CodeEditor
        ref={codeEditorRef}
        style={{
          fontSize: 12,
          inputLineHeight: 26,
          highlighterLineHeight: 26,
        }}
        language="python"
        syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
        showLineNumbers
        initialValue={code}
        onChange={handleCodeChange}
        maxLength={40}
        onSelectionChange={({ nativeEvent }) => setPosicaoCursor(nativeEvent.selection.start)}
      />
      <C.CodeButtons>
        {/* <C.KeysList
          data={keys}
          keyExtractor={key => key}
          renderItem={({ item: key }) => (
            <C.CodeButton onPress={handleKeyPress}>
              <C.Title>{key}</C.Title>
            </C.CodeButton>
          )}
          horizontal
        /> */}
        <C.CodeButton onPress={handleRunPress}>
          <C.Title isRunButton={true}>executar</C.Title>
        </C.CodeButton>
      </C.CodeButtons>
    </C.Container>
  );
}
