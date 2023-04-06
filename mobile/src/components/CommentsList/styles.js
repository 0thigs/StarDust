import styled from 'styled-components/native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 8px;
`;

export const FilterWrapper = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 8px;
`;

export const Filter = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const Content = styled(BottomSheetScrollView)`
  margin-bottom: 64px;
`;

export const CommentButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green_700};
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: absolute;
  bottom: 12px;
  right: 12px;
`;

export const InputWrapper = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.green_900};
  flex-direction: row;
  width: 100%;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  margin-right: auto;
  padding: 0 ${({ paddingVertical }) => paddingVertical}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  width: ${({ avatarWidth, iconWidth, paddingVertical, iconMarginBetween }) =>
    width - avatarWidth - iconWidth * 2 - iconMarginBetween - paddingVertical}px;
`;

export const InputButton = styled.TouchableOpacity`
  margin-left: ${({ iconMarginBetween }) => iconMarginBetween}px;
`;
