import express from 'express'
import exphbs from 'express-handlebars'


const app = express()


// setup/sintaxe de instalação do hendlebars.
app.engine('handlebars', exphbs.engine())//declaração do tipo de template-engine, nesse caso é o handlebars
app.set('view engine', 'handlebars')//inserindo na view o handlebars


//renderizando a view 'home' com o método render()
app.get('/', (req, res)=>{

    const user = {//declarando uma variavel e inicializando ela com o valor de um objeto
        name: 'Pepson',
        surname:'Anderson'
    }

    const auth = true /*criando uma variavel que vai servir para autenticar um usuário
     no sistema, para utilizala temos que criar uma condicional la no aquivo home.handlebars
     pra podemos ter acesso ao arquivo dashboard.handlebars que está sendo renderizado na linha 30 abaixo*/

    const approvedAuth = false /*Aqui verifica se está cadastrado ou não
     um outro exemplo de condicional, só que desta vez utilizando o if else*/ 

    res.render('home' , {user, auth, approvedAuth})/*observe que acrescentei a variavel {{auth}}
    entre as chaves  que esta como parametro no metodo render() */
})

//redenrizando a view 'dashboard' com o metodo render()
app.get('/dashboard', (req, res)=>{
    res.render('dashboard')
})



app.listen(3000)
