const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createComplaint, getComplaints, updateComplaint } = require('../controllers/complaintController');
router.post('/', auth, createComplaint);
router.get('/', auth, getComplaints);
router.put('/:id', auth, updateComplaint);
module.exports = router;
