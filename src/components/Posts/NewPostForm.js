import React, { useState } from 'react';
import API from '../../api';

const NewPostForm = ({ onPostAdded }) => {
  const [content, setContent] = useState('');

  const handleAddPost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await API.post('/posts', { content }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    onPostAdded(response.data);
    setContent('');
  };

  return (
    <form onSubmit={handleAddPost}>
      <textarea
        placeholder="Write a new post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default NewPostForm;
