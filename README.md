# Meus conhecimentos em node.js 🎓

### Introdução

Nesse repositório contém meu aprendizado em Node.js. 

Desde da inicialização do projeto com ```npm init``` e construção da arquitetura MVC, instalaçao de módulos externos, construção de um servidor com os módulos nativos do node ou utilizando o framework Express. Também a criação de APIs e integração externas, teste de validações das rotas HTTP, integração com banco de dados relacionais e não relacionais utilizando ORMs ou ODM, utilização de templates engines como EJS e Handlebars para aplicação web completa.

## <img aling='center' alt= 'NODE JS' src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'/>

### Inicializando um projeto Node.js

Node.js é uma plataforma JavaScript de código aberto que permite aos desenvolvedores construir aplicações de rede escaláveis e de alta performance. Este README irá mostrar como inicializar um projeto Node.js.

### Pré-requisitos

Antes de começar, você precisará ter o Node.js instalado em sua máquina. Você pode baixar e instalar a última versão do Node.js no site oficial https://nodejs.org.

### Criando um novo projeto

1.  Crie uma nova pasta para o seu projeto.
2.  Abra o terminal e navegue até a pasta do projeto.
3.  Execute o comando ```npm init``` para inicializar o projeto e criar um arquivo ```package.json``` .
4.  Preencha as informações solicitadas, como nome do projeto, descrição, autor, etc.

### Executando o projeto

1.  Crie um arquivo chamado index.js na pasta do projeto.
2.  Adicione o seguinte código ao arquivo ```index.js```
    
```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando na http://${hostname}:${port}/`);
});

```  

1. Execute o comando ```node index.js ``` no terminal para iniciar o servidor.
2. Abra o seu navegador e acesse http://localhost:3000 para ver a saída "Hello World".

### Gerenciando pacotes

Node.js vem com o gerenciador de pacotes ```npm``` , que permite instalar e gerenciar pacotes adicionais para o seu projeto. Para instalar um pacote, use o comando npm install nome_do_pacote. Por exemplo, para instalar o pacote express, use o comando ```npm install express```.

## Módulos Nativos do Node.js

Node.js fornece uma série de módulos nativos para ajudar os desenvolvedores a construir aplicativos web escaláveis e de alta performance. Vou apresentar alguns dos módulos nativos mais comuns do Node.js.

### HTTP

O módulo ```http``` fornece uma API para criar servidores e clientes HTTP. Ele permite aos desenvolvedores criar servidores web simples e gerenciar as solicitações e respostas HTTP.

### File System

O módulo fs fornece uma API para lidar com arquivos e pastas no sistema de arquivos do sistema. Ele permite aos desenvolvedores ler, escrever e gerenciar arquivos e pastas.

### Exemplo:

```
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

```

### Crypto

O módulo ```crypto``` fornece uma variedade de algoritmos de criptografia para proteger informações confidenciais. Ele permite aos desenvolvedores criar e verificar assinaturas digitais, cifrar e decifrar dados e gerar números aleatórios seguros.

### Exemplo:

```
const crypto = require('crypto');
const secret = 'mysecretkey';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
```
### Stream

O módulo ```stream``` fornece uma API para lidar com fluxos de dados. Ele permite aos desenvolvedores manipular dados de forma eficiente e escalável, como lidar com grandes arquivos ou dados de rede.

### Exemplo:

```
const fs = require('fs');
const stream = fs.createReadStream('file.txt');
stream.on('data', (chunk) => {
    console.log(chunk.toString());
});
stream.on('end', () => {
    console.log('Finished reading file');
});

```

### Path

O módulo ```path``` fornece uma API para lidar com caminhos de arquivos e pastas. Ele permite aos desenvolvedores trabalhar com caminhos de arquivos e pastas de forma portável em diferentes sistemas operacionais.

### Exemplo:

```
const path = require('path');
const filePath = path.join(__dirname, 'file.txt');
console.log(filePath);

```

### URL

O módulo ```url``` fornece uma API para lidar com URLs. Ele permite aos desenvolvedores analisar e construir URLs de forma fácil e consistente.

### Exemplo:

```
const url = require('url');
const myUrl = url.parse('https://www.example.com/path?query=value', true);
console.log(myUrl);

```

### Query Strings

O módulo ```querystring``` fornece uma API para lidar com strings de consulta. Ele permite aos desenvolvedores analisar e construir strings de consulta de forma fácil e consistente.

### Exemplo:

```
const querystring = require('querystring');
const myQuery = querystring.parse('name=value&name2=value2');
console.log(myQuery);

```

### Eventos

O módulo ```events``` fornece uma API de gerenciamento de eventos. Ele permite aos desenvolvedores criar e gerenciar eventos personalizados, o que é útil para aplicativos de tempo real e outros tipos de aplicativos assíncronos.

### Exemplo:

```
const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (message) => {
    console.log(message);
});
eventEmitter.emit('customEvent', 'Hello World');

