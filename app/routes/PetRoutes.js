module.exports = (app)=>{
    const auth = require("../middleware/Auth")
    const pets = require("../controllers/PetController")
    app.get('/pets',pets.allPet)
    app.get('/pets/me', auth,pets.mypet)
    app.get('/pets/:idSlug',pets.allPetBySlug)
    app.get('/pets/:id', pets.petById)
    app.post('/pets', auth, pets.create)
    app.delete('/pets/:id',pets.delete)
}

