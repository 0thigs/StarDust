import { useState, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from './useAuth';

export const useAvatar = idAvatar => {
  const { loggedUser } = useAuth();
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
  }, [loggedUser.avatar_id]);

  return { avatar };
};
