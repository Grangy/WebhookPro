// routes/leadRoutes.js
const express = require('express');
const leadController = require('../controllers/leadController');

const router = express.Router();

router.post('/lead', leadController.receiveLead);

module.exports = router;
