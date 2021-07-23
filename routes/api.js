const { Router } = require('express')
const db = require('../queries')

const router = Router()

router.get('/users', db.getUsers)

router.get('/users/:id', db.getUserById)

router.post('/users', db.createUser)

router.put('/users/:id', db.updateUser)

router.delete('/users/:id', db.deleteUser)

module.exports = router;