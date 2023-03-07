import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.2rem 0;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.green_500};
  display: block;
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  border: solid 2px ${props => props.theme.colors.gray_700};
  padding: 0.8rem 1.2rem;
  border-radius: 0.4rem;
  margin-top: 1.2rem;
`;

export const Input = styled.input`
  flex: 1;
  margin-left: 0.8rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray_700};
`;
