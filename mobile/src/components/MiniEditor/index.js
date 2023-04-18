import { useState } from 'react';
import { Editor } from '../Editor';
import { Button } from '../Button';
import Modal from 'react-native-modal';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function MiniEditor({ isVisible, setIsVisible, setBody }) {
  const [code, setCode] = useState('');

  function handleCodeChange() {}

  function handleInsertCodePress() {}

  return (
    <Modal isVisible={isVisible} animationIn={'slideInUp'} animationOut={'bounceOut'}>
      <C.Container>
        <C.Code>
          <Editor onChange={handleCodeChange} value={'\n\n\n\n\n'} isReadOnly={false} />
        </C.Code>
        <C.Footer>
          <C.ButtonWrapper>
            <Button
              title={'Inserir'}
              color={theme.colors.black}
              background={theme.colors.green_500}
              onPress={handleInsertCodePress}
              isDisabled={!!code}
            />
          </C.ButtonWrapper>

          <C.ButtonWrapper isRight={true}>
            <Button
              title={'Cancelar'}
              color={theme.colors.white}
              background={theme.colors.red_700}
              onPress={() => setIsVisible(false)}
            />
          </C.ButtonWrapper>
        </C.Footer>
      </C.Container>
    </Modal>
  );
}
