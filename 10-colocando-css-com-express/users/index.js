import express from 'express'
import path from 'path'

const router = express.Router()
const __dirname = path.resolve()
const defautPath = path.join(__dirname, 'templates')

router.get('/cadastro', (req, res) => {
    res.sendFile(`${defautPath}/form.html`)//faz parte do POST
})

router.post('/save', (req, res)=>{//metodo POST
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuário é ${name} e sua idade é ${age} anos`)
    res.sendFile(`${defautPath}/form.html`)
})

export default  router