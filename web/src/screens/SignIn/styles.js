import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  aside {
    background-color: ${({ theme }) => theme.colors.background};
  }
  main {
    background-color: ${({ theme }) => theme.colors.gray_900};
  }

  aside,
  main {
    place-content: center;
  }
`;

export const Intro = styled.div`
  h1 {
    
  }
`;

export const Form = styled.div``;
