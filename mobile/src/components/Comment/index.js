import { useEffect, useState } from 'react';
import { UserAvatar } from '../UserAvatar';
import { Editor } from '../Editor';
import { ChevronUp, MoreVertical } from 'react-native-feather';
import { PopoverMenu } from '../PopoverMenu';
import dayjs from 'dayjs';
import theme from '../../global/styles/theme';
import * as C from './styles';
import api from '../../services/api';

export function Comment({
  id,
  user,
  authorId,
  content,
  created_at,
  likes,
  isLiked,
  replies,
  updateComment,
  parseText,
  deleteComment,
  isFromLoggedUser,
  handleAddCommentButtonPress,
  parentId,
}) {
  const [likesCount, setLikesCount] = useState(likes);
  const [author, setAuthor] = useState(user);
  const [isCurrentCommentLiked, setIsCurrentCommentLiked] = useState(isLiked);
  const [currentCommentContent, setCurrentCommentContent] = useState(content);
  const [isEditInputVisible, setIsEditInputVisible] = useState(false);
  const [isReportFormVisible, setIsReportFormVisible] = useState(false);
  const [isRepliesVisible, setIsRepliesVisible] = useState(false);
  const [editedText, setEditedText] = useState('');
  const isReply = Boolean(parentId);

  const createdAt = dayjs(created_at).format('DD/MM/YYYY');
  const isButtonDisabled = replies.length === 0;

  function handleSaveEditButtonPress() {
    const texts = editedText.split(/(`[^`]+`)/).filter(text => text !== '');
    const content = texts.map(parseText);
    setCurrentCommentContent(content);
    updateComment(id, 'content', content);
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
      action: () => deleteComment(id, isReply),
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
    if (isCurrentCommentLiked) {
      updatedLikes--;
    } else {
      updatedLikes++;
    }
    setLikesCount(updatedLikes);
    setIsCurrentCommentLiked(!isCurrentCommentLiked);
    updateComment(id, 'likes', updatedLikes, isCurrentCommentLiked);
  }

  async function fetchAuthor(author_id) {
    try {
      const author = await api.getAuthor(author_id);
      console.log(author.avatar_id);
      setAuthor(author);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!isReply || author) return;
    fetchAuthor(authorId);
  }, [author]);

  return (
    <C.Container>
      {authorId && (
        <>
          {author?.avatar_id && <UserAvatar avatarId={author?.avatar_id} size={40} />}
          <C.Info isReply={isReply}>
            <C.Header>
              <C.Authorname>{author?.name}</C.Authorname>
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
                  {currentCommentContent.map(({ type, body }, index) =>
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
                    <ChevronUp
                      color={theme.colors[isCurrentCommentLiked ? 'green_700' : 'gray_500']}
                    />
                  </C.Button>
                  <C.Button marginRight={'auto'} activeOpacity={0.7}>
                    <C.LikesCount>+{likesCount}</C.LikesCount>
                  </C.Button>
                  {!isReply && (
                    <C.Button
                      marginRight={'12px'}
                      activeOpacity={0.7}
                      disabled={isButtonDisabled}
                      isDisabled={isButtonDisabled}
                      onPress={() => setIsRepliesVisible(!isRepliesVisible)}
                    >
                      <C.ButtonTitle>{replies.length} respostas</C.ButtonTitle>
                    </C.Button>
                  )}
                  <C.Button
                    onPress={() => {
                      setIsRepliesVisible(true);
                      handleAddCommentButtonPress(isReply ? parentId : id);
                    }}
                    activeOpacity={0.7}
                  >
                    <C.ButtonTitle>Responder</C.ButtonTitle>
                  </C.Button>
                </C.Footer>
                {replies.length > 0 && isRepliesVisible && (
                  <C.Replies>
                    {replies.map(
                      ({
                        id,
                        author_id,
                        content,
                        created_at,
                        likes,
                        isLiked,
                        parent_id,
                        isFromLoggedUser,
                      }) => {
                        return (
                          <Comment
                            key={id}
                            id={id}
                            user={null}
                            authorId={author_id}
                            content={content}
                            created_at={created_at}
                            likes={likes}
                            isLiked={isLiked}
                            replies={[]}
                            parentId={parent_id}
                            updateComment={updateComment}
                            deleteComment={deleteComment}
                            parseText={parseText}
                            isFromLoggedUser={isFromLoggedUser}
                            handleAddCommentButtonPress={handleAddCommentButtonPress}
                          />
                        );
                      }
                    )}
                  </C.Replies>
                )}
              </>
            )}
          </C.Info>
        </>
      )}
    </C.Container>
  );
}
