import { createContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

const fakeUser = {
  id: '327211d0-1e4b-4ee3-92d9-5dbda4ab9422',
  name: 'John Petros',
  email: 'joaopcarvalho.cds@gmail.com',
  avatar: 'https://github.com/JohnPetros.png',
  coins: 20,
  lives: 1,
  xp: 0,
  level: 1,
  unlocked_stars_ids: [1],
  acquired_rockets_ids: [1],
  selected_rocket_id: 1,
  ranking_id: 1,
  streak: 12,
  completed_days: [1],
  completed_planets: 0,
  completed_achievements_ids: [1],
  created_at: new Date(),
  starId: 1,
};

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(fakeUser);

  async function getUser(id) {
    const user = await api.getUser(id);
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
    const newUser = { name, email, coins: 20, lives: 5, xp: 0, unlockedStarsIds: [1] };
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
    const signedUser = await api.getUser(user.id);
    return user;
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return error.message;
    }
  }

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}
