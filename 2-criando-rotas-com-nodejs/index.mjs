import { createServer } from 'http'
import  {readFile, writeFile}  from 'fs'
import { parse } from 'url'

const port = 3000

const server = createServer((req, res)=>{
    
    const name = parse(req.url, true).query.name

    if(!name){

        readFile('index.html', (err, data)=>{
            res.writeHead(200, { 'Contenty-Type': 'text/html' })
            res.write(data)
            return res.end()
        })

    }else{
        writeFile('arquivo.txt', name, (err, data)=>{
            res.writeHead(302, { Location: '/'})
        })

        return res.end()
    }
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})