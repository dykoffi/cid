var express = require('express');
var router = express.Router();
var data = require("../functions/data")
const projets = data.projets
const clubs = data.clubs
const profs = data.profs


router.get('/', function(req, res, next) {

    res.render('accueil/index', { title: 'CID | Accueil',logo:"< | >",projets: projets,clubs:clubs,profs:profs, host: req.hostname});

});


module.exports = router;