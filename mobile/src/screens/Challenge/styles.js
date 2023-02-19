import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.colors.background};
  align-items: center;
  padding: 32px 0 0;
`;

export const Slider = styled.FlatList``;
