import { supabase } from './supabase';

export default {
  addUser: async ({ id, name, email }) => {
    const { data, error } = await supabase.from('user').insert([{ id, name, email }]);
    if (error) {
      return error.message;
    }
    return data;
  },
};
