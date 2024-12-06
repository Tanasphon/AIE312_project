import React, { useState } from 'react';

const AddPostPage = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && content) {
      addPost({ title, content }); // เรียกฟังก์ชันเพื่อเพิ่มโพสต์
      setTitle('');
      setContent('');
      alert('Post added successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPostPage;
