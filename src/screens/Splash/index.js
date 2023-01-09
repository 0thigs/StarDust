import React from 'react';
import * as C from './styles';
import { useNavigation } from '@react-navigation/native';

export function Splash() {
  const navigation = useNavigation();

  return (
    <C.Container>
      <C.Title animation={'pulse'} duration={1500}>
        <C.TitleSpan>Star</C.TitleSpan>Dust
      </C.Title>
      <C.Subtitle>Aprenda Enquanto Se Diverte!</C.Subtitle>
      <C.Button onPress={() => navigation.navigate('SignIn')}>
        <C.Image source={require('../../assets/SplashAssets/send.png')}></C.Image>
      </C.Button>
    </C.Container>
  );
}
