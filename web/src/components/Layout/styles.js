import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr 1fr;
  grid-auto-rows: 8rem 1fr 1fr;

  /*
    H - Header
    S - Sidebar
    M - Main
  */
  grid-template-areas:
    'S H H'
    'S M M'
    'S M M';

  height: 100vh;
`;

export const Main = styled.main`
  grid-area: M;
  background-color: ${({ theme }) => theme.colors.gray_900};

`;
