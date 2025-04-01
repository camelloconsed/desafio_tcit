import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const PostList = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.name}</h3>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;