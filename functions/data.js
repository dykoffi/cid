const { Projet } = require('./db')
const { Club } = require('./db')
const { Team } = require('./db')
const { Member } = require('./db')
const { Responsable } = require('./db')


const Clubs = Club.bulkCreate(
    [
        {
            nom: "Club Informatique",
            details: ``,
            type: "Technologie",
            photo: "club.jpg"
        },
        {
            nom: "J3E",
            details: `La Junior Entreprise de l'ESATIC est une association d'étudiants qui travaillent dans le but de fournir au grandes structures une aide technologique par des prototypes de produits innovants. Elle fonctionne comme une entreprise avec un president, un secretaire et un trésorier.`,
            type: "Entreprise",
            photo: "Cid.jpg"
        },
        {
            nom: "Club Electronique",
            details: ``,
            type: "Technologie",
            photo: "arduinode1.jpeg"
        }
    ]
)
const Members = Member.bulkCreate(
    [
        { nom: "Koffi Kouassi Edy", tel: "51 88 64 78", mail: "koffiedy@gmail.com", role: "responsable " },
        { nom: "Bessan Eugène", tel: "51 88 64 78", mail: "eugene@gmail.com", role: " " },
        { nom: "Dabone", tel: "51 88 64 78", mail: "dabone@gmail.com", role: " " },
        { nom: "Bini Samuel", tel: "51 88 64 78", mail: "yaobini@gmail.com", role: " " },
        { nom: "Tiemele Eliud", tel: "51 88 64 78", mail: "Teliud@gmail.com", role: " " },
        { nom: "Kouassi Koffi Cheick", tel: "51 88 64 78", mail: "cheick@gmail.com", role: " " },
        { nom: "Mohamed Zidane", tel: "51 88 64 78", mail: "Mzidane@gmail.com", role: " " },
        
    ]
)

//const Teams = Team.bulkCreate(
//     []
// )
// const Responsables = Responsable.bulkCreate(
//     []
// )
// const Projets = Projet.bulkCreate(
//     []
// )