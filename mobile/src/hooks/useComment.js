import { useState, useEffect } from 'react';
import api from '../services/api';

export const useComment = challengeId => {
  const [comments, setComments] = useState([]);
  const [sorter, setSorter] = useState('date');

  function sortCommentsByDate() {
    return [...comments].sort((a, b) => {
      const createdAtA = new Date(a.created_at);
      const createdAtB = new Date(b.created_at);
      return createdAtB.getTime() - createdAtA.getTime();
    });
  }

  function sortCommentsByLikes() {
    return [...comments].sort((a, b) => a.likes < b.likes);
  }

  function handleSorterComments(sorter) {
    setSorter(sorter);
    const sortedComments = sorter === 'likes' ? sortCommentsByLikes() : sortCommentsByDate();
    setComments(sortedComments)
  }

  async function deleteComment(commentId) {
    try {
      await api.deleteComment(commentId);
      const updatedComments = comments.filter(comment => comment.id !== commentId);
      setComments(updatedComments);
    } catch (error) {
      console.log(error);
    }
  }

  async function addComment(content, reply_id = null, authorId) {
    try {
      await api.addComment(content, reply_id, authorId, challengeId);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateComment(commentId, data) {
    try {
      await api.updateComment(commentId, data);
      setComments(
        comments.map(comment => (comment.id === commentId ? { ...comment, ...data } : comment))
      );
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

  return {
    comments,
    setComments,
    fetchComments,
    addComment,
    updateComment,
    deleteComment,
    handleSorterComments,
    sorter,
  };
};
