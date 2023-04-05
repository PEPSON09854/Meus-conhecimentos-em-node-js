import ProductController from '../controllers/ProductController.js'
import express from 'express'


const router = express.Router()

router.get('/', ProductController.showProducts)
router.get('/create', ProductController.createProduct)
router.get('/create', ProductController.createProductPost)

export default router



