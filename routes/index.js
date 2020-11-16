const express = require('express');
const router = express.Router();
const { Projet } = require('../functions/db')
const { Club } = require('../functions/db')
const { Responsable } = require('../functions/db')


router.get('/', function (req, res, next) {
    Club.findAll()
        .then(data => res.render('accueil/index', { title: 'CID | Accueil', projets: [], clubs: data, profs: [], host: req.hostname }))
});

router.get('/clubs/:id', function (req, res, next) {
    Club.findByPk(req.params.id)
        .then(data => res.render('accueil/club_details', { title: 'CID | Club', club: data, host: req.hostname }))
});

router.get('/projets/:id', function (req, res, next) {
    cid_projets.find(projet).then((projet) => {
        console.log(projet)
        res.render('accueil/projet_details', { title: 'CID | Projets', projet: projet.docs[0], host: req.hostname });
    })
});

module.exports = router;