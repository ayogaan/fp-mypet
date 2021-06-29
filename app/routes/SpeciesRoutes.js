module.exports = (app) =>{
    const specieses = require("../controllers/SpeciesController");
    app.delete('/specieses/:id', specieses.delete)
    app.get('/specieses',specieses.allSpecieses)
    app.get('/specieses/:slug',specieses.getBySlug)
    app.post('/specieses', specieses.create)
}
