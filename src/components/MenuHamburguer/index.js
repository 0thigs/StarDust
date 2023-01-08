import styled from 'styled-components';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  margin-left: 20px;
`;

export function MenuHamburguer(props) {
  function toggleDrawer() {
    props.navigationProps.toggleDrawer();
  }
  return (
    <Container onPress={toggleDrawer}>
      <Icon.Menu color={theme.colors.green_300} />
    </Container>
  );
}
