import { useState } from 'react';
import { UserAvatar } from '../UserAvatar';
import { Editor } from '../Editor';
import { ChevronUp, MoreVertical } from 'react-native-feather';
import * as C from './styles';
import dayjs from 'dayjs';
import theme from '../../global/styles/theme';
import { PopoverMenu } from '../PopoverMenu';

export function Comment({
  id,
  author,
  authorId,
  content,
  created_at,
  likes,
  replyComments,
  updateComment,
  loggedUserId,
  likedCommentsIds,
  updateLoggedUser,
  handleAddCommentButtonPress,
}) {
  const [likesCount, setLikesCount] = useState(likes);
  const [isEditInputVisible, setiIsEditInputVisible] = useState(false);
  const [editedText, setEditedText] = useState('');

  const createdAt = dayjs(created_at).format('DD/MM/YYYY');
  const isLiked = likedCommentsIds.includes(id);
  const isFromLoggedUser = loggedUserId === authorId;

  const popoverMenuButtons = [
    {
      title: 'Editar',
      isToggle: false,
      value: null,
      action: () => handleAddCommentButtonPress(),
    },
    {
      title: 'Dark Mode',
      isToggle: true,
      value: null,
      action: () => setIsDarkMode(!isDarkMode),
    },
    {
      title: 'Font Size',
      isToggle: false,
      value: null,
      action: () => setIsRangeInputVisible(true),
    },
  ];

  function insertCode() {}

  function handleLikeButtonPress() {
    let updatedLikes = likesCount;
    let updatedLikedCommentsIds = [];
    if (isLiked) {
      updatedLikedCommentsIds = likedCommentsIds.filter(likedCommnetId => likedCommnetId !== id);
      updatedLikes--;
    } else {
      updatedLikedCommentsIds = [...likedCommentsIds, id];
      updatedLikes++;
    }
    setLikesCount(updatedLikes);
    updateComment(id, { likes: updatedLikes });
    updateLoggedUser('liked_comments_ids', updatedLikedCommentsIds);
  }

  return (
    <C.Container>
      {authorId && (
        <>
          <UserAvatar avatarId={author.avatar_id} size={40} />
          <C.Info>
            <C.Header>
              <C.Authorname>{author.name}</C.Authorname>
              <C.Date>{createdAt}</C.Date>
            </C.Header>

            {isEditInputVisible ? (
              <C.EditInputWrapper>
                <C.Label>Seu comentário</C.Label>
                <C.EditInput multiline style={{ textAlignVertical: 'top' }} />
                <C.EditButtons>
                  <C.Button marginRight={'auto'}>
                    <C.CodeButtonTitle>+ inserir código</C.CodeButtonTitle>
                  </C.Button>
                  <C.Button marginRight={'12px'}>
                    <C.ButtonTitle>Cancelar</C.ButtonTitle>
                  </C.Button>
                  <C.Button>
                    <C.ButtonTitle>Salvar</C.ButtonTitle>
                  </C.Button>
                </C.EditButtons>
              </C.EditInputWrapper>
            ) : (
              <>
                <C.Content>
                  {content.map(({ type, body }, index) =>
                    type === 'generic' ? (
                      <C.Generic key={`content-${index}`}>{body}</C.Generic>
                    ) : (
                      <C.Code key={`content-${index}`}>
                        <Editor value={body}>{body}</Editor>
                      </C.Code>
                    )
                  )}
                </C.Content>
                <C.Footer>
                  <C.Button onPress={handleLikeButtonPress} activeOpacity={0.7}>
                    <ChevronUp color={theme.colors[isLiked ? 'green_700' : 'gray_500']} />
                  </C.Button>
                  <C.Button marginRight={'auto'} activeOpacity={0.7}>
                    <C.LikesCount>+{likesCount}</C.LikesCount>
                  </C.Button>
                  <C.Button marginRight={'12px'} activeOpacity={0.7}>
                    <C.ButtonTitle>{replyComments.length} respostas</C.ButtonTitle>
                  </C.Button>
                  <C.Button onPress={() => handleAddCommentButtonPress(id)} activeOpacity={0.7}>
                    <C.ButtonTitle>Responder</C.ButtonTitle>
                  </C.Button>
                </C.Footer>
              </>
            )}
          </C.Info>
        </>
      )}
    </C.Container>
  );
}
