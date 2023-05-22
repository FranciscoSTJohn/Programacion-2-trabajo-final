module.exports = function(sequelize, dataTypes){
    let alias = "User"; 
    
    let cols = {
         id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        foto_de_perfil: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        DNI: {
            type: dataTypes.INTEGER
        },
        remember_token:{
            type: dataTypes.STRING
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        }
    }

    let conf = {
        createdAt: "created_at", 
        updatedAt: "updated_at" 
    }

    let user = sequelize.define(alias, cols, conf);

    return user;
}