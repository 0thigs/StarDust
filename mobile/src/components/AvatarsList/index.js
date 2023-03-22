import { FlatList } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../Avatar';

export function AvatarsList({ avatars }) {
  const { loggedUser } = useAuth();

  return (
    <FlatList
      data={avatars}
      keyExtractor={avatar => avatar.id}
      renderItem={({ item: { id, name, image } }) => <Avatar id={id} name={name} image={image} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
