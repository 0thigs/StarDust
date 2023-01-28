import { supabase } from './supabase';

export default {
  addUser: async ({ id, name, email }) => {
    const { data, error } = await supabase.from('users').insert([{ id, name, email }]);
    if (error) {
      return error.message;
    }
    return data;
  },

  getUser: async userId => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .limit(1);
    if (error) {
      return error.message;
    }
    return data[0];
  },

  updateUser: async (column, data, userId) => {
    const { error } = await supabase
      .from('users')
      .update({ [column]: data })
      .eq('id', userId);
    if (error) {
        console.log(error.message);
      return error.message;
    }
  },
};
