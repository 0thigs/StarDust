import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Audio } from 'expo-av';

export const Sound = forwardRef(({ audio }, ref) => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require(audio));
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useImperativeHandle(ref, () => playSound);

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
});
