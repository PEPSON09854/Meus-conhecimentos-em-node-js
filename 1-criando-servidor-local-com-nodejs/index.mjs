import { createServer } from 'http'
import  {readFile}  from 'fs'

const port = 3000

const server = createServer((req, res)=>{
        readFile('index.html', (err, data)=>{
            res.writeHead(200, { 'Contenty-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})