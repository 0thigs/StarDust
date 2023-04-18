import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import api from '../services/api';

export const useComment = challengeId => {
  const { loggedUser } = useAuth();
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

  async function deleteComment(commentId, isReply) {
    try {
      await api.deleteComment(commentId);
      if (isReply) {
        const currentParentComment = comments.find(comment =>
          comment.replies.some(reply => reply.id === commentId)
        );
        currentParentComment.replies = currentParentComment.replies.filter(
          reply => reply.id !== commentId
        );
        const updatedComments = comments.map(comment =>
          comment.id === currentParentComment.id ? currentParentComment : comment
        );
        setComments(updatedComments);
        return;
      }
      setComments(comments => comments.filter(comment => comment.id !== commentId));
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
          comment.id === commentId ? { ...comment, [prop]: payload } : comment
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
        .map(comment => verifyComment(comment, likedComments))
        .map(addReplies)
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
