import { useState, useEffect } from 'react';
import api from '../services/api';

export const useCode = (codeId, userId) => {
  const [codes, setCodes] = useState([]);
  const [code, setCode] = useState('');

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

  async function fetchCode() {
    try {
      const codes = await api.getCode(codeId);
      console.log(codes);
      setCodes(codes);
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
    if (codeId) fetchCode();
    if (userId) fetchCodes();
  }, []);

  return { codes, updateCode, deleteCode, fetchCodes };
};
