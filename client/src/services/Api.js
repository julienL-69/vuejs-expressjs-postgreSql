// interface entre le client et le server: sert à faire les requetes http
import axios from 'axios'

// création de l'interface htpp entre le client et le serveur. Le 3000 correspond au paramètres de config dans le coté server

export default() =>{

    return axios.create({
        baseURL : 'http://localhost:3000/'
    })
}