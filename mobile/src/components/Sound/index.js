import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Audio } from 'expo-av';

export const Sound = forwardRef(({ soundFile }, ref) => {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);
    await sound.playAsync();
  }

  useImperativeHandle(ref, () => {
    return {
      playSound,
    };
  });

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);
});
