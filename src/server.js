// Dados
const proffys = [
    { 
    name: "Kaic Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/61243635?s=460&u=0e4d0391dbf109d558bfd4f53129e65403e9f3bd&v=4",
    whatsapp: "1199859589",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"Química",
    cost:"20",
    weekday:"[0]",
    time_from:"[122]",
    time_to:"[1300]" 
    },
    {
    name: "Albert Einstein",
    avatar: "https://miro.medium.com/max/4652/1*xqr2kki-VvZ-S2cGlNzDLw.jpeg",
    whatsapp: "1199859589",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"Química",
    cost:"20",
    weekday:"[1]",
    time_from:"[122]",
    time_to:"[1300]" 
    },
    {
        name: "Sheldon",
        avatar: "https://pbs.twimg.com/profile_images/365042597/sheldon_400x400.jpg",
        whatsapp: "1199859589",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost:"20",
        weekday:"[1]",
        time_from:"[122]",
        time_to:"[1300]" 
        }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}


function pageLandin(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    if(isNotEmpty){
    
        data.subject = getSubject(data.subject)

        // Add data na lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

// Configurar nunjucks (template Engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuraçã odo servidor
server
// Configurar arquivos estáticos
.use(express.static("public"))
// COnfigurar rotas de aplicação
.get("/", pageLandin)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Start do servidor
.listen(5500)

