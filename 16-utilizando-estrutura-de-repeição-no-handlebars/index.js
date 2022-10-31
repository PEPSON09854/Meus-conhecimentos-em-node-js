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

    const auth = true /* criando uma variavel que vai servir para autenticar um usuário
     no sistema, para utilizala no arquivo home.handlebars dentro de uma condicional, 
     precisamos passa-la entre chaves como segundo parametro do metodo render abaixo no 
     escopo do metodo get() pra podemos ter acesso ao arquivo dashboard.handlebars que */

    const approvedAuth = false /* Aqui verifica se está cadastrado ou não
     um outro exemplo de condicional, só que desta vez utilizando o if else */ 

    res.render('home' , {user, auth, approvedAuth})/* observe que acrescentei a variavel {{auth}}
    entre as chaves  que esta como parametro no metodo render() para ser renderizada junto das outras 
    variaveis no arquivo home.handlebars */
})

//redenrizando a view 'dashboard' com o metodo render()
app.get('/dashboard', (req, res)=>{
    /*aqui vou contruir uma lista de 
    frutas para exemplifiar a estrutura de 
    repetição no arquivo dashboard.handlebars*/
    const items = ['Maçã', 'Pera', 'Banana', 'Uva']

    res.render('dashboard', {items})/*sempre em cada rota nova
    se houver variaveis em seu escopo iremos passa-las entre chaves 
    como segundo paramentro do metodo render()*/
})




app.listen(3000)
