const express = require('express')

const router = express.Router()

const SearchCtrl = require('../controllers/SearchCtr')

router.route('/search')
.get(SearchCtrl.Search)




module.exports = router
