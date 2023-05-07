import { useCallback, useEffect, useRef, useState } from 'react';
import { minZoneWidth } from '../DragAndDropListForm/styles';
import * as C from '../DragAndDropClickForm/styles';

export function DropZone({ id, zones, setZones, totalDropZones, isAnswerWrong, linesWidth }) {
  const [zoneWidth, setZoneWidth] = useState(0);
  const [isFirstRendering, setIsFirstRendering] = useState(true);
  const zoneRef = useRef(null);
  const canRegisterZone = zones.length < totalDropZones;

  useEffect(() => {
    if (zones.length && !isFirstRendering) {
      const targetZone = zones.find(zone => zone.id === id);
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
      width={zoneWidth === 0 ? 15 : zoneWidth}
      isAnswerWrong={isAnswerWrong}
    ></C.DropZone>
  );
}
