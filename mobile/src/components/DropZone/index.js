import { useEffect, useRef, useState } from 'react';
import { minZoneWidth } from '../DragAndDropListForm/styles';
import * as C from '../DragAndDropClickForm/styles';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export function DropZone({
  id,
  zones,
  setZones,
  totalDropZones,
  targetZone,
  isAnswerWrong,
  linesWidth,
}) {
  const [isFirstRendering, setIsFirstRendering] = useState(true);
  const zoneWidth = useSharedValue(15);
  const zoneRef = useRef(null);
  const canRegisterZone = zones.length < totalDropZones;

  const zoneAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: zoneWidth.value,
    };
  });

  useEffect(() => {
    if (targetZone && id === targetZone.id && targetZone.width !== zoneWidth.value) {
      zoneWidth.value = withTiming(targetZone.width, { duration: 200 });
    }
  }, [zones]);

  useEffect(() => {
    zoneRef?.current.measure((x, y, width, height, pageX, pageY) => {
      const zone = {
        id: id,
        x: pageX,
        y: pageY,
        width,
        itemId: null,
      };
      updateZone(zone);
    });
  }, [linesWidth]);

  function updateZone({ id, x, y, width }) {
    setZones(zones => zones.map(zone => (zone.id === id ? { ...zone, x, y, width } : zone)));
  }

  //   const updateZone = useCallback(({ id, x, y, width }) => {
  //     setZones(zones => zones.map(zone => (zone.id === id ? { ...zone, x, y, width } : zone)));
  //   }, [zones]);

  function registerZone({ target }) {
    target.measure((x, y, width, height, pageX, pageY) => {
      const zone = {
        id: id,
        x: pageX,
        y: pageY,
        width,
        itemId: null,
      };
      if (canRegisterZone) {
        setZones(zones => [...zones, zone]);
        setIsFirstRendering(false);
      } else {
        updateZone(zone);
      }
    });
  }

  return (
    <C.DropZone
      ref={zoneRef}
      onLayout={registerZone}
      style={zoneAnimatedStyle}
      isAnswerWrong={isAnswerWrong}
    ></C.DropZone>
  );
}
