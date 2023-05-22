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
            type: dataTypes.DECIMAL
        },
        user_id: {
            type: dataTypes.INTEGER
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

    let producto = sequelize.define(alias, cols, conf);

    producto.associate = function(models){
        
        producto.belongsTo(models.User, {
            as: "user",
            foreignKey:"user_id"
        })
    }

    return movie;
}