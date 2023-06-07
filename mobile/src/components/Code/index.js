import { useRef, useEffect, useState } from 'react';
import { View, Keyboard } from 'react-native';
import { Editor } from '../Editor';
import { Sound } from '../Sound';
import { Loading } from '../Loading';
// import { keys } from '../../utils/keys';
import { default as BottomSheet } from '@gorhom/bottom-sheet';
import RunningCodeSound from '../../assets/sounds/running-code-sound.wav';
import RunningErrorCodeSound from '../../assets/sounds/crying-sound.wav';
import theme from '../../global/styles/theme';
import * as C from './styles';
import { CodeEditor, CodeEditorSyntaxStyles } from '../CodeEditor';

export function Code({ code, userCode, handleUserCode }) {
  //   const [currentCode, setCurrentCode] = useState(code);
  const [isRunning, setIsRunning] = useState(false);
  const [bottomSheetHeight, setBottomSheetHeight] = useState(100);
  const soundRef = useRef(null);
  const bottomSheetRef = useRef(null);

  function handleCodeChange(code) {
    userCode.current = code;
  }

  async function handleRunPress() {
    setIsRunning(true);
    try {
      await handleUserCode();
      soundRef.current.play();
    } catch (error) {
      console.error(error);
    } finally {
      setIsRunning(false);
    }
  }

  function getBottomSheetHeight(event) {
    const { height } = event.endCoordinates;
    setBottomSheetHeight(height / 4);
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', getBottomSheetHeight);
    return () => Keyboard.removeAllListeners('keyboardDidShow');
  }, []);

  return (
    <C.Container>
      <View>
        <Editor value={code} isReadOnly={false} onChange={handleCodeChange} />
        {/* <CodeEditor
          style={{
            fontSize: 12,
            inputLineHeight: 20,
            highlighterLineHeight: 20,
          }}
          language={'javascript'}
          showLineNumbers
          autoFocus={false}
          onChange={handleCodeChange}
          initialValue={code}
          readOnly={false}
          syntaxStyle={CodeEditorSyntaxStyles.tomorrowNightBright}
        /> */}
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['10%', bottomSheetHeight]}
        index={1}
        backgroundStyle={{ backgroundColor: theme.colors.black }}
        enableContentPanningGesture={false}
        keyboardBehavior={'extend'}
        children={
          <C.Container>
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
              {isRunning ? <Loading /> : <C.Title isRunButton={true}>executar</C.Title>}
            </C.CodeButton>
          </C.Container>
        }
      />

      <Sound ref={soundRef} soundFile={RunningCodeSound} />
    </C.Container>
  );
}
