import { useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useComment } from '../../hooks/useComment';
import { Comment } from '../Comment';
import { UserAvatar } from '../UserAvatar';
import { PopoverMenu } from '../PopoverMenu';
import { ChevronDown, Plus, PlusCircle, Send } from 'react-native-feather';
import BottomSheet from '@gorhom/bottom-sheet';
import theme from '../../global/styles/theme';
import * as C from './styles';
const avatarWidth = 32;
const iconWidth = 22;
const iconMarginBetween = 12;

export function CommentsList({ challengeId, bottomSheetRef }) {
  const {
    loggedUser: { id: loggedUserId, avatar_id },
  } = useAuth();
  const {
    comments,
    fetchComments,
    addComment,
    updateComment,
    deleteComment,
    handleSorterComments,
    sorter,
  } = useComment(challengeId);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [commentTexts, setCommentTexts] = useState('');
  const [parentId, setParentId] = useState(null);
  const contentRef = useRef(null);

  const popoverMenuInputButtons = [
    {
      title: 'Cancelar',
      isToggle: false,
      value: null,
      action: () => setIsInputVisible(false),
    },
  ];

  const popoverMenuSortButtons = [
    {
      title: 'Mais recentes',
      isToggle: false,
      value: null,
      action: () => handleSorterComments('date'),
    },
    {
      title: 'Mais curtidos',
      isToggle: false,
      value: null,
      action: () => handleSorterComments('likes'),
    },
  ];

  function parseText(text) {
    const type = text.includes('`') ? 'code' : 'generic';
    const body = text;
    return { type, body };
  }

  function SendComment() {
    const texts = commentTexts.split(/(`[^`]+`)/).filter(text => text !== '');
    const content = texts.map(parseText);

    addComment(content, parentId, loggedUserId, challengeId);
    setCommentTexts('');
    setIsInputVisible(false);
    fetchComments();

    if (sorter === 'likes') {
      contentRef.current.scrollToEnd();
      return;
    }
    contentRef.current.scrollTo({
      index: 0,
      animated: true,
    });
  }

  function handleAddCommentButtonPress(parentId) {
    setIsInputVisible(true);
    setParentId(parentId);
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
            <C.SortWrapper>
              <PopoverMenu
                buttons={popoverMenuSortButtons}
                icon={
                  <C.Sorter activeOpacity={0.7}>
                    <C.Title>Mais {sorter === 'date' ? 'recentes' : 'curtidos'}</C.Title>
                    <ChevronDown color={theme.colors.white} />
                  </C.Sorter>
                }
              />
            </C.SortWrapper>
          </C.Header>

          <C.Content ref={contentRef}>
            {comments.map(
              ({
                id,
                users: user,
                author_id,
                content,
                created_at,
                likes,
                isLiked,
                replies,
                parent_id,
                isFromLoggedUser,
              }) => (
                <Comment
                  key={id}
                  id={id}
                  user={user}
                  authorId={author_id}
                  content={content}
                  created_at={created_at}
                  likes={likes}
                  isLiked={isLiked}
                  replies={replies}
                  parentId={parent_id}
                  updateComment={updateComment}
                  deleteComment={deleteComment}
                  parseText={parseText}
                  isFromLoggedUser={isFromLoggedUser}
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
                onChangeText={setCommentTexts}
                style={{ textAlignVertical: 'top' }}
                avatarWidth={avatarWidth}
                iconWidth={iconWidth}
                iconMarginBetween={iconMarginBetween}
                paddingVertical={8}
              />

              <PopoverMenu
                buttons={popoverMenuInputButtons}
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
