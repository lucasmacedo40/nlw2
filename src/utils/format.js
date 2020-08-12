const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Fisica",
    "Geografia",
    "Historia",
    "Matemática",   
    "Portugês",
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

function getSubjects(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubjects,
    convertHoursToMinutes
}