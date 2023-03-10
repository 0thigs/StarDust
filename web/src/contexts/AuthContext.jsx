import { createContext, useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import api from '../services/api';

export const AuthContext = createContext();

// const fakeLoggedUser = {
//   id: 'cc71b28d-9369-47ba-80d7-e6e193af73d6',
//   name: 'John Petros',
//   email: 'joaopcarvalho.cds@gmail.com',
//   avatar: 'https://github.com/JohnPetros.png',
//   coins: 100,
//   lives: 5,
//   xp: 50,
//   level: 1,
//   unlocked_achievements_ids: [],
//   unlocked_stars_ids: [1, 2, 3, 11, 4],
//   acquired_rockets_ids: [1],
//   selected_rocket_id: 2,
//   ranking_id: 1,
//   streak: 0,
//   week_status: ['todo', 'todo', 'todo', 'todo', 'todo', 'todo', 'todo'],
//   completed_planets: 0,
//   created_at: new Date('2023-01-23T03:01:00.000Z'),
//   didUpdateRanking: true,
//   didShowWinning: false,
//   starId: 8,
// };

export function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState({});

  async function verifysession() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw new Error(error.message);
    }

    if (!session) {
      return;
    }
    const { user } = session;

    try {
      const userInSession = await api.getUser(user.id);
      setLoggedUser(userInSession);
      localStorage.setItem('logged_user', JSON.stringify(userInSession));
      return userInSession;
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
      const loggedUser = await api.getUser(user.id);
      localStorage.setItem('logged_user', JSON.stringify(loggedUser));
      return loggedUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    const { success, error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    setLoggedUser({});
    localStorage.removeItem('logged_user');
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

  function isUserLogged() {
    return Object.entries(loggedUser).length > 0;
  }

  function isLoggedUserAdmin() {
    return loggedUser.isAdmin;
  }

  useEffect(() => {
    // setUserInSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        resetPassword,
        verifysession,
        updateLoggedUser,
        setLoggedUser,
        isUserLogged,
        isLoggedUserAdmin,
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
