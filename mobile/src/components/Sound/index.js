import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { useConfig } from '../../hooks/useConfig';
import { Audio } from 'expo-av';

export const Sound = forwardRef(({ soundFile }, ref) => {
  const {
    config: { canPlaySound },
  } = useConfig();
  const [sound, setSound] = useState();

  async function play() {
    if (!canPlaySound) return;
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);
    await sound.playAsync();
  }

  useImperativeHandle(ref, () => {
    return {
      play,
    };
  });

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);
});
