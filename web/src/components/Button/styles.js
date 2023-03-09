import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 48px;
  margin: 8px 0;
  box-shadow: 0 10px 40px #00ff8052;

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ background }) => background};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ color }) => color};
  border: 2px solid transparent;

  transition: 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_700};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.green_900};
  }

  > div {
    flex: 1;
    margin-top: -8px;
  }
`;
