import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { supabase } from '../services/supabase';

export const AuthContext = createContext();

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
      console.log(error);
      return;
    }

    const newUser = { id: user.id, email, name, password };
    setUser(newUser);
    console.log(newUser);
    api.addUser(newUser);
  }

  async function signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
  }

  return <AuthContext.Provider value={{ signUp, signIn, user }}>{children}</AuthContext.Provider>;
}
