const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// creation de l'objet sequelize contenant les modèles
const {sequelize} = require('./models/index')

// fichier de config
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// gestion des routes
require('./routes')(app)

// choix du port d'ecoute de l'api
const PORT = process.env.PORT || config.port;

// ici on est sur l'objet sequelize avec tout les modèles dedans
sequelize
  .sync()
  .then(()=>{
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })

