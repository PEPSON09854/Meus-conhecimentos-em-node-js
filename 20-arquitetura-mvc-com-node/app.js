import path from 'path'
import express from 'express'
import connect from './db/connect.js'
import exphbs from 'express-handlebars'
import { Tarefas } from './models/Task.js'
import taskRoutes from './routes/taskRoutes.js'

const app = express()
const __dirname = path.resolve()


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use('/css', express.static(__dirname + '/css'))

app.use(
    express.urlencoded({
        extended: true
}))
    
app.use(express.json())

app.use('/tasks', taskRoutes)




connect.sync().then(()=> app.listen(3000)).catch((err)=> console.log(err)) 


