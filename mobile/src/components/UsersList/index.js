import { FlatList } from 'react-native';
import { User } from '../User';
import { ArrowUp } from 'react-native-feather';
import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';
import theme from '../../global/styles/theme';
const iconSize = 25;

export function UsersList({ users }) {
  const { user } = useAuth();

  return (
    <FlatList
      data={users}
      keyExtractor={user => user.id}
      renderItem={({ item: { id, name, avatar, xp, position } }) => {
        return (
          <>
            <User
              position={position}
              id={id}
              name={name}
              avatar={avatar}
              xp={xp}
              isLoggedUser={id === user.id}
            />
            {position === 5 && (
              <C.Divider>
                <ArrowUp width={iconSize} height={iconSize} color={theme.colors.green_500} />
                <C.Message>Zona de promoção</C.Message>
                <ArrowUp width={iconSize} height={iconSize} color={theme.colors.green_500} />
              </C.Divider>
            )}
          </>
        );
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 24 }}
    />
  );
}