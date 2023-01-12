import { useEffect } from 'react';
import { Toast } from 'toastify-react-native';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../services/supabase';
import { Achievement } from '../Achievement';
import * as C from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import { userId } from '../../contexts/AuthContext';

export function CustomDrawer() {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();

  async function handleSignOut() {
    const response = await signOut();
    if (response?.error) {
      Toast.error('Falha ao tentar sair da conta');
      return;
    }

    navigation.reset({
      routes: [{ name: 'SignIn' }],
    });
  }

  return (
    <C.Container>
      <C.UserAvatar source={{ uri: 'https://github.com/JohnPetros.png' }} />
      <C.UserName>{user.name}</C.UserName>
      <C.UserEmail>{user.email}</C.UserEmail>
      <C.LogOutButton onPress={handleSignOut}>
        <C.LogOutButtonText>Sair</C.LogOutButtonText>
      </C.LogOutButton>

      <Achievement
        title={'Começando a viagem'}
        description={'Termine a primeira fase do StarDust'}
        goal={1}
        id={1}
        isGotten={true}
      />
      <Achievement
        title={'Início da exploração'}
        description={'Completo o primeiro planeta do StarDust'}
        goal={1}
        id={2}
        isGotten={true}
      />
      <Achievement
        title={'100 XP'}
        description={'Ganhe 100 XP'}
        goal={100}
        id={3}
        isGotten={true}
      />
      <Achievement
        title={'Coletor de estrelas'}
        description={'Complete 5 fases'}
        goal={5}
        id={4}
        isGotten={true}
      />
      <Achievement
        title={'Colecionador de estrelas'}
        description={'Complete 10 fases'}
        goal={10}
        id={4}
        isGotten={false}
      />
      <Achievement
        title={'Caçador de estrelas'}
        description={'Complete 20 fases'}
        goal={20}
        id={4}
        isGotten={false}
      />
    </C.Container>
  );
}
