import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ใช้ default export ใน App.js
import './style.css'; // ไฟล์ style.css ต้องอยู่ใน src
import './styles/global.css'; // ตัวอย่างการเรียกใช้งาน

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
