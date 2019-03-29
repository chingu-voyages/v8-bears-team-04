const express = require('express')

const router = express.Router()

const UserCtrl = require('../controllers/UserCtrl')

router.route('/login')
.get(UserCtrl.Login)
.post(UserCtrl.Login)


router.route('/register')
.get(UserCtrl.Register)
.post(UserCtrl.Register)



module.exports = router
