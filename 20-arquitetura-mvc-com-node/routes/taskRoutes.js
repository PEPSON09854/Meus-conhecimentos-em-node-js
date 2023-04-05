import express from 'express'
import  TaskController  from '../controllers/TaskController.js'

const router = express.Router()

router.get('/add', TaskController.createTasks)
router.post('/add', TaskController.createTasksSave)
router.get('/', TaskController.showTasks)

export default router