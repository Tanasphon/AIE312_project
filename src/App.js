import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostsPage from './pages/PostsPage';
import AddPostPage from './pages/AddPostPage';
import SearchPage from './pages/SearchPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  const [posts, setPosts] = React.useState([
    { title: "หิวข้าว", content: "กินอะไรดี" },
    { title: "2+2เป็น4", content: "4 * 2 = 8" },
  ]);
  const [user, setUser] = useState(null); // เก็บสถานะผู้ใช้ที่ล็อกอิน

  // ฟังก์ชันเพิ่มโพสต์
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // ฟังก์ชันล็อกอิน
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // ฟังก์ชันล็อกเอาต์
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/register" element={<RegisterPage onRegister={() => {}} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/posts"
          element={<PostsPage posts={posts} />}
        />
        <Route
          path="/add-post"
          element={<AddPostPage addPost={addPost} />}
        />
        <Route path="/search" element={<SearchPage posts={posts} />} />
      </Routes>
      {user && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </Router>
  );
};



export default App;
