import { useState, useEffect } from 'react';
import api from '../services/api';

export const useCode = userId => {
  const [codes, setCodes] = useState([]);

  async function deleteCode(id) {
    try {
      await api.deleteCode(id);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateCode(id, title) {
    try {
      await api.updateCode(id, title);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCodes() {
    try {
      const codes = await api.getCodes(userId);
      console.log(codes);
      setCodes(codes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (codes.length) return;
    fetchCodes();
  }, []);

  return { codes, updateCode, deleteCode, fetchCodes };
};
