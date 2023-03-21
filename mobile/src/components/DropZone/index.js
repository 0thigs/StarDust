import { useEffect, useRef, useState } from 'react';
import * as C from '../DragAndDropClickForm/styles';
import { minZoneWidth } from '../DragAndDropListForm/styles';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export function DropZone({ id, zones, setZones, totalDropZones, isAnswerWrong, linesWidth }) {
  const [zoneWidth, setZoneWidth] = useState(minZoneWidth);
  const zoneRef = useRef(null);

  useEffect(() => {
    // console.log({ zones });

    if (zones.length) {
      const targetZone = zones.find(zone => zone && zone.id === id);
      if (targetZone) setZoneWidth(targetZone.width);
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

  function registerZone({ target }) {
    target.measure((x, y, width, height, pageX, pageY) => {
      const zone = {
        id: id,
        x: pageX,
        y: pageY,
        width,
        itemId: null,
      };
      if (zones.length < totalDropZones) {
        setZones(zones => [...zones, zone]);
      } else {
        updateZone(zone);
      }
    });
  }

  return (
    <C.DropZone
      ref={zoneRef}
      onLayout={registerZone}
      width={zoneWidth}
      isAnswerWrong={isAnswerWrong}
    ></C.DropZone>
  );
}
