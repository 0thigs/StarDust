import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../Avatar';
import { ChevronLeft, ChevronRight } from 'react-native-feather';
import theme from '../../global/styles/theme';
import * as C from './styles';
const iconSize = 24;
const iconColor = theme.colors.blue_300;
const AVATAR_WIDTH = 330;
const AVATAR_MARGIN_BETWEEN = 8;

export function AvatarsList({ avatars, addUserAcquiredAvatar }) {
  const { loggedUser } = useAuth();
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const avatarsListRef = useRef(null);
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === avatars.length - 1;

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  });
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 40, waitForInteraction: true };

  function scrollTo(index) {
    if (!avatarsListRef) return;
    avatarsListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  }

  function handleNavButtonPress(action) {
    let index = currentIndex;
    if (action === 'prev') {
      if (isFirstItem) return;
      index--;
    } else {
      if (isLastItem) return;
      index++;
    }
    scrollTo(index);
    setCurrentIndex(index);
  }

  function scrollToCurrentAvatar() {
    const selectedAvatarIndex = avatars.findIndex(avatar => avatar.id === loggedUser.avatar_id);
    setSelectedAvatarIndex(selectedAvatarIndex);
    setCurrentIndex(selectedAvatarIndex);
    scrollTo(selectedAvatarIndex);
  }

  const renderItem = useCallback(({ item: { id, name, image, price, isAcquired }, index }) => {
    const isSelected = index === selectedAvatarIndex;
    const isFirstItem = index === 0;
    const isBuyable = loggedUser.coins >= price;
    return (
      <Avatar
        id={id}
        name={name}
        price={price}
        image={image}
        isAcquired={isAcquired}
        isSelected={isSelected}
        isBuyable={isBuyable}
        isFirstItem={isFirstItem}
        addUserAcquiredAvatar={addUserAcquiredAvatar}
        width={AVATAR_WIDTH}
      />
    );
  }, []);

  useEffect(() => {
    scrollToCurrentAvatar();
  }, [loggedUser.avatar_id]);

  return (
    <>
      <C.List
        ref={avatarsListRef}
        data={avatars}
        keyExtractor={avatar => avatar.id}
        initialScrollIndex={currentIndex}
        renderItem={renderItem}
        horizontal
        scrollEventThrottle={32}
        initialNumToRender={3}
        viewabilityConfig={viewabilityConfig}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        getItemLayout={(_, index) => ({
          length: AVATAR_WIDTH,
          offset: (AVATAR_WIDTH + AVATAR_MARGIN_BETWEEN) * index,
          index,
        })}
        onScrollToIndexFailed={() => {
          const wait = new Promise(resolve => setTimeout(resolve, 100));
          wait.then(() => scrollToCurrentAvatar());
        }}
      />
      <C.Navigation>
        <C.NavButton
          isDisabled={isFirstItem}
          onPress={() => handleNavButtonPress('prev')}
          activeOpacity={0.7}
        >
          <ChevronLeft color={iconColor} width={iconSize} />
        </C.NavButton>
        <C.NavButton
          isDisabled={isLastItem}
          onPress={() => handleNavButtonPress('next')}
          activeOpacity={0.7}
        >
          <ChevronRight color={iconColor} width={iconSize} />
        </C.NavButton>
      </C.Navigation>
    </>
  );
}
