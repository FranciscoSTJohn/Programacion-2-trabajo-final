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
       },
       usuario_comentario: {
           type: dataTypes.STRING
       }
   }

   let conf = {
       createdAt: "created_at", 
       updateAt: "updated_at",
       deletedAt: "deleted_at" 
   }

   let comentario = sequelize.define(alias,cols,conf);

   return comentario
}