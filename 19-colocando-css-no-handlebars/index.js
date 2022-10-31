import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'

 

const app = express()
const __dirname = path.resolve()
const hbs = exphbs.create({
    partialsDir: ['views/partials']//configurando o diretório dos partials
})

// setup/sintaxe de instalação do hendlebars.
app.engine('handlebars', hbs.engine)//declaração do tipo de template-engine, nesse caso é o handlebars
app.set('view engine', 'handlebars')//inserindo na view o handlebars

app.use(express.static(path.join(__dirname, '/public')))/*criando um middleware 
para adicionar arquivos staticos como css e imagens que ficará na pasta public  */


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

app.get('/post', (req, res)=>{
    const post = {
        title: 'Node.js',
        category: "JavaScript",
        body: 'Curso de node vai te ajudar com o desenvolvimento back-end',
        comments: 3,
    }

    res.render('blog', {post})
})

app.get('/blog', (req, res)=>{

    const posts = [
        {
            title: 'Node.js',
            category: "JavaScript",
            body: 'Curso de node vai te ajudar com o desenvolvimento back-end',
            comments: 3,
        },
        {
            title: 'Java',
            category: "Boot-strap",
            body: 'Curso de java vai te ajudar a aprender um framework',
            comments: 10,
        },
        {
            title: 'PHP',
            category: "Laravel",
            body: 'Curso de PHP vai te ajudar a aprender Laravel um framework incrivel',
            comments: 7,
        }
    ]
    res.render('post', {posts})
})




app.listen(3000)
