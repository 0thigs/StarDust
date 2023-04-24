import { Edit3, Share2, Terminal, Trash2 } from 'react-native-feather';
import * as C from './styles';
import theme from '../../global/styles/theme';
const iconColor = theme.colors.gray_500;

export function CodeCard({ id, title, onPress, navigation }) {
  function handleCodeCardPress() {
    navigation.navigate('Playground', { id });
  }

  return (
    <C.Container onPress={handleCodeCardPress}>
      <C.Header>
        <Terminal color={theme.colors.green_500} />
        <C.Title>{title}</C.Title>
      </C.Header>
      <C.Footer>
        <C.Button onPress={() => onPress('delete', id)}>
          <Trash2 color={iconColor} />
        </C.Button>
        <C.Button onPress={() => onPress('edit', id)}>
          <Edit3 color={iconColor} />
        </C.Button>
      </C.Footer>
    </C.Container>
  );
}
