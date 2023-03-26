import { createContext, useState } from 'react';
import { supabase } from '../services/supabase';
import api from '../services/api';

export const AuthContext = createContext();

const fakeLoggedUser = {
  id: 'cc71b28d-9369-47ba-80d7-e6e193af73d6',
  name: 'John Petros',
  email: 'joaopcarvalho.cds@gmail.com',
  coins: 0,
  xp: 0,
  weekly_xp: 0,
  level: 1,
  unlocked_stars_ids: ['b34a4a76-0615-4910-89a9-05d34925dc70', 'e35bba41-f5cd-4a37-9b67-533171a086cc'],
  unlocked_achievements_ids: [],
  achievements_ids_to_rescue: [],
  acquired_rockets_ids: ['03f3f359-a0ee-42c1-bd5f-b2ad01810d47'],
  acquired_avatars_ids: [
    'bd3313ad-16ef-49ae-baad-34a104752eb5',
    '54eb3e10-b1b2-44aa-a496-ba7f042e09a2',
  ],
  completed_challenges_ids: [1],
  avatar_id: '54eb3e10-b1b2-44aa-a496-ba7f042e09a2',
  rocket_id: '03f3f359-a0ee-42c1-bd5f-b2ad01810d47',
  ranking_id: 'f542f61a-4e42-4914-88f6-9aa7c2358473',
  streak: 0,
  week_status: ['todo', 'todo', 'todo', 'todo', 'todo', 'todo', 'todo'],
  completed_planets: 0,
  created_at: new Date('2023-01-23T03:01:00.000Z'),
  didUpdateRanking: true,
  didShowWinning: false,
  starId: 8,
};

export function AuthContextProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(fakeLoggedUser);

  async function setUserInSession() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw new Error(error.message);
    }
    const { user } = session;

    try {
      const userInSession = await api.getUser(user.id);
      setLoggedUser(userInSession);
    } catch (error) {
      throw new Error(error);
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
      return user;
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
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
