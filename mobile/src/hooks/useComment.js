import { useState, useEffect } from 'react';
import api from '../services/api';

export const useComment = challengeId => {
  const [comments, setComments] = useState([]);

  async function addComment(body, reply_id = null, authorId, challengeId) {
    try {
      await api.addComment(body, reply_id, authorId, challengeId);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateComment(commentId, data) {
    try {
      await api.updateComment(commentId, data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addReplyComments(comment) {
    try {
      const replyComments = await api.getReplyComments(comment.id);
      return { ...comment, replyComments };
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchComments() {
    try {
      const comments = await api.getComments(challengeId);
      const fullComments = await Promise.all(comments.map(addReplyComments));
      setComments(fullComments);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!comments.length) fetchComments();
  }, []);

  return { comments, setComments, fetchComments, addComment, updateComment };
};
