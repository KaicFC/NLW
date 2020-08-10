const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Kaic Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/61243635?s=460&u=0e4d0391dbf109d558bfd4f53129e65403e9f3bd&v=4",
        whatsapp: "1199859589",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a  vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost:"20",
    }

    classScheduleValues = [
    {
    weekday: 1,
    time_from: 721,
    time_to: 1221
    },
    {
    weekday: 0,
    time_from: 520,
    time_to: 1221
    }
]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar dados proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    //Consultar as classes e professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `) 

    const selectClassesSchedules = await db.all (`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= 520
        AND class_schedule.time_to > 520
    `)    

    

})