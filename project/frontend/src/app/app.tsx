import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPosts } from '../features/posts/postSlice';
import PostFilter from '../components/PostFilter';
import PostTable from '../components/PostTable';
import PostForm from '../components/PostForm';
import { fetchPosts } from '../api';


const App: React.FC = () => {
  const [originalPosts, setOriginalPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setOriginalPosts(data);
        dispatch(setPosts(data));
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Gestión de Posts</h1>
      <PostFilter originalPosts={originalPosts} />
      <PostTable />
      <PostForm />
    </div>
  );
};

export default App;