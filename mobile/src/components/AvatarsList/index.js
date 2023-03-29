import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../Avatar';
import { ChevronLeft, ChevronRight } from 'react-native-feather';
import theme from '../../global/styles/theme';
import * as C from './styles';
const iconSize = 24;
const iconColor = theme.colors.blue_300;

export function AvatarsList({ avatars }) {
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

  const renderItem = useCallback(({ item: { id, name, image, price }, index }) => {
    const isSelected = index === selectedAvatarIndex;
    const isFirstItem = index === 0;
    const isBuyable = loggedUser.coins > price;
    const isAcquired = loggedUser.acquired_avatars_ids.includes(id);
    return (
      <Avatar
        id={id}
        name={name}
        price={price}
        image={image}
        isSelected={isSelected}
        isBuyable={isBuyable}
        isFirstItem={isFirstItem}
        isAcquired={isAcquired}
      />
    );
  }, []);

  useEffect(() => {
    let selectedAvatarIndex = 0;
    avatars.forEach(
      (avatar, index) => (selectedAvatarIndex = avatar.id === loggedUser.avatar_id ? index : null)
    );
    setSelectedAvatarIndex(selectedAvatarIndex);
    scrollTo(selectedAvatarIndex);
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
        viewabilityConfig={viewabilityConfig}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
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
