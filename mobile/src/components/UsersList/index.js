import { FlatList } from 'react-native';
import { User } from '../User';
import { ArrowDown, ArrowUp } from 'react-native-feather';
import * as C from './styles';
import theme from '../../global/styles/theme';
const iconSize = 25;

export function UsersList({ users, userId, initialPosition = 0 }) {
  const lastPositions = users.length - 5;
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
              isLoggedUser={id === userId}
              lastPositions={lastPositions}
            />
            {position === 5 && (
              <C.Divider>
                <ArrowUp width={iconSize} height={iconSize} color={theme.colors.green_500} />
                <C.Message style={{ color: theme.colors.green_500 }}>Zona de promoção</C.Message>
                <ArrowUp width={iconSize} height={iconSize} color={theme.colors.green_500} />
              </C.Divider>
            )}
            {position === lastPositions && (
              <C.Divider>
                <ArrowDown width={iconSize} height={iconSize} color={theme.colors.red_700} />
                <C.Message style={{ color: theme.colors.red_700 }}>Zona de rebaixamento</C.Message>
                <ArrowDown width={iconSize} height={iconSize} color={theme.colors.red_700} />
              </C.Divider>
            )}
          </>
        );
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 12 }}
    />
  );
}
