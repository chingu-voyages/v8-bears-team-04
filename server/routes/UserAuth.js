const express = require('express')

const router = express.Router()

const UserCtrl = require('../controllers/UserCtrl')

router.route('/login')
.post(UserCtrl.Login)


router.route('/register')
.post(UserCtrl.Register)



module.exports = router
