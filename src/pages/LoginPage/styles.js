import styled from "styled-components/native"
import * as Animatable from 'react-native-animatable'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundColor};
  justify-content: center;
  align-items: center;
`
export const Header = styled.View`
  width: 350px; //Largura Padão
  height: auto;
  justify-content: space-between;
  margin: 30px;
`

export const HeaderAdjust = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`

export const ImageLoad = styled.Image`
  height: 31px;
  width: 31px;
  margin-right: 10px;
  margin-bottom: 5px;
`

export const HeaderTitle = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fonts.bold};
`

export const Subtitle = styled.Text`
  font-size: 20px;
  color: #fff;

`

export const Form = styled.View`
  width: 350px;
  height: 116px;
  background-color: #fff;
`

export const Form_Email_Text = styled.Text`

`

export const Form_Password_Text = styled.Text`
  
`

export const Form_Email_Container = styled.View`
  
`


export const Form_Password_Container = styled.View`
  
`

export const Form_Email_Input = styled.TextInput`
  
`


export const Form_Password_Input = styled.TextInput`
  
`