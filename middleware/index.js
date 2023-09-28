var express = require('express');
var auth = require('./auht');
var router = express.Router();

//daftarkan menu register
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

module.exports = router;