```
Com a grande variedade de módulos nativos disponíveis, os desenvolvedores podem facilmente construir aplicativos web ricos e funcionais sem precisar de bibliotecas externas.

## Rotas em Node.js

As rotas são uma parte importante de qualquer aplicação web, pois permitem que os usuários acessem diferentes páginas e recursos do seu aplicativo. No Node.js, as rotas são geralmente gerenciadas usando uma biblioteca ou framework de roteamento.


### Utilizando o Router do próprio Node.js

O Node.js também fornece uma classe de roteamento embutida chamada Router. Essa classe pode ser usada para gerenciar rotas sem precisar de uma biblioteca externa. 

### Exemplo de como usar o Router do Node.js:

```
const http = require('http');
const url = require('url');
const router = new Map();

router.set('/', (req, res) => {
    res.end('Hello World');
});

router.set('/about', (req, res) => {
    res.end('About Us');
});

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    const handler = router.get(pathname);
    if (handler) {
        handler(req, res);
    } else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

server.listen(3000,

```

O exemplo de código mostra como usar a classe Router embutida do Node.js para gerenciar rotas. Ele importa as bibliotecas necessárias para criar um servidor e trabalhar com URLs, cria uma instância de Map chamada router, adiciona duas rotas à nossa instância de Map, cria um servidor e espera por requisições. As rotas e suas respectivas funções de callback são adicionadas ao objeto Map para serem chamadas quando uma rota correspondente é acessada.

## <img aling='center' alt= 'EXPRESS' src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge'/>

Express é um framework web para Node.js que facilita a criação de aplicativos web e APIs. Ele fornece uma série de recursos para lidar com rotas, middleware e outras necessidades comuns em aplicativos web.
Instalação

Para instalar o Express, você precisa ter o Node.js instalado. Em seguida, você pode instalar o Express usando o gerenciador de pacotes npm:

``` npm install express ```

### Como usar

Aqui está um exemplo simples de como criar um servidor HTTP usando o Express:

```
 const express = require('express');
 const app = express();

 app.get('/', (req, res) => {
    res.send('Hello World!');
 });

 app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
 });
 
```  
   
Neste exemplo, estamos importando o Express usando o require(), criando uma nova instância do aplicativo Express e definindo uma rota para a raiz ('/') que responde com "Hello World!". Em seguida, estamos fazendo o servidor ouvir a porta 3000.

### Rotas

O Express oferece suporte a vários métodos HTTP, como ```get(), post(), put() e delete()```,que permitem definir rotas para lidar com requisições HTTP correspondentes.

### Middleware

O Express também oferece suporte a middleware, que é um conjunto de funções que podem ser executadas antes de uma rota ser chamada. Isso permite que você execute tarefas comuns, como autenticação e validação de dados, antes de lidar com a rota específica.

### Exemplo

````
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

````

Para obter mais informações e recursos, consulte a documentação oficial em https://expressjs.com


# <img aling='center' alt= 'MONGODB' src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'/>

Mongoose é uma biblioteca para Node.js que fornece uma maneira fácil de trabalhar com a base de dados MongoDB. Ele fornece uma camada de abstração sobre a API do MongoDB, permitindo que você crie esquemas para seus dados e execute operações de CRUD (criar, ler, atualizar e excluir) de forma simplificada.

### Instalação

Para instalar o Mongoose, você precisará ter o Node.js e o MongoDB instalados. Em seguida, você pode instalar o Mongoose usando o gerenciador de pacotes npm:

```npm install mongoose```

### Uso básico

Aqui está um exemplo simples de como se conectar a um banco de dados MongoDB e criar um esquema de usuário:

```
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

```

Neste exemplo, estamos importando o Mongoose usando o require() e usando o método connect() para se conectar ao banco de dados mydb em mongodb://localhost. Em seguida, estamos criando um esquema de usuário com os campos name e age e criando um modelo de usuário a partir desse esquema.
Operações de CRUD

Uma vez que você tenha criado um modelo, você pode executar operações de CRUD com ele. Aqui estão alguns exemplos:

```
// Create
const user = new User({ name: 'John', age: 30 });
user.save();

// Read
User.find({ name: 'John' }, (err, users) => {
  console.log(users);
});

// Update
User.updateOne({ name: 'John' }, { age: 31 }, (err) => {
  if (!err) {
    console.log('Success');
  }
});

// Delete
User.deleteOne({ name: 'John' }, (err) => {
  if (!err) {
    console.log('Success');
  }
});

