
const express = require('express');

const successController = require('../controllers/successController');
const router = express.Router();

router.get('/success',successController.getsuccess);


module.exports = router;