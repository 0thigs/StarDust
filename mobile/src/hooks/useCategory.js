import { useState, useEffect } from 'react';
import api from '../services/api';

export const useCategory = () => {
  const [categories, setCategories] = useState([]);

  async function fetchcategories() {
    try {
      const categories = await api.getCategories();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchcategories();
  }, []);

  return { categories };
};
