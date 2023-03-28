import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-native-feather';
import { Avatar } from '../Avatar';
import theme from '../../global/styles/theme';
import * as C from './styles';
const iconSize = 24;
const iconColor = theme.colors.blue_300;

export function AvatarsList({ avatars }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const avatarsListRef = useRef(null);

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
      if (index === 0) return;
      index--;
    } else {
      if (index === avatars.length - 1) return;
      index++;
    }
    scrollTo(index);
  }

  const renderItem = useCallback(
    ({ item: { id, name, image, price }, index }) => (
      <Avatar id={id} name={name} price={price} image={image} index={index} scrollTo={scrollTo} />
    ),
    []
  );

  return (
    <>
      <C.List
        ref={avatarsListRef}
        data={avatars}
        keyExtractor={avatar => avatar.id}
        renderItem={renderItem}
        horizontal
        scrollEventThrottle={32}
        viewabilityConfig={viewabilityConfig}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <C.Navigation>
        <C.NavButton onPress={() => handleNavButtonPress('prev')} activeOpacity={0.7}>
          <ChevronLeft color={iconColor} width={iconSize} />
        </C.NavButton>
        <C.NavButton onPress={() => handleNavButtonPress('next')} activeOpacity={0.7}>
          <ChevronRight color={iconColor} width={iconSize} />
        </C.NavButton>
      </C.Navigation>
    </>
  );
}
