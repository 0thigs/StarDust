import { supabase } from './supabase';

export default {
  addUser: async ({ id, name, email }) => {
    const { data, error } = await supabase.from('user').insert([{ id, name, email }]);
    if (error) {
      return error.message;
    }
    return data;
  },

  getUser: async userId => {
    const { data, error } = await supabase
      .from('users')
      .select('name, email, unlocked_stars_Ids, coins, lives')
      .eq('id', userId)
      .limit(1);
    if (error) {
      return error.message;
    }
    return data[0];
  },

  getPlanets: async () => {
    const { data: planets, error } = await supabase
      .from('planets')
      .select('*')
      .order('id', { ascending: true });
    if (error) {
      return error.message;
    }
    return planets;
  },

  getStars: async () => {
    const { data: stars, error } = await supabase.from('stars').select('*');
    if (error) {
      return error.message;
    }
    return stars;
  },

  getRockets: async () => {
    const { data: rockets, error } = await supabase.from('rockets').select('*');
    if (error) {
      return error.message;
    }
    return rockets;
  },

  getRocket: async selectedRocketId => {
    const { data: rocket, error } = await supabase
      .from('rockets')
      .select('*')
      .eq('id', selectedRocketId);
    if (error) {
      return error.message;
    }
    return rocket;
  },

  updateLives: async (lives, userId) => {
    const { error } = await supabase.from('users').update({ lives }).eq('id', userId);
    if (error) {
      console.log(error);
      return error.message;
    }
  },

  updateCoins: async (coins, userId) => {
    const { error } = await supabase.from('users').update({ coins }).eq('id', userId);
    if (error) {
      return error.message;
    }
  },

  updateXp: async (xp, userId) => {
    const { error } = await supabase.from('users').update({ xp }).eq('id', userId);
    if (error) {
      return error.message;
    }
  },

  updateUnlockedStarsIds: async (unlocked_stars_ids, userId) => {
    const { error } = await supabase.from('users').update({ unlocked_stars_ids }).eq('id', userId);
    if (error) {
      return error.message;
    }
  },

  updateAcquiredRocketsIds: async (acquired_rockets_ids, userId) => {
    const { error } = await supabase
      .from('users')
      .update({ acquired_rockets_ids })
      .eq('id', userId);
    if (error) {
      return error.message;
    }
  },

  updateSelectedRocketId: async (selected_rocket_id, userId) => {
    const { error } = await supabase.from('users').update({ selected_rocket_id }).eq('id', userId);
    if (error) {
      return error.message;
    }
  },

  updateUnlockedAchievementsIds: async (unlocked_achievements_ids, userId) => {
    const { error } = await supabase.from('users').update({ unlocked_achievements_ids }).eq('id', userId);
    if (error) {
      return error.message;
    }
  },
};
