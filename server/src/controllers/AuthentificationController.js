// on charge les models de table en chargeant le fichier index.js 
//  du dossier /models et qui chrge tout les modèles de table
const {User} = require('../models')

module.exports = {
    async register(req, res){
        try{
            const  user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err){
            // si la query de sequelize renvoi une erreur
            res.status(400).send({
                error:'Erreur lors de la création: email already exist'
            })
        }
    }
}