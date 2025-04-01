import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/posts/findAll`);
  return response.data;
};

export const createPost = async (post: { name: string; description: string }) => {
  const response = await axios.post(`${API_URL}/posts/create`, post);
  return response.data;
};

export const deletePostById = async (id: number) => {
  const response = await axios.delete(`${API_URL}/posts/delete/${id}`);
  return response.data;
};