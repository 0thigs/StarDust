import * as C from './styles';
import { Text } from '../Text';
import { ArrowRight } from 'react-native-feather';
import theme from '../../global/styles/theme';

export function Problem({ title, texts, goToCode }) {
  return (
    <C.Container showsVerticalScrollIndicator={false}>
      <C.Title>{title}</C.Title>
      {texts.map(({ type, body }, index) => (
        <Text key={`text-${index}`} type={type} body={body} isRendered={false} />
      ))}
      <C.Button onPress={goToCode}>
        <ArrowRight color={theme.colors.white} width={32} />
      </C.Button>
    </C.Container>
  );
}
