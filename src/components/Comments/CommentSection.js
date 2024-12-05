import React, { useState } from 'react';
import API from '../../api';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = async () => {
    const response = await API.get(`/posts/${postId}/comments`);
    setComments(response.data);
  };

  const handleAddComment = async () => {
    const token = localStorage.getItem('token');
    await API.post(`/posts/${postId}/comments`, { content: newComment }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchComments();
    setNewComment('');
  };

  return (
    <div>
      <h4>Comments</h4>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.content}</p>
      ))}
      <textarea
        placeholder="Write a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button onClick={handleAddComment}>Comment</button>
    </div>
  );
};

export default CommentSection;
