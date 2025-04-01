import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPosts } from '../features/posts/postSlice';
import { TextField, Button, Box } from '@mui/material';

interface PostFilterProps {
  originalPosts: any[];
}

const PostFilter: React.FC<PostFilterProps> = ({ originalPosts }) => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleFilter = () => {
    const filteredPosts = originalPosts.filter((post) =>
      post.name.toLowerCase().includes(filter.toLowerCase())
    );
    dispatch(setPosts(filteredPosts));
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <TextField
        label="Buscar por nombre"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Buscar
      </Button>
    </Box>
  );
};

export default PostFilter;