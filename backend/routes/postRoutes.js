const express = require('express');
const { getPosts, likePost, createPost } = require('../controllers/postController');
const { verifyTokenMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

// ดึงข้อมูลโพสต์
router.get('/', getPosts);

// เพิ่มโพสต์ใหม่
router.post('/', verifyTokenMiddleware, createPost);

// กดไลค์โพสต์
router.post('/:id/like', verifyTokenMiddleware, likePost);

module.exports = router;
