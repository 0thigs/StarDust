import styled from 'styled-components';

export const Container = styled.table`
  border-collapse: collapse;
  margin: 2.4rem auto;
`;

export const THead = styled.thead`
  th {
    padding: 1.6rem;
    color: ${({ theme }) => theme.colors.green_500};
    font-weight: 600;
    font-size: 1.2rem;
    text-align: start;
  }
`;

export const TBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;

  td {
    padding: 1.2rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
  }

  span.order {
    color: ${({ theme }) => theme.colors.green_500};
    position: absolute;
    margin-left: 0.8rem;
  }

  td.action-button {
    width: 10rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 0.4rem;
  }
`;
