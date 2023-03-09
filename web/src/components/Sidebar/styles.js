import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: S;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 3.2rem;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.green_700};
  height: 8rem;
  display: grid;
  place-content: center;
`;

export const Nav = styled.nav`
  margin-top: 2.4rem;
`;

export const NavButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.colors.green_900};
  color: ${({ theme }) => theme.colors.green_500};
  border-radius: 0.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
