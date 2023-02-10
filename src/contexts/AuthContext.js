import { createContext, useState } from 'react';
import api from '../services/api';
import { supabase } from '../services/supabase';

export const AuthContext = createContext();

const fakeUser = {
  id: 'cc71b28d-9369-47ba-80d7-e6e193af73d6',
  name: 'John Petros',
  email: 'joaopcarvalho.cds@gmail.com',
  avatar: 'https://github.com/JohnPetros.png',
  coins: 100,
  lives: 5,
  xp: 1500,
  level: 1,
  unlocked_achievements_ids: [1],
  unlocked_stars_ids: [1, 2],
  acquired_rockets_ids: [1, 2, 3],
  selected_rocket_id: 1,
  ranking_id: 1,
  streak: 0,
  week_status: ['todo', 'todo', 'todo', 'todo', 'todo', 'todo', 'todo'],
  completed_planets: 0,
  created_at: new Date('2023-01-23T03:01:00.000Z'),
  starId: 4,
};

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(fakeUser);

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
      setUser(userInSession);
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
      setUser(signedUser);
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
      setUser(signedUser);
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

  return (
    <AuthContext.Provider
      value={{ signUp, signIn, signOut, resetPassword, setUserInSession, setUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
