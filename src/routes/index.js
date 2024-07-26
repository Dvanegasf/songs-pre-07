const express = require('express');
const soungRouter = require('./routers.Soung');
const router = express.Router();

// colocar las rutas aquí

router.use('/soung',soungRouter)

module.exports = router;