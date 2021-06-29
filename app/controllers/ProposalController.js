const Proposal = require("../models/Proposal")

exports.create = async(req, res) =>{
    let proposal = {};
    const {capability, user_id, pet_id} = req.body;
   
    proposal.capability = capability;
    proposal.user_id = req.uid.id;
    proposal.pet_id = pet_id;

    let newProposal = new Proposal(proposal);
    await newProposal.save();
    res.json(newProposal);
}
exports.delete = async(req,res)=>{
    await Proposal.deleteOne({_id: req.params.id}).then(ok=>{
        return res.status(204).send();
     }).catch(err=>{
        return res.status(500).send(err);
     });
}
exports.ByPetId = async(req,res)=>{
    await Proposal.find({pet_id:req.params.id}).populate("user_id").then(proposal=>{
        console.log(proposal);
        return res.status(200).send(proposal);
    }).catch(err=>{
        return res.status(500).send(res);
    });
}

exports.ByUserId = async(req,res)=>{
    await Proposal.find({user_id:req.params.id}).then(proposal=>{
        return res.status(200).send(proposal);
    }).catch(err=>{
        return res.status(500).send(res);
    });
}