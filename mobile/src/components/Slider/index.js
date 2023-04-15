import { useCallback, memo, useRef } from 'react';
import { FlatList, View, useWindowDimensions } from 'react-native';

function SliderComponent({
  sliderRef,
  slides,
  onScroll,
  scrollEnabled = true,
  setCurrentSlideIndex,
}) {
  const { width } = useWindowDimensions();

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (!setCurrentSlideIndex) return;
    setCurrentSlideIndex(viewableItems[0].index);
  });
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 40, waitForInteraction: true };

  const renderItem = useCallback(
    ({ item: { component } }) => (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          width: width,
        }}
      >
        {component}
      </View>
    ),
    []
  );

  return (
    <FlatList
      ref={sliderRef}
      data={slides}
      keyExtractor={slide => slide.id}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      scrollEventThrottle={32}
      onScroll={onScroll}
      scrollEnabled={scrollEnabled}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig}
    />
  );
}

export const Slider = memo(SliderComponent);
