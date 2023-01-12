import styled from 'styled-components/native';

export const Container = styled.View``;


export const Background = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const PlanetsList = styled.FlatList.attrs({
    contentContainerStyle: {
    paddingTop: 32,
    alignItems: 'center',
  },
})``;
