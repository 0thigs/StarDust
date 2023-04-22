import { createContext, useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import api from '../services/api';
import { Buffer } from 'buffer';

export const AuthContext = createContext();

const fakeLoggedUser = {
  id: 'cc71b28d-9369-47ba-80d7-e6e193af73d6',
  name: 'John Petros',
  email: 'joaopcarvalho.cds@gmail.com',
  coins: 225,
  xp: 550,
  weekly_xp: 0,
  level: 1,
  unlocked_achievements_ids: [],
  unlocked_stars_ids: [1],
  acquired_rockets_ids: [1],
  selected_rocket_id: 2,
  ranking_id: 1,
  streak: 0,
  week_status: ['todo', 'todo', 'todo', 'todo', 'todo', 'todo', 'todo'],
  unlocked_stars: 2,
  achievements_to_rescue: [],
  avatar_id: 'c008e3a2-d79b-43f3-a1e2-77acdefeb909',
  rocket_id: '03f3f359-a0ee-42c1-bd5f-b2ad01810d47',
  acquired_rockets: 0,
  ranking_id: 'f542f61a-4e42-4914-88f6-9aa7c2358473',
  streak: 4,
  week_status: ['todo', 'todo', 'done', 'done', 'todo', 'todo', 'todo'],
  completed_planets: 0,
  created_at: new Date('2023-01-23T03:01:00.000Z'),
  study_time: '13:00',
  did_update_ranking: true,
  did_complete_saturday: true,
  last_position: 5,
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
    try {
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function updateLoggedUser(prop, data, updateDatabase = true) {
    setLoggedUser(currentData => ({ ...currentData, [prop]: data }));

    if (!updateDatabase) return;
    try {
      await api.updateUser(prop, data, loggedUser.id);
    } catch (error) {
      console.log(error);
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
        refreshSession,
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
