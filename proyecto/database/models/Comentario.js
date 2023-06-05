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
       created_at:{
           type: dataTypes.DATE
       },
       updated_at:{
           type: dataTypes.DATE
       },
       deleted_at:{
           type: dataTypes.DATE
       },
       usuario_comentario: {
           type: dataTypes.STRING
       }
   }

   let conf = {
       createdAt: "created_at", 
       updatedAt: "updated_at",
       deletedAt: "deleted_at" 
   }

   let comentario = sequelize.define(alias,cols,conf);

   return comentario
}