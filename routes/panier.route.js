const express = require('express')
const router  = express.Router()

const PanierController = require('../controllers/panier.controller')

router.get('/index',PanierController.index)
router.post('/show',PanierController.show)
router.get('/',PanierController.index)
router.post('/stores',PanierController.stores)
router.post('/delete',PanierController.destory)

module.exports=router