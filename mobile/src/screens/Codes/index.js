import { useState, useEffect } from 'react';
import { useCode } from '../../hooks/useCode';
import { useAuth } from '../../hooks/useAuth';

import { CodeCard } from '../../components/CodeCard';
import { Loading } from '../../components/Loading';

import { Plus } from 'react-native-feather';
import * as C from './styles';
import theme from '../../global/styles/theme';
import { AvatarsList } from '../../components/AvatarsList';

export function Codes() {
  const { loggedUser } = useAuth();
  const { codes } = useCode(loggedUser.id);
  const [isLoading, setIsLoading] = useState(true);
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [codeTitle, setCodeTitle] = useState('');

  function onPromptConfirm() {}

  function onPromptCancel() {}

  function editCode(id) {
    setIsPromptVisible(true);
  }

  function deleteCode(id) {}

  function shareCode(id) {}

  function handleCodeButtonPress(action, id) {
    console.log(action);
    switch (action) {
      case 'edit':
        editCode(id);
        break;
      case 'delete':
        deleteCode(id);
        break;
      case 'share':
        shareCode(id);
        break;
    }
  }

  useEffect(() => {
    if (codes.length) setIsLoading(false);
  }, [codes]);

  return (
    <C.Container>
      <C.Button activeOpacity={0.7}>
        <C.Icon>
          <Plus color={theme.colors.green_500} />
        </C.Icon>
        <C.Title>Criar novo código</C.Title>
      </C.Button>
      {isLoading ? (
        <Loading />
      ) : (
        <C.CodesList
          data={codes}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { id, title } }) => (
            <CodeCard id={id} title={title} onPress={handleCodeButtonPress} />
          )}
        />
      )}
    </C.Container>
  );
}
