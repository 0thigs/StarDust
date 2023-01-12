import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { supabase } from '../services/supabase';

export const AuthContext = createContext();

export const userId = '327211d0-1e4b-4ee3-92d9-5dbda4ab9422';

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

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
      return error.message;
    }

    const newUser = { id: user.id, email, name };
    setUser(newUser);
    const response = await api.addUser(newUser);
    return response;
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
      return error.message;
    }

    const currentUser = await api.getUser(user.id);
    setUser(currentUser)
    // return data;
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return error.message;
    }

  }



  return <AuthContext.Provider value={{ signUp, signIn, signOut, setUser, user }}>{children}</AuthContext.Provider>;
}
