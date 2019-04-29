const express = require('express')

const router = express.Router()

const SearchCtrl = require('../controllers/SearchCtrl')

router.route('/')
.get(SearchCtrl.Search)




module.exports = router
