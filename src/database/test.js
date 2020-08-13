const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue =  {
        name: 'Guilherme Ciano',
        avatar: 'https://avatars0.githubusercontent.com/u/68287307?s=460&u=621010a7e34db51fe9ecadcf69c3bab62016425a&v=4',
        whatsapp: '00000000000',
        bio: 'Professor de Química',
    }
    classValue = {
        subject: 'Química',
        cost: '35',
        // o proffy id virá do BD
    }
    classScheduleValues = [
        // class id virá pelo BD
        {
            weekday: 1,
            time_from: 720,
            time_to: 1320
        },
        {
            weekday: 3,
            time_from: 520,
            time_to: 1020
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar dados
    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // classes de um determinado proffy e os dados dele

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    
    const selectClassesSchedules = await db.all(`
        SELECT class_schedules.*
        FROM class_schedules
        WHERE class_schedules.class_id = "1"
        AND class_schedules.weekday = "1"
        AND class_schedules.time_from <= "520"
        AND class_schedules.time_to > "520"
        `)

    console.log(selectClassesSchedules)

    // const selectedAllClassesAndProffys = await db.all()

})