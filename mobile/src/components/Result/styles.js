import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding-top: 24px;
  flex: 1;
`;

export const TestCases = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 100,
  },
}))``;
