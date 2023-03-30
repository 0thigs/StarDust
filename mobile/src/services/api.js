import { supabase } from './supabase';

export default {
  addUser: async ({ id, name, email }) => {
    const { success, error } = await supabase.from('users').insert([{ id, name, email }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  getUser: async userId => {
    const { data, error } = await supabase.from('users').select('*').eq('id', userId).limit(1);
    if (error) {
      throw new Error(error.message);
    }
    const user = data[0];
    return user;
  },

  getUsersByCurrentRanking: async rankingId => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('ranking_id', rankingId)
      .order('weekly_xp', { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getPlanets: async () => {
    const { data, error } = await supabase
      .from('planets')
      .select('*, stars (*)')
      .order('order', { ascending: true })
      .order('number', { foreignTable: 'stars', ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getAvatar: async avatarId => {
    const { data, error } = await supabase.from('avatars').select('image').eq('id', avatarId);
    if (error) {
      throw new Error(error.message);
    }
    const avatar = data[0];
    return avatar.image;
  },

  getAchievements: async () => {
    const { data, error } = await supabase.from('achievements').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getRanking: async rankingId => {
    const { data, error } = await supabase.from('rankings').select('*').eq('id', rankingId);
    if (error) {
      throw new Error(error.message);
    }
    const ranking = data[0];
    return ranking;
  },

  getRankings: async () => {
    const { data, error } = await supabase
      .from('rankings')
      .select('*')
      .order('position', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getRocket: async rocketId => {
    const { data, error } = await supabase.from('rockets').select('image, name').eq('id', rocketId);
    if (error) {
      throw new Error(error.message);
    }
    const rocket = data[0];
    return rocket;
  },

  getRockets: async () => {
    const { data, error } = await supabase
      .from('rockets')
      .select('*')
      .order('price', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getAvatars: async () => {
    const { data, error } = await supabase
      .from('avatars')
      .select('*')
      .order('price, name', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getChallenges: async () => {
    const { data, error } = await supabase.from('challenges').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getChallenge: async challengeId => {
    const { data, error } = await supabase.from('challenges').select('*').eq('id', challengeId);
    if (error) {
      throw new Error(error.message);
    }
    const challenge = data[0];
    return challenge;
  },

  getChallengeId: async starId => {
    const { data, error } = await supabase.from('challenges').select('id').eq('star_id', starId);
    if (error) {
      throw new Error(error.message);
    }
    const challenge = data[0].id;
    return challenge;
  },

  getTestCases: async challengeId => {
    const { data, error } = await supabase
      .from('test_cases')
      .select('*')
      .eq('challenge_id', challengeId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getCategories: async () => {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getWinners: async () => {
    const { data, error } = await supabase.from('winners').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  updateUser: async (column, data, userId) => {
    const { success, error } = await supabase
      .from('users')
      .update({ [column]: data })
      .eq('id', userId);

    if (error) {
      throw new Error(error.message);
    }
    return success;
  },
};
