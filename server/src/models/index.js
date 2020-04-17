const fs = require('fs')
const path = require('path')
const Sequilize = require('sequelize')
const config = require ('../config/config')
const db= {}

const sequelize = new Sequilize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)


// permet de charger dasn l'objet sequelize l'ensemble des models
// présents dans le dossier models
fs
    .readdirSync(__dirname)
    .filter((file)=>
        file != 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname,file))
        db[model.name] = model
    })

// sequelize: objets avec tout les modèles
db.sequelize = sequelize

// creation de l'instance sequelize: pas sur de moi sur ce coup là
db.Sequelize = Sequilize

module.exports= db