```
Para obter mais informações e recursos, consulte a documentação oficial https://mongoosejs.com

## <img src='https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue'/>

Sequelize é uma biblioteca de mapeamento de objeto-relacional (ORM) para Node.js. Ele permite que os desenvolvedores trabalhem com bancos de dados relacionais, como MySQL, PostgreSQL e SQLite, usando uma API baseada em JavaScript. Isso significa que, em vez de escrever consultas SQL diretamente, os desenvolvedores podem trabalhar com dados usando objetos JavaScript.
Instalação

Para começar a usar o Sequelize, você precisará instalá-lo usando o npm:

```npm install sequelize```

### Configuração

Depois de instalado, você precisará configurar sua conexão com o banco de dados. Isso inclui informações como o nome do banco de dados, o nome de usuário e a senha. Aqui está um exemplo de como fazer isso usando SQLite:

````
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});

````

### Definição de modelos

Depois de configurar a conexão com o banco de dados, você pode começar a definir modelos. Um modelo representa uma tabela no banco de dados e define os campos e tipos de dados que a tabela deve conter. Aqui está um exemplo de como definir um modelo de usuário:

````
const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});
````

### Operações de banco de dados

Depois de definir seus modelos, você pode usar o Sequelize para realizar operações de banco de dados, como criar, ler, atualizar e excluir dados. Aqui estão alguns exemplos de como fazer isso:

```
// Criar um novo usuário
User.create({
    name: 'John Doe',
    email: 'johndoe@example.com'
});

// Buscar todos os usuários
User.findAll().then((users) => {
    console.log(users);
});

// Atualizar um usuário
User.update({
    name: 'Jane Doe'
}, {
    where: { id: 1 }
});

