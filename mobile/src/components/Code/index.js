import { useRef, useEffect } from 'react';
import { Editor } from '../Editor';
import { Sound } from '../Sound';
// import { keys } from '../../utils/keys';
import RunningCodeSound from '../../assets/sounds/running-code-sound.wav';
import { default as Keyboard } from '@gorhom/bottom-sheet';
import * as C from './styles';
import { View } from 'react-native';
import theme from '../../global/styles/theme';

export function Code({ code, userCode, handleUserCode }) {
  //   const [currentCode, setCurrentCode] = useState(code);
  const soundRef = useRef(null);
  const keyboardRef = useRef(null);

  function handleCodeChange(code) {
    userCode.current = code;
  }

  function handleRunPress() {
    soundRef.current.play();
    handleUserCode();
  }

  useEffect(() => {
    keyboardRef.current.collapse();
  }, []);

  return (
    <C.Container>
      <View>
        <Editor value={code} isReadOnly={false} onChange={handleCodeChange} />
      </View>

      <Keyboard
        ref={keyboardRef}
        snapPoints={['15%', '15%']}
        index={1}
        backgroundStyle={{ backgroundColor: theme.colors.black }}
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
              <C.Title isRunButton={true}>executar</C.Title>
            </C.CodeButton>
          </C.Container>
        }
      />

      <Sound ref={soundRef} soundFile={RunningCodeSound} />
    </C.Container>
  );
}
