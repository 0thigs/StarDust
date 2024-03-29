import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  position: 'relative',
})``;

export const Background = styled.ImageBackground`
  flex: 1;
  padding-top: 32px;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #033045;
`;

// export const Background = styled.View`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
// `;
