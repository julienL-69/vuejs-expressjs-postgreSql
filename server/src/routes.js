const AuthentificationController = require('./controllers/AuthentificationController')
const PhaseController = require('./controllers/PhaseController')
// on charge le module permettant la validation des objet soumis (joi)
const AuthentificationControllerPolicy = require('./policies/AuthentificationControllerPolicy')

// routes appelées par express

//  explication pour la route '/register' on  appelle la méthode
// register qui se trouve dans le controller AuthentificationControllerPolicy pour assurer 
//  que les données saisies sont ok par rapport au chema de données choisie dans la méthode
//  , puis (le next() dasn la méthode register de AuthentificationControllerPolicy)
// la méthode authentificationController.register qui contien la méthoide create de sequelize
module.exports = (app) => {
    app.post('/register', 
    AuthentificationControllerPolicy.register,
        AuthentificationController.register)

        
    app.get('/phase', 
    PhaseController.selectAll)

    app.get('/phase/:id', 
        PhaseController.selectOneById
      );
      
    
}