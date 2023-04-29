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
    setCurrentSlideIndex(viewableItems[0].index);
  });
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 40, waitForInteraction: false };

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
      maxToRenderPerBatch={1}
      onViewableItemsChanged={setCurrentSlideIndex && onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig}
      initialNumToRender={1}
      windowSize={5}
      updateCellsBatchingPeriod={30}
      removeClippedSubviews={false}
      onEndReachedThreshold={0.1}
      getItemLayout={(_, index) => ({
        length: width,
        offset: width * index,
        index,
      })}
    />
  );
}

export const Slider = memo(SliderComponent);
