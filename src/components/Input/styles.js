import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  margin-top: 24px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.semibold};
  color: ${props => props.theme.colors.green_500};
`;

export const FormControl = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: solid 1px ${props => props.theme.colors.gray_700};
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 12px;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.gray_700,
}))`
  width: 75%;
  margin-left: 10px;
  padding-top: 5px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.regular};
  color: #fff;
`;

export const Right = styled.View`
    width: 45px;
`;
