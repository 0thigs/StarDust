import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { supabase } from '../services/supabase';

export const AuthContext = createContext();

const fakeUser = {
  id: '327211d0-1e4b-4ee3-92d9-5dbda4ab9422',
  name: 'John Petros',
  email: 'joaopcarvalho.cds@gmail.com',
  avatar: 'https://github.com/JohnPetros.png',
  coins: 20,
  lives: 5,
  xp: 0,
  level: 1,
  unlocked_achievements_ids: [],
  unlocked_stars_ids: [1, 2],
  acquired_rockets_ids: [1, 2, 3, 4],
  selected_rocket_id: 1,
  ranking_id: 1,
  streak: 12,
  completed_days: [1],
  completed_planets: 0,
  created_at: new Date(),
  starId: 1,
};

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(fakeUser);

  //   useEffect(() => {
  //     const signedUser = getSignedUser()
  //     setUser(signedUser);
  //   }, []);

  async function getUserInSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const { user } = session;
    // const signedUser = await api.getUser(user.id);
    // setUser(user);
    return user;
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
      return error.message;
    }
    const newUser = {
      id: user.id,
      name,
      email,
    };
    const response = await api.addUser(newUser);
    const signedUser = await api.getUser(user.id);
    setUser(signedUser)
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
    const signedUser = await api.getUser(user.id);
    setUser(signedUser);
    console.log(signedUser);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return error.message;
    }
  }

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, getUserInSession, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}

// const newUser = {
//     name,
//     email,
//     coins: 20,
//     lives: 5,
//     xp: 0,
//     unlocked_achievements_ids: [],
//     acquired_rockets_ids: [1],
//     unlockedStarsIds: [1],
//     selected_rocket_id: 1,
//     ranking_id: 1,
//     streak: 0,
//     created_at: user.created_at,
//   };
