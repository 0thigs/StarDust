import { useState, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from './useAuth';

export const useComment = challengeId => {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [comments, setComments] = useState([]);
  const [sorter, setSorter] = useState('date');

  function sortRepliesByDate(replies) {
    return [...replies].sort((a, b) => {
      const createdAtA = new Date(a.created_at);
      const createdAtB = new Date(b.created_at);
      return createdAtA.getTime() - createdAtB.getTime();
    });
  }

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
    setComments(sortedComments);
  }

  async function deleteComment(commentId, isLiked) {
    try {
      await api.deleteComment(commentId);
      const updatedComments = comments.filter(comment => comment.id !== commentId);
      setComments(updatedComments);

      if (isLiked) {
        const updatedLikedCommentsIds = liked_comments_ids.filter(
          likedCommentId => likedCommentId !== commentId
        );
        updateLoggedUser('liked_comments_ids', updatedLikedCommentsIds);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addComment(content, parent_id = null, authorId) {
    try {
      await api.addComment(content, parent_id, authorId, challengeId);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateComment(commentId, prop, payload, isLiked) {

    try {
      setComments(
        comments.map(comment =>
          comment.id === commentId ? { ...comment, [prop]: payload, isLiked: !isLiked } : comment
        )
      );
      await api.updateComment(commentId, prop, payload);
      if (prop === 'likes') {
        console.log(isLiked);
        isLiked
          ? await api.deleteLikedComment(commentId, loggedUser.id)
          : await api.addLikedComment(commentId, loggedUser.id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function addReplies(comment, _, commentsFromApi) {
    const replies = commentsFromApi.filter(reply => reply.parent_id === comment.id);
    const sortedReplies = sortRepliesByDate(replies);
    return { ...comment, replies: sortedReplies };
  }

  function verifyComment(comment, likedComments) {
    const isLiked = likedComments.some(({ comment_id }) => comment_id === comment.id);
    const isFromLoggedUser = comment.author_id === loggedUser.id;
    return { ...comment, isLiked, isFromLoggedUser };
  }

  async function fetchLikedComments() {
    try {
      return await api.getLikedComments(loggedUser.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchComments() {
    try {
      const commentsFromApi = await api.getComments(challengeId);
      const likedComments = await fetchLikedComments();
      const comments = commentsFromApi
        .map(addReplies)
        .map(comment => verifyComment(comment, likedComments))
        .filter(comment => comment.parent_id === null);

      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!comments.length) {
      fetchComments();
    }
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
