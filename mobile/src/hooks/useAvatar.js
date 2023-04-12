import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export const useAvatar = avatarId => {
  const { loggedUser } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [avatars, setAvatars] = useState([]);

  function updateAvatars(currentAvatars, updatedAvatar) {
    return currentAvatars.map(currentAvatar =>
      currentAvatar.id === updatedAvatar.id ? { ...updatedAvatar, isAcquired: true } : currentAvatar
    );
  }

  async function addUserAcquiredAvatar(avatarId) {
    try {
      await api.addUserAcquiredAvatar(avatarId, loggedUser.id);

      const updatedAvatar = avatars.find(avatar => avatar.id === avatarId);
      setAvatars(currentAvatars => updateAvatars(currentAvatars, updatedAvatar));
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAvatar() {
    try {
      const avatar = await api.getAvatar(avatarId);
      setAvatar(avatar);
    } catch (error) {
      console.log(error);
    }
  }

  function verifyAvatarAcquirement(avatar) {
    const isAcquired = avatar.users_acquired_avatars.some(
      acquiredAvatar => acquiredAvatar.user_id === loggedUser.id
    );
    return { ...avatar, isAcquired };
  }


  async function fetchAvatars() {
    try {
      const avatars = await api.getAvatars();
      const verifiedAvatars = avatars.map(verifyAvatarAcquirement)
      setAvatars(verifiedAvatars);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!avatarId && !avatars.length) {
      fetchAvatars();
      return;
    }
    fetchAvatar();
  }, [loggedUser.avatar_id, loggedUser.acquired_avatars_id]);

  return { avatar, avatars, addUserAcquiredAvatar };
};