// Excluir um usuário
User.destroy({
    where: { id: 1 }
});
```

O Sequelize é uma ferramenta poderosa para trabalhar com bancos de dados relacionais no Node.js. Ele permite que os desenvolvedores trabalhem com dados usando uma API baseada em JavaScript, tornando mais fácil e intuitivo trabalhar com bancos de dados. Além disso, ele fornece uma ampla variedade de recursos, como suporte a transações, relacionamentos entre tabelas e validação de dados, que tornam mais fácil construir aplicativos robustos e escaláveis. Ao usar o Sequelize, os desenvolvedores podem se concentrar mais no desenvolvimento do aplicativo em si, em vez de se preocupar com os detalhes de como trabalhar com o banco de dados.

Para mais informações visite a documentação em https://sequelize.org

## Handlebars

Handlebars é um motor de template para JavaScript que ajuda a tornar o desenvolvimento de aplicativos web mais fácil e rápido. Ele permite que os desenvolvedores criem templates de HTML reutilizáveis e os preencham com dados dinâmicos. Isso significa que, em vez de escrever código HTML repetitivo, os desenvolvedores podem usar Handlebars para definir seções de HTML que podem ser preenchidas com diferentes conjuntos de dados.
Instalação

Para começar a usar o Handlebars, você precisará instalá-lo usando o npm:

```npm install handlebars```

### Definição de templates

Depois de instalado, você pode criar templates de HTML usando a sintaxe de Handlebars. A sintaxe de Handlebars permite que você use variáveis, loops e condicionais dentro de suas templates. Aqui está um exemplo de um template de Handlebars:

````
<div>
    <h1>{{title}}</h1>
    <ul>
    {{#each items}}
        <li>{{this}}</li>
    {{/each}}
    </ul>
</div>
````

### Compilação

Depois de criar seus templates, você precisará compilá-los usando o Handlebars. Isso pode ser feito usando a função compile do Handlebars. Aqui está um exemplo de como fazer isso:
````
const Handlebars = require('handlebars');
const template = Handlebars.compile(`
    <div>
        <h1>{{title}}</h1>
        <ul>
        {{#each items}}
            <li>{{this}}</li>
        {{/each}}
        </ul>
    </div>
`);
````

### Renderização

Depois de compilar um template, você pode usá-lo para renderizar dados. Isso é feito usando a função template() e passando os dados como um objeto.  

### Exemplo de como isso pode ser feito:

````
const data = {
    title: 'My List',
    items: ['item 1', 'item 2', 'item 3']
};
const html = template(data);
console.log(html);

Este exemplo irá imprimir:

<div>
    <h1>My List</h1>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
</div>
````

Handlebars é uma ferramenta muito útil para desenvolvedores web, pois permite criar templates de HTML reutilizáveis e os preencher com dados dinâmicos. Isso ajuda a tornar o desenvolvimento de aplicativos web mais fácil e rápido, além de aumentar a manutenibilidade do código. Ao usar Handlebars, os desenvolvedores podem se concentrar mais no desenvolvimento do aplicativo em si, em vez de se preocupar com a escrita de código HTML repetitivo.

Para saber mais sobre Handlebars visite a documentação em https://handlebars.com

## Arquitetura MVC em Node.js

MVC, ou Model-View-Controller, é uma arquitetura de software comum para desenvolvimento de aplicativos web. Ele divide a lógica do aplicativo em três camadas distintas: model, view e controller.

### Model

A camada de modelo é responsável por gerenciar os dados e a lógica de negócios do aplicativo. Ela pode se comunicar diretamente com o banco de dados e fornecer dados para a camada de visualização.

### View

A camada de visualização é responsável por exibir os dados para o usuário. Ela pode usar templates ou frameworks de renderização para exibir dados dinamicamente.

### Controller

A camada de controller é responsável por gerenciar as solicitações do usuário e comunicar-se com as camadas de modelo e visualização. Ele pode interpretar as solicitações do usuário, obter dados do modelo e passá-los para a visualização.

### Implementação

````
myapp/
├── controllers/
│   ├── usersController.js
├── models/
│   ├── users.js
├── views/
│   ├── users/
│   │   ├── index.hbs
│   │   ├── show.hbs
├── app.js
├── package.json
├── routes.js
└── README.md

````

1. ```controllers/:``` Contém os arquivos dos controladores, cada um responsável por lidar com as solicitações para uma determinada rota.
2. ``` models/:``` Contém os arquivos de modelos, cada um representando uma tabela no banco de dados e definindo os campos e tipos de dados.
3. ```views/:``` Contém os arquivos de visualização, que são templates de HTML que são preenchidos com dados dinâmicos e enviados ao navegador.
4. ```app.js/:``` Contém a configuração do aplicativo e as configurações do servidor.
5. ```package.json/:``` Contém informações sobre o aplicativo e suas dependências.
6. ```routes.js/:``` Contém as rotas do aplicativo e as configurações de roteamento.
7. ```README.md/:``` Contém informações sobre o projeto.


Existem várias maneiras de implementar a arquitetura MVC em Node.js. Alguns frameworks, como o Express.js, já incluem suporte para MVC e fornecem estruturas de pastas pré-definidas para cada camada. Outros frameworks, como o Sails.js, fornecem um conjunto completo de recursos MVC.

Além disso, é possível implementar MVC manualmente usando bibliotecas e ferramentas independentes, como Sequelize para a camada de modelo, Handlebars para a camada de visualização e um roteador de rotas para a camada de controller.

De qualquer forma, a implementação de MVC em Node.js permite a separação clara da lógica do aplicativo e melhora a manutenibilidade e escalabilidade do código.

## API (Application Programming Interface)

Uma API (Application Programming Interface) é um conjunto de regras e protocolos para acessar um aplicativo ou sistema. Ele permite que outros aplicativos se comuniquem com o sistema e acessem suas funcionalidades e dados.

### Autenticação e Autorização

A autenticação é o processo de garantir que o usuário seja quem diz ser, enquanto a autorização é o processo de garantir que o usuário tenha permissão para acessar determinados recursos ou realizar determinadas ações.

Existem várias maneiras de implementar a autenticação e autorização em uma API, como usar tokens JWT (JSON Web Token) ou usar sistemas de autenticação OAuth. É importante escolher uma abordagem que seja segura e escalável para o seu aplicativo.

### Documentação

Uma boa documentação é essencial para garantir que outros desenvolvedores possam entender e usar sua API de maneira eficaz. Isso inclui fornecer exemplos de código, descrições detalhadas dos recursos e endpoints disponíveis e informações sobre como usar a autenticação e autorização.

Existem ferramentas como o Swagger e o Postman que podem ser usadas para criar documentação automatizada e tornar mais fácil para outros desenvolvedores testarem sua API.

### Versionamento

É recomendável versionar sua API, isso permite que você faça alterações e adições sem afetar as aplicações que já a estão utilizando. Existem várias maneiras de versionar uma API, como adicionar a versão no caminho da URL (por exemplo, /v1/users) ou adicionar a versão como um cabeçalho da solicitação.

### Suporte a diferentes formatos

Algumas vezes, é necessário suportar diferentes formatos de dados, como JSON e XML. Isso pode ser feito usando bibliotecas de suporte a diferentes formatos ou configurando o Express para responder com o formato correto com base no cabeçalho da solicitação.

### Testes

É importante escrever testes automatizados para sua API para garantir que ela esteja funcionando corretamente e para facilitar a detecção de bugs no futuro. Existem várias ferramentas de teste disponíveis para Node.js, como o Mocha e o Jest.

Construir uma API com Node.js e Express é uma tarefa simples e poderosa, mas é importante levar em consideração questões de segurança, escalabilidade e facilidade de uso. Usando as boas práticas mencionadas acima, você pode construir uma API robusta e fácil de usar para seu aplicativo.







