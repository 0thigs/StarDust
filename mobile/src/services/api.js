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

  getUserByEmail: async email => {
    const { data, error } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .limit(1);
    if (error) {
      throw new Error(error.message);
    }
    const user = data[0];
    return user;
  },

  updateUser: async (newData, userId) => {
    const { success, error } = await supabase.from('users').update(newData).eq('id', userId);

    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  deleteUser: async userId => {
    const { success, error } = await supabase.rpc('delete_user', {
      userid: userId,
    });
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  updateUserEmail: async (newEmail, userId) => {
    const { success, error } = await supabase.rpc('update_user_email', {
      new_email: newEmail,
      user_id: userId,
    });
    if (error) {
      throw new Error(error.message);
    }
    return success;
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
      .order('position', { ascending: true })
      .order('number', { foreignTable: 'stars', ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  addUnlockedStar: async (starId, userId) => {
    const { success, error } = await supabase
      .from('users_unlocked_stars')
      .insert([{ star_id: starId, user_id: userId }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  getUserUnlockedStars: async userId => {
    const { data, error } = await supabase
      .from('users_unlocked_stars')
      .select('*')
      .eq('user_id', userId);
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
    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .order('position', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getUserUnlockedAchievements: async userId => {
    const { data, error } = await supabase
      .from('users_unlocked_achievements')
      .select('achievement_id')
      .eq('user_id', userId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getUserRescuableAchievements: async userId => {
    const { data, error } = await supabase
      .from('users_rescuable_achievements')
      .select('achievement_id')
      .eq('user_id', userId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  addUserUnlockedAchievement: async (achievementId, userId) => {
    const { success, error } = await supabase
      .from('users_unlocked_achievements')
      .insert([{ achievement_id: achievementId, user_id: userId }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  addUserRescuableAchievements: async (achievementId, userId) => {
    const { success, error } = await supabase
      .from('users_rescuable_achievements')
      .insert([{ achievement_id: achievementId, user_id: userId }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  deleteUserRescuedAchievement: async (achievementId, userId) => {
    const { success, error } = await supabase
      .from('users_rescuable_achievements')
      .delete()
      .eq('achievement_id', achievementId)
      .eq('user_id', userId);
    if (error) {
      throw new Error(error.message);
    }
    return success;
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

  getQuestions: async (starId) => {
    const { data, error } = await supabase
      .from('questions')
      .select('*').eq('star_id', starId)
      .order('order', { ascending: false });
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
      .select('*, users_acquired_rockets(user_id)')
      .order('price', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getUserAcquiredRockets: async userId => {
    const { data, error } = await supabase
      .from('users_acquired_rockets')
      .select('rocket_id')
      .eq('user_id', userId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  addUserAcquiredRocket: async (rocketId, userId) => {
    const { success, error } = await supabase
      .from('users_acquired_rockets')
      .insert([{ rocket_id: rocketId, user_id: userId }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },
  
  getAvatars: async () => {
    const { data, error } = await supabase
      .from('avatars')
      .select('*, users_acquired_avatars(user_id)')
      .order('price, name', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  addUserAcquiredAvatar: async (avatarId, userId) => {
    const { success, error } = await supabase
      .from('users_acquired_avatars')
      .insert([{ avatar_id: avatarId, user_id: userId }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  getChallenges: async () => {
    const { data, error } = await supabase.from('challenges').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getUserCompletedChallenges: async userId => {
    const { data, error } = await supabase
      .from('users_completed_challenges')
      .select('challenge_id')
      .eq('user_id', userId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getChallengeCategories: async () => {
    const { data, error } = await supabase
      .from('challenges_categories')
      .select('challenge_id, category_id');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getChallenge: async challengeId => {
    const { data, error } = await supabase
      .from('challenges')
      .select('*, users_completed_challenges(user_id)')
      .eq('id', challengeId);
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

  addUserCompletedChallenges: async (achievementId, userId) => {
    const { data, error } = await supabase
      .from('users_completed_challenges')
      .insert([{ challenge_id: achievementId, user_id: userId }]);
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

  getWinners: async lastWeekRankingId => {
    const { data, error } = await supabase
      .from('winners')
      .select('*')
      .eq('ranking_id', lastWeekRankingId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getCodes: async userId => {
    const { data, error } = await supabase
      .from('codes')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getCode: async codeId => {
    const { data, error } = await supabase.from('codes').select('*').eq('id', codeId);
    if (error) {
      throw new Error(error.message);
    }
    const code = data[0];
    return code;
  },

  getAuthor: async userId => {
    const { data, error } = await supabase.from('users').select('name, avatar_id').eq('id', userId);
    if (error) {
      throw new Error(error.message);
    }
    const code = data[0];
    return code;
  },

  getTopics: async () => {
    const { data, error } = await supabase
      .from('topics')
      .select('*')
      .order('position', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  addUserUnlockedTopic: async (topicId, userId) => {
    const { success, error } = await supabase
      .from('users_unlocked_topics')
      .insert([{ topic_id: topicId, user_id: userId }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  getUnlockedTopics: async userId => {
    const { data, error } = await supabase
      .from('users_unlocked_topics')
      .select('*')
      .eq('user_id', userId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  addComment: async (content, parentId, authorId, challengeId) => {
    const { success, error } = await supabase
      .from('comments')
      .insert([{ content, parent_id: parentId, author_id: authorId, challenge_id: challengeId }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  addLikedComment: async (commentId, userId) => {
    const { success, error } = await supabase
      .from('users_liked_comments')
      .insert([{ comment_id: commentId, user_id: userId }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  getComments: async challengeId => {
    const { data, error } = await supabase
      .from('comments')
      .select('*, users(name, avatar_id)')
      .eq('challenge_id', challengeId)
      .order('created_at', { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  getLikedComments: async userId => {
    const { data, error } = await supabase
      .from('users_liked_comments')
      .select('*')
      .eq('user_id', userId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },

  updateComment: async (commentId, column, data) => {
    const { success, error } = await supabase
      .from('comments')
      .update({ [column]: data })
      .eq('id', commentId);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  deleteComment: async codeId => {
    const { success, error } = await supabase.from('comments').delete().eq('id', codeId);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  deleteLikedComment: async (commentId, userId) => {
    const { success, error } = await supabase
      .from('users_liked_comments')
      .delete()
      .eq('comment_id', commentId)
      .eq('user_id', userId);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  addCode: async (codeId, codeTitle, code, userId) => {
    const { success, error } = await supabase
      .from('codes')
      .insert([{ id: codeId, title: codeTitle, code, user_id: userId }]);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  deleteCode: async codeId => {
    const { success, error } = await supabase.from('codes').delete().eq('id', codeId);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },

  updateCode: async (codeId, data) => {
    const { success, error } = await supabase.from('codes').update(data).eq('id', codeId);
    if (error) {
      throw new Error(error.message);
    }
    return success;
  },
};
