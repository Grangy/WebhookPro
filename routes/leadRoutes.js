// routes/leadRoutes.js
const express = require('express');
const leadController = require('../controllers/leadController');

const router = express.Router();

router.post('/lead', leadController.receiveLead);
router.get('/leads', leadController.getLeads);


module.exports = router;
