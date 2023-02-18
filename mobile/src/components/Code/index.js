import { useState, useEffect, useRef } from 'react';
import * as C from './styles';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { keys } from '../../utils/keys';
import { Keyboard } from 'react-native';

export function Code({ code }) {
  const [posicaoCursor, setPosicaoCursor] = useState(0);

  const codeEditorRef = useRef(null);

  function handleCodeChange(code) {
    console.log(posicaoCursor);
    
  }

  function handleKeyPress() {
    console.log('Press');
  }

  function handleRunPress() {
    console.log('Press');
  }

  function keepKeyboard() {
    console.log(codeEditorRef.current);
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', keepKeyboard);
  }, []);

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
        autoFocus
        initialValue={code}
        onChange={handleCodeChange}
        maxLength={40}
        onSelectionChange={({ nativeEvent }) => setPosicaoCursor(nativeEvent.selection.start)}
      />
      <C.CodeButtons>
        <C.KeysList
          data={keys}
          keyExtractor={key => key}
          renderItem={({ item: key }) => (
            <C.CodeButton onPress={handleKeyPress}>
              <C.Title>{key}</C.Title>
            </C.CodeButton>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <C.CodeButton onPress={handleRunPress}>
          <C.Title isRunButton={true}>executar</C.Title>
        </C.CodeButton>
      </C.CodeButtons>
    </C.Container>
  );
}
