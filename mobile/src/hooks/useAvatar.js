import { useState, useEffect } from 'react';
import api from '../services/api';

export const useAvatar = idAvatar => {
  const [avatar, setAvatar] = useState(null);

  async function fetchAvatar() {
    try {
      const avatar = await api.getAvatar(idAvatar);
      setAvatar(avatar);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAvatar();
  }, []);

  return { avatar };
};
