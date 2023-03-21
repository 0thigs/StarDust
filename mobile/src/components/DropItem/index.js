import { useEffect, useState } from 'react';
import * as C from '../DragAndDropClickForm/styles';
import { minZoneWidth } from '../DragAndDropListForm/styles';
import { useAnimatedStyle, useSharedValue, withTiming, FadeInDown } from 'react-native-reanimated';
const animationDuration = 500;

export function DropItem({
  id,
  label,
  zones,
  setZones,
  isAnswerVerified,
  reorderedItems,
  isAnswerWrong,
  linesWidth,
}) {
  const [isItemInZone, setIsItemInZone] = useState(false);
  const [isFirstRendering, setisFirstRendering] = useState(false);
  const [itemWidth, setItemWidth] = useState(null);
  const characterHeight = 8;

  const initialPosition = {
    x: useSharedValue(0),
    y: useSharedValue(0),
  };

  const currentPosition = {
    x: useSharedValue(0),
    y: useSharedValue(0),
  };

  const ItemAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(currentPosition.x.value, { duration: animationDuration }) },
        { translateY: withTiming(currentPosition.y.value, { duration: animationDuration }) },
      ],
    };
  });

  function updateZone(targetZone) {
    setZones(currentZones =>
      currentZones.map(currentZone => (currentZone.id === targetZone.id ? targetZone : currentZone))
    );
  }

  function resetPosition() {
    currentPosition.x.value = 0;
    currentPosition.y.value = 0;
  }

  function adjustPosition(id) {
    const targetZone = zones.find(zone => zone.itemId === id);
    if (!targetZone || !isItemInZone) return;

    const difference = currentPosition.x.value + initialPosition.x.value - targetZone.x + 10;

    if (difference === 0) return;
    currentPosition.x.value += difference < 0 ? Math.abs(difference) : -difference;
  }

  function removeItemInZone(id) {
    resetPosition();
    const targetZone = zones.find(zone => zone.itemId === id);
    targetZone.itemId = null;
    targetZone.width = minZoneWidth;
    updateZone(targetZone);
    setIsItemInZone(false);
  }

  function addItemInZone(id) {
    for (const zone of zones) {
      if (!zone.itemId) {
        currentPosition.x.value =
          zone.x - initialPosition.x.value - C.itemPadding - C.itemBorderWidth * 2;
        currentPosition.y.value =
          zone.y - initialPosition.y.value - (C.itemHeight / 2 + characterHeight);
        zone.itemId = id;
        zone.width = itemWidth - 20;
        updateZone(zone);
        setIsItemInZone(true);
        break;
      }
    }
  }

  function HandleItemClick(id) {
    if (isItemInZone) {
      removeItemInZone(id);
      return;
    }

    addItemInZone(id);
  }

  useEffect(() => {
    adjustPosition(id);
  }, [zones]);

  useEffect(() => {
    // if (isItemInZone) {
    //   resetPosition();
    //   setIsItemInZone(false);
    // }
  }, [reorderedItems]);

  return (
    <C.DropItem
      key={id}
      activeOpacity={0.7}
      isItemInZone={isItemInZone}
      onLayout={event => {
        event.target.measure((x, y, width, height, pageX, pageY) => {
          setItemWidth(width);
          if (!isFirstRendering) {
            initialPosition.x.value = pageX;
            initialPosition.y.value = pageY;
            setisFirstRendering(true);
          }
        });
      }}
      onStartShouldSetResponder={() => !isAnswerVerified && HandleItemClick(id)}
      style={ItemAnimatedStyle}
    >
      <C.Label isItemInZone={isItemInZone} isAnswerWrong={isAnswerWrong}>
        {label}
      </C.Label>
    </C.DropItem>
  );
}
