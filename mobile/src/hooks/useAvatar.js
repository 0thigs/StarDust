import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export const useAvatar = avatarId => {
  const { loggedUser } = useAuth();
  const [avatar, setAvatar] = useState(null);

  async function fetchAvatar() {
    try {
      const avatar = await api.getAvatar(avatarId);
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
