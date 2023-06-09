import { useRef, useEffect, useState } from 'react';
import { View, Keyboard } from 'react-native';
import { Editor } from '../Editor';
import { Sound } from '../Sound';
import { Loading } from '../Loading';
import { keys } from '../../utils/keys';
import { Output } from '../Output';
import { Play } from 'react-native-feather';
import { ScrollView as GestureHandlerScrollView } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';
import RunningCodeSound from '../../assets/sounds/running-code-sound.wav';
import * as C from './styles';

export function Code({ code, userCode, handleUserCode, output }) {
  const [isKeysVisible, setIsKeysVisible] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const cursorPosition = useRef(0);
  const soundRef = useRef(null);
  const editorRef = useRef(null);
  const outputRef = useRef(null);

  function handleCodeChange(code) {
    userCode.current = code;
  }

  function handleCodeSelectionChange(selection) {
    cursorPosition.current = selection?.start;
  }

  async function handleRunPress() {
    setIsRunning(true);
    await Promise.all([soundRef.current.play(), handleUserCode()]);
    setIsRunning(false);
  }

  function handleKeyPress(key) {
    let updatedValue = '';
    switch (key) {
      case 'TAB':
        updatedValue = updatedValue =
          userCode.current.slice(0, cursorPosition.current) +
          '  ' +
          userCode.current.slice(cursorPosition.current);
        editorRef.current.moveCursor(cursorPosition.current, 2);
        break;
      case '(':
      case '[':
      case '{':
        const closeKey = keys.find((_, index) => index === keys.indexOf(key) + 1);

        userCode.current =
          userCode.current.slice(0, cursorPosition.current) +
          closeKey +
          userCode.current.slice(cursorPosition.current);
        editorRef.current.moveCursor(cursorPosition.current, 1);

        updatedValue =
          userCode.current.slice(0, cursorPosition.current) +
          key +
          userCode.current.slice(cursorPosition.current);
        break;
      case '"':
      case "'":
        userCode.current =
          userCode.current.slice(0, cursorPosition.current) +
          key +
          userCode.current.slice(cursorPosition.current);
        editorRef.current.moveCursor(cursorPosition.current, 1);

        updatedValue =
          userCode.current.slice(0, cursorPosition.current) +
          key +
          userCode.current.slice(cursorPosition.current);
        break;
      default:
        updatedValue =
          userCode.current.slice(0, cursorPosition.current) +
          key +
          userCode.current.slice(cursorPosition.current);
        editorRef.current.moveCursor(cursorPosition.current, 1);
    }

    editorRef.current.setValue(updatedValue);
    userCode.current = updatedValue;
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setIsKeysVisible(true));
    Keyboard.addListener('keyboardDidHide', () => setIsKeysVisible(false));
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  useEffect(() => {
    outputRef.current.collapse();
  }, [output]);

  return (
    <C.Container>
      <View>
        <Editor
          editorRef={editorRef}
          value={code}
          isReadOnly={false}
          onChange={handleCodeChange}
          onSelectionChange={handleCodeSelectionChange}
        />
      </View>

      <C.CodeButtons>
        {isKeysVisible && (
          <GestureHandlerScrollView keyboardShouldPersistTaps={'always'} horizontal>
            {keys.map(key => (
              <C.CodeButton key={key} onPress={() => handleKeyPress(key)}>
                <C.Title>{key}</C.Title>
              </C.CodeButton>
            ))}
          </GestureHandlerScrollView>
        )}

        <C.CodeButton isRunningButton={true} style={{ width: 140 }} onPress={handleRunPress}>
          {isRunning ? (
            <Loading />
          ) : (
            <C.Title style={{ color: theme.colors.green_500 }}>EXECUTAR</C.Title>
          )}
          <Play
            color={theme.colors.green_500}
            width={16}
            style={{ marginBottom: 4, marginLeft: 4 }}
          />
        </C.CodeButton>
      </C.CodeButtons>

      <Output bottomSheetRef={outputRef} result={output} />

      <Sound ref={soundRef} soundFile={RunningCodeSound} />
    </C.Container>
  );
}
