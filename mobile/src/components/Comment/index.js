import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useComment } from '../../hooks/useComment';
import { UserAvatar } from '../UserAvatar';
import { ChevronUp } from 'react-native-feather';
import { Loading } from '../Loading';
import * as C from './styles';
import dayjs from 'dayjs';
import theme from '../../global/styles/theme';

export function Comment({ id, authorId, body, created_at, likes }) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const { author, updateComment } = useComment(authorId);
  const [likesCount, setLikesCount] = useState(likes);
  const createdAt = dayjs(created_at).format('DD/MM/YYYY');

  function handleLikeButtonPress() {
    const { liked_comments_ids } = loggedUser;
    let updatedLikes = likes;
    let updatedLikedCommentsIds = [];
    if (liked_comments_ids.includes(id)) {
      updatedLikedCommentsIds = liked_comments_ids.filter(likedCommnetId => likedCommnetId !== id);
      updatedLikes--;
    } else {
      updatedLikedCommentsIds = [...liked_comments_ids, id];
      updatedLikes++;
    }
    setLikesCount(updatedLikes);
    updateComment(id, { likes: updatedLikes });
    updateLoggedUser('liked_comments_ids', updatedLikedCommentsIds);
  }

  return (
    <C.Container>
      {!author ? (
        <Loading />
      ) : (
        <>
          <UserAvatar avatarId={author.avatar_id} size={40} />
          <C.Info>
            <C.Header>
              <C.Authorname>{author.name}</C.Authorname>
              <C.Date>{createdAt}</C.Date>
            </C.Header>
            <C.Body>{body}</C.Body>
            <C.Footer>
              <C.FooterButton onPress={handleLikeButtonPress} activeOpacity={0.7}>
                <ChevronUp color={theme.colors.green_700} />
              </C.FooterButton>
              <C.FooterButton marginRight={'auto'} activeOpacity={0.7}>
                <C.LikesCount>+{likesCount}</C.LikesCount>
              </C.FooterButton>
              <C.FooterButton marginRight={'12px'} activeOpacity={0.7}>
                <C.ReplyText>81 respostas</C.ReplyText>
              </C.FooterButton>
              <C.FooterButton activeOpacity={0.7}>
                <C.ReplyText>Responder</C.ReplyText>
              </C.FooterButton>
            </C.Footer>
          </C.Info>
        </>
      )}
    </C.Container>
  );
}
