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
const clubs = data.clubs
const profs = data.profs


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

    cid_projets.find(projets).then((projets)=>{

        cid_responsables.find(profs).then((profs)=>{        
            res.render('accueil/index', { title: 'CID | Accueil', logo: "< | >", projets: projets.docs, clubs: clubs, profs: profs.docs, host: req.hostname });
        })
    })
   

});

router.get('/entreprise', function (req, res, next) {
    res.render('accueil/entreprise', { title: 'CID | Accueil', logo: "< | >", host: req.hostname });
});


module.exports = router;