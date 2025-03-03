const express = require('express');
const router = express.Router();
const { updateStudent } = require('../controllers/studentController');

router.put('/students/:id', updateStudent); // ✅ Ensure this exists

module.exports = router;
