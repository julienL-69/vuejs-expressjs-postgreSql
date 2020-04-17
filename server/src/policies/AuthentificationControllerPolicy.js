const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = {
            email:Joi.string().email(),
            password:Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
                // regex= lettre de a à z, de A à Z , de 0 à 9 avec longueur entre 8 et 32 caractères
            )
        }

        // joi fait la validation des donénes post (email et password) par rapport
        //  au schéma
        const{error, value}= Joi.validate(req.body, schema)

        // si erreur on renvoi l'erreur et on arrete le dérouler
        //  si ok, on passe à la fct suivant de route

        if (error) {
            // permet d'accéder à la clé qui a renvoyé l'erreur
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'adresse mail invalide'
                    })
                    break
                case 'password':
                    res.status(400).send({
                       error: 'password invalide (regle 8 à 32 car)'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'invalide informations'
                     })
                }
        } else {
            next()
        }
    }
}