import styled from 'styled-components';

export const Container = styled.header`
  grid-area: H;
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;



  h1 {
    text-transform: uppercase;
    margin-right: auto;
    font-weight: 500;
  }
`;

export const Admin = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 1.4rem;

  img {
    width: 5.2rem;
    height: 5.2rem;
    border-radius: 50%;
    object-fit: cover;
  }

  strong {
    display: block;
    text-align: right;
  }
`;
