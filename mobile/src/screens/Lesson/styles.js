import styled from 'styled-components/native';

export const lessonContainerWidth = '90%';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;
