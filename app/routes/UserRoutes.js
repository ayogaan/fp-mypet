module.exports = (app) =>{
    const auth = require("../middleware/Auth")
    const users = require("../controllers/UserController");
    app.post('/login', users.login)
    app.post('/logout', users.login)
    app.post('/register',users.register)
    app.get('/me',auth, users.me)
}