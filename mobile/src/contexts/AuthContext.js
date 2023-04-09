import { createContext, useState } from 'react';
import { supabase } from '../services/supabase';
import api from '../services/api';

export const AuthContext = createContext();

const fakeLoggedUser = {
  id: 'cc71b28d-9369-47ba-80d7-e6e193af73d6',
  name: 'John Petros',
  email: 'joaopcarvalho.cds@gmail.com',
  coins: 700,
  xp: 150,
  weekly_xp: 0,
  level: 1,
  unlocked_achievements_ids: [],
  unlocked_stars: 2,
  unlocked_topics_ids: [],
  achievements_ids_to_rescue: [],
  acquired_avatars_ids: [
    '54eb3e10-b1b2-44aa-a496-ba7f042e09a2',
    '557a33e8-ce8a-4ac2-992c-7eab630d186d',
    'c008e3a2-d79b-43f3-a1e2-77acdefeb909',
    'a785d743-52f5-4b78-90ff-18b408bb0566',
    '70273298-097e-4ed6-964f-11b7284436a8',
  ],
  completed_challenges_ids: ['0a088952-b63e-4053-9f41-e748e51fd156'],
  avatar_id: '557a33e8-ce8a-4ac2-992c-7eab630d186d',
  rocket_id: '03f3f359-a0ee-42c1-bd5f-b2ad01810d47',
  acquired_avatars: 1,
  ranking_id: 'f542f61a-4e42-4914-88f6-9aa7c2358473',
  streak: 3,
  week_status: ['todo', 'todo', 'todo', 'done', 'todo', 'todo', 'todo'],
  completed_planets: 0,
  created_at: new Date('2023-01-23T03:01:00.000Z'),
  did_update_ranking: false,
  last_position: 8,
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
