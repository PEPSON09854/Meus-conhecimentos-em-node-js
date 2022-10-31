import express from 'express'
import path from 'path'

const port = 3000
const app = express()
const __dirname = path.resolve()
const defautPath = path.join(__dirname, 'templates')

const checkLogin = (req, res, next) =>{
    req.authStatus = true

    if(req.authStatus){
        console.log('Logado com sucesso!') 
        next()
    }else{
        console.log('Login inválido!')
        next()
    }
}

app.use(checkLogin)//middleware criado

app.get('/', (req, res) => {
    res.sendFile(`${defautPath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})