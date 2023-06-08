module.exports = function(sequelize, dataTypes){
    let alias = "Producto"; 
    
    let cols = {
         id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
        },
        user_id: {
            type: dataTypes.INTEGER
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
        tableName: "productos",
        createdAt: "created_at", 
        updateAt: "updated_at",
        deletedAt: "deleted_at",

    }

    let producto = sequelize.define(alias, cols, conf);

    producto.associate = function(models){
        
        producto.belongsTo(models.User, {
            as: "user",
            foreignKey:"user_id"
        })
    }

    return producto;
}