import * as C from './styles';
import theme from '../../global/styles/theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { ChevronDown } from 'react-native-feather';
import { Comment } from '../Comment';
import { useState, useEffect } from 'react';
import api from '../../services/api';

export function CommentsList({ challengeId, bottomSheetRef }) {
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    try {
      const comments = await api.getComments(challengeId);
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!comments.length) fetchComments();
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['100%', '100%']}
      index={-1}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: theme.colors.blue_700 }}
      children={
        <C.Container>
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
            {comments.map(({ id, body, user_id, created_at, likes }) => (
              <Comment
                key={id}
                id={id}
                body={body}
                authorId={user_id}
                created_at={created_at}
                likes={likes}
              />
            ))}
          </C.Content>
        </C.Container>
      }
    />
  );
}
