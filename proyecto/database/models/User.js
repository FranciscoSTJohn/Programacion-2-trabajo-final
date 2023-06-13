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
        nombreUsuario: {
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updateAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        }
        
    }
    let conf = {
        tableName: "users",
        timestamps: false,
    }
    
    let User = sequelize.define(alias, cols, conf);

   User.associate= function (models) {
       User.hasMany(models.Producto,{ 
            as: "los_productos",
            foreignKey: 'user_id'
       });
       User.hasMany(models.Comentario,{
        as: "los_comentarios",
        foreignKey: "user_id",
       })
        
    }

    return User;
}