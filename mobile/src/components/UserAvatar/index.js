import { getImage } from '../../utils/getImage';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Avatar = styled.Image`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${({ theme }) => theme.colors.green_500};
  margin-bottom: 10px;
`;

export function UserAvatar({ avatar, size }) {
  return <Avatar source={{ uri: getImage('avatars', avatar) }} size={size} />;
}
