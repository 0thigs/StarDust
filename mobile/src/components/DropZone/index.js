import { useEffect, useRef, useState } from 'react';
import { minZoneWidth } from '../DragAndDropListForm/styles';
import * as C from '../DragAndDropClickForm/styles';

export function DropZone({ id, zones, setZones, totalDropZones, isAnswerWrong, linesWidth }) {
  const [zoneWidth, setZoneWidth] = useState(0);
  const zoneRef = useRef(null);

  useEffect(() => {
    if (zones.length) {
      const targetZone = zones.find(zone => zone && zone.id === id);
      if (targetZone) setZoneWidth(targetZone?.width);
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


//   useEffect(() => {
//     setZoneWidth(minZoneWidth)
//   }, [])

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
      width={zoneWidth === 0 ? 15 : zoneWidth}
      isAnswerWrong={isAnswerWrong}
    ></C.DropZone>
  );
}
