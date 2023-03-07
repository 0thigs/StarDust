import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 48px;
  margin: 8px 0;

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ background }) => background};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ color }) => color};
`;
