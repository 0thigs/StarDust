import { useEffect, useRef } from 'react';
import { keys } from '../../utils/keys';
import { Editor } from '../Editor';
import * as C from './styles';

export function Code({ code, setUserCode, handleUserCode }) {
  function handleCodeChange(userCode) {
    setUserCode(userCode);
  }

  function handleRunPress() {
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
    </C.Container>
  );
}
