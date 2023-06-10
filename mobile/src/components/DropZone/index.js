import { useEffect, useRef, useState } from 'react';
import { minZoneWidth } from '../DragAndDropListForm/styles';
import * as C from '../DragAndDropClickForm/styles';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export function DropZone({
  id,
  zones,
  totalDropZones,
  targetZone,
  setLinesWidth,
  isAnswerWrong,
  linesWidth,
}) {
  const zoneWidth = useSharedValue(15);
  const zoneRef = useRef(null);
  const canRegisterZone = zones.current.length < totalDropZones;

  const zoneAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: zoneWidth.value,
    };
  });

  useEffect(() => {
    if (linesWidth.some(line => !!line.zoneId))
      setLinesWidth(currentLines =>
        currentLines.map(line =>
          line.id.toString().includes(id) && !line.zoneId ? { ...line, zoneId: id } : line
        )
      );
  }, []);

  useEffect(() => {
    if (targetZone && id === targetZone.id && targetZone.width !== zoneWidth.value) {
      zoneWidth.value = withTiming(targetZone.width, { duration: 300 });
    }
  }, [targetZone]);

  useEffect(() => {
    zoneRef?.current.measure((x, y, width, height, pageX, pageY) => {
      const zone = {
        id: id,
        x: pageX,
        y: pageY,
        width,
        itemId: null,
      };
      setTimeout(() => updateZone(zone), 20);
    });
  }, [linesWidth]);

  function updateZone({ id, x, y, width }) {
    zones.current = zones.current.map(zone => (zone.id === id ? { ...zone, x, y, width } : zone));
  }

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
        zones.current = [...zones.current, zone];
      } else {
        setTimeout(() => updateZone(zone), 20);
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
