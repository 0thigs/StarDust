import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: ${({ isSmall }) => (isSmall ? 24 : 36)}px;
  margin: 4px 0;

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ background }) => background};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  font-size: ${({ isSmall }) => (isSmall ? 1.2 : 1.4)}rem;
  font-weight: bold;
  color: ${({ color }) => color};
  border: 2px solid transparent;

  transition: 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_700};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray_700};
  }

  > div {
    flex: 1;
    margin-top: -8px;
  }
`;
