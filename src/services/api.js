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

  updateUserData: async (column, data, userId) => {
    const { error } = await supabase
      .from('users')
      .update({ [column]: data })
      .eq('id', userId);
    if (error) {
      console.log(error);
      return error.message;
    }
  },
};
