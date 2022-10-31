import express from 'express'
import exphbs from 'express-handlebars'

const app = express()

// setup/sintaxe de instalação do hendlebars.
app.engine('handlebars', exphbs.engine())//declaração do tipo de template-engine, nesse caso é o handlebars
app.set('view engine', 'handlebars')//inserindo na view o handlebars

//renderizando a view 'home' com o método render()
app.get('/', (req, res)=>{

    const user = {
        name: 'Pepson',
        surname:'Anderson'
    }

    res.render('home' , {user})/*acrescenta-se como parametro do metodo render
     um objeto {nome das variaveis} passando para chave o valor das variaveis do escopo do metodo get.
     Agora podemos usar essa variavél {{user}} lá no arquivo home.handlebars e assim passando esse valor para view*/
})

app.listen(3000)
