import { useState } from 'react';
import { UserAvatar } from '../UserAvatar';
import { Editor } from '../Editor';
import { ChevronUp, MoreVertical } from 'react-native-feather';
import { PopoverMenu } from '../PopoverMenu';
import dayjs from 'dayjs';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function Comment({
  id,
  author,
  authorId,
  content,
  created_at,
  likes,
  replyComments,
  updateComment,
  parseText,
  loggedUserId,
  likedCommentsIds,
  updateLoggedUser,
  deleteComment,
  handleAddCommentButtonPress,
}) {
  const [likesCount, setLikesCount] = useState(likes);
  const [isEditInputVisible, setIsEditInputVisible] = useState(false);
  const [isReportFormVisible, setIsReportFormVisible] = useState(false);
  const [editedText, setEditedText] = useState('');

  const createdAt = dayjs(created_at).format('DD/MM/YYYY');
  const isLiked = likedCommentsIds.includes(id);
  const isFromLoggedUser = loggedUserId === authorId;

  function handleSaveEditButtonPress() {
    const texts = editedText.split(/(`[^`]+`)/).filter(text => text !== '');
    const content = texts.map(parseText)
    updateComment(id, { content });
    setIsEditInputVisible(false);
  }

  function handleCancelEditButtonPress() {
    setIsEditInputVisible(false);
    setEditedText('');
  }

  function stringfyText(text) {
    return text.type === 'code' ? '\n`' + text.body + '`\n' : text.body;
  }

  function editComment() {
    const editedText = content.map(stringfyText).join('');
    setEditedText(editedText);
    setIsEditInputVisible(true);
  }

  const popoverMenuLoggedUserButtons = [
    {
      title: 'Editar',
      isToggle: false,
      value: null,
      action: () => editComment(),
    },
    {
      title: 'Deletar',
      isToggle: false,
      value: null,
      action: () => deleteComment(id),
    },
  ];

  const popoverMenuDefaultButtons = [
    {
      title: 'Reportar',
      isToggle: false,
      value: null,
      action: () => setIsReportFormVisible(true),
    },
  ];

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
              <PopoverMenu
                buttons={
                  isFromLoggedUser ? popoverMenuLoggedUserButtons : popoverMenuDefaultButtons
                }
                icon={<MoreVertical color={theme.colors.green_700} />}
              />
            </C.Header>

            {isEditInputVisible ? (
              <C.EditInputWrapper>
                <C.Label>Seu comentário</C.Label>
                <C.EditInput
                  multiline
                  autoFocus
                  style={{ textAlignVertical: 'top' }}
                  value={editedText}
                  onChangeText={setEditedText}
                />
                <C.EditButtons>
                  <C.Button marginRight={'12px'} onPress={handleCancelEditButtonPress}>
                    <C.ButtonTitle>Cancelar</C.ButtonTitle>
                  </C.Button>
                  <C.Button onPress={handleSaveEditButtonPress}>
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
