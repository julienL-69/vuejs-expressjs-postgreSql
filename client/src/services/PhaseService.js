import Api from '@/services/Api'

// création de la methode register avec axios comme interface: méthode post sur la route '/' issu de le def axios + register
//  credentials correspond au infos postée
export default {
    selectAll (){
        return Api().get('phase', )
    }
}

// AuthentificationSercvi