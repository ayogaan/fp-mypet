const Agreement = require("../models/Agreement")

exports.create = async(req, res) =>{
    let agreement = {};
    const {questions, pet_id} = req.body;
    agreement.questions = questions;
    agreement.pet_id = pet_id;
    let newAgreement = new Agreement(agreement);
    await newAgreement.save();
    res.json(newAgreement);
}
exports.delete = async(req,res)=>{
    await Agreement.deleteOne({_id: req.params.id}).then(ok=>{
        return res.status(204).send();
     }).catch(err=>{
        return res.status(500).send(err);
     });
}
exports.byPetId = async(req,res)=>{
    await Agreement.findOne({pet_id:req.params.id}).then(agreement=>{
        return res.status(200).send(agreement);
    }).catch(err=>{
        return res.status(500).send(res);
    });
}