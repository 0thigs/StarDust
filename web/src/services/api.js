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

  getData: async (table, columns) => {
    let { data, error } = await supabase.from(table).select(columns);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getDataById: async (table, id) => {
    const { data, error } = await supabase
      .from(table)
      .select('name, image')
      .eq('id', id)
      .limit(1);
    if (error) {
      throw new Error(error.message);
    }
    return data[0];
  },

  getImages: async folder => {
    const { data, error } = await supabase.storage.from('images').list(folder, {
      limit: 150,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
};
