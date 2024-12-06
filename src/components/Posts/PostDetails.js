import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));

    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [postId]);

  const handleLike = () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    fetch(`/api/posts/${postId}/like`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  };

  return (
    post && (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <button onClick={handleLike}>Like ({post.likes})</button>
      </div>
    )
  );
};

export default PostDetails;
