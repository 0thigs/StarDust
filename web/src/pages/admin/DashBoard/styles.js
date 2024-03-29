import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.4rem 4.8rem;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 24rem 40rem;
  gap: 2.4rem;
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.2rem;
  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const Icon = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_900};
  border-radius: 4;
  display: grid;
  place-content: center;
  padding: 0.8rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 0.4rem;
`;

export const Search = styled.input`
  background-color: ${({ theme }) => theme.colors.purple_700};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  width: 40rem;
  height: 3.6rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.white};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_500};
  }
`;
