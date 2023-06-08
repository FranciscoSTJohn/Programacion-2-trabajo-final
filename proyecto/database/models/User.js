module.exports = function(sequelize, dataTypes){
    let alias = "User"; 
    
    let cols = {
         id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
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
        //remember_token:{
        //    type: dataTypes.STRING
        //},
        createdAt:{
            type: dataTypes.DATE
        },
        updateAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        },
        nombreUsuarios: {
            type: dataTypes.STRING
        }
    }
    let conf = {

    }

    let user = sequelize.define(alias, cols, conf);

    return user;
}