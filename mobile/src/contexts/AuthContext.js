import { createContext, useState } from 'react';
import { supabase } from '../services/supabase';
import api from '../services/api';

export const AuthContext = createContext();

const fakeLoggedUser = {
  id: 'cc71b28d-9369-47ba-80d7-e6e193af73d6',
  name: 'John Petros',
  email: 'kauedanka@gmail.com',
  coins: 225,
  xp: 1025,
  weekly_xp: 0,
  level: 1,
  selected_rocket_id: 2,
  ranking_id: 1,
  streak: 0,
  week_status: ['done', 'done', 'done', 'todo', 'todo', 'todo', 'todo'],
  unlocked_stars: 2,
  achievements_to_rescue: [],
  avatar_id: 'c008e3a2-d79b-43f3-a1e2-77acdefeb909',
  rocket_id: '03f3f359-a0ee-42c1-bd5f-b2ad01810d47',
  acquired_rockets: 0,
  ranking_id: 'f542f61a-4e42-4914-88f6-9aa7c2358473',
  streak: 4,
  completed_planets: 0,
  completed_challenges: 0,
  created_at: new Date('2023-01-23T03:01:00.000Z'),
  study_time: '13:00',
  did_update_ranking: false,
  did_complete_saturday: false,
  last_position: 2,
};

export function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(fakeLoggedUser);

  async function setUserInSession() {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        throw new Error(error.message);
      }
      const { user } = session;
      const userInSession = await api.getUser(user.id);
      setLoggedUser(userInSession);
    } catch (error) {
      console.error(error);
    }
  }

  async function signUp({ name, email, password }) {
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      name,
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    const newUser = {
      id: user.id,
      name,
      email,
    };
    try {
      await api.addUser(newUser);
      const signedUser = await api.getUser(user.id);

      setLoggedUser(signedUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signIn({ email, password }) {
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    try {
      const signedUser = await api.getUser(user.id);
      setLoggedUser(signedUser);
    } catch (error) {
      return error;
    }
  }

  async function signOut() {
    const { success, error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
    setLoggedUser(null);
    return success;
  }

  async function resetPassword(email) {
    const { success, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      throw new Error(error.message);
    }
    return success;
  }

  async function refreshSession(access_token, refresh_token) {
    global.Buffer = require('buffer').Buffer; // bug fix
    const {
      data: { session },
      error,
    } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });

    if (error) {
      throw new Error(error.message);
    }

    return session;
  }

  async function updateUserPassword(newPassword) {
    const { success, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      throw new Error(error.message);
    }

    return success;
  }

  async function updateUserEmail(newEmail) {
    try {
      const result = await api.updateUserEmail(newEmail, loggedUser.id);
      setLoggedUser({ ...loggedUser, email: newEmail });
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async function updateLoggedUser(prop, data) {
    try {
      await api.updateUser(prop, data, loggedUser.id);
      setLoggedUser(currentData => ({ ...currentData, [prop]: data }));
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteLoggedUser(userId) {
    try {
      await api.deleteUser(userId);
      setLoggedUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        resetPassword,
        setUserInSession,
        updateLoggedUser,
        updateUserPassword,
        updateUserEmail,
        deleteLoggedUser,
        refreshSession,
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
