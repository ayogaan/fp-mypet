const Pet = require("../models/Pet")
exports.allPet = (req,res)=>{
    Pet.find().then(pet=>{
        return res.status(200).send(pet);
    }).catch(err=>{
        return res.status(500).send(err);
    });
}
exports.allPetBySlug = (req,res) =>{    
    Pet.find({species: req.params.idSlug}).then(pet=>{
        return res.status(200).send(pet);
    }).catch(err=>{
        return res.status(500).send(err);
    });
}
exports.create = async(req, res) =>{
    let pet = {};
    const {name, gender, bornyear, isvaccinated, description, owner, species, gallery} = req.body;
    pet.name = name;
    pet.gender = gender;
    pet.bornyear = bornyear;
    pet.isvaccinated = isvaccinated;
    pet.description = description;
    pet.owner = req.uid.id;
    pet.species = species;
    pet.gallery = gallery;
    let newPet = new Pet(pet);
    await newPet.save();
    res.json(newPet);
}
exports.delete = async(req,res)=>{
    await Pet.deleteOne({_id: req.params.id}).then(ok=>{
        return res.status(204).send();
     }).catch(err=>{
        return res.status(500).send(err);
     });
}
exports.petById = async(req,res)=>{
    await Pet.findOne({_id:req.params.id}).then(pet=>{
        return res.status(200).send(pet);
    }).catch(err=>{
        return res.status(500).send(err);
    });
}
exports.mypet = async(req,res)=>{
    await Pet.find({owner:req.uid.id}).then(pet=>{
        return res.status(200).send(pet);
    }).catch(err=>{
        return res.status(500).send(err);
    })
}
exports.edit =(req, res)=>{}