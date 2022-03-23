const express = require('express')
const router  = express.Router()

const EvenementController = require('../controllers/evenement.controller')

router.get('/index',EvenementController.index)
router.post('/show',EvenementController.show)
router.get('/',EvenementController.index)
router.post('/stores',EvenementController.stores)
router.post('/update',EvenementController.update)
router.post('/delete',EvenementController.destory)

module.exports=router