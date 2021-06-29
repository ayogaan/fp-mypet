module.exports = (app)=>{
    const Agreements = require("../controllers/AgreementController")
    app.post('/agreement',Agreements.create)
    app.get('/agreement/:id',Agreements.byPetId)
    app.delete('/agreement/:id', Agreements.delete)
}

