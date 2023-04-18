import { FlatList } from 'react-native';
import { User } from '../User';
import { ArrowUp } from 'react-native-feather';
import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';
import theme from '../../global/styles/theme';
const iconSize = 25;

export function UsersList({ users, initialPosition = 0 }) {
  const { loggedUser } = useAuth();

  return (
    <FlatList
      data={users}
      keyExtractor={user => user.id}
      renderItem={({ item: { id, name, avatar_id, weekly_xp, position } }) => {
        return (
          <>
            <User
              position={position + initialPosition}
              id={id}
              name={name}
              avatar_id={avatar_id}
              xp={weekly_xp}
              isLoggedUser={id === loggedUser.id}
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
