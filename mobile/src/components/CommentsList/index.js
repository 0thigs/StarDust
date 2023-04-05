import * as C from './styles';
import theme from '../../global/styles/theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { ChevronDown } from 'react-native-feather';
import { Comment } from '../Comment';

export function CommentsList({ bottomSheetRef }) {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['100%', '100%']}
      index={-1}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: theme.colors.blue_700 }}
      children={
        <>
          <C.Header>
            <C.Heading>99 Comentários</C.Heading>
            <C.FilterWrapper>
              <C.Filter activeOpacity={0.7}>
                <C.Title>Mais recentes</C.Title>
                <ChevronDown color={theme.colors.white} />
              </C.Filter>
            </C.FilterWrapper>
          </C.Header>
          <C.Content>
            <Comment />
          </C.Content>
        </>
      }
    />
  );
}
