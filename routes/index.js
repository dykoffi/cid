var express = require('express');
var router = express.Router();
var data = require("../functions/data")
var Cloudant = require('@cloudant/cloudant')
var cloudant = Cloudant("https://042093a3-40d2-45d8-b0d5-25696e87b30f-bluemix:2e29e11143ee5190718d12be2a35ad9afc17f395048113c3a09d1ef66e270662@042093a3-40d2-45d8-b0d5-25696e87b30f-bluemix.cloudantnosqldb.appdomain.cloud", (err, cloudant, pong) => {
    if (err) {
        return console.log("Failed to initialize Cloudant : " + err.message)
    }
})
var cid_projets = cloudant.use('cid_projets')
var cid_responsables = cloudant.use('cid_responsables')
const cid_clubs = cloudant.use('cid_clubs')

router.get('/', function (req, res, next) {
    let projets = {
        selector: {
            _id: {
                "$gt": null
            }
        }
    }
    let profs = {
        selector: {
            _id: {
                "$gt": null
            }
        }
    }
    let clubs = {
        selector: {
            _id: {
                "$gt": null
            }
        }
    }
    cid_projets.find(projets).then((projets) => {
        cid_responsables.find(profs).then((profs) => {
            cid_clubs.find(clubs).then((clubs) => {
                res.render('accueil/index', { title: 'CID | Accueil', projets: projets.docs, clubs: clubs.docs, profs: profs.docs, host: req.hostname });
            })
        })
    })


});

router.get('/clubs/:id', function (req, res, next) {
    let club = {
        selector: {
            _id: {
                "$eq": req.params.id
            }
        }
    }
    cid_clubs.find(club).then((club) => {
        console.log(club)
        res.render('accueil/club_details', { title: 'CID | Club', club: club.docs[0], host: req.hostname });
    })
});

router.get('/projets/:id', function (req, res, next) {
    let projet = {
        selector: {
            _id: {
                "$eq": req.params.id
            }
        }
    }
    cid_projets.find(projet).then((projet) => {
        console.log(projet)
        res.render('accueil/projet_details', { title: 'CID | Projets', projet: projet.docs[0], host: req.hostname });
    })
});

module.exports = router;