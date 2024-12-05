import React from 'react';

const PostItem = ({ post, user }) => {
  const isOwner = user && post.user_id === user.id;

const handleLike = async () => {
    const token = localStorage.getItem('token');
    await API.post(`/posts/${post.id}/like`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };
  
  return (
    <div className="post-item">
      <h3>{post.content}</h3>
      <p>Likes: {post.likes}</p>
      {isOwner && (
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PostItem;

