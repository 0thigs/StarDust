import { useEffect, useState } from 'react';
import * as C from '../DragAndDropClickForm/styles';
import { minZoneWidth } from '../DragAndDropListForm/styles';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

export function DropZone({ id, zones, setZones, totalDropZones }) {
  const [zoneWidth, setZoneWidth] = useState(minZoneWidth);

  useEffect(() => {
      if (zones.length > 0) {
      const targetZone = zones.find(zone => zone && zone.id === id);
      if (targetZone) setZoneWidth(targetZone.width);
    }
  }, [zones]);

  return (
    <C.DropZone
      onLayout={event => {
        event.target.measure((x, y, width, height, pageX, pageY) => {
          const zone = {
            id: id,
            x: pageX,
            y: pageY,
            width,
            itemId: null,
          };
          console.log({ height });
          if (zones.length < totalDropZones) {
            setZones(zones => [...zones, zone]);
          }
        });
      }}
      width={zoneWidth}
    ></C.DropZone>
  );
}
