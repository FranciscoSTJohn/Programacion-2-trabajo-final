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
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
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
        tableName: "users",
        timestamps: false,
    }
    
    let User = sequelize.define(alias, cols, conf);

   // User.associate= function (models) {
     //   User.(models.Productos,{              falta el tipo de relacion que hay entre la tbla usuario y la tabla productos
            // as: "productos",
             //foreignKey: falta agregar la columna de id productos a la tabla usuario y lo mismo con lo de comentario
    //    })
        
    //}

    return User;
}