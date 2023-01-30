import { supabase } from './supabase';

export default {
  addUser: async ({ id, name, email }) => {
    try {
      const { error } = await supabase.from('users').insert([{ id, name, email }]);

      if (error) {
        throw new Error(error.message);
      }

    } catch (error) {
      console.log(error);
    }
  },

  getUser: async userId => {
    try {
      const { data, error } = await supabase.from('users').select('*').eq('id', userId).limit(1);

      if (error) {
        throw new Error(error.message);
      }

      return data[0];

    } catch (error) {
      console.log(error);
      return error.toString();
    }
  },

  updateUser: async (column, data, userId) => {
    try {
      const { error } = await supabase
        .from('users')
        .update({ [column]: data })
        .eq('id', userId);

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
