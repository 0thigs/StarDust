import { useAvatar } from '../../hooks/useAvatar';
import { useImageUri } from '../../hooks/useImageUri';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../Loading';

const Avatar = styled.Image`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${({ theme }) => theme.colors.green_500};
  margin-bottom: 10px;
`;

export function UserAvatar({ avatarId, size }) {
  const { avatar } = useAvatar(avatarId);
  const { imageUri } = useImageUri('avatars', avatar);
  return imageUri ? <Avatar source={{ uri: imageUri }} size={size} /> : <Loading />;
}
