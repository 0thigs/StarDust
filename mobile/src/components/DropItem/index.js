import { useEffect, useRef, useState } from 'react';
import * as C from '../DragAndDropClickForm/styles';
import { minZoneWidth } from '../DragAndDropListForm/styles';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useCallback } from 'react';
const animationDuration = 350;

export function DropItem({
  id,
  label,
  zones,
  setZones,
  targetZone,
  setTargetZone,
  isAnswerVerified,
  isAnswerWrong,
}) {
  const [isItemInZone, setIsItemInZone] = useState(false);
  const [isFirstRendering, setisFirstRendering] = useState(true);
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
    setTargetZone({ id: targetZone.id, width: targetZone.width });
  }

  function resetPosition() {
    currentPosition.x.value = 0;
    currentPosition.y.value = 0;
  }

  function adjustPosition() {
    const targetZone = zones.find(zone => zone.itemId === id);
    if (!targetZone) return;

    const difference = currentPosition.x.value + initialPosition.x.value - targetZone.x + 10;

    if (difference === 0) return;
    currentPosition.x.value += difference < 0 ? Math.abs(difference) : -difference;
  }

  function removeItemInZone() {
    resetPosition();
    const targetZone = zones.find(zone => zone.itemId === id);
    targetZone.itemId = null;
    targetZone.width = 15;
    setIsItemInZone(false);
    updateZone(targetZone);
  }

  function addItemInZone() {
    for (const zone of zones) {
      if (!zone.itemId) {
        currentPosition.x.value =
          zone.x - initialPosition.x.value - C.itemPadding - C.itemBorderWidth * 2;
        currentPosition.y.value =
          zone.y - initialPosition.y.value - (C.itemHeight / 2 + characterHeight);
        zone.itemId = id;
        console.log(itemWidth);
        zone.width = itemWidth - 20;
        setIsItemInZone(true);
        updateZone(zone);
        break;
      }
    }
  }

  function HandleItemClick() {
    console.log(id);

    if (isItemInZone) {
      removeItemInZone();
      return;
    }

    addItemInZone();
  }

  function handleLayout(event) {
    event.target.measure((x, y, width, height, pageX, pageY) => {
      console.log({ width });
      if (isFirstRendering || !itemWidth) {
        initialPosition.x.value = pageX;
        initialPosition.y.value = pageY;
        setItemWidth(width);
        setisFirstRendering(false);
      }
    });
  }

  useEffect(() => {
    if (isFirstRendering || !isItemInZone) return;
    console.log({ id });

    adjustPosition();
  }, [zones]);

  return (
    <C.ItemContainer>
      <C.DropItem
        key={id}
        activeOpacity={0.7}
        isItemInZone={isItemInZone}
        onLayout={handleLayout}
        onStartShouldSetResponder={() => !isAnswerVerified && HandleItemClick()}
        style={ItemAnimatedStyle}
      >
        <C.Label isItemInZone={isItemInZone} isAnswerWrong={isAnswerWrong}>
          {label}
        </C.Label>
      </C.DropItem>
      {isItemInZone && <C.Placeholder itemWidth={itemWidth} />}
    </C.ItemContainer>
  );
}
