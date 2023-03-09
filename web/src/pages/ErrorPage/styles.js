import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Message = styled.main`
  display: grid;
  gap: 2.4rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;

  h1 {
    color: ${({ theme }) => theme.colors.green_300};
  }

  strong {
    font-size: 1.6rem;
    text-transform: initial;
  }
`;
