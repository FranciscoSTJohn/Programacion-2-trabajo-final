module.exports = function(sequelize, dataTypes){
    let alias = "Producto"; 
    
    let cols = {
         id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updateAt:{
            type: dataTypes.DATE
        },
        deletAt:{
            type: dataTypes.DATE
        }
    }

    let conf = {
        tableName: "productos",
        timestamps: true,
        underscored: true,
    }

    let Producto = sequelize.define(alias, cols, conf);

    Producto.associate = function(models){
        
        Producto.belongsTo(models.User, {
            as: "user",
            foreignKey:"user_id"
        })
    }

    return Producto;
}