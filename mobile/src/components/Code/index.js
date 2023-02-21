import { useRef } from 'react';
import { Editor } from '../Editor';
import { Sound } from '../Sound';
// import { keys } from '../../utils/keys';
import RunningCodeSound from '../../assets/GlobalAssets/running-code-sound.wav';
import * as C from './styles';

export function Code({ code, userCode, handleUserCode }) {
  const soundRef = useRef(null);

  function handleCodeChange(code) {
    userCode.current.value = code;
  }

  function handleRunPress() {
    soundRef.current.playSound();
    handleUserCode();
  }

  return (
    <C.Container>
      <Editor value={code} isReadOnly={false} onChange={handleCodeChange} />
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
