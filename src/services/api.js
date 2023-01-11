import { supabase } from './supabase';

export default {
  addUser: async ({ id, name, email }) => {
    const { error } = await supabase.from('user').insert([{ id, name, email }]);
    console.log(error);
  },
};
