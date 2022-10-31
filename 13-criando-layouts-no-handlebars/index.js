import express from 'express'
import exphbs from 'express-handlebars'

const app = express()

// setup/sintaxe de instalação do hendlebars.
app.engine('handlebars', exphbs.engine())//declaração do tipo de template-engine, nesse caso é o handlebars
app.set('view engine', 'handlebars')//inserindo na view o handlebars

//renderizando a view 'home' com o método render()
app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(3000)
