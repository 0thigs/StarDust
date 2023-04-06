import { useState, useEffect } from 'react';
import api from '../services/api';

export const useComment = authorId => {
  const [author, setAuthor] = useState(null);

  async function updateComment(commentId, data) {
    try {
      await api.updateComment(commentId, data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAuthor() {
    try {
      const author = await api.getAuthor(authorId);
      setAuthor(author);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!author) fetchAuthor();
  }, []);

  return { author, updateComment };
};
