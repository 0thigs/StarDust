export default {
  addUser: async ({ id, name, email }) => {
    const { data, error } = await supabase.from('user').insert([{ id, name, email }]);
    if (error) {
      return error.message;
    }
    return data;
  },

  getUser: async userId => {
    const { data, error, status } = await supabase
      .from('users')
      .select('name, email, unlockedStarsIds, coins, lives')
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

  updateUnlockedStarsIds: async (unlockedStarsIds, userId) => {
    const { error } = await supabase.from('users').update({ unlockedStarsIds }).eq('id', userId);
    if (error) {
      return error.message;
    }
  },
};