const Species = require("../models/Species")
exports.allSpecieses = (req, res)=>{
    Species.find()
    .then(species => {
        return res.status(200).send(species);
        
    }).catch(err => {
        return res.status(500).send(err);
    });
}

exports.getBySlug =async (req,res)=>{
    await Species.findOne({slug: req.params.slug}).then( species =>{
        return res.status(200).send(species);
        
    }).catch(err=>{
        return res.status(500).send(err);
    })
}

exports.create = async (req,res)=>{
    let species = {};
    const {name, slug} = req.body    
    species.name = name;
    species.slug = slugify(name);
    let newSpecies = new Species(species);
    await newSpecies.save();
    res.json(species);
}

exports.delete =async (req, res)=>{
    await Species.deleteOne({_id: req.params.id}).then(ok=>{
        return res.status(204).send();
     }).catch(err=>{
        return res.status(500).send(err);
     });
}