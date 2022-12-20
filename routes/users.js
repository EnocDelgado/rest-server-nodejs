const { Router } = require('express')
const { getUser, postUser, putUser, deleteUser, patch } = require('../controllers/users')

const router = Router()

router.get('/', getUser )


router.put('/:id', putUser )

router.post('/', postUser )

router.delete('/', deleteUser )

router.patch('/', patch )

module.exports = router