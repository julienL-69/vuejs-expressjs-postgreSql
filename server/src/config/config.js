// fichier avec les paramètres de configuration
module.exports ={
    port: process.env.PORT ||3000,
    db: {
        database: process.env.DB_NAME || "TestMyProject",
        user: process.env.USER || "myprojectuser",
        password: process.env.DB_PASS ||"password",
        options: {
            dialect: process.env.DIALECT || 'postgres',
            host: process.env.HOST || 'localhost'
        }
        // port: 5432
        // database:process.env.DB_NAME || "TestMyProject"
    }
}

