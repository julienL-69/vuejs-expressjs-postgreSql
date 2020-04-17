const {Phase} = require('../models')


module.exports = {
    
    async selectAll(req, res){
        try{
            const  phase = await Phase.findAll({raw: true})
            console.log(phase)
            res.send(phase)
        } catch (err){
            // si la query de sequelize renvoi une erreur
            res.status(400).send({
                error:'Erreur lors du select all sur phas e'
            })
        }
    },

    async selectOneById(req, res){
        console.log('coucou')
        try{
            
            const  phase = await Phase.findAll(
                { where: {
                  id: req.params.id }
              });
            console.log(phase)
            res.send(phase)
        } catch (err){
            // si la query de sequelize renvoi une erreur
            res.status(400).send({
                error:'Erreur lors du select one by sur phase'
            })
        }
    }
}