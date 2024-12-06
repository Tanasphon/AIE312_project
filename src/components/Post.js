import React, { useState } from 'react';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => setLikes(likes + 1);

  const handleComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleLike}>Like ({likes})</button>
      <div>
        <h3>Comments</h3>
        {comments.map((comment, idx) => (
          <p key={idx}>{comment}</p>
        ))}
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default Post;
