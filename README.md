# Meus conhecimentos em node.js 🎓

### Introdução

Nesse repositório contém meu aprendizado em Node.js, desde da construção da arquitetura MVC, instalaçao de módulos externos, construção de um servidor com os módulos nativos do node 
ou utilizando o framework Express. Também a criação e integração com APIs externas, teste de rotas com verbos HTTP, integração com banco de dados relacionais 
e não relacionais utilizando ORMs ou ODM, utilização de templates engines como EJS e Handlebars para aplicação web completa.

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

# <img aling='center' alt= 'EXPRESS' src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge'/>

O Express.js é uma das bibliotecas de roteamento mais populares no Node.js. Ele fornece uma interface simples e fácil de usar para gerenciar rotas. Para começar a usar o Express.js, primeiro você deve instalá-lo usando o npm:

```npm install express```

Em seguida, você pode importar o Express em seu arquivo de inicialização e configurar as rotas:

```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

app.get('/about', (req, res) => {
    res.send('Sobre nós');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
});

```

Neste exemplo, estamos configurando duas rotas: a raiz (/) e a rota "/about". Quando o usuário acessa cada rota, a função callback correspondente é chamada e uma resposta "Olá Mundo!" ou "Sobre nós" é enviada de volta ao navegador.

Além das rotas ```"GET"``` você pode usar também rotas ```"POST", "PUT" e "DELETE"```, basta mudar o método "get" para o método desejado.

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


