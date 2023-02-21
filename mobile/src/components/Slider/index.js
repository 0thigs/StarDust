import { FlatList, View, useWindowDimensions } from 'react-native';

export function Slider({ sliderRef, slides, onScroll }) {
  const { width } = useWindowDimensions();

  return (
    <FlatList
      ref={sliderRef}
      data={slides}
      keyExtractor={slide => slide.id}
      renderItem={({ item: { component } }) => (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: width,
          }}
        >
          {component}
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      scrollEventThrottle={32}
      onScroll={onScroll}
    />
  );
}
