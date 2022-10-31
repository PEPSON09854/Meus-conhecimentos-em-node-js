import express from 'express'
import path from 'path'

const port = 3000
const app = express()
const __dirname = path.resolve()
const defautPath = path.join(__dirname, 'templates')

app.use(express.urlencoded({extended: true}))//faz parte do POST

app.use(express.json())//faz parte do 

app.get('/users/cadastro', (req, res) => {
    res.sendFile(`${defautPath}/form.html`)//faz parte do POST
})

app.post('/users/save', (req, res)=>{//metodo POST
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuário é ${name} e sua idade é ${age} `)
    res.sendFile(`${defautPath}/form.html`)
})


app.get('/', (req, res) => {
    res.sendFile(`${defautPath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})