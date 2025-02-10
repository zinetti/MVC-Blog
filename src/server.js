const express = require('express')
const exp = require('node:constants')
const path = require('node:path')
const router = require('./routes')

const app = express()

//Configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Configuraçoes de arquivos estaticos
app.use(express.static('public'))

//Configuracao para ler dados da requisicao
app.use(express.urlencoded({extended: true}))

//Rotas da aplicação
app.use(router)


//Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server rodando')
})