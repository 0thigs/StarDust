import { useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useComment } from '../../hooks/useComment';
import { Comment } from '../Comment';
import { UserAvatar } from '../UserAvatar';
import { ChevronDown, Plus, PlusCircle, Send } from 'react-native-feather';
import BottomSheet from '@gorhom/bottom-sheet';
import theme from '../../global/styles/theme';
import * as C from './styles';
import { PopoverMenu } from '../PopoverMenu';
const avatarWidth = 32;
const iconWidth = 22;
const iconMarginBetween = 12;

export function CommentsList({ challengeId, bottomSheetRef }) {
  const {
    loggedUser: { id: loggedUserId, liked_comments_ids, avatar_id },
    updateLoggedUser,
  } = useAuth();
  const { comments, fetchComments, addComment, updateComment } = useComment(challengeId);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isMiniEditorVisible, setIsMiniEditorVisible] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [replyId, setReplyId] = useState(null);
  const contentRef = useRef(null);

  const popoverMenuButtons = [
    {
      title: 'Inserir código',
      isToggle: false,
      value: null,
      action: () => setIsMiniEditorVisible(true),
    },
    {
      title: 'Cancelar',
      isToggle: false,
      value: null,
      action: () => setIsInputVisible(false),
    },
  ];

  function SendComment() {
    addComment(commentText, replyId, loggedUserId, challengeId);
    setCommentText('');
    setIsInputVisible(false);
    fetchComments();
    contentRef.current?.scrollToEnd();
  }

  function handleAddCommentButtonPress(replyId) {
    setIsInputVisible(true);
    setReplyId(replyId);
  }

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
            <C.Heading>{comments.length} Comentários</C.Heading>
            <C.FilterWrapper>
              <C.Filter activeOpacity={0.7}>
                <C.Title>Mais recentes</C.Title>
                <ChevronDown color={theme.colors.white} />
              </C.Filter>
            </C.FilterWrapper>
          </C.Header>
          <C.Content ref={contentRef}>
            {comments.map(
              ({ id, users: author, author_id, body, created_at, likes, replyComments }) => (
                <Comment
                  key={id}
                  id={id}
                  author={author}
                  authorId={author_id}
                  body={body}
                  created_at={created_at}
                  likes={likes}
                  replyComments={replyComments}
                  updateComment={updateComment}
                  loggedUserId={loggedUserId}
                  likedCommentsIds={liked_comments_ids}
                  updateLoggedUser={updateLoggedUser}
                  handleAddCommentButtonPress={handleAddCommentButtonPress}
                />
              )
            )}
          </C.Content>

          {isInputVisible ? (
            <C.InputWrapper>
              <UserAvatar avatarId={avatar_id} size={avatarWidth} />
              <C.Input
                autoFocus
                multiline
                onChangeText={setCommentText}
                style={{ textAlignVertical: 'top' }}
                avatarWidth={avatarWidth}
                iconWidth={iconWidth}
                iconMarginBetween={iconMarginBetween}
                paddingVertical={8}
              />

              <PopoverMenu
                buttons={popoverMenuButtons}
                icon={<PlusCircle color={theme.colors.green_700} width={iconWidth} />}
              />

              <C.InputButton iconMarginBetween={12} onPress={SendComment}>
                <Send color={theme.colors.green_700} width={iconWidth} />
              </C.InputButton>
            </C.InputWrapper>
          ) : (
            <C.CommentButton onPress={() => handleAddCommentButtonPress(null)}>
              <Plus color={theme.colors.black} />
            </C.CommentButton>
          )}
        </C.Container>
      }
    />
  );
}
