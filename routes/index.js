var express = require('express');
var router = express.Router();

var info = [
    {
        photo : "asseu.jpg",
        nom : "Pr ASSEU OLIVIER",
        responsabilite : "Directeur de la Recherche et de l'Innovation Technologie"
    },
    {
        photo : "franklin.jpg",
        nom : "Dr KOUASSI FRANKLIN",
        responsabilite : "Coordinateur de la Cellule d'Innovation et de Developpement"
    },
    {
        photo : "diaby.jpg",
        nom : "Dr DIABY MOUSTAPHA",
        responsabilite : "Chef de service Recherche et Partenariats"
    },
    {
        photo : "abamba.jpg",
        nom : "Dr BAMBA   ALIOU",
        responsabilite : "Responsable UMRI Telecoms et Physique appliqués"
    },
    {
        photo : "brou.jpg",
        nom : "Dr BROU PACÔME",
        responsabilite : "Responsable UMRI Informatique et Mathématique"
    },
    {
        photo : "pandry.png",
        nom : "Dr PANDRY GISLAIN",
        responsabilite : "Responsable du suivie des projets"
    },
    {
        photo : "justine.jpg",
        nom : "M. KONATE JUSTINE",
        responsabilite : "Secretaire de Direction de la Cellule d'innovation et de Développement"
    }
]

router.get('/', function(req, res, next) {

    res.render('accueil/index', { title: 'CID | Accueil',logo:"< | >", host: req.hostname, info : info});

});

router.get('/inscription/etudiant', function(req, res, next) {

    res.render('inscription/etudiant/index', { title: '<|> | Inscription',logo:"< | >", host: req.hostname});

});

module.exports = router;