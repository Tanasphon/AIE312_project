import React, { useEffect, useState } from 'react';
import API from '../../api';
import PostItem from './PostItem';

const PostList = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await API.get('/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} user={user} />
      ))}
    </div>
  );
};

export default PostList;
