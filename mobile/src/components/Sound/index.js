import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Audio } from 'expo-av';

export const Sound = forwardRef(({ soundFile }, ref) => {
  const [sound, setSound] = useState();

  async function play() {
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
