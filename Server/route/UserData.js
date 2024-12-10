const express = require('express');
const router = express.Router();
const User = require('../models/User');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/user', upload.single('image'), async (req, res) => {
  try {
    const { name, email, phone, gender } = req.body;
    const newUser = new User({
      name,
      email,
      phone,
      gender,
      image: req.file ? req.file.path : null,
    });
    await newUser.save();
    res.status(201).json({ message: 'User data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
