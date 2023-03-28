import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export const useAvatar = avatarId => {
  const { loggedUser } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [avatars, setAvatars] = useState([]);

  async function fetchAvatar() {
    try {
      const avatar = await api.getAvatar(avatarId);
      setAvatar(avatar);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAvatars() {
    try {
      const avatars = await api.getAvatars();
      setAvatars(avatars);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!avatarId) {
      fetchAvatars();
      return;
    }
    fetchAvatar();
    console.log("oi");
  }, [loggedUser.avatar_id, loggedUser.acquired_avatars_id]);

  return { avatar, avatars };
};
