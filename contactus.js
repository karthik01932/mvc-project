const express = require('express');

const contactusController = require('../controllers/contactusController');
const router = express.Router();

router.get('/contactus' ,contactusController.getContactus);
router.post('/contactus',contactusController.postContactus);

module.exports  = router;