const { Router } = require('express')
const { check } = require('express-validator')
const { uploadfile } = require('../controllers/uploads')


const router = Router()

router.post('/', uploadfile)

module.exports = router