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

  getUser: async userId => {
    const { data, error } = await supabase.from('users').select('*').eq('id', userId).limit(1);
    if (error) {
      throw new Error(error.message);
    }
    const user = data[0];
    return user;
  },

  getUsersByCurrentRanking: async rankingId => {
    const { data, error, status } = await supabase
      .from('users')
      .select('*')
      .eq('ranking_id', rankingId);
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

  getData: async (tableName, columns) => {
    let { data: rockets, error } = await supabase.from(tableName).select(columns);

    if (error) {
      throw new Error(error.message);
    }
    return rockets;
  },

  getImages: async () => {
    const { data, error } = await supabase.storage.from('images').list('rockets', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
};
