import express from 'express'
import path from 'path'
import users from './users/index'

const port = 3000
const app = express()
const __dirname = path.resolve()
const defautPath = path.join(__dirname, 'templates')

app.use(express.urlencoded({extended: true}))//faz parte do POST

app.use(express.json())//faz parte do 

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${defautPath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})