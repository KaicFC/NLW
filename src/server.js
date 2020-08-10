//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


// Configurar nunjucks (template Engine)
const nunjucks = require("nunjucks")
const { urlencoded } = require('express')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuraçã odo servidor
server
//Receber os dados do req.body
.use(urlencoded({ extended: true}))
// Configurar arquivos estáticos
.use(express.static("public"))
// COnfigurar rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) 
//Start do servidor
.listen(5500)

