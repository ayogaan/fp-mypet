module.exports = (app)=>{
    const Proposal = require("../controllers/ProposalController")
    const auth = require("../middleware/Auth")
    app.post('/proposal',auth,Proposal.create)
    app.get('/proposals/:id',Proposal.ByUserId)
    app.get('/proposal/:id',Proposal.ByPetId)
    app.delete('/proposal/:id', Proposal.delete)
}