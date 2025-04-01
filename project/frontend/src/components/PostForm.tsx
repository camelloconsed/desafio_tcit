import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/posts/postSlice';
import { TextField, Button, Box } from '@mui/material';
import { createPost, fetchPosts } from '../api';


const PostForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newPost = await createPost({ name, description });
      dispatch(addPost(newPost));
      setName('');
      setDescription('');
      // se puede agregar una llamada a fetchPosts() aquí si es necesario
      // const posts = await fetchPosts();
      // dispatch(setPosts(posts));
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mt: 2 }}>
      <TextField
        label="Nombre"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Descripción"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Crear
      </Button>
    </Box>
  );
};

export default PostForm;