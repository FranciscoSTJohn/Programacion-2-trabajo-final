module.exports = function(sequelize,dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
           primaryKey: true,
           autoIncrement: true,
           type: dataTypes.INTEGER
       },
       productos_id:{
           type: dataTypes.INTEGER
       },
       user_id: {
           type: dataTypes.INTEGER
       },
       comentario: {
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
        tableName: "comentarios",
        timestamps: false,
   }

   let comentario = sequelize.define(alias,cols,conf);

   comentario.associate = function (models) {

    comentario.belongsTo(models.User,{
        as: "el_usuario",
        foreignKey:"user_id"
    }),
    comentario.belongsTo(models.Producto,{
        as: "el_producto",
        foreignKey:"productos_id"
    })

   }

   return comentario
}