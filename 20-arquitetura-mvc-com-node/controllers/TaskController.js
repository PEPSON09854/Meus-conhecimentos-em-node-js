import { Tarefas } from "../models/Task.js";

export default class TaskController {
    static createTasks(req, res){
        res.render('tasks/createTasks')
    }

    static async createTasksSave(req, res){

        const task = {
            title: req.body.title,
            descreption: req.body.descreption,
            done: false
        }

        await Tarefas.create(task)

        res.redirect('/tasks')
    }

    static async showTasks(req, res){
        const tasks = await Tarefas.findAll({raw: true})

        res.render('tasks/all', {tasks})
    }

}