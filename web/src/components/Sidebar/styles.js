import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: S;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  padding: 0 0 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 100vh;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.green_700};
  height: 8rem;
  display: grid;
  place-content: center;
`;

export const Nav = styled.nav`
  margin: auto 0;
`;

export const NavButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.colors.green_900};
  color: ${({ theme }) => theme.colors.green_500};
  border: 1px solid ${({ theme, isActive }) => theme.colors[isActive ? 'green_500' : 'background']};
  border-radius: 0.4rem;
  transition: transform 0.4s ease-in-out;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AdminButtons = styled.div`
  display: grid;
  padding-top: 1.2rem;
  gap: 0.8rem;
  margin-top: auto;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.green_800};
`;
