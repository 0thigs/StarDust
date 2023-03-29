import { useRef, useState } from 'react';
import { Editor } from '../Editor';
import { Sound } from '../Sound';
// import { keys } from '../../utils/keys';
import RunningCodeSound from '../../assets/sounds/running-code-sound.wav';
import * as C from './styles';
import { View } from 'react-native';

export function Code({ code, userCode, handleUserCode }) {
  const [currentCode, setCurrentCode] = useState(code);

  const soundRef = useRef(null);

  function handleCodeChange(code) {
    userCode.current.value = code;
  }

  function handleRunPress() {
    soundRef.current.play();
    handleUserCode();
  }

  return (
    <C.Container>
      <View currentCode={currentCode}>
        <Editor value={currentCode} isReadOnly={false} onChange={handleCodeChange}  />
      </View>
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

      <Sound ref={soundRef} soundFile={RunningCodeSound} />
    </C.Container>
  );
}
