import { useState, useEffect } from 'react';
import api from '../services/api';

export const useCode = (codeId, userId) => {
  const [codes, setCodes] = useState([]);
  const [code, setCode] = useState('');

  async function addCode(codeId, code, userId) {
    try {
      await api.addCode(codeId, code, userId);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateCode(codeId, data) {
    try {
        console.log(data);
      await api.updateCode(codeId, data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCode(id) {
    try {
      await api.deleteCode(id);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCode() {
    try {
      const code = await api.getCode(codeId);
      setCode(code);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCodes() {
    try {
      const codes = await api.getCodes(userId);
      setCodes(codes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (codeId) fetchCode();
    if (!codes.length && userId) fetchCodes();
  }, []);

  return { code, codes, addCode, updateCode, deleteCode, fetchCodes };
};
