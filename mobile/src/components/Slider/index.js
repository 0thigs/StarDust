import { useCallback, memo } from 'react';
import { FlatList, View, useWindowDimensions } from 'react-native';

function SliderComponent({ sliderRef, slides, onScroll, scrollEnabled = true }) {
  const { width } = useWindowDimensions();

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
    />
  );
}

export const Slider = memo(SliderComponent);
