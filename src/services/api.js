// TODO conexão com back-end

import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3002',
});

// pega o token que esta localstorege, e retorna para aplicação, para back-end verifique se esta autenticado
api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:userData'); // pega a chave token localestorage

  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`; // formata para a back-end enterder

  return config;
});
