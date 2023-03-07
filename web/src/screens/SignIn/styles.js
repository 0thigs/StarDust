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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Intro = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

export const Header = styled.header`
  h2 {
    color: ${({ theme }) => theme.colors.green_300};
    font-size: 2.4rem;
    font-weight: 500;
    display: inline-block;
    margin-left: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    margin: 2rem 0;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 35rem;

 > button {
    margin-top: 1.8rem;
  }
`;
