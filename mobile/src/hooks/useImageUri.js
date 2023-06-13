import { useState, useEffect } from 'react';
import { CDN_URL } from '@env';

export const useImageUri = (folder, file) => {
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    if (!folder || !file) return;
    
    setImageUri(`${CDN_URL}/${folder}/${file}`);
  }, [folder, file]);

  return { imageUri };
};
